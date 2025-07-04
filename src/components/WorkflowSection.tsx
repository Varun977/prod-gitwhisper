import React from "react";
import { GitBranch, Code, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconGradient = "bg-gradient-to-br from-violet-500 to-blue-500";
const iconShadow = "shadow-violet-300";

const timelineSteps = [
  {
    icon: <GitBranch className="h-7 w-7 text-white" />,
    title: "Connect with GitHub",
    description:
      "Securely link your GitHub repositories to GitWhisper with our seamless OAuth integration. No code modifications required.",
    step: 1,
  },
  {
    icon: <Code className="h-7 w-7 text-white" />,
    title: "Get AI insights",
    description:
      "Our advanced AI analyzes your codebase, commits, and project structure to provide intelligent insights and recommendations.",
    step: 2,
  },
  {
    icon: <Star className="h-7 w-7 text-white" />,
    title: "Collaborate effortlessly",
    description:
      "Invite team members, share AI-powered insights, and work together with improved efficiency and productivity.",
    step: 3,
  },
];

const WorkflowTimeline = () => (
  <section className="relative isolate z-0 flex min-h-[92vh] items-center justify-center overflow-hidden bg-gradient-to-b from-violet-50/40 via-white/70 to-blue-50/30 py-12">
    {/* Updated glow to violet/blue */}
    <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
      <div className="h-[520px] w-[520px] rounded-full bg-gradient-to-br from-violet-100/50 via-blue-100/50 to-indigo-100/50 opacity-50 blur-3xl md:h-[780px] md:w-[780px]" />
    </div>

    <div className="relative z-10 w-full max-w-4xl px-6 sm:px-8 xl:scale-95">
      {/* Updated header styling */}
      <div className="mb-20 text-center">
        <span className="mb-3 inline-block animate-fade-in rounded-full bg-gradient-to-r from-violet-100 to-blue-100 px-4 py-1.5 text-base font-semibold tracking-wide text-violet-600 shadow-sm">
          Simple Workflow
        </span>
        <h2 className="mb-5 animate-fade-in text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          How{" "}
          <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
            GitWhisper
          </span>{" "}
          works
        </h2>
        {/* Updated text color */}
        <p className="mx-auto max-w-xl animate-fade-in text-lg font-medium text-slate-600">
          Get up and running with GitWhisper in just a few minutes. Our
          intuitive platform helps you harness the power of AI for your
          codebase.
        </p>
      </div>

      <div className="relative">
        {/* Updated timeline line to violet/blue */}
        <div className="absolute bottom-0 left-10 top-0 mx-auto w-1 rounded-full bg-gradient-to-b from-violet-400 to-blue-500" />

        <ol className="relative space-y-16 pl-24">
          {timelineSteps.map((step) => (
            <li key={step.step} className="group relative flex items-center">
              <div
                className={`absolute left-[-55px] flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full ${iconGradient} ${iconShadow} ring-8 ring-violet-100`}
              >
                {step.icon}
              </div>

              {/* Updated card styling */}
              <div className="relative flex-1 animate-fade-in overflow-hidden rounded-3xl bg-white/90 px-8 py-8 shadow-xl shadow-violet-200/30 backdrop-blur-md transition-transform duration-300 will-change-transform hover:bg-white/100 hover:shadow-2xl">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-base font-normal text-gray-700 md:text-lg">
                  {step.description}
                </p>

                {/* Updated highlight gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 w-full origin-center scale-x-0 rounded-b bg-gradient-to-r from-violet-500 to-blue-500 opacity-0 transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-90"></div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Updated button to match violet/blue scheme */}
      <div className="mt-14 animate-fade-in text-center md:mt-16">
        <Button
          className="relative overflow-hidden rounded-full border-none bg-gradient-to-r from-violet-500 to-blue-500 px-11 py-6 text-lg font-semibold text-white shadow-lg shadow-violet-400/20 outline-none transition-transform duration-300 hover:scale-105 hover:shadow-violet-500/10"
          size="lg"
        >
          Get Started for Free
        </Button>
      </div>
    </div>
  </section>
);

export default WorkflowTimeline;
