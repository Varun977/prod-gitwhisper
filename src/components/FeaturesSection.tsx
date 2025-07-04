"use client";

import { useEffect, useState } from "react";
import {
  MessageSquare,
  GitCommit,
  Video,
  Users,
  Share2,
  Save,
  Clock,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6 text-brand-600" />,
    title: "Chat with Repository",
    description:
      "Have natural language conversations with your codebase. Ask questions, get explanations, and understand complex systems.",
  },
  {
    icon: <GitCommit className="h-6 w-6 text-brand-600" />,
    title: "Commit Summaries",
    description:
      "Automatically generate concise summaries of what changed in each commit, making code reviews easier and faster.",
  },
  {
    icon: <Video className="h-6 w-6 text-brand-600" />,
    title: "Meeting Summaries",
    description:
      "Upload team meeting recordings and get AI-generated summaries, action items, and key discussion points.",
  },
  {
    icon: <Users className="h-6 w-6 text-brand-600" />,
    title: "Team Collaboration",
    description:
      "Invite team members to collaborate, share insights, and work together more efficiently with shared context.",
  },
  {
    icon: <Save className="h-6 w-6 text-brand-600" />,
    title: "Saved Conversations",
    description:
      "Store important AI conversations for future reference, making onboarding new team members effortless.",
  },
  {
    icon: <Share2 className="h-6 w-6 text-brand-600" />,
    title: "Shared Knowledge",
    description:
      "All team members can access commit summaries, meeting notes, and AI conversations in one central place.",
  },
];

const FeaturesSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".feature-card").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      className="gradient-bg-1 relative overflow-hidden py-24"
    >
      {/* Subtle gradient background animation */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "linear-gradient(90deg, #e0e7ff, #fae8ff, #e0f2fe)",
          backgroundSize: "300% 300%",
          animation: "gradient 30s ease infinite",
        }}
      />

      <div className="container-custom relative mx-auto">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl/none">
            Everything you need to{" "}
            <span className="relative whitespace-nowrap">
              <span className="gradient-text">understand</span>
            </span>{" "}
            your codebase
          </h2>

          <p className="mx-auto text-lg text-gray-600 md:max-w-xl">
            Powerful features to help you analyze, understand, and improve your
            codebase with AI.
          </p>
        </div>

        <div className="mx-auto -mt-10 grid gap-8 md:grid-cols-2 lg:max-w-[85%] lg:scale-90 lg:grid-cols-3 xl:max-w-[90%] xl:scale-100">
          {features.map((feature, i) => (
            <div
              key={i}
              data-index={i}
              className={`feature-card group relative rounded-2xl bg-white/80 p-6 backdrop-blur-lg transition-all hover:shadow-xl ${
                visibleItems.includes(i) ? "animate-fade-in" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
                boxShadow: "0px 4px 24px rgba(0,0,0,0.05)",
                border: "1px solid rgba(245, 243, 255, 0.3)",
              }}
            >
              {/* Animated hover border */}
              <div className="absolute inset-0 rounded-2xl border-[1.5px] border-brand-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Gradient overlay on hover */}
              <div className="to-brandSecondary-50/20 absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-50/20 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="to-brandSecondary-50 mb-5 inline-flex rounded-xl bg-gradient-to-br from-brand-50 p-3">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-900">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600/90">
                  {feature.description}
                </p>
              </div>

              {/* Subtle top fade effect */}
              <div className="absolute inset-x-0 top-0 h-1/5 rounded-t-2xl bg-gradient-to-b from-white/50 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
