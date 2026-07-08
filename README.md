# Md Naim Babu - Portfolio Website

Modern, recruiter-friendly personal portfolio built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, and **React Icons**.

## Tech Stack
- React + Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Features
- Futuristic dark UI with gradient mesh and glowing blobs
- Glassmorphism cards and premium section styling
- Smooth reveal animations with Framer Motion
- Responsive navbar with mobile menu
- Fully responsive sections:
  - Hero
  - About
  - Skills
  - Tech Stack
  - Featured Projects
  - Research Interests
  - Achievements
  - Education Timeline
  - GitHub/Kaggle/LeetCode Highlights
  - Contact + Footer
- SEO and social meta tags in `index.html`

## Folder Structure
```text
my_portfolio/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ About.jsx
│  │  ├─ Achievements.jsx
│  │  ├─ BackgroundEffects.jsx
│  │  ├─ Contact.jsx
│  │  ├─ EducationTimeline.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Hero.jsx
│  │  ├─ Highlights.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Projects.jsx
│  │  ├─ Research.jsx
│  │  ├─ Reveal.jsx
│  │  ├─ SectionHeading.jsx
│  │  ├─ Skills.jsx
│  │  └─ TechStack.jsx
│  ├─ data/
│  │  └─ portfolioData.js
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ vite.config.js
```

## Local Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
npm run preview
```

## Vercel Deployment
1. Push this project to your GitHub repository.
2. Go to [https://vercel.com](https://vercel.com) and import the repository.
3. Vercel should auto-detect **Vite** settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**.
5. After deployment, update `og:url` in `/home/runner/work/my_portfolio/my_portfolio/index.html` with your live domain.

## Personalization Notes
- Update LinkedIn URL in `/home/runner/work/my_portfolio/my_portfolio/src/data/portfolioData.js`.
- Replace `og-image.png` in `public/` with your own social preview image.
- Adjust section content from the reusable data file for quick updates.
