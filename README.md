# Abhinav Agnihotri — Portfolio

> Data Science & Machine Learning Engineer

A personal portfolio website showcasing ML projects, technical skills, professional experience, and achievements. Built with React, Vite, and Tailwind CSS.

<img src="screenshots/hero.png" alt="Hero Section" width="800">

## Sections

### Hero
Animated intro with profile photo, orbital rings, social links, and CTAs.

<img src="screenshots/hero.png" alt="Hero Section" width="800">

### About
Bio and key metrics (ML projects, ROC-AUC, R-squared, Fraud Recall).

<img src="screenshots/about.png" alt="About Section" width="800">

### Skills
Programming languages, ML libraries, data tools, visualization, and core competencies.

<img src="screenshots/skills.png" alt="Skills Section" width="800">

### Projects
Featured ML projects with tech stacks and GitHub links.

<img src="screenshots/projects.png" alt="Projects Section" width="800">

### Experience
CODTECH IT SOLUTIONS internship timeline.

<img src="screenshots/experience.png" alt="Experience Section" width="800">

### Education
B.Tech CSE, XII, X academic qualifications.

<img src="screenshots/education.png" alt="Education Section" width="800">

### Certifications & Achievements
Deloitte/Tata Forage certifications, Google AI workshop, DSA program, and more.

<img src="screenshots/certifications.png" alt="Certifications Section" width="800">

### Contact
Form with validation, email, and phone links.

<img src="screenshots/contact.png" alt="Contact Section" width="800">

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite 6 |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS 3.4 |
| Icons | Lucide React |
| Fonts | Inter, DM Sans, JetBrains Mono (Google Fonts) |
| Animations | CSS keyframes + IntersectionObserver |
| Utilities | clsx, tailwind-merge |

## Getting Started

```bash
npm install
npm run dev        # development server (HMR)
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Project Structure

```
src/
├── main.jsx                  # Entry point
├── App.jsx                   # Root component
├── index.css                 # Tailwind directives + theme
├── lib/
│   └── utils.js              # cn() helper
├── hooks/
│   └── use-mobile.jsx        # IntersectionObserver + mobile detect
└── components/
    ├── Header.jsx
    ├── HeroSection.jsx
    ├── AboutSection.jsx
    ├── StatCard.jsx
    ├── SkillsSection.jsx
    ├── SkillCard.jsx
    ├── ProjectsSection.jsx
    ├── ProjectCard.jsx
    ├── ExperienceSection.jsx
    ├── EducationSection.jsx
    ├── CertificationsSection.jsx
    ├── CertificationCard.jsx
    ├── ContactSection.jsx
    ├── Footer.jsx
    └── ScrollToTop.jsx
```

## Deployment

Build to `dist/` and deploy to any static host:

```bash
npm run build
```

Supports Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.

## License

MIT
