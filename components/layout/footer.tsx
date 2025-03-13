import Link from "next/link"
import { Scale, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-primary-800"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl mb-6">
              <Scale className="h-8 w-8 text-secondary" />
              <span className="font-serif">Lawyer or Liar</span>
            </div>
            <p className="text-white/70 mb-6 max-w-xs">
              Providing expert legal solutions with a strong commitment to justice and client success since 2005.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href="#"
                  className="bg-white/10 hover:bg-secondary hover:text-primary p-3 rounded-full transition-colors"
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-secondary transition-colors flex items-center"
                  >
                    <svg className="mr-2 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-6 font-serif">Practice Areas</h3>
            <ul className="space-y-4">
              {[
                { name: "Civil Law", href: "/services/civil-law" },
                { name: "Taxation Law", href: "/services/taxation-law" },
                { name: "Corporate Law", href: "/services/corporate-law" },
                { name: "Family Law", href: "/services/family-law" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-secondary transition-colors flex items-center"
                  >
                    <svg className="mr-2 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-6 font-serif">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary mt-1" />
                <span className="text-white/70">+[Your Contact Number]</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-1" />
                <span className="text-white/70">[Your Email]</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-sm text-white/50 md:text-left">
            © 2025 Israr Ahmad - Advocate & Legal Consultant. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-white/50 hover:text-secondary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-white/50 hover:text-secondary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-white/50 hover:text-secondary">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

