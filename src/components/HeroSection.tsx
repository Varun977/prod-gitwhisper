"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, GitCommit, Bot } from "lucide-react";

const HeroSection = () => {
  return (
    // <div className="relative min-h-screen overflow-hidden">
    <div className="relative min-h-screen overflow-hidden overflow-x-hidden md:pt-20 lg:pt-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-brand-50/40 to-brandSecondary-50/40"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-brand-100/20 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.section
        className="relative z-10 mx-auto flex min-h-screen items-center lg:max-w-[85%] xl:max-w-[97%] 2xl:max-w-[85%]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom flex flex-col items-center gap-12 lg:scale-95 lg:flex-row xl:scale-90 2xl:scale-105">
          {/* Left half */}
          <div className="w-full space-y-6 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="ml-1.5 inline-flex scale-105 items-center rounded-full bg-brand-100/80 px-4 py-1.5 text-sm font-medium text-brand-800 backdrop-blur-sm"
            >
              <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-brand-600 to-brandSecondary-600"></span>
              AI-powered GitHub assistant
            </motion.div>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Turn your codebase into a{" "}
              <span className="gradient-text underline-animate bg-clip-text text-transparent">
                conversation
              </span>{" "}
              with AI
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              GitWhisper uses AI to analyze your repositories, summarize
              commits, and enhance team collaboration with intelligent insights.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-brand-600 to-brandSecondary-600 text-white transition-opacity hover:opacity-90"
              >
                Get Started <ArrowRight size={16} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-600 text-brand-700 hover:bg-brand-50"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="block h-px w-6 bg-gray-300"></span>
              <span>No credit card required • Free for all teams</span>
            </div>
          </div>

          {/* Right half (enhanced preview) */}
          <div className="relative w-full scale-105 p-4 lg:w-1/2">
            <div className="rounded-2xl bg-gradient-to-br from-violet-100/60 to-blue-100/60 p-1">
              <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 p-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    GitWhisper
                  </div>
                </div>
                <div className="space-y-6 p-6">
                  {/* Action items */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                      <GitCommit size={16} className="text-violet-600" />
                    </div>
                    <div className="flex-1 rounded-lg rounded-tl-none bg-gray-50 p-3">
                      <p className="text-sm font-medium">
                        Summarize commit 8e5a91c
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        What changes were made in this commit?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100">
                      <MessageSquare size={16} className="text-violet-600" />
                    </div>
                    <div className="flex-1 rounded-lg rounded-tl-none bg-gray-50 p-3">
                      <p className="text-sm font-medium">
                        Explain the user authentication flow
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        How does the JWT authentication work in this repo?
                      </p>
                    </div>
                  </div>

                  {/* Summary box */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-100">
                      <Bot className="scale-75 text-violet-600" />
                    </div>
                    <div className="flex-1 rounded-lg rounded-tl-none bg-violet-50 p-3">
                      <p className="text-sm">
                        <span className="font-medium">Commit Summary: </span>
                        Implemented user authentication system with JWT tokens,
                        added form validation, and fixed responsiveness issues
                        in the dashboard UI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
