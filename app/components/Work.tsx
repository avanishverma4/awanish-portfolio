import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
  description: string;
}

const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Doctor-Patient Management App",
      category: "mobile",
      image: "../images/Docto-App.jpg",
      url: "https://www.behance.net/gallery/221640093/Doctor-Patient-Management-App",
      description:
        "A web application for managing doctor-patient interactions, appointments, and medical records.",
    },
    {
      id: 2,
      title: "Khan Academy Website Redesign",
      category: "web",
      image: "../images/Khan Academy redesign.jpg",
      url: "https://www.behance.net/gallery/186483775/Khan-Academy-Website-Redesign",
      description:
        "A comprehensive healthcare dashboard designed for doctors to monitor patient data and treatment progress.",
    },
    {
      id: 3,
      title: "Freelance Job Board Dashboard",
      category: "dashboard",
      image: "../images/Dashboard Ui.jpg",
      url: "https://www.behance.net/gallery/179174151/Dashboard-UI",
      description:
        "Dashboard design for a freelance job board, connecting freelancers with potential clients.",
    },
    {
      id: 4,
      title: "Nike Website Rebranding",
      category: "branding",
      image: "../images/Nike website rebranding.webp",
      url: "https://www.behance.net/gallery/141174193/Shoe-E-commerce",
      description:
        "A rebranding project for Nike, focusing on modernizing their website and enhancing user experience.",
    },
    {
      id: 5,
      title: "Water drinking Tracker App",
      category: "mobile",
      image: "../images/Drops water tracker.png",
      url: "https://www.behance.net/gallery/207598711/Water-Drink-Reminder-App",
      description:
        "A mobile app for tracking water intake and promoting healthy hydration habits.",
    },
  ];

  const categories = ["all", "web", "mobile", "dashboard", "branding"];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="work" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">Selected Work</h2>

        <div className="flex justify-center mt-8 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image h-72"
              />
              <div className="project-overlay">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white font-medium border-b-2 border-white/50 hover:border-white transition-all duration-300"
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.behance.net/avanishverma4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-indigo-500 text-white hover:bg-indigo-600"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
