import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Printer,
  MessageSquare,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"
import Link from "next/link"

interface ContactInfoProps {
  id?: string
}

export default function ContactInfo({ id }: ContactInfoProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold font-serif text-primary-800 mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                We are here to provide you with professional legal guidance. Reach out to us through any of the
                following channels.
              </p>
            </div>

            {/* Office Location */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary-100 p-3 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary-800 mb-2">Office Location</h3>
                  <p className="text-muted-foreground mb-1">[Your Office Address]</p>
                  <p className="text-muted-foreground">Landmark: [Nearby Landmark for Easy Navigation]</p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary-100 p-3 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary-800 mb-2">Office Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p className="flex justify-between">
                      <span>Monday – Friday:</span>
                      <span className="font-medium">9:00 AM – 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">10:00 AM – 2:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary-100 p-3 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="space-y-4 w-full">
                  <div>
                    <h3 className="font-semibold text-lg text-primary-800 mb-2">Contact Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-secondary" />
                      <span className="text-muted-foreground">[Your Email]</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-secondary" />
                      <span className="text-muted-foreground">+[Your Contact Number]</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Printer className="h-5 w-5 text-secondary" />
                      <span className="text-muted-foreground">[Your Fax Number]</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-secondary" />
                      <span className="text-muted-foreground">[Your WhatsApp Number]</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-secondary" />
                      <span className="text-muted-foreground">[Your Website URL]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>            
          </div>

          {/* Why Contact Us */}
          <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary/30 to-transparent rounded-bl-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-700/50 to-transparent rounded-tr-full blur-3xl opacity-20"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold font-serif mb-6">Why Contact Us?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Fast & Reliable Legal Assistance",
                    description:
                      "Our team responds promptly to all inquiries, ensuring you receive timely legal guidance when you need it most.",
                  },
                  {
                    title: "Confidential & Professional Consultation",
                    description:
                      "We maintain strict confidentiality for all client matters, providing a secure environment to discuss your legal concerns.",
                  },
                  {
                    title: "Experienced Legal Experts",
                    description:
                      "Our attorneys bring decades of combined experience across multiple legal fields, offering knowledgeable guidance for your situation.",
                  },
                  {
                    title: "Tailored Solutions",
                    description:
                      "We develop customized legal strategies aligned with your specific needs and objectives, not one-size-fits-all approaches.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="rounded-full bg-secondary/20 p-1 h-6 w-6 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-1">{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xl font-semibold">Call Now or Fill Out the Form to Get Started!</p>
                <p className="text-2xl font-bold text-secondary mt-2">+[Your Contact Number]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

