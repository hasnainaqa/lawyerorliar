import { CheckCircle, Shield, Award, Clock, Users, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Expert Legal Representation",
    description: "Experienced and trusted advocate with a proven track record of success in complex legal matters.",
    color: "bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Client-Focused Approach",
    description: "Personalized legal solutions tailored to your specific needs, circumstances, and objectives.",
    color: "bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-200",
    iconColor: "text-purple-600",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Transparent & Honest Advice",
    description: "Ethical and confidential legal support with clear communication throughout your case.",
    color: "bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-200",
    iconColor: "text-green-600",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Strong Track Record of Success",
    description: "Proven results in complex cases across multiple practice areas and jurisdictions.",
    color: "bg-gradient-to-br from-amber-500/20 to-amber-600/20 border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Comprehensive Legal Solutions",
    description: "Full-service legal support covering multiple areas of law under one roof for your convenience.",
    color: "bg-gradient-to-br from-red-500/20 to-red-600/20 border-red-200",
    iconColor: "text-red-600",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Cost-Effective & Efficient",
    description: "Providing affordable and timely resolutions without compromising on quality or results.",
    color: "bg-gradient-to-br from-teal-500/20 to-teal-600/20 border-teal-200",
    iconColor: "text-teal-600",
  },
]

export default function ServiceFeatures() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-primary-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-primary-800"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary/20 to-transparent rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-700/30 to-transparent rounded-tr-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-medium text-white">Why Choose Us</span>
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif">
              Why Choose Our Legal Services?
            </h2>
            <p className="text-white/70 md:text-xl/relaxed">
              We are committed to providing exceptional legal representation with integrity and dedication
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "rounded-xl p-8 border border-white/10 transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:border-white/20 hover:translate-y-[-5px]",
                feature.color,
              )}
            >
              <div className="flex flex-col h-full">
                <div className={cn("rounded-full bg-white/10 p-3 w-fit mb-6", feature.iconColor)}>{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70 flex-grow">{feature.description}</p>

                {/* Decorative element */}
                <div className="mt-6 h-1 w-12 bg-secondary/70 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { value: "25+", label: "Years Experience" },
            { value: "1000+", label: "Cases Won" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "10+", label: "Practice Areas" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

