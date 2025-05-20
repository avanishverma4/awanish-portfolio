import React from "react";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "UI UX and Graphic Designer",
      company: "Acadlog",
      period: "Oct 2023 - Present",
      description: [
        "Led a team of designers for UX research and strategy on the Acadlog edtech platform.",
        "Developed a comprehensive UX strategy from scratch, aligning design with business and user goals.",
        "Created wireframes, prototypes, and interactive flows for web and mobile apps in Figma.",
        "Facilitated user research and usability testing, iterating on behavioural insights and feedback.",
      ],
    },
    {
      id: 2,
      role: "UI UX Designer, Graphic Designer",
      company: "i2i TeleSolutions & Telemedicine Pvt. Ltd",
      period: "Apr 2018 - Oct 2023",
      description: [
        "Spearheaded UX improvements for a healthcare learning platform, reducing content discovery time by 25%.",
        "Designed a structured, accessible post-login portal for dentists to take assessments, attend webinars, and get certified.",
        "Developed a design system that improved UI consistency and team collaboration across teams.",
        "Collaborated in Agile sprints with clinical, engineering, and marketing teams to deliver iterative, user-centred solutions.",
        "Applied HTML, CSS, and JavaScript to prototype and build responsive components, including ConnectLandingPage (https://avanishverma4.github.io/ConnectLandingPage/), a lightweight marketing website showcasing clean UI and front-end best practices.",
      ],
    },
    {
      id: 3,
      role: "Freelancer UI UX Designer, Graphic Designer",
      company: "Working As A Freelancer",
      period: "Dec 2017 - Apr 2018",
      description: [
        "Revamped UX/UI for multiple clients, including a wellness-focused platform, increasing adoption and membership.",
        "Designed branding, websites, and marketing collateral using Adobe Suite, HTML, and CSS.",
      ],
    },
    {
      id: 4,
      role: "Graphic Designer",
      company: "Skanda Graphics",
      period: "Sep 2015 - Dec 2017",
      description: [
        "Managed end-to-end graphic design projects, improving delivery timelines by 40%.",
        "Ensured brand consistency and design quality across multiple client projects.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>

        <div className="mt-12">
          <div className="max-w-3xl mx-auto">
            {experiences.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-800">
                      {item.role}
                    </h3>
                    <div className="flex justify-between items-center mt-1 mb-3">
                      <span className="text-indigo-600 font-medium">
                        {item.company}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.period}
                      </span>
                    </div>
                    <div className="space-y-2 text-gray-600">
                      {item.description.map((desc, index) => (
                        <p key={index} className="leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/Awanish%20Verma%20-%20UI%20UX%20Designer.pdf"
            className="btn btn-primary inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
