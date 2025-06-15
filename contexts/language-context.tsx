"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { type LanguageCode } from "@/config/languages"
import { loadLanguageConfig } from "@/utils/language-loader"

// Import types from the default English configuration
import type { siteConfig as DefaultSiteConfig } from "@/config/languages/en/site"
import type { siteStrings as DefaultSiteStrings } from "@/config/languages/en/site-strings"

interface LanguageContextType {
  language: LanguageCode
  setLanguage: (lang: LanguageCode) => void
  siteConfig: typeof DefaultSiteConfig
  siteStrings: typeof DefaultSiteStrings
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en")
  const [siteConfig, setSiteConfig] = useState<typeof DefaultSiteConfig | null>(null)
  const [siteStrings, setSiteStrings] = useState<typeof DefaultSiteStrings | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem("language") as LanguageCode
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    } else {
      // Get browser language
      const browserLang = navigator.language
      if (browserLang.startsWith("hi")) {
        setLanguageState("hi")
      } else if (browserLang.startsWith("en-in")) {
        setLanguageState("en-in")
      } else {
        setLanguageState("en")
      }
    }
  }, [])

  useEffect(() => {
    async function loadConfig() {
      setIsLoading(true)
      try {
        const { siteConfig: newSiteConfig, siteStrings: newSiteStrings } = await loadLanguageConfig(language)
        setSiteConfig(newSiteConfig)
        setSiteStrings(newSiteStrings)
      } catch (error) {
        console.error("Failed to load language configuration:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadConfig()
  }, [language])

  const handleLanguageChange = (lang: LanguageCode) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  if (!siteConfig || !siteStrings) {
    return null // or a loading spinner
  }

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage: handleLanguageChange,
        siteConfig,
        siteStrings,
        isLoading
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
} 