import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServiceCta() {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-30"></div>

      <div className="container px-4 md:px-6 relative">
        

        {/* Testimonial preview */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary-100/30 px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-primary-800">What Our Clients Say</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-serif text-primary-800 mb-6">
            Trusted by Individuals and Businesses Across the Country
          </h3>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-primary-100 relative">
            <div className="text-5xl text-secondary opacity-20 absolute top-4 left-4">"</div>
            <div className="text-5xl text-secondary opacity-20 absolute bottom-4 right-4">"</div>
            <p className="text-lg md:text-xl italic text-gray-700 mb-6 relative z-10">
              Israr Ahmad provided exceptional legal representation in my complex corporate dispute. His expertise,
              strategic approach, and dedication to my case resulted in a favorable outcome that exceeded my
              expectations.
            </p>
            <div className="flex items-center justify-center">
              <div className="mr-4 h-14 w-14 overflow-hidden rounded-full border-2 border-secondary">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Client"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-primary-800">Ahmed Khan</p>
                <p className="text-sm text-muted-foreground">CEO, Tech Innovations Ltd.</p>
              </div>
            </div>
          </div>

          <Button variant="outline" className="mt-8 rounded-full gap-2 px-8">
            Read More Testimonials <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

