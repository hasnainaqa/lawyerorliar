import { Award, Shield, Users, MessageSquare, FileText, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "Experienced Advocate",
    description: "Years of successful legal practice",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Strong Representation",
    description: "Powerful advocacy in every case",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Personalized Solutions",
    description: "Tailored to your specific needs",
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "Confidential Service",
    description: "Your privacy is our priority",
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Proven Track Record",
    description: "History of successful cases",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Client-Centric Approach",
    description: "Your needs come first",
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: "Transparent Guidance",
    description: "Clear communication always",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Efficient Case Handling",
    description: "Timely and effective service",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary-100/30 px-4 py-1.5">
            <span className="text-xs font-medium text-primary-800">Why Choose Our Services</span>
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary-800">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide exceptional legal services with a client-centered approach
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary-100 p-4 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary-800">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

