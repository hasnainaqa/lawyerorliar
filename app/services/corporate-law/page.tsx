import PracticeAreaHero from "@/components/practice-areas/practice-area-hero"
import PracticeAreaOverview from "@/components/practice-areas/practice-area-overview"
import PracticeAreaServices from "@/components/practice-areas/practice-area-services"
import PracticeAreaProcess from "@/components/practice-areas/practice-area-process"
import PracticeAreaFaq from "@/components/practice-areas/practice-area-faq"
import PracticeAreaCta from "@/components/practice-areas/practice-area-cta"

export default function CorporateLawPage() {
  const practiceArea = {
    title: "Corporate & Business Law",
    slug: "corporate-law",
    description: "Comprehensive legal solutions for businesses at every stage, from formation to growth and beyond.",
    heroImage:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    overview:
      "Our corporate and business law practice provides strategic legal guidance to businesses of all sizes, from startups to established corporations. We understand the complex legal challenges that businesses face in today's competitive environment and offer practical solutions that align with your business objectives while ensuring legal compliance and risk management.",
    services: [
      {
        title: "Business Formation & Structuring",
        description:
          "Guidance on selecting and establishing the optimal business structure, including corporations, LLCs, partnerships, and joint ventures.",
      },
      {
        title: "Corporate Governance",
        description:
          "Advice on governance matters including board responsibilities, shareholder rights, corporate policies, and regulatory compliance.",
      },
      {
        title: "Mergers & Acquisitions",
        description:
          "Comprehensive legal support for business combinations, including due diligence, transaction structuring, negotiation, and post-merger integration.",
      },
      {
        title: "Commercial Contracts",
        description:
          "Drafting, review, and negotiation of various business agreements including supply, distribution, licensing, and service contracts.",
      },
      {
        title: "Corporate Compliance",
        description:
          "Development and implementation of compliance programs to address industry regulations, corporate governance, and risk management.",
      },
      {
        title: "Business Dispute Resolution",
        description:
          "Representation in business disputes through negotiation, mediation, arbitration, or litigation when necessary.",
      },
    ],
    process: [
      {
        title: "Initial Business Consultation",
        description: "We begin with a thorough discussion of your business needs, objectives, and legal concerns.",
      },
      {
        title: "Legal Assessment",
        description:
          "Our team conducts a comprehensive review of your business structure, operations, and potential legal issues.",
      },
      {
        title: "Strategy Development",
        description: "We develop customized legal strategies aligned with your business goals and risk tolerance.",
      },
      {
        title: "Implementation",
        description:
          "Our attorneys execute the agreed-upon strategies, whether forming a new business, drafting contracts, or addressing compliance matters.",
      },
      {
        title: "Ongoing Legal Support",
        description:
          "We provide continuous legal guidance as your business evolves, helping you navigate new challenges and opportunities.",
      },
      {
        title: "Dispute Management",
        description:
          "When conflicts arise, we represent your interests through negotiation or formal legal proceedings as appropriate.",
      },
    ],
    faqs: [
      {
        question: "What business structure is best for my company?",
        answer:
          "The optimal structure depends on factors including liability protection, tax considerations, management flexibility, and growth plans. Common options include sole proprietorships, partnerships, LLCs, and corporations. Our attorneys evaluate your specific situation, considering factors such as number of owners, capital needs, tax implications, and industry regulations to recommend the most advantageous structure for your business goals.",
      },
      {
        question: "What legal documents does my business need?",
        answer:
          "Essential documents vary by business type but typically include formation documents (articles of incorporation, operating agreements), employment documents (contracts, handbooks, policies), commercial agreements (client/vendor contracts, leases, purchase agreements), intellectual property protections, and compliance documentation. We help identify and prepare the specific documents your business needs based on your industry, size, and operations.",
      },
      {
        question: "How can I protect my business from legal disputes?",
        answer:
          "Preventive strategies include using well-drafted contracts with clear terms and dispute resolution provisions, implementing comprehensive policies and procedures, maintaining proper corporate formalities, securing appropriate insurance coverage, addressing potential issues promptly, and consulting with legal counsel before making major business decisions. Our proactive approach helps minimize legal risks while positioning your business for success.",
      },
      {
        question: "What should I consider when buying or selling a business?",
        answer:
          "Key considerations include proper valuation, transaction structure (asset vs. stock purchase), due diligence (financial, legal, operational), representations and warranties, non-compete agreements, employee retention, regulatory approvals, and tax implications. Our M&A team guides clients through each stage of the process, from initial planning through closing and post-transaction integration or transition.",
      },
      {
        question: "How can I ensure my business is compliant with relevant regulations?",
        answer:
          "Compliance requires identifying applicable regulations for your industry and business activities, developing appropriate policies and procedures, training employees, conducting regular audits, staying informed about regulatory changes, and promptly addressing any compliance issues. We help businesses establish effective compliance programs tailored to their specific regulatory environment and risk profile.",
      },
    ],
    teamMembers: [
      {
        name: "Robert Thompson",
        position: "Corporate Law Partner",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        bio: "Robert specializes in corporate transactions, mergers and acquisitions, and corporate governance matters for businesses ranging from startups to multinational corporations.",
      },
      {
        name: "Lisa Chen",
        position: "Business Formation Specialist",
        image:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        bio: "Lisa focuses on helping entrepreneurs and small businesses establish the right legal foundation through optimal entity selection and formation.",
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

