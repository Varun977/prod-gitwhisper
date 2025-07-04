"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`duration-520 fixed left-4 right-4 top-5 z-50 mx-auto rounded-full border border-purple-200 bg-white/90 shadow-md shadow-violet-100 backdrop-blur-md transition-all lg:max-w-[85%] xl:max-w-[80%]`}
    >
      <div className="px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with subtle gradient animation */}
          <a href="#" className="relative text-2xl font-bold tracking-tighter">
            <span className="gradient-text bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
              GitWhisper
            </span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 group-hover:scale-x-100" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-10 md:flex">
            <a
              href="#features"
              className="relative text-sm font-medium text-gray-600 transition-all duration-300 hover:text-violet-600"
            >
              <span className="relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:bg-violet-600 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100">
                Features
              </span>
            </a>
            <a
              href="#workflow"
              className="relative text-sm font-medium text-gray-600 transition-all duration-300 hover:text-violet-600"
            >
              <span className="relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:bg-violet-600 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100">
                Workflow
              </span>
            </a>
            <a
              href="#team"
              className="relative text-sm font-medium text-gray-600 transition-all duration-300 hover:text-violet-600"
            >
              <span className="relative before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:bg-violet-600 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100">
                Team
              </span>
            </a>

            {/* Auth Buttons */}
            <div className="ml-8 flex items-center gap-4">
              <a href="/sign-in">
                <Button
                  variant="ghost"
                  className="rounded-full text-sm font-medium text-gray-600 transition-all duration-300 hover:bg-transparent hover:text-violet-600"
                >
                  Sign In
                </Button>
              </a>
              <a href="/sign-in">
                <Button className="rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-6 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:from-violet-700 hover:to-pink-700">
                  Get Started
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 transition-all duration-300 hover:bg-gray-100 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full origin-top animate-slide-down rounded-2xl bg-white/95 p-6 shadow-xl backdrop-blur-xl md:hidden">
          <div className="flow-root">
            <div className="divide-y divide-gray-100/10">
              <div className="space-y-4 py-6">
                <a
                  href="#features"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 transition-all duration-300 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#workflow"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 transition-all duration-300 hover:bg-gray-50"
                >
                  Workflow
                </a>
                <a
                  href="#team"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium text-gray-900 transition-all duration-300 hover:bg-gray-50"
                >
                  Team
                </a>
              </div>
              <div className="py-6">
                <Button className="w-full rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-sm font-medium text-white transition-all duration-300 hover:scale-105">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
