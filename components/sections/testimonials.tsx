import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Professional and highly experienced. Helped me win my case!",
    author: "Client Name",
    position: "Business Owner",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Trusted legal support with great results. I couldn't be happier with the outcome.",
    author: "Client Name",
    position: "Corporate Client",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Highly recommend for business legal services. Their expertise is unmatched.",
    author: "Client Name",
    position: "Entrepreneur",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary-100/30 px-4 py-1.5">
            <span className="text-xs font-medium text-primary-800">Client Success Stories</span>
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary-800">
              Client Success Stories
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear what our clients have to say about our legal services
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-none shadow-xl bg-white group hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="text-6xl text-secondary opacity-20 absolute top-4 left-4">"</div>
                <div className="text-6xl text-secondary opacity-20 absolute bottom-4 right-4">"</div>
                <div className="relative z-10">
                  <p className="mb-8 italic text-lg">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-secondary">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-primary-800">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
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

