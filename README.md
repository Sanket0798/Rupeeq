# RupeeQ - Financial Services Platform

A modern, production-ready financial services platform built with React, Vite, and Tailwind CSS. RupeeQ helps users find personalized loan offers from trusted banks and NBFCs.

## 🚀 Features

- ✅ **Responsive Design**: Mobile-first, works on all devices
- ✅ **Modern UI**: Built with Tailwind CSS and custom animations
- ✅ **Performance Optimized**: Code splitting, lazy loading, optimized bundles
- ✅ **SEO Ready**: Comprehensive meta tags and social sharing
- ✅ **Secure**: Security headers, environment-based configuration
- ✅ **Production Ready**: Optimized build, error handling, logging
- ✅ **Multiple Loan Products**: Personal loans, debt consolidation, overdraft, short-term loans
- ✅ **Interactive Tools**: EMI calculator, credit score checker, IFSC/MICR finder
- ✅ **Form Validation**: Comprehensive validation with Yup
- ✅ **Smooth Animations**: GSAP and Framer Motion

## 📋 Tech Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router DOM 7.13.0
- **Form Handling**: React Hook Form 7.71.2
- **Validation**: Yup 1.7.1
- **Animations**: GSAP 3.14.2, Framer Motion 12.34.0
- **Icons**: Lucide React 0.563.0
- **Language**: JavaScript (ES6+)

## 🏗️ Project Structure

```
Rupeeq/
├── public/
│   ├── assets/          # Images, icons, logos
│   ├── fonts/           # Custom fonts
│   └── robots.txt       # SEO configuration
├── src/
│   ├── components/
│   │   ├── common/      # Reusable components (ErrorBoundary, Loader, etc.)
│   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   ├── sections/    # Page-specific sections
│   │   ├── shared/      # Shared components across pages
│   │   └── ui/          # UI primitives (Button, Input, Card, etc.)
│   ├── config/
│   │   └── env.js       # Environment configuration
│   ├── constants/
│   │   ├── routes.js    # Centralized route definitions
│   │   ├── heroContent.js
│   │   ├── loginContent.js
│   │   ├── blogContent.js
│   │   └── infoPageContent.jsx
│   ├── hooks/
│   │   └── useScrollPosition.js
│   ├── pages/           # Page components (lazy loaded)
│   ├── utils/
│   │   ├── api.js       # API utilities
│   │   ├── logger.js    # Logging utilities
│   │   ├── performance.js # Performance utilities
│   │   ├── formatters.js
│   │   ├── validationSchemas.js
│   │   └── scrollUtils.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .env.example         # Environment variables template
├── .env.production      # Production environment variables
├── DEPLOYMENT.md        # Deployment guide
├── OPTIMIZATION_REPORT.md # Optimization details
└── README.md            # This file
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Rupeeq
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:analyze` - Build and analyze bundle size
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run clean` - Clean build artifacts
- `npm run restore` - Restore index.html if deleted

## 🌐 Pages & Routes

### Main Pages
- `/` - Landing page
- `/about-us` - About us
- `/our-mission` - Our mission
- `/careers` - Careers
- `/contact-us` - Contact us
- `/blogs` - Blog listing

### Loan Products
- `/personal-loan` - Personal loan information
- `/debt-consolidation` - Debt consolidation
- `/overdraft-facility` - Overdraft facility
- `/short-term-loan` - Short-term loans
- `/credit-cards` - Credit cards

### Tools
- `/emi-calculator` - EMI calculator
- `/credit-score` - Credit score checker
- `/ifsc-micr` - IFSC/MICR finder

### Application Flow
- `/login/*` - Login pages for different loan types
- `/*-info-1` - Personal information (step 1)
- `/*-info-2` - Personal information (step 2)

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
VITE_API_TIMEOUT=30000

# Authentication
VITE_AUTH_TOKEN_KEY=rupeeq_auth_token
VITE_REFRESH_TOKEN_KEY=rupeeq_refresh_token

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_CHAT_SUPPORT=false

# Environment
VITE_ENV=development

# App Configuration
VITE_APP_NAME=RupeeQ
VITE_APP_VERSION=1.0.0
```

### Vite Configuration

The project uses optimized Vite configuration with:
- Path aliases for cleaner imports
- Code splitting for better caching
- Terser minification
- Console.log removal in production
- Optimized chunk sizes

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Fonts**: Delight, Helvetica Neue, Inter Tight, Lexend, Open Sans
- **Responsive Design**: Mobile-first approach
- **Custom Colors**: Brand colors defined in `tailwind.config.js`
- **Animations**: Custom animations and transitions

## 🔐 Security

- Environment-based configuration
- Security headers in HTML
- API authentication with token management
- Request timeout protection
- XSS protection
- CSRF protection ready

## 📊 Performance

### Optimizations Implemented
- Route-based code splitting
- Lazy loading of pages
- Optimized bundle sizes
- Image optimization
- Font optimization with preconnect
- Debounce and throttle utilities

### Performance Metrics (Target)
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Total Bundle Size: < 500KB

## 🧪 Testing

### Recommended Testing Strategy
1. **Unit Tests**: Jest + React Testing Library
2. **E2E Tests**: Playwright or Cypress
3. **Accessibility**: aXe DevTools
4. **Performance**: Lighthouse CI

## 📦 Building for Production

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

3. **Deploy**
   - See `DEPLOYMENT.md` for detailed deployment instructions
   - Supports Vercel, Netlify, AWS S3, traditional hosting

## 🚀 Deployment

Refer to `DEPLOYMENT.md` for comprehensive deployment guide including:
- Pre-deployment checklist
- Build process
- Deployment options (Vercel, Netlify, AWS, etc.)
- Post-deployment verification
- Nginx configuration
- Rollback plan

## 📈 Monitoring & Analytics

### Recommended Tools
- **Error Tracking**: Sentry, LogRocket
- **Analytics**: Google Analytics, Mixpanel
- **Performance**: Lighthouse CI, Web Vitals
- **Uptime**: UptimeRobot, Pingdom

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

- ESLint configuration included
- Run `npm run lint` before committing
- Use `npm run lint:fix` to auto-fix issues
- Follow React best practices
- Use functional components and hooks

## 🐛 Known Issues

None currently. See `OPTIMIZATION_REPORT.md` for recommendations.

## 📚 Documentation

- `README.md` - This file
- `DEPLOYMENT.md` - Deployment guide
- `OPTIMIZATION_REPORT.md` - Optimization details
- Inline code comments for complex logic

## 🔄 Version History

- **v1.0.0** - Initial production-ready release
  - Complete UI implementation
  - All loan product pages
  - Form validation
  - Performance optimizations
  - SEO enhancements
  - Security improvements

## 📞 Support

For support, please contact:
- Technical Lead: [Contact Info]
- Email: support@rupeeq.com
- Website: https://rupeeq.com

## 📄 License

[Your License Here]

## 🙏 Acknowledgments

- Design team for the beautiful UI
- Development team for implementation
- All contributors and testers

---

**Built with ❤️ by the RupeeQ Team**

**Status**: ✅ Production Ready
**Last Updated**: March 12, 2026
