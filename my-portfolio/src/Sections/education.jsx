import { useEffect, useRef, useState } from 'react'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

function Education() {
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

  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Riphah International University",
      location: "Lahore, Pakistan",
      period: "2021 - 2025",
      description: "Focused on software engineering, data structures, algorithms, and modern web development technologies. Completed various projects including full-stack applications and mobile apps.",
      achievements: [
        "Completed final year project: Unity Stack",
        "Strong foundation in OOP and DSA",
        "Hands-on experience with multiple programming languages"
      ]
    },
    {
      degree: "Intermediate / High School",
      institution: "Punjab Collage",
      location: "Lahore, Pakistan",
      period: "2019 - 2021",
      description: "Completed intermediate studies with focus on science and mathematics, laying the foundation for computer science studies.",
      achievements: []
    }
  ]

  return (
    <section ref={sectionRef} id="education" className="bg-[#111827] min-h-screen flex items-center justify-center py-16 px-4">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0 translate-x-[-50px]'
          }`}
        >
          {/* Education Button */}
          <div className="flex justify-center mb-6">
            <button className="bg-[#1F2937] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors">
              Education
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-xl md:text-3xl font-regular text-white mb-8 md:mb-12 text-center">
            My educational background and academic journey:
          </h2>

          {/* Education Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#374151] transform -translate-x-1/2"></div>
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-[#374151]"></div>

            {/* Education Cards */}
            <div className="space-y-8 md:space-y-12">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-8 h-8 bg-[#111827] border-4 border-[#10B981] rounded-full flex items-center justify-center">
                      <FaGraduationCap className="text-[#10B981] text-xs" />
                    </div>
                  </div>

                  {/* Education Card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] pl-12 pr-2 md:pl-0 md:pr-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className="bg-[#1F2937] rounded-lg p-4 sm:p-6 md:p-8 hover:bg-[#374151] transition-all duration-300 experience-card">
                      {/* Degree */}
                      <div className="flex items-start gap-3 mb-4">
                        <FaGraduationCap className="text-[#10B981] text-lg sm:text-xl mt-1 shrink-0" />
                        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold break-words">
                          {edu.degree}
                        </h3>
                      </div>

                      {/* Institution */}
                      <p className="text-[#D1D5DB] text-base sm:text-lg font-semibold mb-3 break-words">
                        {edu.institution}
                      </p>

                      {/* Location and Period */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 text-[#9CA3AF] text-xs sm:text-sm">
                        <div className="flex items-center gap-2 shrink-0">
                          <FaMapMarkerAlt className="text-[#10B981] shrink-0" />
                          <span className="break-words">{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <FaCalendarAlt className="text-[#10B981] shrink-0" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[#D1D5DB] text-sm md:text-base leading-relaxed mb-4 break-words">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      {edu.achievements.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-[#374151]">
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-[#D1D5DB] text-xs sm:text-sm flex items-start gap-2">
                                <span className="text-[#10B981] mt-1.5 shrink-0">▹</span>
                                <span className="break-words">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education