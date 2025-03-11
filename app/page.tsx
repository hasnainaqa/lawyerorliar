import Hero from "@/components/sections/hero"
import Expertise from "@/components/sections/expertise"
import WhyChooseUs from "@/components/sections/why-choose-us"
import Testimonials from "@/components/sections/testimonials"
import Consultation from "@/components/sections/consultation"
import Process from "@/components/sections/process"
import Faq from "@/components/sections/faq"
import Cta from "@/components/sections/cta"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <Expertise />
        <Testimonials />
        <Consultation />
        <Process />
        <Faq />
        <Cta />
      </main>
    </div>
  )
}

