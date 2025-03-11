import PracticeAreaHero from "@/components/practice-areas/practice-area-hero"
import PracticeAreaOverview from "@/components/practice-areas/practice-area-overview"
import PracticeAreaServices from "@/components/practice-areas/practice-area-services"
import PracticeAreaProcess from "@/components/practice-areas/practice-area-process"
import PracticeAreaFaq from "@/components/practice-areas/practice-area-faq"
import PracticeAreaCta from "@/components/practice-areas/practice-area-cta"
import PracticeAreaTeam from "@/components/practice-areas/practice-area-team"

export default function TaxationLawPage() {
  const practiceArea = {
    title: "Taxation Law",
    slug: "taxation-law",
    description:
      "Expert guidance on tax compliance, planning, and resolution of tax disputes for individuals and businesses.",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1911&q=80",
    overview:
      "Our taxation law practice provides comprehensive legal services to help individuals and businesses navigate the complex landscape of tax regulations. With expertise in both domestic and international tax matters, our team offers strategic guidance on tax planning, compliance, and dispute resolution to minimize tax liabilities while ensuring full compliance with applicable laws.",
    services: [
      {
        title: "Tax Planning & Compliance",
        description:
          "Strategic advice on structuring transactions, investments, and business operations to optimize tax positions while maintaining compliance with tax laws.",
      },
      {
        title: "Tax Dispute Resolution",
        description:
          "Representation in tax audits, investigations, and litigation before tax authorities and courts at all levels.",
      },
      {
        title: "Corporate Taxation",
        description:
          "Guidance on corporate tax matters including mergers and acquisitions, reorganizations, and international tax planning.",
      },
      {
        title: "International Taxation",
        description:
          "Advice on cross-border transactions, transfer pricing, tax treaties, and global tax compliance for multinational operations.",
      },
      {
        title: "Sales & Indirect Taxes",
        description:
          "Assistance with sales tax, VAT, customs duties, and other indirect tax matters affecting business operations.",
      },
      {
        title: "Tax Amnesty & Voluntary Disclosure",
        description:
          "Support for taxpayers seeking to rectify past non-compliance through amnesty programs or voluntary disclosure procedures.",
      },
    ],
    process: [
      {
        title: "Initial Tax Assessment",
        description:
          "We begin with a comprehensive review of your tax situation, identifying potential issues and opportunities.",
      },
      {
        title: "Strategy Development",
        description:
          "Our tax experts develop customized strategies aligned with your financial goals and risk tolerance.",
      },
      {
        title: "Implementation",
        description:
          "We assist in implementing recommended tax strategies, ensuring proper documentation and compliance.",
      },
      {
        title: "Ongoing Compliance",
        description: "Regular monitoring and updates to maintain compliance with changing tax laws and regulations.",
      },
      {
        title: "Audit Support",
        description: "If you face a tax audit, we provide comprehensive representation throughout the process.",
      },
      {
        title: "Dispute Resolution",
        description:
          "When tax disputes arise, we pursue administrative appeals or litigation as necessary to protect your interests.",
      },
    ],
    faqs: [
      {
        question: "What should I do if I receive a tax audit notice?",
        answer:
          "If you receive an audit notice, contact our office immediately before responding to the tax authorities. Do not ignore the notice, as this can lead to default assessments and penalties. Our tax attorneys will review the notice, help you gather necessary documentation, prepare a response strategy, and represent you throughout the audit process to protect your rights and interests.",
      },
      {
        question: "How can I minimize my tax liability legally?",
        answer:
          "Legal tax minimization involves strategic planning using available deductions, credits, exemptions, and timing of income and expenses. Our tax experts can help identify opportunities specific to your situation, such as retirement planning, investment structuring, business entity selection, and timing of transactions. We focus on legitimate tax planning strategies that comply with tax laws while reducing your overall tax burden.",
      },
      {
        question: "What are the consequences of tax non-compliance?",
        answer:
          "Non-compliance can result in financial penalties, interest charges, tax liens, asset seizures, and in serious cases, criminal prosecution. The specific consequences depend on factors such as the nature of the non-compliance, amounts involved, and whether the non-compliance was willful. Our firm can help address existing non-compliance issues through voluntary disclosure programs or negotiated settlements to minimize potential penalties.",
      },
      {
        question: "How long should I keep tax records?",
        answer:
          "Generally, you should keep tax records for at least 7 years, though certain documents should be kept longer. Property records should be maintained until 7 years after disposing of the property. Business records, including those related to employees, should be kept for at least 7 years. Permanent records like tax returns, major business transactions, and property records are best kept indefinitely. We can provide specific guidance based on your situation.",
      },
      {
        question: "Can you help with international tax matters?",
        answer:
          "Yes, our firm has extensive experience with international tax issues including foreign income reporting, foreign tax credits, transfer pricing, tax treaties, offshore compliance, and expatriate taxation. We help clients navigate complex international tax regulations, avoid double taxation, and maintain compliance with reporting requirements such as FBAR and FATCA. Our international tax specialists can develop strategies tailored to your global business or investment activities.",
      },
    ],
    teamMembers: [
      {
        name: "David Wilson",
        position: "Head of Tax Practice",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        bio: "David has over 20 years of experience in taxation law, specializing in corporate tax planning and international tax matters for multinational corporations.",
      },
      {
        name: "Jennifer Lee",
        position: "Tax Dispute Resolution Specialist",
        image:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        bio: "Jennifer specializes in representing clients in tax audits, investigations, and litigation, with a strong track record of favorable resolutions with tax authorities.",
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

