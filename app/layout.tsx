import type React from "react"
import "@/app/globals.css"
import { Playfair_Display, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata = {
  title: "Lawyer or Liar - Expert Legal Help Available Now",
  description:
    "Need a Lawyer? Expert Legal Help Available Now. Providing expert legal solutions in civil, criminal, taxation, and corporate law with a strong commitment to justice and client success.",
  keywords:
    "lawyer, legal consultant, advocate, civil law, criminal law, taxation law, corporate law, legal services, Israr Ahmad",
  openGraph: {
    title: "Lawyer or Liar - Expert Legal Help Available Now",
    description:
      "Need a Lawyer? Expert Legal Help Available Now. Providing expert legal solutions in civil, criminal, taxation, and corporate law.",
    type: "website",
  },
  icon: "/favicon.svg",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-background">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'