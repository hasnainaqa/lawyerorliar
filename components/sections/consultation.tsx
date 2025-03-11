import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Consultation() {
  return (
    <section id="consultation" className="py-20 md:py-28 lg:py-32 bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-self-start rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm mb-2">
              <span className="text-xs font-medium text-white">Free Legal Consultation</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
                Free Initial Consultation
              </h2>
              <p className="max-w-[600px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We believe in providing transparent and honest legal advice. Get a free 15-minute consultation to
                discuss your legal concerns and explore possible solutions.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full gap-1 px-8 bg-secondary text-primary hover:bg-secondary/90 shadow-lg shadow-black/20"
              >
                Book Now <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-6 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-secondary p-4 text-primary shadow-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-white/70">Call Now</p>
                <p className="font-semibold text-xl">+[Your Contact Number]</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-secondary p-4 text-primary shadow-lg">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-white/70">Email Us</p>
                <p className="font-semibold text-xl">[Your Email]</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-secondary p-4 text-primary shadow-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-white/70">Visit Our Office</p>
                <p className="font-semibold text-xl">[Your Office Address]</p>
              </div>
            </div>
            <div className="mt-4 pt-6 border-t border-white/20">
              <p className="text-center text-white/70">Available Monday to Friday, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

