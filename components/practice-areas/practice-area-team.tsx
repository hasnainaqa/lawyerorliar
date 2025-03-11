import { Linkedin, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface TeamMember {
  name: string
  position: string
  image: string
  bio: string
}

interface PracticeAreaTeamProps {
  title: string
  teamMembers: TeamMember[]
}

export default function PracticeAreaTeam({ title, teamMembers }: PracticeAreaTeamProps) {
  return (
    <section id="team" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80')] bg-fixed opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary-100/30 px-4 py-1.5">
            <span className="text-xs font-medium text-primary-800">Meet Our Experts</span>
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary-800">
              Our {title} Team
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experienced attorneys dedicated to your success
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-xl group hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                  {/* Social icons */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-secondary text-sm">{member.position}</p>
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2">
                    {[
                      { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn" },
                      { icon: <Mail className="h-4 w-4" />, label: "Email" },
                    ].map((social, idx) => (
                      <Link
                        key={idx}
                        href="#"
                        className="bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
                      >
                        {social.icon}
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

