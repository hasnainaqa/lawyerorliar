import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PracticeAreaCtaProps {
  title: string
}

export default function PracticeAreaCta({ title }: PracticeAreaCtaProps) {
  return (
    <section id="cta" className="py-20 md:py-28 lg:py-32 bg-primary-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/90"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm text-secondary border border-secondary/30 backdrop-blur-sm mb-6">
            <span className="drop-shadow-sm">Get Expert Legal Help Today</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-serif">
            Ready to Discuss Your {title} Case?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Our experienced legal team is ready to help you navigate your legal challenges with expertise and
            dedication. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="rounded-full gap-1 px-8 bg-secondary text-primary hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all duration-300 hover:translate-y-[-2px]"
            >
              Schedule a Consultation <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full gap-2 px-8 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/50"
            >
              <Phone className="h-4 w-4 mr-2" /> Call Now
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-2">Free Initial Consultation</h3>
              <p className="text-white/70">Discuss your case with our experts at no cost</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-2">Experienced Attorneys</h3>
              <p className="text-white/70">Decades of combined legal experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-2">Client-Focused Approach</h3>
              <p className="text-white/70">Your needs and goals are our priority</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

