import React, { useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope } from "react-icons/fa"; // Importing basic icons
import { FaPhone, FaLocationDot, FaLinkedin, FaGithub, FaXTwitter, FaCircleCheck, FaCircleExclamation } from "react-icons/fa6"; // Importing other icons

function ContactUs() {
  const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [isStatusAnimatingIn, setIsStatusAnimatingIn] = useState(false);
  const closeTimeoutRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const showStatusMessage = (type, message) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setStatus({ type, message });
    setIsStatusModalOpen(true);
    requestAnimationFrame(() => {
      setIsStatusAnimatingIn(true);
    });

    closeTimeoutRef.current = setTimeout(() => {
      closeStatusModal();
    }, 4500);
  };

  const closeStatusModal = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsStatusAnimatingIn(false);
    setTimeout(() => {
      setIsStatusModalOpen(false);
    }, 250);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    setIsStatusModalOpen(false);
    setIsStatusAnimatingIn(false);
    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Failed to send message");
      }

      showStatusMessage("success", "Message sent successfully! I will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      showStatusMessage("error", error.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Me",
      content: "waqaszafar771@gmail.com",
      link: "mailto:waqaszafar771@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Call Me",
      content: "+92 370 4072105",
      link: "tel:+923704072105",
    },
    {
      icon: FaLocationDot,
      title: "Location",
      content: "Lahore, Pakistan",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-black min-h-screen py-20 px-4 relative overflow-hidden flex items-center"
    >
      {/* Top Separator Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      {/* Glamour Glow Effects Removed */}

      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content & Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Let's Work <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-400">
                  Together
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Have a project in mind? I'm available for freelance work and full-time opportunities. Let's create something amazing.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-purple-500 text-xl group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium mb-1">{item.title}</h4>
                    <a href={item.link} className="text-white text-lg font-semibold hover:text-purple-400 transition-colors">
                      {item.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://www.linkedin.com/in/m-waqas-zafar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://github.com/WaqasZafar9" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://x.com/m_waqaszafar" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                <FaXTwitter className="text-xl" />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#050505] rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Form Glow Helper Removed */}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-1">Your Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-[#111827] border border-gray-800 rounded-xl px-4 py-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                  />
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-1">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#111827] border border-gray-800 rounded-xl px-4 py-4 pl-12 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium"
                  />
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows="4"
                  className="w-full bg-[#111827] border border-gray-800 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-medium resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-neonPink to-deepBlue text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <FaPaperPlane />}
              </button>

            </form>
          </div>

        </div>
      </div>

      {isStatusModalOpen && status.message && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-opacity duration-250 ${
            isStatusAnimatingIn ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0"
          }`}
        >
          <div
            className={`w-full max-w-md rounded-2xl border p-6 shadow-2xl backdrop-blur-sm transition-all duration-250 ${
              isStatusAnimatingIn ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"
            } ${
              status.type === "success"
                ? "bg-emerald-950/80 border-emerald-400/30"
                : "bg-rose-950/80 border-rose-400/30"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 text-2xl ${
                  status.type === "success" ? "text-emerald-300" : "text-rose-300"
                }`}
              >
                {status.type === "success" ? <FaCircleCheck /> : <FaCircleExclamation />}
              </div>
              <div className="flex-1">
                <h4 className="text-white font-semibold text-lg">
                  {status.type === "success" ? "Message Sent" : "Message Failed"}
                </h4>
                <p
                  className={`mt-1 text-sm ${
                    status.type === "success" ? "text-emerald-200" : "text-rose-200"
                  }`}
                >
                  {status.message}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeStatusModal}
              className="mt-6 w-full rounded-xl bg-white/10 py-2.5 text-white font-medium hover:bg-white/20 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactUs;
