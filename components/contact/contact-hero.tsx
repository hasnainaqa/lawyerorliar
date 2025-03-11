import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ContactHeroProps {
  id?: string
}

export default function ContactHero({ id }: ContactHeroProps) {
  return (
    <section id={id} className="relative bg-primary-900 text-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Modern background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=2070')] bg-cover bg-center opacity-15"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-900/95"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary/30 to-transparent rounded-bl-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-700/50 to-transparent rounded-tr-full blur-3xl opacity-20"></div>

      {/* Animated dots pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-2 h-2 bg-secondary rounded-full top-1/3 right-1/4 animate-pulse animation-delay-200"></div>
        <div className="absolute w-2 h-2 bg-white rounded-full bottom-1/4 left-1/3 animate-pulse animation-delay-400"></div>
        <div className="absolute w-2 h-2 bg-secondary rounded-full bottom-1/3 right-1/3 animate-pulse"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm text-secondary border border-secondary/30 backdrop-blur-sm mb-6 animate-fade-up">
            <span className="drop-shadow-sm">Get in Touch with Our Legal Experts</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 animate-fade-up"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
          >
            Contact{" "}
            <span className="text-secondary relative">
              Us<span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary/70 rounded-full"></span>
            </span>
          </h1>

          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-200 leading-relaxed">
            We are here to provide you with professional legal guidance. Whether you need assistance with civil,
            criminal, taxation, corporate, or family law, our expert team is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
            <Button
              size="lg"
              className="rounded-full gap-1 px-8 bg-secondary text-primary hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all duration-300 hover:translate-y-[-2px]"
            >
              Schedule Consultation <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/50"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="hidden md:flex justify-center mt-16 animate-bounce absolute bottom-8 left-0 right-0">
        <Link href="#contact-info" className="text-white/50 hover:text-white transition-colors">
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
    </section>
  )
}

