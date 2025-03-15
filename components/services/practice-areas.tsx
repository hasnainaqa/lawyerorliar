"use client"

import {
  Scale,
  FileText,
  Briefcase,
  Building,
  Users,
  GraduationCap,
  Plane,
  BookOpen,
  MessageSquare,
  Home,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"

const practiceAreas = [
  {
    id: "civil-law",
    icon: <Scale className="h-12 w-12" />,
    title: "Civil Law",
    description:
      "We provide expert legal assistance in civil matters, ensuring fair resolutions and strong representation.",
    services: [
      "Property Disputes – Legal assistance in ownership conflicts, land issues, and property division.",
      "Breach of Contract – Protecting your rights in business and personal agreements.",
      "Consumer Rights Protection – Filing complaints and representing clients in consumer courts.",
      "Torts & Personal Injury – Compensation claims for damages and negligence.",
    ],
    color: "from-blue-500/20 to-blue-600/20",
    iconBg: "bg-blue-100 text-blue-600 group-hover:bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    category: "Civil",
  },
  {
    id: "criminal-law",
    icon: <FileText className="h-12 w-12" />,
    title: "Criminal Law",
    description: "A strong defense is crucial in criminal matters. We specialize in:",
    services: [
      "Bail & Pre-Trial Proceedings – Legal representation in bail applications and hearings.",
      "Criminal Defense – Strategic defense for clients facing criminal charges.",
      "Appeals & Revisions – Challenging unfair verdicts and filing appeals.",
      "Cyber Crime & Fraud Cases – Legal action in digital fraud, hacking, and online offenses.",
    ],
    color: "from-red-500/20 to-red-600/20",
    iconBg: "bg-red-100 text-red-600 group-hover:bg-red-600",
    image:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Criminal",
  },
  {
    id: "taxation-law",
    icon: <Briefcase className="h-12 w-12" />,
    title: "Taxation Law",
    description: "Navigating taxation laws requires expert knowledge. We provide services in:",
    services: [
      "Income Tax Filing & Disputes – Assistance with tax returns and dispute resolution.",
      "Sales Tax & Corporate Tax Compliance – Ensuring businesses meet tax obligations.",
      "Tax Appeals & Litigation – Representation in tax disputes and appeals.",
      "Customs & Import Tax Issues – Handling trade-related tax matters.",
    ],
    color: "from-green-500/20 to-green-600/20",
    iconBg: "bg-green-100 text-green-600 group-hover:bg-green-600",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1111&q=80",
    category: "Taxation",
  },
  {
    id: "corporate-law",
    icon: <Building className="h-12 w-12" />,
    title: "Corporate & Business Law",
    description: "Helping businesses stay legally secure and compliant.",
    services: [
      "Business Registration & Licensing – Setting up companies, trademarks, and business licenses.",
      "Contract Drafting & Review – Ensuring legally sound business agreements.",
      "Mergers & Acquisitions – Handling legal aspects of business transactions.",
      "Corporate Dispute Resolution – Managing conflicts within organizations.",
    ],
    color: "from-purple-500/20 to-purple-600/20",
    iconBg: "bg-purple-100 text-purple-600 group-hover:bg-purple-600",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "Corporate",
  },
  {
    id: "family-law",
    icon: <Users className="h-12 w-12" />,
    title: "Family Law",
    description: "Legal guidance in sensitive family matters:",
    services: [
      "Divorce & Separation – Legal representation in contested and mutual divorces.",
      "Child Custody & Support – Protecting parental rights and ensuring fair child support.",
      "Alimony & Spousal Support – Advocating for fair financial settlements.",
      "Inheritance & Will Drafting – Legal assistance in estate planning and succession.",
    ],
    color: "from-amber-500/20 to-amber-600/20",
    iconBg: "bg-amber-100 text-amber-600 group-hover:bg-amber-600",
    image:
      "https://images.unsplash.com/photo-1536746953245-9f8a7406571f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Family",
  },
  {
    id: "employment-law",
    icon: <GraduationCap className="h-12 w-12" />,
    title: "Employment & Labor Law",
    description: "Protecting employee and employer rights in the workplace.",
    services: [
      "Employment Contracts – Drafting and reviewing labor agreements.",
      "Workplace Disputes – Handling wrongful termination and discrimination cases.",
      "Wage & Compensation Claims – Ensuring fair employee payments.",
      "Employer Compliance – Legal guidance on labor law compliance.",
    ],
    color: "from-cyan-500/20 to-cyan-600/20",
    iconBg: "bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Other",
  },
  {
    id: "immigration-vise-law",
    icon: <Plane className="h-12 w-12" />,
    title: "Immigration & Visa Law",
    description: "Expert advice and legal solutions for immigration matters.",
    services: [
      "Visa & Work Permit Applications – Guidance on obtaining work and residence permits.",
      "Deportation & Asylum Cases – Legal defense in immigration proceedings.",
      "Citizenship & Naturalization – Assisting clients in obtaining legal citizenship.",
    ],
    color: "from-indigo-500/20 to-indigo-600/20",
    iconBg: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600",
    image:
      "https://images.unsplash.com/photo-1569974644283-0f04ac1a2b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Other",
  },
  {
    id: "alternative-dispute-resolution",
    icon: <MessageSquare className="h-12 w-12" />,
    title: "Alternative Dispute Resolution",
    description: "Helping resolve conflicts efficiently outside of court.",
    services: [
      "Mediation Services – Facilitating discussions between disputing parties.",
      "Arbitration – Resolving disputes with a legally binding decision.",
      "Negotiation & Settlements – Reaching fair agreements without litigation.",
    ],
    color: "from-orange-500/20 to-orange-600/20",
    iconBg: "bg-orange-100 text-orange-600 group-hover:bg-orange-600",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Other",
  },
  {
    id: "real-estate",
    icon: <Home className="h-12 w-12" />,
    title: "Real Estate & Property Law",
    description: "Ensuring secure real estate transactions and property rights.",
    services: [
      "Property Purchase & Sale Agreements – Legal oversight of transactions.",
      "Lease & Rental Agreements – Drafting legally compliant contracts.",
      "Landlord-Tenant Disputes – Resolving conflicts fairly.",
      "Land Acquisition & Development – Legal support for real estate projects.",
    ],
    color: "from-teal-500/20 to-teal-600/20",
    iconBg: "bg-teal-100 text-teal-600 group-hover:bg-teal-600",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    category: "Other",
  },
]

export default function PracticeAreas() {
  const [activeFilter, setActiveFilter] = useState("All")
  const categories = ["All", "Civil", "Criminal", "Corporate", "Family", "Taxation", "Other"]

  const filteredAreas =
    activeFilter === "All" ? practiceAreas : practiceAreas.filter((area) => area.category === activeFilter)

  return (
    <section id="practice-areas" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2005&q=80')] bg-fixed opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary-100/30 px-4 py-1.5">
            <span className="text-xs font-medium text-primary-800">Our Practice Areas</span>
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary-800">
              Our Practice Areas
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive legal services tailored to your specific needs
            </p>
          </div>
        </div>

        {/* Practice area filters - desktop */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className={cn(
                "rounded-full",
                activeFilter === category ? "bg-primary text-white hover:bg-primary/90" : "hover:bg-primary/10",
              )}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Practice area filters - mobile */}
        <div className="md:hidden mb-8">
          <select
            className="w-full rounded-full border border-input bg-background px-4 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "All" ? "All Practice Areas" : `${category} Law`}
              </option>
            ))}
          </select>
        </div>

        {filteredAreas.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No practice areas found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAreas.map((area, index) => (
              <Card
                key={area.id}
                id={area.id}
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden bg-white relative"
              >
                {/* Card image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent h-48"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-secondary/80 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full"></div>
                  </div>
                </div>

                {/* Gradient background effect */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                    area.color,
                  )}
                ></div>

                {/* Top border animation */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                <CardHeader className="pb-4 relative z-10">
                  <div
                    className={cn(
                      "rounded-full p-4 text-primary w-fit mb-4 transition-colors duration-300",
                      area.iconBg,
                      "group-hover:text-white",
                    )}
                  >
                    {area.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary-800 font-serif group-hover:text-primary-900 transition-colors duration-300">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground mt-2 group-hover:text-foreground/80 transition-colors duration-300">
                    {area.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="mr-2 mt-1 text-secondary">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 13L9 17L19 7"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="relative z-10">
                  <Link href={`/services/${area.id}`} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 group-hover:border-primary/70"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

