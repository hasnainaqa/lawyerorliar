import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="bg-primary-900 text-white py-16 md:py-20 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800/95"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Discuss Your Legal Needs?</h2>
          <p className="text-xl text-white/80 mb-8">
            Schedule a consultation with our experienced legal team today and take the first step toward resolving your
            legal matters.
          </p>

          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary rounded-full" asChild>
            <Link href="/contact">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Also export as default for backward compatibility
export default CTA

