import { type LanguageCode } from "@/config/languages"

export async function loadLanguageConfig(language: LanguageCode) {
  try {
    // Dynamically import site strings
    const { siteStrings } = await import(`@/config/languages/${language}/site-strings`)
    
    // Dynamically import site config
    const { siteConfig } = await import(`@/config/languages/${language}/site`)

    return {
      siteStrings,
      siteConfig
    }
  } catch (error) {
    console.error(`Failed to load language configuration for ${language}:`, error)
    // Fallback to English if the requested language fails to load
    const { siteStrings } = await import("@/config/languages/en/site-strings")
    const { siteConfig } = await import("@/config/languages/en/site")
    return {
      siteStrings,
      siteConfig
    }
  }
} 