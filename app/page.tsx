"use client"

import { useState, useEffect, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Code, ExternalLink, Github, Mail, Menu, Moon, Sun, X, ArrowUp, CloudCog } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import dynamic from "next/dynamic"
import { TypingAnimation } from "@/components/typing-animation"
import { IconMap } from "@/components/ui/iconMap"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"

// Dynamically import the GeometryBackground component with no SSR
const GeometryBackground = dynamic(() => import("@/components/geometry-background"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-background" />
})

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { language, setLanguage, siteConfig, siteStrings } = useLanguage()

  // Handle scroll and set active section
  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      // Show scroll to top button when scrolled down 300px
      setShowScrollTop(scrollPosition > 300)

      const sectionElements = siteConfig.navigation.map((section) => ({
        id: section.id,
        offset: document.getElementById(section.id)?.offsetTop || 0,
      }))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionElements[i].offset - 200) {
          setActiveSection(sectionElements[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Geometry Background */}
      <div className="fixed inset-0 z-0 opacity-70 dark:opacity-40">
        <GeometryBackground />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Code className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">
              <span className="text-primary">{siteStrings.header.logo.prefix}</span>{siteStrings.header.logo.suffix}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {siteConfig.navigation.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section.id ? "text-primary" : "text-muted-foreground"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: siteConfig.navigation.indexOf(section) * 0.1 }}
              >
                {section.label}
              </motion.a>
            ))}

            <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="relative"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Language Selector */}
            <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
            
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            )}

            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)} aria-label={siteStrings.accessibility.openMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-3/4 bg-background border-l p-6 flex flex-col"
            >
              <div className="flex justify-end">
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} aria-label={siteStrings.accessibility.closeMenu}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="flex flex-col gap-4 mt-8">
                {siteConfig.navigation.map((section) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      activeSection === section.id ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {section.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-6 w-6" />
            <span className="sr-only">{siteStrings.accessibility.scrollToTop}</span>
          </motion.button>
        )}
      </AnimatePresence>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-16">
          <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="block">{siteStrings.hero.greeting}</span>
                  <span className="text-primary block mt-2">
                    <TypingAnimation 
                      text={siteConfig.name}
                      speed={100}
                      delay={500}
                      cursorWidth={3}
                      cursorHeight={48}
                    />
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                  {siteConfig.title}
                </p>
                <p className="text-muted-foreground mb-8 max-w-md">
                  {siteConfig.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <a href="#contact">
                      {siteStrings.hero.getInTouch} <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#projects">{siteStrings.hero.viewWork}</a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border shadow-xl backdrop-blur-sm bg-background/30">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt={siteConfig.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg"
                >
                  <p className="font-bold">{siteConfig.experience}</p>
                  <p className="text-sm">{siteConfig.experienceDescription}</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{siteStrings.about.title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative aspect-square max-w-md mx-auto"
              >
                <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4"></div>
                <div className="relative w-full h-full rounded-lg overflow-hidden border backdrop-blur-sm bg-background/30">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt={`About ${siteConfig.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-4">
                  {siteStrings.about.journey.title}
                </motion.h3>

                {siteConfig.about.journey.map((paragraph, index) => (
                  <motion.p key={index} variants={fadeIn} className="text-muted-foreground mb-4">
                    {paragraph}
                  </motion.p>
                ))}

                <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-bold">{siteStrings.about.personalInfo.name}</h4>
                    <p className="text-muted-foreground">{siteConfig.about.personalInfo.name}</p>
                  </div>
                  <div>
                    <h4 className="font-bold">{siteStrings.about.personalInfo.email}</h4>
                    <p className="text-muted-foreground">{siteConfig.about.personalInfo.email}</p>
                  </div>
                  <div>
                    <h4 className="font-bold">{siteStrings.about.personalInfo.availability}</h4>
                    <p className="text-muted-foreground">{siteConfig.about.personalInfo.availability}</p>
                  </div>
                  <div>
                    <motion.div variants={fadeIn}>
                      <Button asChild>
                        <a 
                          href={siteConfig.about.personalInfo.resume.path} 
                          download={siteConfig.about.personalInfo.resume.filename}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {siteStrings.about.personalInfo.downloadResume} <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{siteStrings.skills.title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                {siteStrings.skills.description}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {siteConfig.skills.map((category, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-card/80 hover:bg-card/90 backdrop-blur-sm border rounded-lg p-6 transition-all hover:shadow-lg"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2">
                        <IconMap name={skill.name} className="h-4 w-4 text-primary" />
                        <span className="text-sm">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24 bg-muted/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{siteStrings.projects.title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                {siteStrings.projects.description}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {siteConfig.projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-card/80 backdrop-blur-sm border rounded-lg overflow-hidden transition-all hover:shadow-xl group"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <Button size="icon" variant="secondary" className="rounded-full" asChild>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  {siteStrings.projects.viewMore} <Github className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{siteStrings.contact.title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                {siteStrings.contact.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">{siteStrings.contact.info.title}</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">{siteStrings.contact.info.email}</h4>
                      <p className="text-muted-foreground">{siteConfig.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Github className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">{siteStrings.contact.info.github}</h4>
                      <p className="text-muted-foreground">{siteConfig.contact.github}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <Code className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">{siteStrings.contact.info.website}</h4>
                      <p className="text-muted-foreground">{siteConfig.contact.website}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">{siteStrings.contact.followMe}</h3>
                  <div className="flex gap-4">
                    {Object.entries(siteConfig.contact.socialLinks).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-card/80 hover:bg-primary text-muted-foreground hover:text-primary-foreground p-3 rounded-full transition-colors"
                      >
                        <span className="sr-only">{platform}</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-card/80 backdrop-blur-sm border rounded-lg p-6 md:p-8"
              >
                <h3 className="text-2xl font-bold mb-6">{siteStrings.contact.messageForm.title}</h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        {siteStrings.contact.messageForm.name.label}
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder={siteStrings.contact.messageForm.name.placeholder}
                        className="w-full px-4 py-2 bg-background/80 backdrop-blur-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        {siteStrings.contact.messageForm.email.label}
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder={siteStrings.contact.messageForm.email.placeholder}
                        className="w-full px-4 py-2 bg-background/80 backdrop-blur-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      {siteStrings.contact.messageForm.subject.label}
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder={siteStrings.contact.messageForm.subject.placeholder}
                      className="w-full px-4 py-2 bg-background/80 backdrop-blur-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      {siteStrings.contact.messageForm.message.label}
                    </label>
                    <textarea
                      id="message"
                      placeholder={siteStrings.contact.messageForm.message.placeholder}
                      rows={5}
                      className="w-full px-4 py-2 bg-background/80 backdrop-blur-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full">
                    {siteStrings.contact.messageForm.submit}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t backdrop-blur-sm bg-background/50 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">
                <span className="text-primary">{siteStrings.header.logo.prefix}</span>{siteStrings.header.logo.suffix}
              </span>
            </div>

            <p className="text-muted-foreground mb-6">
              {siteConfig.footer.description}
            </p>

            <div className="flex justify-center gap-6 mb-6">
              {siteConfig.navigation.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {section.label}
                </a>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              {siteConfig.footer.copyright}
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
