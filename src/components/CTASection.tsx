import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 p-8 md:p-12 xl:scale-95 2xl:scale-110">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-br from-violet-500/20 to-blue-500/20 blur-3xl"></div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 animate-fade-in text-3xl font-bold md:text-4xl">
              Ready to transform how your team understands code?
            </h2>
            <p className="animate-delay-100 mb-8 animate-fade-in text-lg text-gray-600">
              Join the teams already using GitWhisper to enhance collaboration,
              speed up onboarding, and gain deeper insights into their
              codebases.
            </p>
            <div className="animate-delay-200 flex animate-fade-in flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="btn-primary gap-2"
                onClick={() => (window.location.href = "/sign-in")}
              >
                Get Started <ArrowRight size={16} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-secondary"
                onClick={() => window.open("https://github.com/DrMyth/gitwhisper", "_blank")}
              >
                Request Demo
              </Button>
            </div>
            <p className="animate-delay-300 mt-6 animate-fade-in text-sm text-gray-500">
              Free for all teams • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
