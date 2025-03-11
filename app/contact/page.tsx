import type { Metadata } from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactInfo from "@/components/contact/contact-info"
import ContactForm from "@/components/contact/contact-form"
import ContactMap from "@/components/contact/contact-map"
import ContactCta from "@/components/contact/contact-cta"

export const metadata: Metadata = {
  title: "Contact Us | Lawyer or Liar - Expert Legal Assistance",
  description:
    "Get in touch with our legal experts for professional assistance with your legal matters. Schedule a consultation today.",
  keywords: "legal consultation, lawyer contact, attorney contact, legal help, law firm contact",
}

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ContactHero id="contact-hero" />
      <ContactInfo id="contact-info" />
      <ContactForm />
      <ContactCta id="contact-cta" />
    </main>
  )
}

