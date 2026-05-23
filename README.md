# Rushil Patel - Developer Portfolio

A premium, modern, and aesthetically pleasing developer portfolio for Rushil Patel, built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Technologies Used

- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **Framer Motion** (for smooth animations and scroll reveals)
- **React Scroll** (for smooth navigation)
- **React Simple Typewriter** (for the hero typing effect)
- **React Github Calendar** (for GitHub contribution graph)

## 📂 Project Structure

```
.
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and local assets
│   ├── components/         # React components
│   │   ├── About.jsx       # About Me section
│   │   ├── Contact.jsx     # Contact form and details
│   │   ├── Footer.jsx      # Footer
│   │   ├── GithubSection.jsx # GitHub stats and graph
│   │   ├── Hero.jsx        # Landing hero section
│   │   ├── Navbar.jsx      # Sticky top navigation
│   │   ├── Projects.jsx    # Projects and Side Quests
│   │   └── Skills.jsx      # Skills grid with progress bars
│   ├── App.jsx             # Main application layout
│   ├── index.css           # Global styles and Tailwind configuration
│   └── main.jsx            # React entry point
├── index.html              # HTML entry point (SEO configured)
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration (if applicable)
└── vite.config.js          # Vite configuration
```

## 🛠️ Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## ☁️ Deployment to Vercel

This project is optimized for deployment on Vercel.

1. **Push your code to GitHub.**
2. **Log in to Vercel** (https://vercel.com) and click **Add New Project**.
3. **Import the GitHub repository** containing this project.
4. Vercel will automatically detect that it's a Vite project. The default settings should work perfectly:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**. Your site will be live in a few minutes!
