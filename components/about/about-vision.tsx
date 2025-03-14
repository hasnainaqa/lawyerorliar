import { Lightbulb, Target, Award, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutVision() {
  return (
    <section id="vision" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80')] bg-fixed opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary-100/30 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium text-primary-800">Our Foundation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-primary-800">Our Vision & Mission</h2>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-primary-100/50">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary-100 p-3 text-primary">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary-800">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To ensure fairness, justice, and legal protection for all by offering transparent, ethical, and
                      result-driven legal services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-primary-100/50">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary-100 p-3 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary-800">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To provide comprehensive legal solutions that empower individuals and businesses with strong
                      representation, expert counsel, and reliable legal strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary-100/30 px-4 py-1.5 mb-6">
              <span className="text-xs font-medium text-primary-800">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-primary-800">Our Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "Experienced & Knowledgeable",
                  description: "A highly skilled legal team with extensive expertise.",
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Client-Focused Approach",
                  description: "Personalized legal solutions based on your unique needs.",
                },
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "Strong Legal Advocacy",
                  description: "Dedicated to protecting your rights and achieving favorable outcomes.",
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  title: "Confidential & Ethical",
                  description: "Ensuring trust, integrity, and professionalism.",
                },
              ].map((value, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center text-primary mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-primary-800">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary-100/30 px-4 py-1.5 mb-4">
              <span className="text-xs font-medium text-primary-800">What We Do</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-primary-800">Our Areas of Expertise</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We specialize in a wide range of legal services to meet your needs with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Civil Law",
                description: "Property disputes, contract enforcement, and personal injury claims.",
              },
              {
                title: "Criminal Law",
                description: "Defense in bail applications, trials, appeals, and cybercrime cases.",
              },
              {
                title: "Corporate & Business Law",
                description: "Business registration, contracts, mergers, and compliance.",
              },
              {
                title: "Taxation Law",
                description: "Income tax, corporate tax, customs, and compliance.",
              },
              {
                title: "Family Law",
                description: "Divorce, child custody, inheritance, and alimony cases.",
              },
              {
                title: "Employment & Labor Law",
                description: "Workplace disputes, employee rights, and employer compliance.",
              },
              {
                title: "Legal Education",
                description: "LAT/GAT, Civil Judge, ASI coaching and exam preparation.",
              },
              {
                title: "Real Estate & Property Law",
                description: "Sale & Purchase, Registration of property .",
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="h-1 w-16 bg-secondary mb-4"></div>
                  <h3 className="text-xl font-bold mb-3 text-primary-800">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

