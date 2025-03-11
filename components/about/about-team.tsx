import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const teamMembers = [
  {
    name: "Israr Ahmad",
    position: "Founder & Senior Advocate",
    bio: "With over 25 years of experience, Israr Ahmad has established himself as a leading advocate in civil and corporate law, successfully representing clients in complex legal matters.",
    specialization: "Civil & Corporate Law",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      email: "mailto:contact@example.com",
    },
  },
  {
    name: "Sarah Johnson",
    position: "Senior Criminal Law Specialist",
    bio: "Sarah brings 15 years of expertise in criminal defense, having successfully handled numerous high-profile cases and specializing in white-collar crime defense.",
    specialization: "Criminal Law & Appeals",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      email: "mailto:contact@example.com",
    },
  },
  {
    name: "Michael Chen",
    position: "Taxation Law Expert",
    bio: "Michael specializes in complex taxation matters, corporate tax planning, and representing clients in tax disputes with revenue authorities.",
    specialization: "Taxation & Corporate Law",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      email: "mailto:contact@example.com",
    },
  },
  {
    name: "Amina Patel",
    position: "Family Law Advocate",
     bio: "Amina has dedicated her career to family law, handling divorce, child custody, and domestic violence cases with compassion and strong advocacy.",
    specialization: "Family & Matrimonial Law",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
      email: "mailto:contact@example.com",
    },
  },
]

export default function AboutTeam() {
  return (
    <section id="team" className="py-20 md:py-28 lg:py-32 bg-primary-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-800"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary/20 to-transparent rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-700/30 to-transparent rounded-tr-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-medium text-white">Meet Our Experts</span>
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">Our Legal Team</h2>
            <p className="text-white/70 md:text-xl/relaxed">
              Dedicated professionals committed to providing exceptional legal representation
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/10 overflow-hidden group hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-0">
                

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-secondary text-sm">{member.position}</p>
                  </div>
                  <p className="text-white/70 text-sm mb-4">{member.bio}</p>
                  <div className="bg-white/10 px-3 py-1 rounded-full inline-block">
                    <span className="text-xs text-white/90">{member.specialization}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/70 max-w-3xl mx-auto mb-8">
            Our team of experienced legal professionals is dedicated to providing exceptional representation and
            personalized service. With diverse expertise across multiple practice areas, we're equipped to handle your
            most complex legal challenges.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors"
          >
            Explore Our Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

