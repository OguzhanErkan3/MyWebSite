import type React from "react"
import type { Metadata } from "next"
import { Source_Sans_3, Montserrat, Ubuntu } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NeonGrid } from "@/components/neon-grid"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

// Source Sans 3 has excellent support for Turkish characters
const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-source-sans",
})

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
})

const ubuntu = Ubuntu({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu",
})

export const metadata: Metadata = {
  title: "Oğuzhan Erkan | Full Stack Developer & Computer Engineer",
  description:
    "Personal portfolio of Oğuzhan Erkan, a Full Stack Developer and Computer Engineer with expertise in web development, game development, and more.",
  keywords: [
    "Oğuzhan Erkan",
    "Full Stack Developer",
    "Computer Engineer",
    "Web Development",
    "Game Development",
    "Unity",
    "Portfolio",
  ],
  authors: [{ name: "Oğuzhan Erkan" }],
  creator: "Oğuzhan Erkan",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${sourceSans.variable} ${montserrat.variable} ${ubuntu.variable} font-sans`}>
        <ThemeProvider defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <NeonGrid />
            {children}
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
