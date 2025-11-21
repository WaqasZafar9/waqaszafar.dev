import React, { useEffect, useRef, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import myImage from '../assets/my.jpg'

function Aboutme() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const aboutData = {
    introduction: {
      title: "Introduction",
      content: "I'm a Software Engineer and Frontend Developer who enjoys building clean, responsive, and user-friendly web applications. I work with React.js, Next.js, Tailwind CSS, and Webflow, and I like turning ideas into smooth and practical digital products. I have good knowledge of the modern frontend stack, mobile development, and basic backend tools, and I always aim to deliver work that feels simple, fast, and reliable."
    },
    journey: {
      title: "Journey & Experience",
      content: "I started my development journey a little over a year ago and have grown through real projects, internships, and continuous learning. I’ve built several Webflow websites, developed mobile apps during my Flutter internship, and worked with backend tools like Node.js, Express, and MongoDB. I’m currently working as a Software Engineer while also doing side projects to improve my skills and explore new ideas."
    },
    goals: {
      title: "Goals & Approach",
      content: "My goals are to become a strong Full Stack Engineer, learn more about cloud technologies, and create products that are useful and easy to use. I enjoy taking ideas from the start and turning them into complete, working solutions."
    },
    offering: {
      title: "How I Can Help",
      content: "I have enough experience to take on different types of projects, and if you're comfortable working with me, I’d be happy to build something together. I’m available for freelance work, collaborations, and custom project development — including SaaS-based services and tailored solutions that fit your needs.",
      links: [
        { name: "GitHub", url: "https://github.com/WaqasZafar9", icon: FaGithub }
      ]
    },
    quickBits: {
      title: "A few quick things about me:",
      items: [
        "Bachelor’s in Computer Science",
        "Fast learner",
        "Frontend-focused with backend knowledge",
        "Working on side projects",
        "Motivated and future-driven"
      ]
    },
    cta: {
      content: "If you want to start a project or need a trusted developer for your ideas, feel free to reach out. I’m always open to working together. 😊"
    }
  }

  const sections = [
    aboutData.introduction,
    aboutData.journey,
    aboutData.goals,
    aboutData.offering
  ]

  return (
    <section ref={sectionRef} id="about" className="bg-[#111827] min-h-screen flex items-center justify-center py-16 px-4">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Section - Image */}
          <div 
            className={`flex-1 flex items-center justify-center transition-all duration-1000 ${
              isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            <div className="relative image-hover-container w-full max-w-[400px]">
              <div className="absolute -right-2 -bottom-2 w-full h-full bg-gray-700 rounded-lg z-0 transition-transform duration-300 image-hover-shadow"></div>
              <div className="relative z-10 image-hover-wrapper">
                <img 
                  src={myImage} 
                  alt="Waqas Zafar" 
                  className="rounded-lg object-cover w-full h-auto image-hover shadow-lg"
                  onError={(e) => {
                    e.target.src = ''
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div 
            className={`flex-1 max-w-[600px] transition-all duration-1000 delay-300 ${
              isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            {/* About me Button */}
            <div className="flex justify-center lg:justify-start mb-6">
              <button className="bg-[#1F2937] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors">
                About me
              </button>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center lg:text-left">
              Curious about me? Here you have it:
            </h2>

            {/* Content Sections */}
            <div className="space-y-4 text-white">
              {sections.map((section, index) => (
                <p key={index} className="text-[#D1D5DB] leading-relaxed">
                  {section.content}
                  {section.links && (
                    <span className="inline-flex items-center gap-2 ml-2">
                      {section.links.map((link, linkIndex) => (
                        <React.Fragment key={linkIndex}>
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1 transition-colors"
                          >
                            <link.icon className="text-sm" />
                            {link.name}
                          </a>
                          {linkIndex < section.links.length - 1 && <span>or</span>}
                        </React.Fragment>
                      ))}
                    </span>
                  )}
                </p>
              ))}

              {/* Quick Bits Section */}
              <div className="space-y-2">
                <p className="text-[#D1D5DB] leading-relaxed">{aboutData.quickBits.title}</p>
                <ul className="list-disc list-inside text-[#D1D5DB] space-y-1 ml-4">
                  {aboutData.quickBits.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <p className="text-[#D1D5DB] leading-relaxed pt-4">
                {aboutData.cta.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme
