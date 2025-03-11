import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-primary-900 z-0">
        {/* Professional law office background image */}
        <div
          className="absolute inset-0  bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/90"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10 py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8 animate-fade-up">
            <div className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm text-secondary border border-secondary/30 backdrop-blur-sm">
              Need a Lawyer? Expert Legal Help Available Now
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white font-serif">
                Welcome to <span className="text-secondary">Your Trusted Legal Partner</span>
              </h1>
              <h2 className="text-2xl font-semibold text-white/80">Advocate & Legal Consultant</h2>
              <p className="max-w-[600px] text-white/70 md:text-xl leading-relaxed">
                Providing expert legal solutions in civil, criminal, taxation, and corporate law with a strong
                commitment to justice and client success.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full gap-1 px-8 bg-secondary text-primary hover:bg-secondary/90 shadow-lg shadow-secondary/20"
                >
                  Free Consultation <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="default"
                  className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative animate-fade-in">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-secondary/30 to-primary-500/30 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="Israr Ahmad - Advocate"
                className="relative rounded-2xl object-cover shadow-2xl border border-white/10 backdrop-blur-sm"
                width={500}
                height={600}
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-primary p-4 rounded-lg shadow-xl font-bold">
                <span className="text-3xl">25+</span>
                <span className="block text-sm">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

