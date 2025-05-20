import React from "react";
import { Award, Briefcase, Code, Users } from "lucide-react";

const About: React.FC = () => {
  const skills = [
    { name: "UI Design", icon: <Code size={20} />, level: 95 },
    { name: "UX Research", icon: <Users size={20} />, level: 90 },
    { name: "Prototyping", icon: <Briefcase size={20} />, level: 85 },
    { name: "User Testing", icon: <Award size={20} />, level: 80 },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hi there! I'm Avanish, a passionate UI/UX Designer with a keen eye
              for creating beautiful, functional, and user-centric digital
              experiences. With a background in both design and user psychology,
              I bridge the gap between aesthetics and usability.
            </p>

            <p className="text-lg leading-relaxed">
              I specialize in creating intuitive interfaces that not only look
              stunning but also provide exceptional user experiences. My
              approach involves deep understanding of user needs, thorough
              research, and iterative design processes.
            </p>

            <p className="text-lg leading-relaxed">
              When I'm not designing, you can find me exploring new design
              trends, reading about user psychology, or sketching new ideas in
              my notebook.
            </p>

            <a
              href="#contact"
              className="btn btn-primary inline-block mt-6"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Connect
            </a>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold">My Skills</h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full mr-3">
                      {skill.icon}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-auto font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-indigo-600">5+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Years Experience
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-indigo-600">50+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Projects Completed
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-indigo-600">30+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-indigo-600">15+</div>
                <div className="text-sm text-gray-600 mt-1">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
