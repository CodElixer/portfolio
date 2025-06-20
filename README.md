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
- npm, yarn, or pnpm

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
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

### Configuration

All website content can be customized through the files in the `config/` directory. This includes:

- Personal information (`config/site.ts`)
- Navigation items, skills, projects, contact info, social links, and footer content (`config/site.ts`)
- Multi-language support and strings (`config/languages/` and subfolders)
- Language context (`contexts/language-context.tsx`)

Example configuration:
```typescript
// config/site.ts
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  // ... other configuration options
}
```

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in the following files:

- `app/globals.css` or `styles/globals.css` - Global styles and Tailwind directives
- `components/ui/` - Reusable UI components
- `tailwind.config.ts` - Tailwind theme configuration

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
│   ├── language-switcher.tsx
│   ├── theme-provider.tsx
│   └── typing-animation.tsx
├── config/                # Configuration files
│   ├── languages/        # Language-specific config
│   │   ├── en/
│   │   │   ├── site-strings.ts
│   │   │   └── site.ts
│   │   └── hi/
│   │       ├── site-strings.ts
│   │       └── site.ts
│   ├── languages.ts
│   ├── site-strings.ts
│   └── site.ts
├── contexts/              # React context providers
│   └── language-context.tsx
├── hooks/                 # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                   # Utility libraries
│   └── utils.ts
├── public/                # Static assets
│   ├── assets/           # PDF and other assets
│   │   └── Resume.pdf
│   ├── favicon.svg
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   ├── placeholder.jpg
│   └── placeholder.svg
├── styles/                # Additional styles
│   └── globals.css
├── utils/                 # Utility functions
│   └── language-loader.ts
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies
├── README.md              # Project documentation
└── ...                    # Other config and lock files
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


## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/docs/)
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components 