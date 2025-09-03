# 🌟 Suvidha Foundation Website

> **Transforming Lives Through Compassion** - A modern, responsive website for Suvidha Foundation, a non-profit organization dedicated to empowering communities through education, healthcare, and sustainable development.

## 🚀 Live Demo

**🌐 Hosted Website:** [https://suvidhafoundation-sayak.netlify.app/](https://suvidhafoundation-sayak.netlify.app/)

## 📋 Project Overview

This project is a **Next.js-based responsive website** developed as an internship project for Suvidha Foundation. The website showcases the foundation's mission, programs, events, and provides various interactive features for visitors, donors, and potential volunteers.

### 🎯 Key Features

- **Responsive Design** - Optimized for all devices (mobile-first approach)
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **Multi-page Structure** - Comprehensive information architecture
- **Interactive Forms** - Donation, internship, and contact forms
- **Event Management** - Showcase of charity events and initiatives
- **Team & Partner Showcase** - Highlighting key personnel and collaborations
- **Certificate Verification** - System for verifying participant certificates
- **SEO Optimized** - Meta tags and structured content for better visibility

## 🛠️ Technology Stack

### **Frontend Framework**
- **Next.js 13** - React-based framework with server-side rendering
- **React 18** - Modern React with hooks and functional components

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **CSS3** - Custom styles and animations
- **Responsive Design** - Mobile-first, tablet, and desktop layouts

### **Development Tools**
- **Node.js** - JavaScript runtime environment
- **npm** - Package manager
- **PostCSS** - CSS processing and optimization
- **ESLint** - Code quality and consistency

### **Deployment & Hosting**
- **Netlify** - Static site hosting and deployment
- **Git** - Version control
- **GitHub** - Source code repository

## 📁 Project Structure

```
suvidha_web/
├── public/                 # Static assets
│   ├── images/            # Website images and media
│   ├── certificates/      # Certificate files
│   └── favicon.ico       # Site favicon
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header.js     # Navigation and header
│   │   ├── Hero.js       # Hero section component
│   │   ├── About.js      # About section
│   │   ├── Events.js     # Events showcase
│   │   ├── Team.js       # Team members
│   │   ├── Footer.js     # Site footer
│   │   └── ...           # Other components
│   ├── pages/            # Next.js pages
│   │   ├── index.js      # Homepage
│   │   ├── about.js      # About page
│   │   ├── contact.js    # Contact page
│   │   ├── donate.js     # Donation page
│   │   └── ...           # Other pages
│   └── styles/           # Global styles
│       └── globals.css   # Main CSS file
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── next.config.js        # Next.js configuration
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sayak769268/Suvidha_Website.git
   cd Suvidha_Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design Features

### **Mobile-First Approach**
- Optimized header with reduced spacing for mobile devices
- Responsive hero section with adaptive heights
- Touch-friendly navigation and buttons
- Optimized typography for small screens

### **Breakpoint System**
- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (md)
- **Desktop:** > 1024px (lg)

### **Performance Optimizations**
- Image optimization with Next.js Image component
- Lazy loading for better performance
- Optimized CSS with Tailwind's purge feature
- Responsive images for different screen sizes

## 🎨 Design System

### **Color Palette**
- **Primary:** #1F4690 (Blue)
- **Secondary:** #16213E (Dark Blue)
- **Accent:** #FF8000 (Orange)
- **Success:** #4CAF50 (Green)

### **Typography**
- **Sans-serif:** Inter (Body text)
- **Heading:** Montserrat (Titles and headings)

### **Components**
- Custom button styles with hover effects
- Card layouts for content sections
- Responsive grid systems
- Consistent spacing and margins

## 📄 Pages & Features

### **Core Pages**
1. **Homepage** - Hero section, about, features, stats
2. **About** - Organization history, mission, vision
3. **Events** - Charity events and initiatives
4. **Gallery** - Photo gallery of activities
5. **Donate** - Donation form and information
6. **Contact** - Contact form and information
7. **Internship** - Application form for opportunities

### **Interactive Features**
- **Donation System** - Secure donation processing
- **Internship Applications** - Google Forms integration
- **Certificate Verification** - System for verifying certificates
- **Contact Forms** - Multiple contact channels
- **Social Media Integration** - LinkedIn and Instagram links

## 🔧 Configuration Files

### **Next.js Configuration** (`next.config.js`)
- Image optimization settings
- Build configuration
- Performance optimizations

### **Tailwind CSS** (`tailwind.config.js`)
- Custom color palette
- Font family definitions
- Responsive breakpoints
- Component utilities

### **PostCSS** (`postcss.config.js`)
- CSS processing pipeline
- Autoprefixer configuration
- Tailwind CSS integration

## 🚀 Deployment

### **Netlify Deployment**
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
3. Deploy automatically on every push to main branch

### **Environment Variables**
- No sensitive environment variables required
- All configurations are public and safe for open source

## 🤝 Contributing

This is an internship project, but contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
   

## 🔍 SEO & Performance

### **SEO Features**
- Meta tags for all pages
- Structured content hierarchy
- Alt text for images
- Semantic HTML elements
- Open Graph meta tags

### **Performance Metrics**
- Lighthouse score optimization
- Image compression and optimization
- CSS and JavaScript minification
- Lazy loading implementation

## 📊 Project Statistics

- **Lines of Code:** ~2,000+ lines
- **Components:** 20+ reusable components
- **Pages:** 10+ pages
- **Responsive Breakpoints:** 3 (Mobile, Tablet, Desktop)
- **Performance Score:** 90+ (Lighthouse)

## 🎓 Internship Project Details

### **Project Scope**
- **Duration:** Internship period
- **Organization:** Suvidha Foundation
- **Role:** Web Development Intern
- **Technologies:** Next.js, React, Tailwind CSS

### **Learning Outcomes**
- Modern web development with Next.js
- Responsive design implementation
- Component-based architecture
- Performance optimization
- Deployment and hosting

## 📞 Contact & Support

### **Project Contact**
- **Developer:** Sayak Mukherjee
- **GitHub:** [@Sayak769268](https://github.com/Sayak769268)
- **Project Repository:** [Suvidha_Website](https://github.com/Sayak769268/Suvidha_Website)

### **Organization Contact**
- **Website:** [https://suvidhafoundation-sayak.netlify.app/](https://suvidhafoundation-sayak.netlify.app/)
- **Phone:** +91 7620086320
- **Email:** info@suvidhafoundationedutech.org

## 📄 License

This project is developed as part of an internship with Suvidha Foundation. All rights reserved.

---

**⭐ Star this repository if you found it helpful!**

**Made with ❤️ by Sayak Mukherjee for Suvidha Foundation**
