interface PracticeAreaOverviewProps {
  title: string
  overview: string
}

export default function PracticeAreaOverview({ title, overview }: PracticeAreaOverviewProps) {
  return (
    <section id="overview" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80')] bg-fixed opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary-100/30 px-4 py-1.5 mb-6">
            <span className="text-xs font-medium text-primary-800">About {title}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-primary-800">Overview</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed">{overview}</p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "1000+", label: "Cases Handled" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Client Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

