export const languages = {
  en: {
    code: 'en',
    name: 'English',
    flag: '🇺🇸'
  },
  'en-in': {
    code: 'en-in',
    name: 'English (India)',
    flag: '🇮🇳'
  },
  hi: {
    code: 'hi',
    name: 'हिंदी',
    flag: '🇮🇳'
  },
  de: {
    code: 'de',
    name: 'Deutsch',
    flag: '🇩🇪'
  },
  fr: {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷'
  },
  ga: {
    code: 'ga',
    name: 'Gaeilge',
    flag: '🇮🇪'
  }
} as const

export type LanguageCode = keyof typeof languages 