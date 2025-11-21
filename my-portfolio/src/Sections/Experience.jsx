import React, { useEffect, useRef, useState } from 'react'

function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [showMore, setShowMore] = useState(false)
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

  const experienceData = [
    {
      company: 'Lab 23 Technology',
      title: 'Junior Frontend Engineer',
      period: 'Oct 2025 – Present',
      responsibilities: [
        'Worked on responsive web applications using React.js and Next.js.',
        'Developed and maintained web applications using React.js and Next.js.',
        'Collaborated with the team to deliver functional web applications.',
        'Optimized components by reducing unnecessary re-renders.',
        'Working on Webflow to build new websites.',
      ]
    },
    {
      company: 'Lab 23 Technology',
      title: 'Frontend Engineer – Intern',
      period: 'Jul 2025 – Oct 2025',
      responsibilities: [
        'Worked on responsive web applications using React.js.',
        'Improved UI experience and performance across devices.',
        'Integrated REST APIs using Axios and Fetch.',
        'Optimized components by reducing unnecessary re-renders.'
      ]
    },
    {
      company: 'Social Swirl',
      title: 'App Developer – Intern',
      period: 'Aug 2024 – Oct 2024',
      responsibilities: [
        'Developed the company’s mobile application using Flutter.',
        'Built clean UI screens and connected them with APIs.',
        'Improved app features to enhance user flow and usability.',
        'Collaborated with the team to deliver functional app modules.'
      ]
    },
    {
      company: 'Riphah International University',
      title: 'Co-Lead – AWS Learning Club',
      period: '2024 – 2025',
      responsibilities: [
        'Organized AWS events, sessions, and workshops.',
        'Guided students on AWS tools, services, and certifications.',
        'Helped manage training activities and technical meetups.'
      ]
    },
    {
      company: 'Riphah International University',
      title: 'Core Member – SIG (Special Interest Group)',
      period: '2024 – 2025',
      responsibilities: [
        'Contributed to university tech community activities.',
        'Assisted in organizing events, meetups, and learning sessions.',
        'Helped students collaborate on technical and academic work.'
      ]
    }
  ]

  // Show first 2 experiences initially, then show all when "See More" is clicked
  const displayedExperiences = showMore ? experienceData : experienceData.slice(0, 3)

  return (
    <section ref={sectionRef} className="bg-[#111827] min-h-screen flex items-center justify-center py-16 px-4">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 translate-x-[-50px]'
          }`}
        >
          {/* Experience Button */}
          <div className="flex justify-center mb-6">
            <button className="bg-[#1F2937] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors">
              Experience
            </button>
          </div>

          {/* Subtitle */}
          <h2 className="text-xl md:text-3xl font-regular text-white mb-8 md:mb-12 text-center">
            Here is a quick summary of my most recent experiences:
          </h2>

          {/* Experience Cards */}
          <div className="space-y-6 md:space-y-8">
            {displayedExperiences.map((experience, index) => (
              <div
                key={index}
                className={`experience-card bg-[#1F2937] rounded-lg p-6 md:p-8 border border-[#374151] ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  {/* Company Name */}
                  <span className="text-[#10B981] text-2xl md:text-3xl font-bold">
                    {experience.company}
                  </span>

                  {/* Title */}
                  <h3 className="text-white text-lg md:text-xl font-semibold flex-1 md:text-center">
                    {experience.title}
                  </h3>

                  {/* Period */}
                  <span className="text-white text-sm md:text-base">
                    {experience.period}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul className="list-disc list-inside space-y-2 text-[#D1D5DB] text-sm md:text-base ml-2">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* See More Button */}
          {experienceData.length > 2 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowMore(!showMore)}
                className="bg-[#1F2937] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors"
              >
                {showMore ? 'See Less' : 'See More'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience
