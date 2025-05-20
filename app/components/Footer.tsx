import React from "react";
import { ChevronUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img
              src="/images/av-logo-white.svg"
              alt="AV Logo"
              className="h-8 w-auto"
            />
            <p className="text-gray-400 mt-2">
              UI/UX Designer & Digital Creator
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors duration-300 mb-4"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Avanish Verma. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
