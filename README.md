# waqaszafar.dev

Personal portfolio for Software Engineer Waqas Zafar. The site lives in `my-portfolio/` and is a single-page React app that walks visitors through Waqas’ story, skills, work history, highlighted projects, education timeline, and contact form.

# Live Preview
https://waqaszafar.netlify.app/

## Project Highlights
- Animated hero section with social links, availability indicator, and smooth entrance animations powered by the Intersection Observer API.
- Story-driven `About me` and expandable `Skills` sections that surface tooling, concepts, and soft skills across web, mobile, and backend stacks.
- Timeline-style `Experience` and `Education` components with reveal-on-scroll transitions for each card.
- Project gallery featuring Unity Stack, Pettify, Social Swirl, and other shipped apps with tech badges plus live/GitHub links.
- Contact form with floating background effect, multi-field validation state, and quick links to X, Instagram, and Discord.

## Tech Stack
- React 18 + Vite for fast local DX and optimized builds.
- React Router for page-level routing (currently serving the `Home` page).
- Tailwind CSS utility classes for styling and responsive layouts.
- React Icons for consistent, lightweight iconography.
- Intersection Observer hook patterns for scroll-triggered animations.

## Repository Layout
```
.
├── LICENSE
├── README.md          # you are here
└── my-portfolio/      # Vite project
    ├── public/        # favicons and static assets
    ├── src/
    │   ├── Pages/     # routed pages (Home)
    │   ├── Sections/  # Hero, About, Skills, Experience, Projects, Education, Contact
    │   ├── Components/# Navbar, Footer, shared UI
    │   └── assets/    # profile photo, logos, PDFs, project imagery
    └── package.json
```

## Getting Started
1. **Install dependencies**
   ```bash
   cd my-portfolio
   npm install
   ```
2. **Run locally**
   ```bash
   npm run dev
   ```
   Vite prints the local and network URLs (default: http://localhost:5173).
3. **Create a production build**
   ```bash
   npm run build
   npm run preview  # optional sanity check of the build output
   ```

## Customization Tips
- Update hero/about copy in `src/Sections/Herosec.jsx` and `Aboutme.jsx`.
- Add or remove skills by editing the `skillSections` array inside `src/Sections/Skills.jsx`.
- Manage experience, education, and project cards via their respective data arrays in `src/Sections/Experience.jsx`, `education.jsx`, and `Projects.jsx`.
- Drop new images or documents into `src/assets/` and reference them in the relevant section.

## License
This project inherits the terms specified in `LICENSE` (MIT). Feel free to adapt the portfolio while retaining attribution. 
