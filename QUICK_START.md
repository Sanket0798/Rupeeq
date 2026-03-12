# RupeeQ - Quick Start Guide

## 🚀 For Developers

### First Time Setup (5 minutes)

```bash
# 1. Clone and install
git clone <repository-url>
cd Rupeeq
npm install

# 2. Set up environment
cp .env.example .env
# Edit .env if needed

# 3. Start development
npm run dev
```

Visit: `http://localhost:5173`

---

## 📁 Key Files to Know

### Configuration
- `vite.config.js` - Build configuration
- `tailwind.config.js` - Styling configuration
- `.env` - Environment variables
- `src/config/env.js` - Environment helper

### Routes
- `src/constants/routes.js` - All route definitions
- `src/App.jsx` - Route configuration

### Utilities
- `src/utils/api.js` - API calls
- `src/utils/logger.js` - Logging
- `src/utils/formatters.js` - Data formatting
- `src/utils/validationSchemas.js` - Form validation

### Constants
- `src/constants/heroContent.js` - Hero section content
- `src/constants/loginContent.js` - Login page content
- `src/constants/infoPageContent.jsx` - Info page content

---

## 🎯 Common Tasks

### Adding a New Page

1. Create page component in `src/pages/`
2. Add route constant in `src/constants/routes.js`
3. Add route in `src/App.jsx`
4. Update navigation if needed

### Adding a New API Endpoint

```javascript
// In src/utils/api.js
export const myAPI = {
  getData: () => api.get('/my-endpoint'),
  postData: (data) => api.post('/my-endpoint', data),
};
```

### Adding Form Validation

```javascript
// In src/utils/validationSchemas.js
export const myFormSchema = yup.object({
  field: yup.string().required('Field is required'),
});
```

### Using the Logger

```javascript
import { logger } from '@utils/logger';

logger.info('Info message');
logger.error('Error message', error);
logger.debug('Debug message');
```

---

## 🔧 Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Clean build artifacts
npm run clean
```

---

## 📦 Project Structure Quick Reference

```
src/
├── components/
│   ├── common/      # ErrorBoundary, Loader, ScrollToTop
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Page-specific sections
│   ├── shared/      # Reusable across pages
│   └── ui/          # Button, Input, Card, etc.
├── constants/       # All constants and content
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── utils/           # Utility functions
└── config/          # Configuration files
```

---

## 🎨 Styling Guide

### Using Tailwind Classes
```jsx
<div className="bg-brand text-white px-4 py-2 rounded-lg">
  Content
</div>
```

### Custom Colors
- `brand` - #124AD6
- `custom-purple` - #5528A9
- `custom-dark` - #100701

### Responsive Design
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

---

## 🔐 Environment Variables

```env
# Required
VITE_API_BASE_URL=http://localhost:3000/api

# Optional
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_CHAT_SUPPORT=false
```

Access in code:
```javascript
import { env } from '@config/env';
console.log(env.apiBaseUrl);
```

---

## 🐛 Debugging

### Check Console
- Development: All logs visible
- Production: Only errors visible

### Check Network
- API calls use centralized `api.js`
- Check Network tab for failed requests

### Check Routes
- All routes defined in `constants/routes.js`
- Use `ROUTES.HOME` instead of `'/'`

---

## 📝 Code Style

### Components
```jsx
// Functional components with hooks
const MyComponent = () => {
  const [state, setState] = useState();
  
  return <div>Content</div>;
};

export default MyComponent;
```

### Imports
```javascript
// Use path aliases
import { Button } from '@components/ui';
import { ROUTES } from '@constants';
import { api } from '@utils';
```

### Naming
- Components: PascalCase (`MyComponent.jsx`)
- Utilities: camelCase (`myUtil.js`)
- Constants: UPPER_SNAKE_CASE (`MY_CONSTANT`)

---

## 🚀 Deployment Quick Check

Before deploying:
```bash
# 1. Lint
npm run lint

# 2. Build
npm run build

# 3. Preview
npm run preview

# 4. Test in browser
# Visit http://localhost:4173
```

See `DEPLOYMENT.md` for full checklist.

---

## 📚 Documentation

- `README.md` - Full documentation
- `DEPLOYMENT.md` - Deployment guide
- `OPTIMIZATION_REPORT.md` - Optimization details
- `QUICK_START.md` - This file

---

## 🆘 Common Issues

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

### Build Fails
```bash
# Clean and rebuild
npm run clean
npm install
npm run build
```

### Linting Errors
```bash
# Auto-fix
npm run lint:fix
```

---

## 💡 Tips

1. **Use path aliases**: `@components` instead of `../../components`
2. **Use route constants**: `ROUTES.HOME` instead of `'/'`
3. **Use centralized API**: Import from `@utils/api`
4. **Check logger**: Use `logger` instead of `console.log`
5. **Lazy load pages**: Already done, don't import pages directly

---

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)

---

**Happy Coding! 🚀**
