import { Github, Twitter, Linkedin, NotebookText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col items-start justify-between gap-8 pb-8 md:flex-row md:items-center">
          {/* Project Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-lg font-semibold text-gray-900">
                GitWhisper
              </span>
            </div>
            <p className="max-w-sm text-sm text-gray-600">
              AI-powered code insights for better collaboration and
              understanding.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500">
                <NotebookText className="h-4 w-4" />
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500">
                <Twitter className="h-4 w-4" />
                <a
                  href="https://twitter.com/yourhandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:you@example.com" className="hover:underline">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-6">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} GitWhisper. Crafted with care for
            better code collaboration.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
