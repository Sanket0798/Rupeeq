# RupeeQ - Production Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Configuration
- [ ] Update `.env.production` with production API URLs
- [ ] Verify all environment variables are set correctly
- [ ] Remove any development-only configurations
- [ ] Ensure API keys and secrets are properly secured

### 2. Code Quality
- [ ] Run `npm run lint` and fix all errors
- [ ] Run `npm run lint:fix` for auto-fixable issues
- [ ] Remove all console.logs (handled automatically in build)
- [ ] Remove commented code
- [ ] Verify no TODO comments remain

### 3. Performance Optimization
- [ ] All images are optimized (compressed, proper formats)
- [ ] Lazy loading is implemented for routes (✅ Already done)
- [ ] Code splitting is configured (✅ Already done)
- [ ] Bundle size is analyzed: `npm run build:analyze`

### 4. Security
- [ ] All dependencies are up to date: `npm audit`
- [ ] Fix any security vulnerabilities: `npm audit fix`
- [ ] HTTPS is enforced in production
- [ ] Security headers are configured
- [ ] API endpoints use authentication
- [ ] Sensitive data is not exposed in client code

### 5. SEO & Meta Tags
- [ ] Meta descriptions are set (✅ Already done)
- [ ] Open Graph tags are configured (✅ Already done)
- [ ] Twitter cards are configured (✅ Already done)
- [ ] Sitemap.xml is generated
- [ ] Robots.txt is configured
- [ ] Favicon is set

### 6. Testing
- [ ] Test all user flows
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Test form validations
- [ ] Test error scenarios
- [ ] Test loading states

### 7. Analytics & Monitoring
- [ ] Google Analytics is configured (if enabled)
- [ ] Error tracking is set up (Sentry, LogRocket, etc.)
- [ ] Performance monitoring is configured

## Build Process

### Development Build
```bash
npm run dev
```

### Production Build
```bash
# Clean previous builds
npm run clean

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Build Output
- Build artifacts will be in the `dist/` directory
- Verify the build size is reasonable (< 500KB for main bundle)
- Check that all assets are properly hashed for cache busting

## Deployment Options

### Option 1: Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Option 2: Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Configure environment variables in Netlify dashboard

### Option 3: AWS S3 + CloudFront
1. Build the project: `npm run build`
2. Upload `dist/` contents to S3 bucket
3. Configure CloudFront distribution
4. Set up SSL certificate
5. Configure custom domain

### Option 4: Traditional Hosting
1. Build the project: `npm run build`
2. Upload `dist/` contents to your web server
3. Configure web server (Apache/Nginx) for SPA routing
4. Set up SSL certificate

## Post-Deployment

### 1. Verification
- [ ] Visit the production URL
- [ ] Test critical user flows
- [ ] Check browser console for errors
- [ ] Verify API calls are working
- [ ] Test on mobile devices

### 2. Performance
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Check Core Web Vitals
- [ ] Verify page load times (< 3 seconds)

### 3. Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error alerts
- [ ] Monitor API response times
- [ ] Track user analytics

## Nginx Configuration (if applicable)

```nginx
server {
    listen 80;
    server_name rupeeq.com www.rupeeq.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name rupeeq.com www.rupeeq.com;

    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;

    root /var/www/rupeeq/dist;
    index index.html;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing - serve index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Rollback Plan

If issues are discovered after deployment:

1. **Immediate Rollback**
   - Revert to previous deployment in hosting platform
   - Or restore previous build from backup

2. **Fix and Redeploy**
   - Identify and fix the issue
   - Test thoroughly in staging
   - Deploy fix to production

## Support Contacts

- **Technical Lead**: [Contact Info]
- **DevOps**: [Contact Info]
- **Emergency**: [Contact Info]

## Version History

- **v1.0.0** - Initial production release
- Date: [Deployment Date]
- Deployed by: [Name]
