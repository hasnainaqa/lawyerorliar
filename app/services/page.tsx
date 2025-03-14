import ServicesHero from "@/components/services/services-hero"
import PracticeAreas from "@/components/services/practice-areas"
import ServiceFeatures from "@/components/services/service-features"
import ServiceCta from "@/components/services/service-cta"

export const metadata = {
  title: "Legal Services - Israr Ahmad Advocate & Legal Consultant",
  description:
    "Comprehensive legal services including civil law, criminal law, taxation, corporate law, family law, and more. Expert legal representation tailored to your needs.",
  keywords:
    "legal services, civil law, criminal law, taxation law, corporate law, family law, employment law, immigration law, ADR, real estate law",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <ServicesHero />
        <PracticeAreas />
        <ServiceFeatures />
        {/* <ServiceCta /> */}
      </main>
    </div>
  )
}

