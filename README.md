# Aathikan M — Portfolio

A sleek, dark-themed developer portfolio built with React + Vite. Designed for placement season.

## ✨ Features
- Custom animated cursor
- Typewriter role animation
- Animated skill progress bars
- Scroll-triggered animations
- Timeline experience section
- Project cards with hover effects
- Mobile-responsive

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open http://localhost:5173

## 📦 Build for Production

```bash
npm run build
```

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push to GitHub
2. Go to vercel.com → New Project
3. Import your repo
4. Vercel auto-detects Vite — click Deploy

## 📁 Project Structure
```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Cursor.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Customization
All data is in the component files — no separate data file needed. Update your links in:
- `Hero.jsx` — GitHub, LinkedIn links
- `Contact.jsx` — email, phone, social
- `Projects.jsx` — your project details
