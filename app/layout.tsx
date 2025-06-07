import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { StagewiseToolbar } from '@stagewise/toolbar-next'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yashkirti Raj - Frontend Developer Portfolio",
  description:
    "Portfolio website showcasing the work and skills of Yashkirti Raj, a Frontend Developer and UI/UX Enthusiast.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

const stagewiseConfig = {
  plugins: []
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          {process.env.NODE_ENV === 'development' && (
            <StagewiseToolbar config={stagewiseConfig} />
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}
