import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "How can I book a consultation?",
    answer:
      "You can book by calling +[Your Contact Number] or filling out our contact form on the website. We offer both in-person and virtual consultations for your convenience.",
  },
  {
    question: "What areas of law do you specialize in?",
    answer:
      "We cover civil, criminal, taxation, corporate, and family law. Our team has extensive experience in each of these areas and can provide comprehensive legal support.",
  },
  {
    question: "Is my case information confidential?",
    answer:
      "Absolutely. We follow strict confidentiality policies and adhere to attorney-client privilege. Your information and case details are kept completely private and secure.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Any relevant legal documents and a summary of your case. This includes contracts, correspondence, court notices, or any other paperwork related to your legal matter.",
  },
]

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-5"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary-100/30 px-4 py-1.5">
            <span className="text-xs font-medium text-primary-800">Common Questions</span>
          </div>
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-serif text-primary-800">
              FAQs – Your Legal Questions Answered
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Common questions about our legal services
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-2xl p-8 border border-primary-100">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border-b border-primary-100 last:border-0"
              >
                <AccordionTrigger className="text-lg font-medium py-6 text-primary-800 hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

