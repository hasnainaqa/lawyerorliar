import PracticeAreaHero from "@/components/practice-areas/practice-area-hero"
import PracticeAreaOverview from "@/components/practice-areas/practice-area-overview"
import PracticeAreaServices from "@/components/practice-areas/practice-area-services"
import PracticeAreaProcess from "@/components/practice-areas/practice-area-process"
import PracticeAreaFaq from "@/components/practice-areas/practice-area-faq"
import PracticeAreaCta from "@/components/practice-areas/practice-area-cta"
import PracticeAreaTeam from "@/components/practice-areas/practice-area-team"

export default function CivilLawPage() {
  const practiceArea = {
    title: "Civil Law",
    slug: "civil-law",
    description:
      "Expert legal representation for all civil matters including property disputes, contracts, and personal injury claims.",
    heroImage:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overview:
      "Our civil law practice provides comprehensive legal solutions for individuals and businesses facing disputes related to contracts, property, personal injury, and other civil matters. With decades of experience, our team has successfully represented clients in complex civil litigation, helping them achieve favorable outcomes through strategic legal advocacy.",
    services: [
      {
        title: "Contract Disputes",
        description:
          "Resolution of disputes arising from contracts, including breach of contract claims, contract interpretation, and enforcement of contractual rights.",
      },
      {
        title: "Property Disputes",
        description:
          "Legal representation in property-related conflicts, including boundary disputes, easement issues, and property damage claims.",
      },
      {
        title: "Personal Injury Claims",
        description:
          "Advocacy for victims of accidents and negligence, seeking compensation for injuries, medical expenses, lost wages, and pain and suffering.",
      },
      {
        title: "Civil Litigation",
        description:
          "Representation in court proceedings for various civil matters, including preparation of legal documents, evidence gathering, and courtroom advocacy.",
      },
      {
        title: "Debt Recovery",
        description:
          "Legal assistance in recovering outstanding debts through demand letters, negotiation, and court proceedings when necessary.",
      },
      {
        title: "Consumer Protection",
        description:
          "Defense of consumer rights against unfair business practices, product liability, and fraudulent activities.",
      },
    ],
    process: [
      {
        title: "Initial Consultation",
        description:
          "We begin with a thorough discussion of your civil matter, gathering essential information and understanding your objectives.",
      },
      {
        title: "Case Evaluation",
        description:
          "Our legal team analyzes the facts, applicable laws, and potential strategies to determine the best approach for your case.",
      },
      {
        title: "Legal Strategy Development",
        description: "We develop a customized legal strategy tailored to your specific situation and desired outcomes.",
      },
      {
        title: "Negotiation & Settlement",
        description:
          "When appropriate, we engage in negotiations to reach a favorable settlement without the need for lengthy litigation.",
      },
      {
        title: "Litigation Representation",
        description:
          "If a settlement cannot be reached, we provide strong advocacy in court, presenting your case with compelling arguments and evidence.",
      },
      {
        title: "Resolution & Follow-up",
        description:
          "After achieving a resolution, we ensure proper implementation of the judgment or settlement and address any follow-up matters.",
      },
    ],
    faqs: [
      {
        question: "How long do I have to file a civil lawsuit?",
        answer:
          "The time limit (statute of limitations) varies depending on the type of case. For most civil matters, it ranges from 1-6 years from the date of the incident or discovery of harm. We recommend consulting with our attorneys as soon as possible to ensure your claim is filed within the appropriate timeframe.",
      },
      {
        question: "What is the difference between civil and criminal law?",
        answer:
          "Civil law deals with disputes between individuals or organizations, seeking compensation or specific performance. Criminal law involves offenses against the state or society as a whole, with potential penalties including imprisonment. Our firm specializes in civil matters, helping clients resolve disputes and protect their rights.",
      },
      {
        question: "How much will my civil case cost?",
        answer:
          "Legal fees vary based on the complexity of your case, the time required, and the specific legal services needed. We offer transparent fee structures and will discuss costs during your initial consultation. Some cases may be handled on a contingency basis, where fees are only collected if we win your case.",
      },
      {
        question: "Can most civil cases be settled out of court?",
        answer:
          "Yes, the majority of civil cases are resolved through negotiation, mediation, or settlement before reaching trial. Our attorneys are skilled negotiators who strive to achieve favorable settlements while being fully prepared to litigate if necessary to protect your interests.",
      },
      {
        question: "What documents should I bring to my first meeting?",
        answer:
          "For your initial consultation, please bring any relevant contracts, correspondence, photographs, medical records, police reports, and other documents related to your case. The more information you provide, the better we can assess your situation and develop an effective strategy.",
      },
    ],
    teamMembers: [
      {
        name: "Israr Ahmad",
        position: "Senior Civil Litigation Attorney",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        bio: "With over 25 years of experience in civil litigation, Israr has successfully represented clients in complex contract disputes, property matters, and personal injury claims.",
      },
      {
        name: "Sarah Johnson",
        position: "Civil Law Specialist",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        bio: "Sarah specializes in property disputes and consumer protection cases, with a strong track record of favorable settlements and courtroom victories.",
      },
    ],
  }

  return (
    <main>
      <PracticeAreaHero
        title={practiceArea.title}
        description={practiceArea.description}
        backgroundImage={practiceArea.heroImage}
      />
      <PracticeAreaOverview title={practiceArea.title} overview={practiceArea.overview} />
      <PracticeAreaServices title={practiceArea.title} services={practiceArea.services} />
      <PracticeAreaProcess title={practiceArea.title} process={practiceArea.process} />
      <PracticeAreaFaq title={practiceArea.title} faqs={practiceArea.faqs} />
      <PracticeAreaCta title={practiceArea.title} />
    </main>
  )
}

