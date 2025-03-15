import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service | Lawyer or Liar - Expert Legal Help",
  description:
    "Our terms of service outline the conditions for using our legal services and website, including your rights and responsibilities as a client or visitor.",
  keywords: "terms of service, legal terms, conditions, client agreement, website terms",
}

export default function TermsOfServicePage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <Button variant="ghost" className="mb-4" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold font-serif text-primary-800 mb-6">Terms of Service</h1>
          <p className="text-muted-foreground">Last Updated: March 14, 2025</p>
        </div>

        <div className="prose dark:prose-invert max-w-4xl">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Introduction</h2>
            <p>
              Welcome to Lawyer or Liar ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to
              and use of our website and legal services. Please read these Terms carefully before accessing or using our
              services.
            </p>
            <p>
              By accessing our website or engaging our services, you agree to be bound by these Terms. If you disagree
              with any part of the Terms, you may not access our website or use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Use of Website</h2>

            <h3 className="text-xl font-bold text-primary-700 mb-3">License to Use</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our
              website for personal, non-commercial purposes. This license does not include:
            </p>
            <ul>
              <li>Modifying or copying our website materials</li>
              <li>Using the website for any commercial purpose or public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated
              by us at any time.
            </p>

            <h3 className="text-xl font-bold text-primary-700 mb-3">Accuracy of Information</h3>
            <p>
              The materials on our website are provided on an 'as is' basis. While we strive to keep the information up
              to date and correct, we make no representations or warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability, or availability of the website or the information,
              products, services, or related graphics contained on the website for any purpose.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Legal Services</h2>

            <h3 className="text-xl font-bold text-primary-700 mb-3">Attorney-Client Relationship</h3>
            <p>
              Visiting our website or contacting us does not create an attorney-client relationship. An attorney-client
              relationship is only established after we have:
            </p>
            <ul>
              <li>Confirmed that we can represent you</li>
              <li>Determined that there are no conflicts of interest</li>
              <li>Agreed to the terms of representation</li>
              <li>Executed a written engagement agreement</li>
            </ul>
            <p>
              Until an attorney-client relationship is established, any information you provide to us is not protected
              by attorney-client privilege or confidentiality.
            </p>

            <h3 className="text-xl font-bold text-primary-700 mb-3">Legal Advice</h3>
            <p>
              The information provided on our website is for general informational purposes only and does not constitute
              legal advice. The law is complex and constantly changing, and the information may not be applicable to
              your specific situation. You should not act or refrain from acting based on any information on this
              website without seeking professional legal advice.
            </p>

            <h3 className="text-xl font-bold text-primary-700 mb-3">Service Engagement</h3>
            <p>
              When you engage our legal services, the specific terms of our representation, including scope, fees, and
              other important matters, will be outlined in a separate engagement agreement. That agreement, not these
              Terms, will govern the attorney-client relationship.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Fees and Payment</h2>
            <p>
              Our fees for legal services vary depending on the nature and complexity of your matter. Fee arrangements
              will be clearly outlined in your engagement agreement before we begin work on your behalf.
            </p>
            <p>
              Payment terms, including timing and accepted methods of payment, will also be specified in your engagement
              agreement. We may require an advance retainer for certain matters, which will be held in a client trust
              account and applied to fees and costs as they are incurred.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Intellectual Property</h2>
            <p>
              All content on our website, including but not limited to text, graphics, logos, images, audio clips,
              digital downloads, data compilations, and software, is the property of Lawyer or Liar or its content
              suppliers and is protected by international copyright laws.
            </p>
            <p>
              Our trademarks and trade dress may not be used in connection with any product or service without our prior
              written consent.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">User Conduct</h2>
            <p>When using our website or services, you agree not to:</p>
            <ul>
              <li>
                Use our website in any way that violates any applicable local, state, national, or international law or
                regulation
              </li>
              <li>
                Impersonate or attempt to impersonate our firm, a firm employee, another user, or any other person or
                entity
              </li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              <li>Use the website in any manner that could disable, overburden, damage, or impair the site</li>
              <li>
                Use any robot, spider, or other automatic device, process, or means to access the website for any
                purpose
              </li>
              <li>
                Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or
                technologically harmful
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Lawyer or Liar shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including but not limited to, damages for loss of
              profits, goodwill, use, data, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of or inability to access or use our website or services</li>
              <li>Any conduct or content of any third party on the website</li>
              <li>Any content obtained from the website</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p>
              This limitation of liability is part of the basis of the bargain between us and you and shall apply to all
              claims of liability, even if we have been informed of the possibility of such damages.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Lawyer or Liar, its affiliates, licensors, and service
              providers, and its and their respective officers, directors, employees, contractors, agents, licensors,
              suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards,
              losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your
              violation of these Terms or your use of the website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Governing Law and Jurisdiction</h2>
            <p>
              These Terms and your use of the website and our services shall be governed by and construed in accordance
              with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
            </p>
            <p>
              Any legal suit, action, or proceeding arising out of, or related to, these Terms or the website shall be
              instituted exclusively in the courts of [Your Jurisdiction]. You waive any and all objections to the
              exercise of jurisdiction over you by such courts and to venue in such courts.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Dispute Resolution</h2>
            <p>
              Any dispute arising from or relating to these Terms or our services shall first be attempted to be
              resolved through good faith negotiations. If such negotiations are unsuccessful, all disputes shall be
              resolved by binding arbitration in accordance with the rules of [Relevant Arbitration Authority] then in
              effect.
            </p>
            <p>
              The arbitration shall be conducted in [Your City, State/Province], and judgment on the arbitration award
              may be entered into any court having jurisdiction thereof. Either party may seek any interim or
              preliminary relief from a court of competent jurisdiction necessary to protect its rights pending the
              completion of arbitration.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Severability</h2>
            <p>
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and
              interpreted to accomplish the objectives of such provision to the greatest extent possible under
              applicable law, and the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Waiver</h2>
            <p>
              No waiver of any term or condition set forth in these Terms shall be deemed a further or continuing waiver
              of such term or condition or a waiver of any other term or condition, and any failure to assert a right or
              provision under these Terms shall not constitute a waiver of such right or provision.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Changes to Terms</h2>
            <p>
              We may revise these Terms at any time without notice. By using this website, you are agreeing to be bound
              by the current version of these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
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

