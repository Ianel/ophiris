# Ophiris - Madagascar Travel & Investment Agency

A premium website for Ophiris International Services, offering exclusive travel experiences and investment opportunities in Madagascar.

## 🚀 Development Setup

### Prerequisites
- Modern web browser
- Text editor (VS Code recommended)
- Node.js (for production Tailwind build)

### Local Development
Simply open `index.html` in your browser. The site uses Tailwind CSS via CDN for development.

**Note:** You'll see console warnings about CDN usage and file:// URLs - these are normal for local development.

## 🛠️ Production Deployment

### Option 1: Build Tailwind CSS Locally (Recommended)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build CSS for development (with watch mode):**
   ```bash
   npm run build-css
   ```

3. **Build CSS for production (minified):**
   ```bash
   npm run build-css-prod
   ```

4. **Replace CDN in HTML:**
   ```html
   <!-- Remove this line: -->
   <!-- <script src="https://cdn.tailwindcss.com"></script> -->

   <!-- Add this line: -->
   <link href="./css/tailwind.css" rel="stylesheet">
   ```

### Option 2: Use Tailwind CDN (Not recommended for production)
Keep the current CDN setup but be aware of potential loading issues.

## 🔧 Troubleshooting

### Console Warnings

**CDN Warning:**
```
cdn.tailwindcss.com should not be used in production
```
- **Solution:** Follow the production setup above to build Tailwind locally.

**File URL Security Warning:**
```
Unsafe attempt to load URL file://... from frame with URL file://...
```
- **Solution:** This is normal for local development. The site includes JavaScript to handle anchor links safely. For production deployment on a web server, this warning won't appear.

### Performance Tips

1. **Minify CSS:** Use a build process to minify your CSS
2. **Optimize Images:** Compress images in the `assets/` folder
3. **Enable Compression:** Configure your web server for gzip compression
4. **CDN for Assets:** Consider using a CDN for images and fonts

## 📁 Project Structure

```
ophiris/
├── index.html          # Main website
├── assets/
│   └── images/         # Image assets
└── css/                # Production CSS (after build)
```

## 🌐 SEO & Performance

The site includes:
- ✅ SEO-optimized meta tags
- ✅ Structured data (Schema.org)
- ✅ Open Graph tags for social sharing
- ✅ Optimized images with alt text
- ✅ Mobile-responsive design
- ✅ Fast loading with CDN fonts

## 📞 Contact

For questions about the website or Ophiris services:
- Email: contact@ophiris.com
- Phone: +261 32 42 104 93
- Website: https://ophiris.mg/

---

**Built with ❤️ for Madagascar's tourism and investment opportunities**