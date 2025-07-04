"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import WorkflowSection from "../components/WorkflowSection";
import TeamSection from "../components/TeamSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "GitWhisper - AI-powered GitHub Assistant";

    // Setup intersection observer for animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes that haven't been triggered yet
    const animatedElements = document.querySelectorAll(
      '.animate-fade-in[style*="opacity: 0"]',
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
