import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactCtaProps {
  id?: string;
}

export default function ContactCta({ id }: ContactCtaProps) {
  return (
    <section
      id={id}
      className="py-16 md:py-24 bg-gradient-to-r from-primary-900 to-primary-800 text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary/30 to-transparent rounded-bl-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-700/50 to-transparent rounded-tr-full blur-3xl opacity-20"></div>

      {/* Animated dots pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-2 h-2 bg-secondary rounded-full top-1/3 right-1/4 animate-pulse animation-delay-200"></div>
        <div className="absolute w-2 h-2 bg-white rounded-full bottom-1/4 left-1/3 animate-pulse animation-delay-400"></div>
        <div className="absolute w-2 h-2 bg-secondary rounded-full bottom-1/3 right-1/3 animate-pulse"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Ready to Get Expert Legal Assistance?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our team of experienced attorneys is ready to help you navigate your
            legal challenges. Contact us today to schedule a consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="rounded-full gap-1 px-8 bg-secondary text-primary hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all duration-300 hover:translate-y-[-2px] text-lg"
            >
              <a
                href="https://wa.me/923017700780"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation</a> <ArrowRight className="h-5 w-5 ml-1" />
              
            </Button>

            <div className="flex items-center justify-center gap-3 text-lg">
              <Phone className="h-6 w-6 text-secondary animate-pulse" />
              <span className="font-semibold">
                <a href="https://wa.me/923017700780">
                  Call us:{" "}
                  <span className="text-secondary">+[Your Contact Number]</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
