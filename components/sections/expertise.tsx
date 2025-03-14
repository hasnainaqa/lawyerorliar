import { Scale, FileText, Briefcase, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const expertiseAreas = [
  {
    icon: <Scale className="h-12 w-12" />,
    title: "Civil Law",
    description: "Property disputes, contracts, family law, etc.",
  },
  {
    icon: <FileText className="h-12 w-12" />,
    title: "Criminal Law",
    description: "Bail, trials, appeals and litigation.",
  },
  {
    icon: <Briefcase className="h-12 w-12" />,
    title: "Taxation Law",
    description: "Filer, Company Registration, NTN, Income tax, sales tax, corporate tax.",
  },
  {
    icon: <Building className="h-12 w-12" />,
    title: "Corporate Law",
    description: "Business registration, mergers, compliance.",
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 lg:py-32 bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-800"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-medium text-white">Our Legal Expertise</span>
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">Our Expertise</h2>
            <p className="text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We specialize in various areas of law to provide comprehensive legal services
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-none bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-secondary"></div>
              <CardContent className="flex flex-col items-center space-y-6 p-8 text-center">
                <div className="text-secondary group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl text-black font-bold">{area.title}</h3>
                <p className="text-white/70">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

