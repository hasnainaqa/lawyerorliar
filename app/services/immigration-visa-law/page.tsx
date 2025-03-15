import PracticeAreaHero from "@/components/practice-areas/practice-area-hero"
import PracticeAreaOverview from "@/components/practice-areas/practice-area-overview"
import PracticeAreaServices from "@/components/practice-areas/practice-area-services"
import PracticeAreaProcess from "@/components/practice-areas/practice-area-process"
import PracticeAreaFaq from "@/components/practice-areas/practice-area-faq"
import PracticeAreaCta from "@/components/practice-areas/practice-area-cta"
import PracticeAreaTeam from "@/components/practice-areas/practice-area-team"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Immigration & Visa Law Services | Expert Legal Assistance",
  description:
    "Comprehensive immigration and visa legal services including work permits, visa applications, deportation defense, and citizenship guidance from experienced attorneys.",
  keywords:
    "immigration law, visa applications, work permits, deportation defense, citizenship, immigration attorney, visa lawyer, immigration consultation",
  openGraph: {
    title: "Immigration & Visa Law Services | Expert Legal Assistance",
    description: "Comprehensive immigration and visa legal services from experienced attorneys",
    type: "website",
  },
}

export default function ImmigrationVisaLawPage() {
  const practiceArea = {
    title: "Immigration & Visa Law",
    slug: "immigration-visa-law",
    description:
      "Expert legal guidance for visa applications, work permits, citizenship, and all immigration-related matters.",
    heroImage:
      "https://images.unsplash.com/photo-1569974644283-0f04ac1a2b95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    overview:
      "Our Immigration & Visa Law practice provides comprehensive legal services for individuals and businesses navigating the complex landscape of immigration regulations. With expertise in both domestic and international immigration matters, our team offers strategic guidance on visa applications, work permits, citizenship processes, and deportation defense to help clients achieve their immigration goals while ensuring full compliance with applicable laws.",
    services: [
      {
        title: "Visa Applications & Extensions",
        description:
          "Expert assistance with all types of visa applications including visitor, student, work, family, and business visas, as well as visa extensions and status changes.",
      },
      {
        title: "Work Permits & Employment Immigration",
        description:
          "Guidance on obtaining work permits, employment-based immigration, and navigating labor certification processes for both employers and foreign workers.",
      },
      {
        title: "Family Immigration",
        description:
          "Legal support for family reunification, spousal visas, fiancé(e) visas, parent/child petitions, and other family-based immigration matters.",
      },
      {
        title: "Citizenship & Naturalization",
        description:
          "Comprehensive assistance with citizenship applications, naturalization processes, and preparation for citizenship interviews and tests.",
      },
      {
        title: "Deportation Defense",
        description:
          "Strong representation in removal proceedings, deportation defense, asylum applications, and appeals against unfavorable immigration decisions.",
      },
      {
        title: "Business & Investor Immigration",
        description:
          "Strategic advice for businesses on corporate immigration matters, investor visas, and compliance with immigration regulations for international operations.",
      },
    ],
    process: [
      {
        title: "Initial Consultation",
        description:
          "We begin with a comprehensive assessment of your immigration situation, goals, and eligibility for various immigration benefits.",
      },
      {
        title: "Strategy Development",
        description:
          "Our immigration attorneys develop a customized strategy aligned with your specific circumstances and immigration objectives.",
      },
      {
        title: "Documentation Preparation",
        description:
          "We assist in gathering, preparing, and reviewing all necessary documentation to support your immigration application or case.",
      },
      {
        title: "Application Filing",
        description:
          "Our team handles the precise filing of applications, petitions, and supporting materials with the appropriate immigration authorities.",
      },
      {
        title: "Case Monitoring & Updates",
        description:
          "We actively monitor your case progress, respond to requests for evidence, and keep you informed throughout the process.",
      },
      {
        title: "Interview Preparation & Representation",
        description:
          "When required, we prepare you for immigration interviews and provide representation during proceedings with immigration officials.",
      },
    ],
    faqs: [
      {
        question: "How long does the visa application process typically take?",
        answer:
          "Processing times vary significantly depending on the type of visa, your country of origin, current backlogs, and individual circumstances. Some visa categories may be processed in a few weeks, while others can take several months or even years. Family-based and employment-based immigrant visas often have longer wait times due to annual caps and country quotas. During your consultation, we can provide more specific timeframe estimates based on your particular situation and current processing trends.",
      },
      {
        question: "What factors might lead to visa denial, and how can I improve my chances of approval?",
        answer:
          "Common reasons for visa denials include incomplete or inaccurate applications, insufficient documentation, failure to demonstrate eligibility requirements, immigration violations history, criminal records, and security concerns. To improve approval chances, work with an experienced immigration attorney who can help you prepare a comprehensive application, provide strong supporting evidence, address potential red flags proactively, ensure accurate information, and prepare you for interviews. Our firm specializes in developing strategies to overcome potential obstacles and present the strongest possible case.",
      },
      {
        question: "What options do I have if my visa application is denied?",
        answer:
          "If your visa application is denied, you may have several options depending on the circumstances: 1) Request reconsideration or appeal the decision through appropriate channels; 2) Address the specific reasons for denial and reapply with stronger documentation; 3) Apply for a different visa category for which you might qualify; 4) Seek a waiver if the denial was based on inadmissibility grounds; or 5) Pursue administrative or judicial review in certain cases. Our attorneys can evaluate your specific situation, explain the reasons for denial, and recommend the most appropriate course of action.",
      },
      {
        question: "How can I maintain my legal status while in the country?",
        answer:
          "To maintain legal immigration status, you must: 1) Understand and comply with all terms and conditions of your visa; 2) Never stay beyond your authorized period of stay; 3) File extension or change of status applications before your current status expires; 4) Maintain required relationships (e.g., employment for work visas, enrollment for student visas); 5) Report address changes to immigration authorities; 6) Avoid unauthorized employment; and 7) Comply with all laws. Our firm provides ongoing guidance to help clients maintain lawful status and address any potential issues before they affect immigration status.",
      },
      {
        question: "What is the difference between permanent residency and citizenship?",
        answer:
          "Permanent residency (often called having a 'green card') grants you the right to live and work permanently in the country, but with certain limitations. Permanent residents must maintain their status, cannot vote in national elections, may be subject to deportation for certain offenses, and must renew their green cards periodically. Citizenship, obtained through naturalization or birth, provides full rights and privileges, including voting rights, unrestricted travel, government employment eligibility, protection from deportation, and the ability to petition for more family members. Citizenship is permanent and cannot be lost except in rare circumstances. Our attorneys can help you understand which status best suits your needs and guide you through either process.",
      },
    ],
    teamMembers: [
      {
        name: "Sophia Rodriguez",
        position: "Immigration Law Specialist",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        bio: "Sophia specializes in complex immigration matters, with particular expertise in business immigration, investor visas, and deportation defense cases.",
      },
      {
        name: "Omar Khan",
        position: "Visa & Citizenship Expert",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        bio: "Omar focuses on family-based immigration, citizenship applications, and consular processing, helping clients navigate the path to permanent residency and naturalization.",
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

