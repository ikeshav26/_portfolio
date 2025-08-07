# 🌟 Portfolio Website - Keshav Gilhotra

A modern, responsive portfolio website built with React, featuring smooth animations, interactive elements, and a clean design. This project showcases my skills in MERN stack development, GenAI integration, and serves as a digital representation of my work and experience. **Now enhanced with comprehensive SEO optimization and PWA capabilities!**

## 🚀 Live Demo

[View Live Portfolio](https://ikeshav.tech)

## ✨ Features

### 🎨 Design & UX
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Smooth Animations**: Built with Framer Motion for fluid page transitions and interactions
- **Interactive Elements**: Custom cursor, floating background elements, and hover effects
- **Dark/Light Theme**: Toggle between themes with smooth transitions and auto-detection
- **Modern UI**: Clean, professional design with gradient accents and glassmorphism effects

### 🔍 SEO Optimization
- **Enhanced Meta Tags**: Comprehensive title, description, and keyword optimization
- **Open Graph**: Rich social media previews with custom OG images
- **Twitter Cards**: Optimized Twitter sharing with large image cards
- **Schema.org Structured Data**: JSON-LD markup for better search engine understanding
- **Sitemap.xml**: Complete sitemap for search engine crawling
- **Robots.txt**: Optimized crawler directives
- **Canonical URLs**: Proper canonical URL handling
- **SEO Component**: Dynamic React component for page-specific SEO

### 📱 PWA (Progressive Web App)
- **Installable**: Can be installed on mobile and desktop devices
- **Offline Support**: Custom offline page with portfolio branding
- **Service Worker**: Automatic caching and background sync
- **Manifest**: Complete web app manifest with icons
- **Theme Integration**: PWA respects dark/light theme preferences
- **Cache Strategies**: Optimized caching for fonts, images, and assets

### ⚡ Performance
- **Optimized Loading**: Fast loading times with optimized assets
- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic code splitting with Vite
- **Compression**: Gzip compression and asset optimization
- **CDN Ready**: Optimized for content delivery networks

## 🛠️ Tech Stack

### Frontend
- **React 18**: Latest React with concurrent features
- **JavaScript ES6+**: Modern JavaScript syntax and features
- **Vite**: Lightning-fast build tool and dev server

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Beautiful UI components for Tailwind
- **Framer Motion**: Production-ready motion library
- **Custom CSS**: Advanced animations and effects

### PWA & Performance
- **Vite PWA Plugin**: Complete PWA implementation
- **Workbox**: Advanced service worker strategies
- **Web App Manifest**: Complete manifest configuration

### SEO & Analytics
- **React Helmet**: Dynamic meta tag management
- **Structured Data**: Schema.org implementation
- **Vercel Analytics**: Performance and user analytics
- **SEO Components**: Custom React SEO components

### Deployment & Infrastructure
- **Vercel**: Edge deployment with automatic HTTPS
- **Domain**: Custom domain (ikeshav.tech)
- **CDN**: Global content delivery
- **Security Headers**: Enhanced security configuration

## 📁 Project Structure

```
Portfolio-new/
├── public/
│   ├── icons/              # PWA icons and favicons
│   │   ├── pwa-192x192.png
│   │   └── pwa-512x512.png
│   ├── manifest.webmanifest # PWA manifest
│   ├── robots.txt          # Search engine directives
│   ├── sitemap.xml         # Site structure for crawlers
│   ├── og-image.svg        # Social media preview image
│   ├── offline.html        # PWA offline page
│   └── .htaccess          # Apache server configuration
├── src/
│   ├── components/
│   │   ├── SEOHead.jsx     # Dynamic SEO component
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── Cards.jsx       # Interactive cards
│   │   └── LoadingProgress.jsx
│   ├── pages/
│   │   ├── Home.jsx        # Landing page
│   │   ├── About.jsx       # About section
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Contact.jsx     # Contact form
│   │   └── Blogs.jsx       # Blog section
│   ├── context/
│   │   └── ThemeContext.jsx # Theme management
│   ├── assets/             # Static assets
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── vite.config.js         # Vite + PWA configuration
└── package.json           # Dependencies and scripts
```

## � Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ikeshav26/Portfolio-new.git
   cd Portfolio-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔧 Configuration

### SEO Configuration
- Update meta tags in `index.html`
- Modify SEO component in `src/components/SEOHead.jsx`
- Update sitemap.xml with your domain
- Configure robots.txt for your needs

### PWA Configuration
- Customize PWA manifest in `vite.config.js`
- Update PWA icons in `public/` directory
- Modify offline page branding
- Configure caching strategies

### Theme Configuration
- Customize colors in `src/index.css`
- Modify DaisyUI themes
- Update gradient configurations

## 📊 SEO Features

### Technical SEO
- ✅ Proper HTML structure and semantics
- ✅ Meta title and description optimization
- ✅ Header tag hierarchy (H1, H2, H3)
- ✅ Image alt attributes
- ✅ Internal linking structure
- ✅ Fast loading speed (Core Web Vitals)
- ✅ Mobile-first responsive design
- ✅ HTTPS and security headers

### Content SEO
- ✅ Keyword optimization for "Keshav" searches
- ✅ Rich snippets with structured data
- ✅ Social media optimization
- ✅ Local SEO signals
- ✅ Professional content structure
- ✅ Call-to-action optimization

### Advanced SEO
- ✅ Dynamic meta tags per page
- ✅ Canonical URL management
- ✅ Open Graph protocol
- ✅ Twitter Card markup
- ✅ Schema.org Person markup
- ✅ Breadcrumb navigation
- ✅ XML sitemap

## 🎯 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized LCP, FID, and CLS
- **SEO Score**: 100/100 on Lighthouse
- **PWA Score**: 100/100 on Lighthouse
- **Load Time**: < 2 seconds on 3G
- **Bundle Size**: Optimized with code splitting

## 🌟 Key Achievements

- **SEO Optimized**: Ranking potential for "Keshav" and related keywords
- **PWA Ready**: Installable across all platforms
- **Performance Focused**: Sub-2-second load times
- **Accessibility**: WCAG 2.1 AA compliant
- **Modern Stack**: Latest React and web technologies
- **Production Ready**: Deployed with CI/CD pipeline

## 📈 Analytics & Monitoring

- **Vercel Analytics**: Page views and performance metrics
- **Core Web Vitals**: Real user monitoring
- **SEO Tracking**: Search console integration ready
- **Error Tracking**: Built-in error boundaries
- **Performance Monitoring**: Continuous optimization

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md) for more information.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by Keshav Gilhotra**  
*MERN Stack Developer & GenAI Specialist*

[🌐 Website](https://ikeshav.tech) • [💼 LinkedIn](https://linkedin.com/in/keshav-gilhotra) • [🐱 GitHub](https://github.com/ikeshav26)
