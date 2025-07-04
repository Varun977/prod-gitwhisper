import { db } from "@/server/db";
import { Octokit } from "octokit";
import axios from "axios";
import { aiSummarizeCommit } from "./gemini";

export const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

type Response = {
  commitHash: string;
  commitMessage: string;
  commitAuthorName: string;
  commitAuthorAvatar: string;
  commitDate: string;
};

export const getCommitHashes = async (
  githubUrl: string,
): Promise<Response[]> => {
  const [owner, repo] = githubUrl.split("/").slice(-2);
  if (!owner || !repo) {
    throw new Error("Invalid github url");
  }
  const { data } = await octokit.rest.repos.listCommits({
    owner,
    repo,
    per_page: 15,
  });

  const sortedCommits = data.sort(
    (a: any, b: any) =>
      new Date(b.commit.author.date).getTime() -
      new Date(a.commit.author.date).getTime(),
  ) as any[];
  return sortedCommits.slice(0, 15).map((commit: any) => ({
    commitHash: commit.sha as string,
    commitMessage: commit.commit.message ?? "",
    commitAuthorName: commit.commit?.author?.name ?? "",
    commitAuthorAvatar: commit?.author?.avatar_url ?? "",
    commitDate: commit.commit?.author.date ?? "",
  }));
};

export const pollCommits = async (projectId: string) => {
  const { project, githubUrl } = await fetchProjectGithubUrl(projectId);
  const commitHashes = await getCommitHashes(githubUrl);
  // console.log("Commit Hashes:",commitHashes);
  const unprocessedCommits = await filterUnprocessedCommits(
    projectId,
    commitHashes,
  );
  // console.log("Unprocessed: ", commitHashes);
  // console.log("Unprocessed Commits: ", unprocessedCommits);
  const summaryResponses = await Promise.allSettled(
    unprocessedCommits.map(async (commit) => {
      return summarizeCommit(githubUrl, commit.commitHash);
    }),
  );
  // console.log("summaryResponses: ", summaryResponses);
  const summaries = summaryResponses.map((response, index) => {
    if (response.status === "fulfilled") {
      return response.value as string;
    }
    return "";
  });

  // console.log("Summaries: ", summaries);

  const commits = await db.commit.createMany({
    data: summaries.map((summary, index) => {
      // console.log(`Processing commit ${index}`);
      return {
        projectID: projectId,
        commitHash: unprocessedCommits[index]!.commitHash,
        commitMessage: unprocessedCommits[index]!.commitMessage,
        commitAuthorName: unprocessedCommits[index]!.commitAuthorName,
        commitAuthorAvatar: unprocessedCommits[index]!.commitAuthorAvatar,
        commitDate: unprocessedCommits[index]!.commitDate,
        summary,
      };
    }),
  });
  // console.log(commits);
  return commits;
};

async function summarizeCommit(githubUrl: string, commitHash: string) {
  const { data } = await axios.get(`${githubUrl}/commit/${commitHash}.diff`, {
    headers: {
      Accept: "application/vnd.github.v3.diff",
    },
  });
  // console.log("Summarizing Commits...")
  return (await aiSummarizeCommit(data)) || "";
}

async function fetchProjectGithubUrl(projectId: string) {
  const project = await db.project.findUnique({
    where: {
      id: projectId,
    },
    select: {
      githubURL: true,
    },
  });
  if (!project?.githubURL) {
    throw new Error("Project not found");
  }
  return { project, githubUrl: project?.githubURL };
}

async function filterUnprocessedCommits(
  projectId: string,
  commitHashes: Response[],
) {
  // console.log("Called filterUnprocessedCommits");
  const processedCommits = await db.commit.findMany({
    where: {
      projectID: projectId,
    },
  });
  // console.log("Processed Commits: ", processedCommits);
  const unprocessedCommits = commitHashes.filter(
    (commit) =>
      !processedCommits.some(
        (processedCommit) => processedCommit.commitHash === commit.commitHash,
      ),
  );
  // console.log("Unprocessed Commits from func: ", unprocessedCommits);
  return unprocessedCommits;
}
