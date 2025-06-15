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
  }
} as const

export type LanguageCode = keyof typeof languages 