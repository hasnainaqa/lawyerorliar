import PracticeAreaHero from "@/components/practice-areas/practice-area-hero"
import PracticeAreaOverview from "@/components/practice-areas/practice-area-overview"
import PracticeAreaServices from "@/components/practice-areas/practice-area-services"
import PracticeAreaProcess from "@/components/practice-areas/practice-area-process"
import PracticeAreaFaq from "@/components/practice-areas/practice-area-faq"
import PracticeAreaCta from "@/components/practice-areas/practice-area-cta"
import PracticeAreaTeam from "@/components/practice-areas/practice-area-team"

export default function RealEstatePage() {
  const practiceArea = {
    title: "Real Estate & Property Law",
    slug: "real-estate",
    description:
      "Comprehensive legal services for real estate transactions, development, leasing, and property disputes.",
    heroImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
    overview:
      "Our real estate and property law practice provides comprehensive legal services for all aspects of real property transactions and disputes. We represent individuals, investors, developers, landlords, tenants, and businesses in matters ranging from routine purchases to complex development projects and litigation. Our team combines deep knowledge of property law with practical business understanding to facilitate successful real estate ventures while minimizing legal risks.",
    services: [
      {
        title: "Real Estate Transactions",
        description:
          "Representation in purchases, sales, and exchanges of residential and commercial properties, including contract negotiation and closing services.",
      },
      {
        title: "Property Development",
        description:
          "Legal guidance for development projects, including land use planning, zoning, permitting, and environmental compliance.",
      },
      {
        title: "Leasing & Landlord-Tenant Matters",
        description:
          "Drafting and negotiation of lease agreements and representation in landlord-tenant disputes for both commercial and residential properties.",
      },
      {
        title: "Title & Boundary Disputes",
        description: "Resolution of issues related to property ownership, boundaries, easements, and encroachments.",
      },
      {
        title: "Real Estate Financing",
        description: "Assistance with mortgage transactions, loan documentation, refinancing, and foreclosure matters.",
      },
      {
        title: "Property Tax Appeals",
        description:
          "Representation in challenging property tax assessments to ensure fair valuation and appropriate taxation.",
      },
    ],
    process: [
      {
        title: "Initial Consultation",
        description:
          "We begin with a thorough discussion of your real estate matter, understanding your objectives and concerns.",
      },
      {
        title: "Property & Legal Assessment",
        description:
          "Our attorneys review relevant documents, property information, and applicable laws to evaluate your situation.",
      },
      {
        title: "Strategy Development",
        description: "We develop a customized approach tailored to your specific real estate goals and circumstances.",
      },
      {
        title: "Documentation & Negotiation",
        description:
          "Our team prepares and reviews necessary legal documents and conducts negotiations on your behalf.",
      },
      {
        title: "Transaction Closing or Dispute Resolution",
        description: "We guide you through closing procedures or pursue appropriate resolution of property disputes.",
      },
      {
        title: "Post-Completion Support",
        description: "After completion, we address any follow-up matters and provide ongoing counsel as needed.",
      },
    ],
    faqs: [
      {
        question: "What should I look for in a real estate contract?",
        answer:
          "Key elements to review in real estate contracts include: accurate property description and boundaries; clear purchase price and payment terms; specific contingencies (financing, inspection, appraisal); title requirements and warranties; closing date and procedures; allocation of closing costs; property condition disclosures; provisions for property inspections; handling of existing leases or occupants; and default remedies. Our attorneys conduct thorough contract reviews to identify potential issues and ensure your interests are protected throughout the transaction.",
      },
      {
        question: "What are common title issues that can affect property ownership?",
        answer:
          "Common title issues include: undiscovered liens (tax, mortgage, judgment); boundary disputes and encroachments; easement conflicts; missing heirs or undisclosed owners; forged or improperly executed documents; errors in public records; undisclosed restrictions or covenants; and adverse possession claims. A thorough title examination and title insurance help identify and protect against these issues. Our real estate attorneys work with title companies to resolve title defects and ensure clear ownership rights for our clients.",
      },
      {
        question: "What should landlords consider when drafting a lease agreement?",
        answer:
          "Effective lease agreements should address: precise identification of premises and parties; clear rent terms including increases and late fees; security deposit requirements and conditions for return; lease duration and renewal options; maintenance responsibilities; rules regarding alterations; subletting and assignment rights; default provisions and remedies; insurance requirements; utility responsibilities; access rights; and compliance with applicable landlord-tenant laws. We draft comprehensive lease agreements that protect landlords' interests while complying with relevant regulations.",
      },
      {
        question: "How do zoning laws affect property development?",
        answer:
          "Zoning laws regulate land use by designating permitted activities (residential, commercial, industrial) and establishing requirements for building height, density, setbacks, parking, and other aspects of development. These regulations can significantly impact property value and development potential. When zoning restrictions conflict with desired use, options may include seeking variances, special use permits, zoning amendments, or challenging the regulation. Our attorneys guide clients through zoning compliance and help navigate the process of obtaining necessary approvals for development projects.",
      },
      {
        question: "What is the process for resolving boundary disputes?",
        answer:
          "Resolving boundary disputes typically involves: reviewing property deeds, surveys, and historical records; commissioning a new professional survey if necessary; attempting negotiation with neighboring owners; considering mediation or other alternative dispute resolution; and if necessary, pursuing legal action such as a quiet title action or boundary line adjustment. Early resolution is often more cost-effective than litigation. Our real estate attorneys help clients determine property boundaries, evaluate legal options, and pursue the most efficient path to resolving boundary conflicts while protecting property rights.",
      },
    ],
    teamMembers: [
      {
        name: "Jonathan Miller",
        position: "Real Estate Transactions Attorney",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        bio: "Jonathan specializes in residential and commercial real estate transactions, with extensive experience in contract negotiation and closing procedures.",
      },
      {
        name: "Sophia Rodriguez",
        position: "Property Development Specialist",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        bio: "Sophia focuses on real estate development, helping clients navigate zoning, permitting, and land use regulations for successful property development projects.",
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
      <PracticeAreaTeam title={practiceArea.title} teamMembers={practiceArea.teamMembers} />
      <PracticeAreaFaq title={practiceArea.title} faqs={practiceArea.faqs} />
      <PracticeAreaCta title={practiceArea.title} />
    </main>
  )
}

