import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  slug: string
  features: string[]
}

export default function ServiceCard({ icon, title, description, slug, features }: ServiceCardProps) {
  return (
    <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      <CardContent className="p-8">
        <div className="rounded-full bg-primary-100 p-4 text-primary mb-6 w-16 h-16 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 text-primary-800 font-serif">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-primary-800 mb-3">Key Services:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm">
                <div className="rounded-full bg-secondary/20 p-0.5 mr-2">
                  <svg className="h-2 w-2 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Link href={`/services/${slug}`}>
          <Button
            variant="outline"
            className="w-full rounded-full group-hover:bg-primary group-hover:text-white border-primary text-primary transition-colors"
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

