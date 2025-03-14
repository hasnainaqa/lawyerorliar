import PracticeAreaHero from "@/components/practice-areas/practice-area-hero"
import PracticeAreaOverview from "@/components/practice-areas/practice-area-overview"
import PracticeAreaServices from "@/components/practice-areas/practice-area-services"
import PracticeAreaProcess from "@/components/practice-areas/practice-area-process"
import PracticeAreaFaq from "@/components/practice-areas/practice-area-faq"
import PracticeAreaCta from "@/components/practice-areas/practice-area-cta"
import PracticeAreaTeam from "@/components/practice-areas/practice-area-team"

export default function FamilyLawPage() {
  const practiceArea = {
    title: "Family Law",
    slug: "family-law",
    description:
      "Compassionate legal guidance for family matters including divorce, child custody, and domestic relations.",
    heroImage:
      "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overview:
      "Our family law practice provides compassionate and strategic legal representation for individuals navigating challenging family matters. We understand the emotional and personal nature of family law issues and strive to guide our clients through these difficult times with sensitivity, while vigorously protecting their rights and interests.",
    services: [
      {
        title: "Divorce & Separation",
        description:
          "Comprehensive representation in divorce proceedings, including property division, spousal support, and settlement negotiations.",
      },
      {
        title: "Child Custody & Support",
        description:
          "Advocacy for parents in custody disputes, visitation arrangements, and child support determinations.",
      },
      {
        title: "Alimony & Maintenance",
        description:
          "Assistance with spousal support matters, including establishing, modifying, or enforcing alimony obligations.",
      },
      {
        title: "Prenuptial & Postnuptial Agreements",
        description:
          "Drafting and review of marital agreements to protect assets and establish clear financial expectations.",
      },
      {
        title: "Domestic Violence Protection",
        description:
          "Legal assistance for victims of domestic abuse, including restraining orders and safety planning.",
      },
      {
        title: "Adoption & Guardianship",
        description: "Guidance through the legal process of adoption or establishing guardianship for children.",
      },
    ],
    process: [
      {
        title: "Initial Consultation",
        description: "We begin with a confidential discussion about your family situation, concerns, and objectives.",
      },
      {
        title: "Case Assessment",
        description: "Our family law attorneys evaluate your case, identifying legal issues and potential approaches.",
      },
      {
        title: "Strategy Development",
        description: "We develop a customized legal strategy aligned with your goals and family circumstances.",
      },
      {
        title: "Negotiation & Mediation",
        description: "When possible, we pursue amicable resolutions through negotiation or formal mediation.",
      },
      {
        title: "Court Representation",
        description: "If litigation becomes necessary, we provide strong advocacy in family court proceedings.",
      },
      {
        title: "Implementation & Follow-up",
        description:
          "After resolution, we ensure proper implementation of agreements or court orders and address any ongoing matters.",
      },
    ],
    faqs: [
      {
        question: "How is property divided in a divorce?",
        answer:
          "Property division varies by jurisdiction, but generally follows either community property or equitable distribution principles. Factors considered include the length of marriage, each spouse's financial situation, contributions to the marriage, and future needs. Our attorneys help identify marital assets, determine fair valuations, and advocate for an appropriate division that protects your financial interests while working toward an efficient resolution.",
      },
      {
        question: "How is child custody determined?",
        answer:
          "Courts determine custody based on the best interests of the child, considering factors such as each parent's relationship with the child, stability, ability to provide care, the child's needs, and sometimes the child's preferences (depending on age). We help clients present compelling evidence of their parenting abilities while developing custody arrangements that support children's wellbeing and maintain meaningful parent-child relationships.",
      },
      {
        question: "Can custody and support orders be modified?",
        answer:
          "Yes, court orders regarding custody, visitation, and support can be modified when there is a substantial change in circumstances. Examples include significant income changes, relocation, health issues, or changes in the child's needs. Our attorneys assist with both pursuing and defending against modifications, ensuring that changing family situations are properly addressed within the legal system.",
      },
      {
        question: "What is the difference between legal and physical custody?",
        answer:
          "Legal custody involves decision-making authority regarding the child's education, healthcare, religious upbringing, and other major life decisions. Physical custody refers to where the child primarily resides and the day-to-day care responsibilities. These can be awarded jointly (shared between parents) or solely (to one parent). We help clients understand these distinctions and pursue arrangements that serve both their parental rights and their children's needs.",
      },
      {
        question: "How can I protect my assets before marriage?",
        answer:
          "A prenuptial agreement is the most effective way to protect assets before marriage. This legal document specifies how assets and debts will be handled during marriage and in case of divorce or death. To be enforceable, prenuptial agreements require full financial disclosure, fair terms, proper execution, and sufficient time for review before the wedding. Our family law attorneys draft comprehensive prenuptial agreements that provide clarity and protection while addressing both parties' concerns.",
      },
    ],
    teamMembers: [
      {
        name: "Amina Patel",
        position: "Family Law Attorney",
        image:
          "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "Amina has dedicated her career to family law, handling divorce, child custody, and domestic violence cases with compassion and strong advocacy.",
      },
      {
        name: "James Wilson",
        position: "Child Custody Specialist",
        image:
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1148&q=80",
        bio: "James specializes in complex child custody matters, focusing on arrangements that protect children's wellbeing while preserving parental relationships.",
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

