import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaExternalLinkAlt, FaAward, FaCertificate } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const certificatesData = [
    {
      id: 1,
      title: "AWS Academy Cloud Architecting",
      issuer: "Amazon Web Services Training and Certification",
      date: "Jan 2025",
      link: "#",
    },
    {
      id: 2,
      title: "Internship in Flutter Development",
      issuer: "Social Swirl",
      date: "Oct 2024",
      link: "#",
    },
    {
      id: 3,
      title: "Building a Dynamic Web App Using PHP & MySQL",
      issuer: "Coursera",
      date: "2023",
      link: "#",
    },
    {
      id: 4,
      title: "Object Oriented Programming in Java",
      issuer: "Coursera",
      date: "2023",
      link: "#",
    },
    {
      id: 5,
      title: "Java Fundamentals",
      issuer: "Coursera",
      date: "2023",
      link: "#",
    },
    {
      id: 6,
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM, Coursera",
      date: "2024",
      link: "#",
    },
    {
      id: 7,
      title: "Generative AI",
      issuer: "Google / Coursera",
      date: "2024",
      link: "#",
    },
    {
      id: 8,
      title: "Oracle Database Foundations",
      issuer: "Coursera",
      date: "2023",
      link: "#",
    },
    {
      id: 9,
      title: "Ordered Data Structures",
      issuer: "Coursera",
      date: "2023",
      link: "#",
    },
    {
      id: 10,
      title: "Python 7 days BootCamp",
      issuer: "Digicon Valley",
      date: "2024",
      link: "#",
    },
    {
      id: 11,
      title: "Site Reliability Engineering: Measuring and Managing Reliability",
      issuer: "Google",
      date: "2024",
      link: "#",
    },
    {
      id: 12,
      title: "Developing a Google SRE Culture",
      issuer: "Google",
      date: "2024",
      link: "#",
    },
    {
      id: 13,
      title: "Networking Essentials",
      issuer: "Cisco / Cisco Networking Academy",
      date: "2024",
      link: "#",
    },
    {
      id: 14,
      title: "NDG Linux Essentials",
      issuer: "Cisco / Cisco Networking Academy",
      date: "2024",
      link: "#",
    },
    {
      id: 15,
      title: "Connect and Protect: Networks and Network Security",
      issuer: "Google",
      date: "2024",
      link: "#",
    },
    {
      id: 16,
      title: "Cyber Threat Management",
      issuer: "Cisco",
      date: "2025",
      link: "#",
    },
    {
      id: 17,
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2025",
      link: "#",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="bg-[#030712] py-16 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible
              ? "animate-slide-in-left opacity-100"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex justify-center mb-6">
            <button className="bg-[#1F2937] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors flex items-center gap-2">
              <FaAward className="text-[#10B981]" />
              Certifications
            </button>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="text-[#10B981]">Certificates</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Validating my skills and expertise through recognized certifications
            from industry leaders.
          </p>
        </div>

        {/* Slider */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="certificate-swiper pb-16"
          >
            {certificatesData.map((cert) => (
              <SwiperSlide key={cert.id} className="h-auto">
                <div className="bg-[#1F2937] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 group h-full flex flex-col max-w-sm mx-auto">
                  {/* Image Container */}
                  <div className="relative h-40 shrink-0 overflow-hidden">
                    <img
                      src={`https://placehold.co/600x400/1F2937/10B981?text=${encodeURIComponent(
                        cert.title
                      )}`}
                      alt={cert.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#10B981] text-white px-5 py-2 rounded-full font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-[#059669]"
                      >
                        Verify <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#10B981] text-[10px] font-semibold px-2 py-0.5 rounded bg-[#10B981]/10">
                        {cert.issuer}
                      </span>
                      <span className="text-gray-400 text-[10px] flex items-center gap-1">
                        <FaCertificate className="text-gray-500" /> {cert.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
                      {cert.title}
                    </h3>
                    <div className="mt-auto">
                      <a
                        href={cert.link}
                        className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-[#10B981] transition-colors mt-1"
                      >
                        View Credential{" "}
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style>{`
        .certificate-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .certificate-swiper .swiper-pagination-bullet {
          background: #4b5563;
          opacity: 0.5;
        }
        .certificate-swiper .swiper-pagination-bullet-active {
          background: #10b981;
          opacity: 1;
        }
        .certificate-swiper .swiper-button-next,
        .certificate-swiper .swiper-button-prev {
          color: #10b981;
          width: 30px;
          height: 30px;
        }
        .certificate-swiper .swiper-button-next::after,
        .certificate-swiper .swiper-button-prev::after {
          font-size: 14px;
        }
      `}</style>
    </section>
  );
};

export default Certificates;
