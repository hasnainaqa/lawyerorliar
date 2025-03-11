export default function AboutTimeline() {
  return (
    <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80')] bg-fixed opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary-100/30 px-4 py-1.5">
            <span className="text-xs font-medium text-primary-800">Our Journey</span>
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary-800">
              Our History
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A legacy of excellence in legal services
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-300 via-primary to-secondary hidden md:block"></div>

          <div className="space-y-16">
            {[
              {
                year: "2000",
                title: "Firm Founded",
                description:
                  "Israr Ahmad established the firm with a vision to provide accessible and high-quality legal services.",
                image:
                  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
              },
              {
                year: "2005",
                title: "Expansion of Practice Areas",
                description:
                  "The firm expanded its services to include corporate law, taxation, and family law, growing to a team of 10 legal professionals.",
                image:
                  "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              },
              {
                year: "2010",
                title: "New Office Headquarters",
                description:
                  "Moved to our current headquarters, a state-of-the-art facility designed to better serve our growing client base.",
                image:
                  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
              },
              {
                year: "2015",
                title: "Digital Transformation",
                description:
                  "Implemented advanced legal technology solutions to enhance client service and case management efficiency.",
                image:
                  "https://images.unsplash.com/photo-1581092921461-39b9d08ed889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              },
              {
                year: "2020",
                title: "International Partnerships",
                description:
                  "Established strategic partnerships with international law firms to better serve clients with global legal needs.",
                image:
                  "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
              },
              {
                year: "Present",
                title: "Continued Excellence",
                description:
                  "Today, we continue our commitment to legal excellence, with a team of 30+ professionals serving clients nationwide.",
                image:
                  "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
              },
            ].map((milestone, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-10 hidden md:block">
                  <div className="h-8 w-8 rounded-full bg-secondary border-4 border-white shadow-lg"></div>
                </div>

                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? "md:rtl" : ""}`}>
                  <div className={`${index % 2 !== 0 ? "md:text-right" : ""}`}>
                    <div className="inline-block bg-primary-100 text-primary px-4 py-1 rounded-full text-sm font-bold mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-primary-800">{milestone.title}</h3>
                    <p className="text-muted-foreground max-w-md">{milestone.description}</p>
                  </div>

                  <div className={`${index % 2 !== 0 ? "md:order-first" : ""}`}>
                    <div className="rounded-xl overflow-hidden shadow-xl">
                      <img
                        src={milestone.image || "/placeholder.svg"}
                        alt={milestone.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

