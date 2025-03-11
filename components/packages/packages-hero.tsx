import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PackagesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 py-24 md:py-32">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>

      {/* Decorative elements */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white/90 backdrop-blur-sm">
            Professional Legal Services
          </div>

          <h1 className="mt-6 font-playfair text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Legal Service <span className="text-secondary">Packages</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Affordable & Transparent Legal Fees Tailored to Your Specific Needs
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-white/80">
            We offer a variety of legal service packages designed to meet the needs of individuals, businesses, and
            corporations. Our pricing is transparent, ensuring affordable and professional legal assistance.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-medium text-primary shadow-lg shadow-black/5 transition-all hover:bg-white/95 hover:shadow-xl"
            >
              Contact Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#packages"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-lg hover:shadow-black/5"
            >
              View Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

