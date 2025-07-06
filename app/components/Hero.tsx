import React from "react";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(315deg, #F8BBD0 0%, #FFE4E1 50%, #FFF3E0 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)",
        }}
      ></div>

      <div className="section-container relative z-10 text-gray-900 text-center">
        <p className="text-xl md:text-2xl mb-4 animate-fade-up">Hello, I'm</p>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-up"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
        >
          Awanish Verma
        </h1>
        <h2 className="text-xl md:text-3xl font-medium mb-8 animate-fade-up delay-200">
          UI/UX Designer
        </h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg mb-10 animate-fade-up delay-300">
          Creating thoughtful digital experiences that connect people with
          products and brands.
        </p>
        <div className="flex justify-center gap-4 animate-fade-up delay-400">
          <button
            className="btn bg-indigo-500 text-white hover:bg-indigo-600 cursor-pointer"
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </button>
          <button
            className="btn bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={handleScrollDown}
      >
        <ChevronDown size={32} className="text-gray-900" />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, white)",
        }}
      ></div>
    </section>
  );
};

export default Hero;
