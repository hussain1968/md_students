# Noor Al-Hikmah Madrassa Portal

A premium, visionary educational platform integrating traditional wisdom with modern AI innovation. Built with a focus on rural innovation and social impact.

## ✨ Features
- **Premium Landing Page**: Elegant typography and smooth scroll animations.
- **Teacher Dashboard**: Full student registration system and report management.
- **Parent Portal**: Real-time access to student performance and academic updates.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile.
- **Modern Tech Stack**: React 19, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## 🌐 Deployment (GitHub Pages)

1. **Build the project**: 
   Run `npm run build`. This creates a `dist` folder.
2. **Deploy to GitHub Pages**:
   You can use the `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```
   Add these to your `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/noor-al-hikmah-portal",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
   Run `npm run deploy`.

## 🛠 Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Firebase (Authentication & Firestore)

## 📄 License
This project is licensed under the Apache-2.0 License.
