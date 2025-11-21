import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaCopy, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  // Dynamic data - can be moved to a separate config file if needed
  const footerData = {
    buttonText: "Get in touch",
    description: "What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.",
    contact: {
      email: "waqaszafar771@gmail.com",
      phone: "+92 370 4072105"
    },
    socialPlatforms: {
      text: "You may also find me on these platforms!",
      links: [
        { name: "GitHub", url: "https://github.com/WaqasZafar9", icon: FaGithub },
        { name: "Twitter", url: "https://twitter.com", icon: FaXTwitter },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/m-waqas-zafar", icon: FaLinkedin }
      ]
    },
    copyright: {
      year: new Date().getFullYear()
    }
  }

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === 'email') {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } else {
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
      }
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[#030712] text-white pt-16">
      <div className="container mx-auto max-w-4xl">
        {/* Get in touch button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToContact}
            className="px-6 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm font-medium hover:bg-gray-700 hover:border-gray-600 transition-all duration-300"
          >
            {footerData.buttonText}
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-sm md:text-base">
          {footerData.description}
        </p>

        {/* Contact Details */}
        <div className="space-y-4 mb-12">
          {/* Email */}
          <div className="flex items-center justify-center gap-3 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 max-w-md mx-auto">
            <FaEnvelope className="text-gray-400 text-lg" />
            <span className="flex-1 text-gray-300 text-sm md:text-base">{footerData.contact.email}</span>
            <button
              onClick={() => handleCopy(footerData.contact.email, 'email')}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Copy email"
            >
              {copiedEmail ? (
                <span className="text-green-400 text-xs">Copied!</span>
              ) : (
                <FaCopy className="text-lg" />
              )}
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center gap-3 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 max-w-md mx-auto">
            <FaPhone className="text-gray-400 text-lg" />
            <span className="flex-1 text-gray-300 text-sm md:text-base">{footerData.contact.phone}</span>
            <button
              onClick={() => handleCopy(footerData.contact.phone, 'phone')}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Copy phone"
            >
              {copiedPhone ? (
                <span className="text-green-400 text-xs">Copied!</span>
              ) : (
                <FaCopy className="text-lg" />
              )}
            </button>
          </div>
        </div>

        {/* Social Platforms */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm mb-6">{footerData.socialPlatforms.text}</p>
          <div className="flex items-center justify-center gap-6">
            {footerData.socialPlatforms.links.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-gray-300 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <IconComponent />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Copyright - Full width bar */}
      <div className="bg-[#111827] pt-8 pb-8 mt-8">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="text-center text-white text-sm">
            © {footerData.copyright.year} Designed and coded with <span className="text-red-500"> React & Tailwind CSS </span> by M Waqas Zafar
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer