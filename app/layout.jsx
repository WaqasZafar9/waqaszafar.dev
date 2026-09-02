import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://waqaszafar.tech"),
  title: {
    default: "Waqas Zafar - Software Developer Portfolio",
    template: "%s | Waqas Zafar",
  },
  description:
    "Explore the portfolio of Waqas Zafar, a skilled Software Developer specializing in modern web and mobile applications. Expert in React, Next.js, Node.js, JavaScript, AI Automation, and responsive design. View my projects, experience, and skills.",
  keywords: [
    "Waqas Zafar Portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Mobile App Developer",
    "AI Automation",
    "Gen AI",
    "UI/UX Design",
    "Responsive Web Design",
    "waqaszafar",
    "M Waqas Zafar",
    "Muhammad Waqas Zafar",
    "Lahore Pakistan Developer",
  ],
  authors: [{ name: "Waqas Zafar" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://waqaszafar.tech/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://waqaszafar.tech/",
    siteName: "Waqas Zafar Portfolio",
    title: "Waqas Zafar - Software Developer | Web & Mobile App Development",
    description:
      "Explore the portfolio of Waqas Zafar, a Software Developer creating modern, responsive web and mobile applications. Specializing in React, Next.js, AI Automation, and other modern technologies.",
    images: [
      {
        url: "/og-image.png",
        alt: "Waqas Zafar Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@waqaszafar",
    title: "Waqas Zafar - Software Developer | Web & Mobile App Development",
    description:
      "Explore the portfolio of Waqas Zafar, a Software Developer creating modern, responsive web and mobile applications. Specializing in React, Next.js, AI Automation, and other modern technologies.",
    images: [
      {
        url: "/og-image.png",
        alt: "Waqas Zafar Portfolio Preview",
      },
    ],
  },
  icons: {
    icon: "/icon-image.png",
    apple: "/icon-image.png",
  },
  other: {
    "theme-color": "#050303",
    "msapplication-TileColor": "#050303",
    rating: "General",
    distribution: "global",
    coverage: "Worldwide",
    "revisit-after": "7 days",
    language: "English",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Geist+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");if(s?s==="dark":true){document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})()`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <ThemeToggle />
        <SpeedInsights />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Waqas Zafar",
              url: "https://waqaszafar.tech",
              jobTitle: "Software Engineer",
              description:
                "Software Engineer specializing in web and mobile applications",
              sameAs: [
                "https://github.com/WaqasZafar9",
                "https://www.linkedin.com/in/m-waqas-zafar",
                "https://twitter.com/waqaszafar",
              ],
              knowsAbout: [
                "Software Development",
                "Web Development",
                "Mobile Development",
                "React",
                "Node.js",
                "JavaScript",
                "Frontend Development",
                "Backend Development",
                "Editing",
                "Content Creation",
                "Videography",
                "Photography",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
