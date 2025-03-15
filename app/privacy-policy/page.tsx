import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy | Lawyer or Liar - Expert Legal Help",
  description:
    "Our privacy policy outlines how we collect, use, and protect your personal information when you use our legal services or visit our website.",
  keywords: "privacy policy, data protection, legal privacy, confidentiality, client information",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <Button variant="ghost" className="mb-4" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold font-serif text-primary-800 mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground">Last Updated: March 14, 2025</p>
        </div>

        <div className="prose dark:prose-invert max-w-4xl">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Introduction</h2>
            <p>
              At Lawyer or Liar ("we," "our," or "us"), we respect your privacy and are committed to protecting your
              personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our legal services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access the site or use our services. By accessing our website or engaging our services, you
              consent to the collection, use, and disclosure of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-bold text-primary-700 mb-3">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Contact us through our website</li>
              <li>Schedule a consultation</li>
              <li>Engage our legal services</li>
              <li>Subscribe to our newsletter</li>
              <li>Respond to a survey or fill out a form</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name, email address, phone number, and mailing address</li>
              <li>Information relevant to your legal matter</li>
              <li>Payment information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-bold text-primary-700 mb-3">Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages you visit</li>
              <li>Time and date of your visit</li>
              <li>Time spent on pages</li>
              <li>Referral source</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our legal services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you about our services, updates, and other information</li>
              <li>Process transactions and send related information including confirmations and invoices</li>
              <li>Find and prevent fraud</li>
              <li>For compliance with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Attorney-Client Privilege and Confidentiality</h2>
            <p>
              Information shared within the context of an attorney-client relationship is subject to attorney-client
              privilege and professional confidentiality obligations. We maintain strict confidentiality of all client
              information in accordance with applicable legal and ethical standards.
            </p>
            <p>
              The information covered by attorney-client privilege is separate from and in addition to the protections
              described in this Privacy Policy. In the event of any conflict between this Privacy Policy and our
              professional obligations of confidentiality, our professional obligations will prevail.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Disclosure of Your Information</h2>
            <p>We may share your personal information in the following situations:</p>
            <ul>
              <li>
                <strong>Legal Requirements:</strong> To comply with applicable law, regulation, legal process, or
                governmental request
              </li>
              <li>
                <strong>Consent:</strong> With your explicit consent to share specific information
              </li>
              <li>
                <strong>Service Providers:</strong> With third-party vendors, consultants, and other service providers
                who need access to such information to carry out work on our behalf
              </li>
              <li>
                <strong>Professional Advisors:</strong> With other professionals when necessary for your legal
                representation, with your consent
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of
                company assets, financing, or acquisition of all or a portion of our business
              </li>
              <li>
                <strong>Protection:</strong> If we believe disclosure is necessary to protect our rights, your safety,
                or the safety of others
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We may use cookies, web beacons, tracking pixels, and other tracking technologies to collect information
              about your browsing activities on our website. This helps us improve your experience and our website's
              performance.
            </p>
            <p>
              You can set your browser to refuse all or some browser cookies or to alert you when cookies are being
              sent. However, if you disable or refuse cookies, some parts of our website may be inaccessible or not
              function properly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the
              security of any personal information we process. However, despite our safeguards, no security system is
              impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that information you
              supply will not be intercepted while being transmitted to us over the Internet.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this
              Privacy Policy, or as needed to comply with our legal obligations, resolve disputes, and enforce our legal
              agreements and policies.
            </p>
            <p>
              Client files and information are retained in accordance with applicable legal and ethical requirements
              regarding record retention for legal services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li>The right to access the personal information we have about you</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to request the deletion of your personal information</li>
              <li>The right to restrict or object to the processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time, where we rely on consent to process your information</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided in the "Contact Us"
              section below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Children's Privacy</h2>
            <p>
              Our website and services are not directed to individuals under the age of 18. We do not knowingly collect
              personal information from children under 18. If you become aware that a child has provided us with
              personal information, please contact us. If we become aware that we have collected personal information
              from a child under 18 without verification of parental consent, we will take steps to remove that
              information from our servers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
              Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on
              this page.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <ul>
              <li>Email: [Your Email]</li>
              <li>Phone: +[Your Contact Number]</li>
              <li>Address: [Your Office Address]</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}

