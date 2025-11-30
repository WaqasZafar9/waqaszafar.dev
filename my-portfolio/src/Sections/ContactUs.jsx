import React, { useState, useRef } from "react";
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#111827] min-h-screen flex items-center justify-center py-16 px-4 relative overflow-hidden border-t-2 border-[#374151]"
    >
      {/* Subtle starry background effect */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            radial-gradient(circle at 60% 60%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize:
              "200px 200px, 300px 300px, 250px 250px, 180px 180px",
            backgroundPosition: "0 0, 100px 100px, 50px 50px, 150px 150px",
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-2xl relative z-10">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            Lets Have a Chat <span className="text-4xl">👋</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Have a question, want to start a project, or just want to connect?
            Reach out and I'll get back to you as soon as possible!
          </p>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          {/* First Name and Last Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-white text-sm font-medium mb-2"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
                placeholder="Jonathan"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-white text-sm font-medium mb-2"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
                placeholder="James"
                required
              />
            </div>
          </div>

          {/* Email and Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
                placeholder="Jonathan2718@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-white text-sm font-medium mb-2"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-white text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all resize-none"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          {/* Send Message Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`px-8 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-medium hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-[#111827] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <a
            href="https://x.com/m_waqaszafar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300 transition-colors duration-300"
            aria-label="Twitter/X"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com/m_waqaszafar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="www.linkedin.com/in/m-waqas-zafar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-300 transition-colors duration-300"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
