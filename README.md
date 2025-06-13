# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, featuring a beautiful geometry-based design, smooth animations, and a fully customizable configuration system.

![Portfolio Preview](public/placeholder.svg?height=500&width=1000)

## 🚀 Features

- **Modern Design**: Clean and professional design with geometry-based background animations
- **Fully Responsive**: Looks great on all devices, from mobile to desktop
- **Dark/Light Mode**: Built-in theme switching with system preference detection
- **Smooth Animations**: Powered by Framer Motion for fluid, engaging interactions
- **TypeScript**: Written in TypeScript for better type safety and developer experience
- **Tailwind CSS**: Styled with Tailwind CSS for rapid development and consistent design
- **Customizable**: Easy to update content through a centralized configuration system
- **Performance Optimized**: Built with performance in mind, following Next.js best practices
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessible**: Follows accessibility best practices for better user experience

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website-geometry.git
   cd portfolio-website-geometry
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

### Configuration

All website content can be customized through the `config/site.ts` file. This includes:

- Personal information
- Navigation items
- Skills and expertise
- Projects
- Contact information
- Social media links
- Footer content

Example configuration:
```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  // ... other configuration options
}
```

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in the following files:

- `app/globals.css` - Global styles and Tailwind directives
- `components/ui/` - Reusable UI components
- `config/site.ts` - Theme colors and other design tokens

## 📁 Project Structure

```
portfolio-website-geometry/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── geometry-background.tsx
│   └── typing-animation.tsx
├── config/               # Configuration files
│   └── site.ts          # Site-wide configuration
├── public/              # Static assets
│   └── images/         # Image files
├── styles/             # Additional styles
└── package.json        # Project dependencies
```

## 🚀 Deployment

The project can be deployed to any platform that supports Next.js applications. Here are some popular options:

1. **Vercel** (Recommended):
   ```bash
   vercel
   ```

2. **Netlify**:
   ```bash
   netlify deploy
   ```

3. **GitHub Pages**:
   ```bash
   npm run build
   npm run export
   ```

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide Icons](https://lucide.dev/) - Icons
- [shadcn/ui](https://ui.shadcn.com/) - UI components

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/portfolio-website-geometry](https://github.com/yourusername/portfolio-website-geometry)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/docs/)
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components 