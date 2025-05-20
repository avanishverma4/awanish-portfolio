import React, { useState } from "react";
import { Mail, Phone, Instagram, Linkedin, Send } from "lucide-react";
import axios from "axios";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post("/api/send-email", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const contacts = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "avanishverma4@gmail.com",
      href: "mailto:avanishverma4@gmail.com",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 78922 34174",
      href: "tel:+917892234174",
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      value: "@avanishverma4",
      href: "https://instagram.com/avanishverma4",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "awanish-verma",
      href: "https://linkedin.com/in/awanish-verma",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out if you have any questions or if you'd like
              to work together. I'm always open to discussing new projects and
              opportunities.
            </p>

            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center group"
                  target={
                    contact.label === "Instagram" ||
                    contact.label === "LinkedIn"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    contact.label === "Instagram" ||
                    contact.label === "LinkedIn"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 group-hover:bg-indigo-500 transition-colors duration-300">
                    <span className="text-indigo-600 group-hover:text-white transition-colors duration-300">
                      {contact.icon}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">
                      {contact.label}
                    </h4>
                    <p className="text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-bold mb-4">Let's Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/avanishverma4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/awanish-verma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link hover:bg-blue-600"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:avanishverma4@gmail.com"
                  className="social-link hover:bg-indigo-600"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="input-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder=" "
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="floating-label">
                  Your Name
                </label>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder=" "
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="floating-label">
                  Your Email
                </label>
              </div>

              <div className="input-group">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="form-input resize-none"
                  placeholder=" "
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message" className="floating-label">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : submitStatus === "success" ? (
                  <>Message Sent Successfully!</>
                ) : submitStatus === "error" ? (
                  <>Failed to send. Try again.</>
                ) : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
