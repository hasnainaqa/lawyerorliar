import { MapPin, Phone, Mail } from "lucide-react"

interface ContactMapProps {
  id?: string
}

export default function ContactMap({ id }: ContactMapProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-3xl font-bold font-serif text-primary-800">Find Us</h2>
              <p className="text-muted-foreground">
                Our office is conveniently located in the heart of the city, easily accessible by public transportation
                and with ample parking available.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-medium text-primary-800">Address</h3>
                    <p className="text-muted-foreground">[Your Office Address]</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-medium text-primary-800">Phone</h3>
                    <p className="text-muted-foreground">+[Your Contact Number]</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-secondary mt-1" />
                  <div>
                    <h3 className="font-medium text-primary-800">Email</h3>
                    <p className="text-muted-foreground">[Your Email]</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl h-[400px] relative">
              {/* Replace with actual Google Maps embed */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">Google Maps Integration</h3>
                  <p className="text-muted-foreground">
                    Replace this placeholder with your Google Maps embed code for an interactive map.
                  </p>
                </div>
              </div>

              {/* Uncomment and replace with your actual Google Maps embed code
              <iframe 
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

