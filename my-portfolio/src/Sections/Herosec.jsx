import React, { useEffect, useRef, useState } from 'react'
import { FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import myImage from '../assets/my.jpg'

function Herosec() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

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

  return (
    <section ref={sectionRef} id="home" className="bg-[#030712] h-auto flex items-center justify-center py-8 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 items-center">
          {/* Right Section - Image (appears first on mobile) */}
          <div 
            ref={imageRef}
            className={`flex-1 flex items-center justify-center lg:justify-end transition-all duration-1000 delay-300 w-full lg:w-auto order-1 lg:order-2 ${
              isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="relative image-hover-container w-full max-w-[280px] md:max-w-[320px] lg:w-[400px] lg:max-w-none" style={{ height: 'auto' }}>
              <div className="absolute -right-2 -bottom-2 w-full h-full bg-gray-700 rounded-lg z-0 transition-transform duration-300 image-hover-shadow"></div>
              <div className="relative z-10 image-hover-wrapper w-full">
                <img 
                  src={myImage} 
                  alt="Waqas Zafar" 
                  className="rounded-lg object-cover w-full h-auto image-hover"
                  style={{ aspectRatio: '400/364' }}
                  onError={(e) => {
                    e.target.src = ''
                  }}
                />
              </div>
            </div>
          </div>

          {/* Left Section - Text Content */}
          <div 
            ref={textRef}
            className={`flex-[1.4] max-w-[950px] xl:w-[600px] space-y-4 md:space-y-6 transition-all duration-1000 w-full lg:w-auto text-center lg:text-left order-2 lg:order-1 ${
              isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-bold text-white">
              Hi, I'm Waqas Zafar 👋
            </h1>
            <p className="text-[#D1D5DB] text-sm md:text-base lg:text-[14px] leading-relaxed xl:w-[550px] mx-auto lg:mx-0">
            I'm a Software Engineer and Frontend Developer skilled in the modern frontend stack — React.js, Next.js, Tailwind CSS, and Webflow, where I've built several responsive and dynamic projects. With over a 06 months of experience in developing web applications, I've also created mobile apps using Flutter during my internship and also have a strong understanding of backend technologies like Node.js, Express, and MongoDB. I'm currently working with an organization as a Software Engineer, while pursuing my side projects and freelance work to expand my expertise. My future goals revolve around advancing as a Full Stack Engineer, mastering cloud-based solutions, and contributing to impactful products that blend innovation with great user experience.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-white">
              <HiLocationMarker className="text-lg md:text-xl" />
              <span className="text-sm md:text-base">Lahore, Pakistan</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-white">
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-blink"></span>
              <span className="text-sm md:text-base">Available for new projects</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 md:pt-4">
              <a href="https://github.com/WaqasZafar9" className="text-white text-xl md:text-2xl hover:text-gray-300 transition-colors" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/m-waqas-zafar" className="text-white text-xl md:text-2xl hover:text-gray-300 transition-colors" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://dribbble.com/mwaqaszafar" className="text-white text-xl md:text-2xl hover:text-gray-300 transition-colors" aria-label="Dribbble">
                <FaDribbble />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herosec