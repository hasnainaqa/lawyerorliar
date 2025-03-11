import { MessageSquare, FileText, Briefcase, Scale, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const processSteps = [
  {
    icon: <MessageSquare className="h-10 w-10" />,
    step: "01",
    title: "Consultation",
    description: "Discuss your case in detail with our expert legal team.",
  },
  {
    icon: <FileText className="h-10 w-10" />,
    step: "02",
    title: "Case Evaluation",
    description: "We thoroughly analyze your legal situation and options.",
  },
  {
    icon: <Briefcase className="h-10 w-10" />,
    step: "03",
    title: "Legal Strategy",
    description: "We develop the best course of action for your specific case.",
  },
  {
    icon: <Scale className="h-10 w-10" />,
    step: "04",
    title: "Resolution",
    description: "We work diligently to achieve the best possible outcome.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary-100/30 px-4 py-1.5">
            <span className="text-xs font-medium text-primary-800">Our Legal Process</span>
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary-800">
              Our Process
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              How we handle your case from start to finish
            </p>
          </div>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-300 via-primary to-secondary hidden md:block"></div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-16 md:grid-cols-2">
            {processSteps.map((process, index) => (
              <div
                key={index}
                className={cn(
                  "relative flex flex-col",
                  index % 2 === 0 ? "md:text-right md:items-end" : "md:text-left md:items-start md:mt-32",
                )}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 md:top-1/2 md:-translate-y-1/2 z-10 hidden md:block">
                  {index % 2 === 0 ? (
                    <div className="h-8 w-8 rounded-full bg-secondary border-4 border-white shadow-lg translate-x-[16px]"></div>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-secondary border-4 border-white shadow-lg -translate-x-[16px]"></div>
                  )}
                </div>
                <div
                  className={cn(
                    "flex flex-col items-center md:items-end text-center md:text-right bg-white p-8 rounded-xl shadow-xl border border-primary-100 relative group hover:shadow-2xl transition-all duration-300",
                    index % 2 !== 0 && "md:items-start md:text-left",
                  )}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {process.icon}
                  </div>
                  <div className="text-sm font-medium text-secondary mb-2">Step {process.step}</div>
                  <h3 className="text-2xl font-bold mb-3 text-primary-800">{process.title}</h3>
                  <p className="text-muted-foreground max-w-xs">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

