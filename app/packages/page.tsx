import type { Metadata } from "next"
import PackagesHero from "@/components/packages/packages-hero"
import PackagesList from "@/components/packages/packages-list"
import PackagesTestimonials from "@/components/packages/packages-testimonials"
import CTA from "@/components/sections/cta" // This is the correct way to import a default export

export const metadata: Metadata = {
  title: "Legal Service Packages | Affordable & Transparent Legal Fees",
  description:
    "Browse our range of affordable legal service packages designed for individuals and businesses. Transparent pricing with no hidden fees.",
  openGraph: {
    title: "Legal Service Packages | Affordable & Transparent Legal Fees",
    description:
      "Browse our range of affordable legal service packages designed for individuals and businesses. Transparent pricing with no hidden fees.",
    type: "website",
  },
}

export default function PackagesPage() {
  return (
    <main>
      <PackagesHero />
      <PackagesList />
      <PackagesTestimonials />
      <CTA />
    </main>
  )
}

