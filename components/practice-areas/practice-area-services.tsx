import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Service {
  title: string
  description: string
}

interface PracticeAreaServicesProps {
  title: string
  services: Service[]
}

export default function PracticeAreaServices({ title, services }: PracticeAreaServicesProps) {
  return (
    <section id="services" className="py-20 md:py-28 lg:py-32 bg-primary-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80')] bg-fixed opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-800"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary/20 to-transparent rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-700/30 to-transparent rounded-tr-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-medium text-white">Our Services</span>
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">{title} Services</h2>
            <p className="text-white/70 md:text-xl/relaxed">
              Comprehensive legal solutions tailored to your specific needs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/10 overflow-hidden group hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="rounded-full bg-secondary/20 p-3 w-12 h-12 flex items-center justify-center text-secondary mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>

                {/* Decorative element */}
                <div className="mt-6 h-1 w-12 bg-secondary/70 rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

