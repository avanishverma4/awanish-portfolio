import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  scrollY: number;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollY }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold text-gray-800 hover:text-indigo-500 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
            }}
          >
            <img
              src="/images/av-logo-black.svg"
              alt="AV Logo"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["home", "about", "experience", "work", "contact"].map(
                (section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className={`nav-link ${
                        activeSection === section ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(section);
                      }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "60px" }}
      >
        <nav className="h-full flex flex-col">
          <ul className="flex flex-col space-y-6 p-8">
            {["home", "about", "experience", "work", "contact"].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className={`text-xl ${
                      activeSection === section
                        ? "text-indigo-500 font-semibold"
                        : "text-gray-800"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(section);
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
