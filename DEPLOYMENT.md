# 🚀 Vercel Deployment Guide

## 📋 Prerequisites

✅ **Vercel Account**: Create account at [vercel.com](https://vercel.com)
✅ **GitHub Repository**: Push your code to GitHub
✅ **Package.json**: Optimized with build scripts
✅ **Vite Config**: Production-ready configuration
✅ **Vercel.json**: Deployment configuration (needs manual fix)

## 🔧 Deployment Steps

### 1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. **Connect to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub account
4. Select your repository

### 3. **Configure Deployment**
1. **Framework**: Vite (auto-detected)
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Node Version**: `18.x` or higher

### 4. **Environment Variables** (Optional)
```
NODE_ENV=production
```

### 5. **Deploy**
- Click "Deploy"
- Wait for build to complete
- Your site will be live at: `https://your-project-name.vercel.app`

## 🛠️ Manual vercel.json Fix

The vercel.json file exists but needs manual formatting. Replace the content with:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/((?!api/).*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*\\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2))",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/sw.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ],
  "functions": {},
  "regions": ["sin1"],
  "env": {
    "NODE_ENV": "production"
  }
}
```

## 🎯 Build Scripts Available

```bash
# Development
npm run dev

# Production build
npm run build

# Build analysis
npm run build:analyze

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Clean build
npm run clean
```

## 📱 Features Enabled

✅ **SPA Routing**: React Router support
✅ **Static Caching**: 1-year cache for assets
✅ **PWA Support**: Service worker enabled
✅ **Dark Theme**: Default dark mode
✅ **Performance**: Optimized build chunks
✅ **SEO**: Meta tags and structured data

## 🔍 Troubleshooting

### Build Issues
- Check Node version (>=18.0.0)
- Verify dependencies: `npm install`
- Check TypeScript: `npm run type-check`

### Routing Issues
- Ensure vercel.json has proper rewrites
- Check React Router configuration

### Performance Issues
- Enable caching headers
- Optimize images
- Check build analysis

## 🚀 Post-Deployment

1. **Test All Pages**: Home, About, Skills, Projects, Certificates, Contact
2. **Check PWA**: Install as app on mobile
3. **Verify SEO**: Check meta tags and structured data
4. **Performance**: Run Lighthouse audit
5. **Mobile Test**: Check responsive design

## 📊 Expected Performance

- **Build Time**: ~30-60 seconds
- **Bundle Size**: <1MB total
- **Load Time**: <2 seconds
- **Lighthouse Score**: >90

Your portfolio is now **Vercel-ready**! 🎉✨
