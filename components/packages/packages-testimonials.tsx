import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Business Owner",
    content:
      "The corporate law package was exactly what my business needed. The team provided exceptional service and the pricing was transparent with no hidden fees.",
    rating: 5,
    package: "Corporate Law Package",
  },
  {
    name: "Fatima Ali",
    role: "Individual Client",
    content:
      "I was hesitant about legal fees, but their family law package was affordable and comprehensive. The team handled my divorce case with professionalism and care.",
    rating: 5,
    package: "Family Law Package",
  },
  {
    name: "Zain Ahmed",
    role: "Tech Startup Founder",
    content:
      "Their intellectual property package helped us secure our business assets. The pricing was clear from the start and the service exceeded our expectations.",
    rating: 5,
    package: "Intellectual Property Package",
  },
]

export default function PackagesTestimonials() {
  return (
    <section className="bg-muted py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-playfair text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            What Our Clients Say
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-secondary"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Hear from clients who have benefited from our legal service packages
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 bg-white shadow-lg shadow-black/5 transition-all hover:shadow-xl hover:shadow-black/10 dark:bg-gray-900"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <p className="mt-6 text-lg font-medium text-foreground">"{testimonial.content}"</p>

                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {testimonial.package}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

