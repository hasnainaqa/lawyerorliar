import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutCta() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-primary-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/90"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm text-secondary border border-secondary/30 backdrop-blur-sm mb-6">
            <span className="drop-shadow-sm">Ready to Work With Us?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-serif">
            Let's Discuss Your Legal Needs
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Our team of experienced legal professionals is ready to help you navigate your legal challenges with
            expertise and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full gap-1 px-8 bg-secondary text-primary hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all duration-300 hover:translate-y-[-2px]"
            >
              Schedule a Consultation <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

