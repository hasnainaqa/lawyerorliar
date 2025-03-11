import { Card, CardContent } from "@/components/ui/card"
import { Check, Phone, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Define the package category type
type PackageCategory = {
  title: string
  icon?: string
  description?: string
  packages: {
    name: string
    price: string
    popular?: boolean
  }[]
  note?: string
  color?: string
}

// Define all package categories
const packageCategories: PackageCategory[] = [
  {
    title: "Consultation Packages",
    packages: [
      { name: "Basic Legal Consultation (30-Minute Session)", price: "Free" },
      { name: "Comprehensive Legal Consultation (1-Hour Session)", price: "Rs. 5000", popular: true },
    ],
    note: "Book a consultation today to discuss your legal matters with an expert.",
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    title: "Civil Law Packages",
    packages: [
      { name: "Property Dispute Resolution", price: "Starting from Rs. 35,000" },
      { name: "Contract Drafting & Review", price: "Rs. 20,000", popular: true },
      { name: "Consumer Rights Cases", price: "Rs. 25,000" },
      { name: "Torts & Personal Injury Claims", price: "Rs. 40,000" },
    ],
    note: "Pricing may vary based on case complexity.",
    color: "from-indigo-500/20 to-indigo-600/20",
  },
  {
    title: "Criminal Law Packages",
    packages: [
      { name: "Bail Application & Pre-Trial Defense", price: "Starting from Rs. 50,000" },
      { name: "Criminal Case Representation", price: "Rs. 75,000 – Rs. 150,000", popular: true },
      { name: "Cyber Crime & Fraud Cases", price: "Rs. 80,000" },
      { name: "Appeals & Revisions", price: "Starting from Rs. 90,000" },
    ],
    note: "Legal defense fees depend on case severity.",
    color: "from-red-500/20 to-red-600/20",
  },
  {
    title: "Taxation Law Packages",
    packages: [
      { name: "Income Tax Return Filing", price: "Rs. 10,000", popular: true },
      { name: "Sales Tax Registration & Compliance", price: "Rs. 15,000" },
      { name: "Tax Audit & Dispute Resolution", price: "Starting from Rs. 40,000" },
      { name: "Customs & Import Tax Handling", price: "Rs. 50,000 – Rs. 100,000" },
    ],
    note: "Expert taxation solutions for businesses & individuals.",
    color: "from-green-500/20 to-green-600/20",
  },
  {
    title: "Corporate & Business Law Packages",
    packages: [
      {
        name: "Company Registration (Private Limited / Sole Proprietorship)",
        price: "Rs. 30,000 – Rs. 50,000",
        popular: true,
      },
      { name: "Contract Drafting for Businesses", price: "Rs. 25,000" },
      { name: "Mergers & Acquisitions Legal Assistance", price: "Custom Pricing" },
      { name: "Corporate Dispute Resolution", price: "Starting from Rs. 100,000" },
    ],
    note: "Legal support for startups and established businesses.",
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    title: "Family Law Packages",
    packages: [
      { name: "Divorce & Khula Case Handling", price: "Rs. 35,000", popular: true },
      { name: "Child Custody & Support Cases", price: "Starting from Rs. 50,000" },
      { name: "Alimony & Spousal Support Legal Advice", price: "Rs. 30,000" },
      { name: "Will & Inheritance Planning", price: "Rs. 20,000 – Rs. 60,000" },
    ],
    note: "Compassionate legal support for family matters.",
    color: "from-pink-500/20 to-pink-600/20",
  },
  {
    title: "Employment & Labor Law Packages",
    packages: [
      { name: "Employment Contract Drafting", price: "Rs. 15,000", popular: true },
      { name: "Workplace Dispute Resolution", price: "Starting from Rs. 40,000" },
      { name: "Wage & Compensation Claims", price: "Rs. 30,000" },
      { name: "Employer Compliance & Legal Advisory", price: "Rs. 50,000" },
    ],
    note: "Protecting employee & employer rights.",
    color: "from-amber-500/20 to-amber-600/20",
  },
  {
    title: "Immigration & Visa Law Packages",
    packages: [
      { name: "Work Visa & Permit Applications", price: "Rs. 25,000 – Rs. 50,000", popular: true },
      { name: "Deportation & Asylum Cases", price: "Starting from Rs. 100,000" },
      { name: "Citizenship & Naturalization Legal Assistance", price: "Rs. 80,000" },
    ],
    note: "Get expert guidance on visa and immigration laws.",
    color: "from-cyan-500/20 to-cyan-600/20",
  },
  {
    title: "Legal Education & Exam Preparation",
    packages: [
      { name: "LAT/GAT Preparation", price: "Rs. 20,000 (Per Session Package)" },
      { name: "Civil Judge Exam Coaching", price: "Rs. 40,000 – Rs. 80,000", popular: true },
      { name: "ASI & Law Enforcement Exam Preparation", price: "Rs. 30,000 – Rs. 50,000" },
    ],
    note: "Expert coaching to help you succeed in legal careers.",
    color: "from-orange-500/20 to-orange-600/20",
  },
]

export default function PackagesList() {
  return (
    <section id="packages" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-playfair text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            Our Legal Service Packages
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-secondary"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Choose from our range of affordable legal packages tailored to your specific needs. All packages include
            professional legal assistance from our experienced team.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packageCategories.map((category, index) => (
            <div key={index} className="group relative">
              {/* Card with gradient border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 p-[1px] opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-none"></div>

              <Card className="relative h-full overflow-hidden rounded-2xl border-0 bg-white shadow-lg shadow-black/5 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 dark:bg-gray-900">
                {/* Gradient background header */}
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 h-24 bg-gradient-to-r opacity-80",
                    category.color || "from-primary/20 to-primary/30",
                  )}
                ></div>

                <CardContent className="relative z-10 flex h-full flex-col p-0">
                  {/* Header */}
                  <div className="space-y-2 p-6 pb-4 pt-8">
                    <h3 className="font-playfair text-2xl font-bold text-primary">{category.title}</h3>
                  </div>

                  {/* Package list */}
                  <div className="flex-1 space-y-1 px-6">
                    {category.packages.map((pkg, pkgIndex) => (
                      <div
                        key={pkgIndex}
                        className={cn(
                          "flex items-start gap-3 rounded-lg p-3 transition-colors",
                          pkg.popular ? "bg-primary/5" : "hover:bg-gray-50 dark:hover:bg-gray-800/50",
                        )}
                      >
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <p className="font-medium">{pkg.name}</p>
                            {pkg.popular && (
                              <span className="flex items-center gap-1 rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
                                <Star className="h-3 w-3" /> Popular
                              </span>
                            )}
                          </div>
                          <p className="mt-1 font-semibold text-primary">{pkg.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 space-y-4 p-6">
                    {category.note && (
                      <div className="rounded-lg bg-muted p-3 text-sm">
                        <p className="text-muted-foreground">{category.note}</p>
                      </div>
                    )}

                    {category.title === "Consultation Packages" ? (
                      <Link
                        href="/contact"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-center font-medium text-white shadow-md shadow-primary/10 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                      >
                        <Phone className="h-4 w-4" /> Book a Consultation
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary/20 bg-white px-4 py-3 text-center font-medium text-primary shadow-sm transition-all hover:bg-primary/5 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-800/80"
                      >
                        Inquire <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-20 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-[1px] shadow-xl shadow-primary/10">
          <div className="rounded-2xl bg-white p-8 dark:bg-gray-900 md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-5">
              <div className="md:col-span-3">
                <h3 className="font-playfair text-2xl font-bold text-primary md:text-3xl">
                  Need a Custom Legal Package?
                </h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  We understand that legal needs can vary. Contact us to discuss your specific requirements, and we'll
                  create a tailored legal package that fits your situation and budget.
                </p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
                >
                  Contact for Custom Package
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

