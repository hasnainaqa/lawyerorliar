import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesHero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-primary-900 text-white">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-cover bg-center  z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/90 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary/30 to-transparent rounded-bl-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-700/50 to-transparent rounded-tr-full blur-3xl opacity-20"></div>

      {/* Animated dots pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-2 h-2 bg-secondary rounded-full top-1/3 right-1/4 animate-pulse animation-delay-200"></div>
        <div className="absolute w-2 h-2 bg-white rounded-full bottom-1/4 left-1/3 animate-pulse animation-delay-400"></div>
        <div className="absolute w-2 h-2 bg-secondary rounded-full bottom-1/3 right-1/3 animate-pulse"></div>
        <div className="absolute w-3 h-3 bg-white rounded-full top-1/2 left-1/2 animate-pulse animation-delay-200"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm text-secondary border border-secondary/30 backdrop-blur-sm mb-6 animate-fade-up">
            <span className="drop-shadow-sm">Comprehensive Legal Solutions</span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 font-serif animate-fade-up"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
          >
            Our Legal{" "}
            <span className="text-secondary relative">
              Expertise
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/70 rounded-full"></span>
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto animate-fade-up animation-delay-200 leading-relaxed">
            At Israr Ahmad – Advocate & Legal Consultant, we offer a full range of legal services to individuals and
            businesses. Our legal solutions are tailored to protect your rights and interests while ensuring compliance
            with the law.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full gap-1 px-8 bg-secondary text-primary hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all duration-300 hover:translate-y-[-2px]"
              >
                Schedule Consultation <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            <Link href="#practice-areas">
              <Button
                size="lg"
                variant="default"
                className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:border-white/50"
              >
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="hidden md:flex justify-center mt-16 animate-bounce">
            <Link href="#practice-areas" className="text-white/50 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5L12 19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Scroll down</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

