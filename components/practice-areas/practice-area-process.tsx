import { cn } from "@/lib/utils"

interface ProcessStep {
  title: string
  description: string
}

interface PracticeAreaProcessProps {
  title: string
  process: ProcessStep[]
}

export default function PracticeAreaProcess({ title, process }: PracticeAreaProcessProps) {
  return (
    <section id="process" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80')] bg-fixed opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary-100/30 px-4 py-1.5">
            <span className="text-xs font-medium text-primary-800">Our Approach</span>
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary-800">
              Our {title} Process
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              How we handle your case from start to finish
            </p>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-300 via-primary to-secondary hidden md:block"></div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-16 md:grid-cols-2">
            {process.map((step, index) => (
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
                  <div className="text-sm font-medium text-secondary mb-2">
                    Step {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary-800">{step.title}</h3>
                  <p className="text-muted-foreground max-w-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

