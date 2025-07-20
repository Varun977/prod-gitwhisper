import { Button } from "@/components/ui/button";
import { MessageSquare, Video, GitCommit, Users } from "lucide-react";

const TeamSection = () => {
  return (
    <section id="team" className="gradient-bg-2 py-20 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12 lg:scale-90 lg:flex-row xl:scale-90 2xl:scale-110">
          <div className="relative w-full animate-fade-in lg:w-1/2">
            <div className="relative z-20 rounded-2xl bg-gradient-to-br from-violet-100 to-blue-100 p-3">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-violet-500/10 to-blue-500/10 blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/10 to-blue-500/10 blur-2xl"></div>

              <div className="overflow-hidden rounded-xl bg-white shadow-md">
                <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 p-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-violet-600" />
                    <span className="font-medium">Team Collaboration</span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-6 flex items-start">
                    <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-sm font-semibold text-blue-600">
                        AK
                      </span>
                    </div>
                    <div className="rounded-lg rounded-tl-none bg-blue-50 p-3">
                      <p className="text-sm">
                        I just uploaded the meeting recording from yesterday's
                        sprint planning
                      </p>
                      <p className="mt-1 text-xs text-gray-500">10:32 AM</p>
                    </div>
                  </div>

                  <div className="mb-6 flex items-start">
                    <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-100">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-violet-600"
                      >
                        <path
                          d="M20 11a8 8 0 0 1-16 0"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 3V4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 11 9 8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="rounded-lg rounded-tl-none bg-violet-50 p-3">
                      <p className="text-sm font-medium">Meeting Summary:</p>
                      <ul className="mt-2 space-y-1 text-sm">
                        <li>
                          • User authentication to be implemented by next
                          Tuesday
                        </li>
                        <li>• API documentation needs review by everyone</li>
                        <li>• New dashboard features prioritized for Q2</li>
                      </ul>
                      <p className="mt-2 text-xs text-gray-500">
                        Generated from meeting recording
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <span className="text-sm font-semibold text-green-600">
                        JD
                      </span>
                    </div>
                    <div className="rounded-lg rounded-tl-none bg-green-50 p-3">
                      <p className="text-sm">
                        Thanks! I'll start working on the authentication system
                        right away.
                      </p>
                      <p className="mt-1 text-xs text-gray-500">11:05 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-1/4 h-40 w-40 animate-float rounded-full bg-violet-200 opacity-70 mix-blend-multiply blur-2xl filter"></div>
            <div className="animate-delay-500 absolute -right-4 bottom-1/4 h-40 w-40 animate-float rounded-full bg-blue-200 opacity-70 mix-blend-multiply blur-2xl filter"></div>
          </div>

          <div className="w-full space-y-6 lg:w-1/2">
            <div className="animate-fade-in">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Enhanced{" "}
                <span className="gradient-text">team collaboration</span>
              </h2>
              <p className="text-lg text-gray-600">
                GitWhisper brings your team together with shared context,
                insights, and communication tools that make collaboration
                seamless.
              </p>
            </div>

            <div className="animate-delay-100 animate-fade-in space-y-6">
              <div className="flex items-start">
                <div className="mr-3 rounded-lg bg-violet-100 p-2">
                  <MessageSquare className="h-5 w-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Team Chat</h3>
                  <p className="mt-1 text-gray-600">
                    Built-in team chat keeps all communications in one place,
                    directly connected to your codebase.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 rounded-lg bg-violet-100 p-2">
                  <Video className="h-5 w-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Meeting Insights</h3>
                  <p className="mt-1 text-gray-600">
                    Upload and automatically summarize team meetings, capturing
                    key decisions and action items.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-3 rounded-lg bg-violet-100 p-2">
                  <GitCommit className="h-5 w-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Shared Insights</h3>
                  <p className="mt-1 text-gray-600">
                    All team members get access to commit summaries and
                    AI-generated insights, creating shared understanding.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="animate-delay-200 ml-3 flex scale-105 animate-fade-in items-center justify-start pt-2">
              <Button className="btn-primary">Start Collaborating</Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
