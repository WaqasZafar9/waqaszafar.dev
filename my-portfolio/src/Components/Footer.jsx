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
        { name: "Twitter", url: "https://x.com/m_waqaszafar", icon: FaXTwitter },
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
    <footer className="bg-background text-foreground pt-12 sm:pt-16 pb-6 relative">
      {/* Top Separator Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        {/* Get in touch button */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <button
            onClick={scrollToContact}
            className="px-5 py-2 sm:px-6 sm:py-2.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-foreground text-xs sm:text-sm font-medium hover:bg-primary/10 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_25%,transparent)] transition-all duration-300 cursor-pointer"
          >
            {footerData.buttonText}
          </button>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-center mb-8 sm:mb-10 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-2">
          {footerData.description}
        </p>

        {/* Contact Details */}
        <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-12 max-w-md mx-auto">
          {/* Email Card */}
          <div className="flex items-center justify-between gap-2 sm:gap-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 group hover:border-primary/40 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_12%,transparent)] transition-all duration-300">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary text-sm sm:text-base shrink-0 group-hover:scale-105 transition-transform">
                <FaEnvelope />
              </div>
              <a
                href={`mailto:${footerData.contact.email}`}
                className="min-w-0 flex-1 truncate text-xs sm:text-sm md:text-base font-medium text-foreground hover:text-primary transition-colors"
                title={footerData.contact.email}
              >
                {footerData.contact.email}
              </a>
            </div>

            <button
              onClick={() => handleCopy(footerData.contact.email, 'email')}
              className="shrink-0 p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer flex items-center justify-center min-w-[36px]"
              aria-label="Copy email"
            >
              {copiedEmail ? (
                <span className="whitespace-nowrap text-primary text-xs font-semibold bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20 animate-fade-in">
                  Copied!
                </span>
              ) : (
                <FaCopy className="text-sm sm:text-base" />
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="flex items-center justify-between gap-2 sm:gap-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 group hover:border-primary/40 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_12%,transparent)] transition-all duration-300">
            <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center text-primary text-sm sm:text-base shrink-0 group-hover:scale-105 transition-transform">
                <FaPhone />
              </div>
              <a
                href={`tel:${footerData.contact.phone}`}
                className="min-w-0 flex-1 truncate text-xs sm:text-sm md:text-base font-medium text-foreground hover:text-primary transition-colors"
                title={footerData.contact.phone}
              >
                {footerData.contact.phone}
              </a>
            </div>

            <button
              onClick={() => handleCopy(footerData.contact.phone, 'phone')}
              className="shrink-0 p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer flex items-center justify-center min-w-[36px]"
              aria-label="Copy phone"
            >
              {copiedPhone ? (
                <span className="whitespace-nowrap text-primary text-xs font-semibold bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20 animate-fade-in">
                  Copied!
                </span>
              ) : (
                <FaCopy className="text-sm sm:text-base" />
              )}
            </button>
          </div>
        </div>

        {/* Social Platforms */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">{footerData.socialPlatforms.text}</p>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {footerData.socialPlatforms.links.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                  aria-label={social.name}
                >
                  <IconComponent className="text-base sm:text-lg" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Copyright - Full width bar */}
      <div className="bg-background pt-6 pb-6 mt-6 border-t border-black/5 dark:border-white/5">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-center text-muted-foreground text-xs sm:text-sm">
            © {footerData.copyright.year} Designed and coded <span className="text-primary font-medium">by M Waqas Zafar</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer