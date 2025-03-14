"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Scale, Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Link href={"/"}>
          <div className={cn("flex items-center transition-colors", scrolled ? "text-primary" : "text-white")}>
            <img
              src="favicon.svg"
              alt="Lawyer or Liar Logo"
              className="h-7 w-7 mr-2"
            />
            <span className="font-serif">Lawyer or Liar</span>
          </div>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-all hover:text-secondary",
                scrolled ? "text-foreground" : "text-white",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className={cn(
              "rounded-full hidden md:flex shadow-lg transition-all",
              scrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90",
            )}
            asChild
          >
            <Link href="/contact">
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn("md:hidden", scrolled ? "text-foreground" : "text-white")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 bg-background md:hidden transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container py-6 flex flex-col gap-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium py-3 border-b border-muted flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
              <div className="ml-auto text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          ))}
          <Button className="rounded-full mt-4 w-full" asChild>
            <Link href="/contact">
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

