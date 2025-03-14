import PracticeAreaHero from "@/components/practice-areas/practice-area-hero"
import PracticeAreaOverview from "@/components/practice-areas/practice-area-overview"
import PracticeAreaServices from "@/components/practice-areas/practice-area-services"
import PracticeAreaProcess from "@/components/practice-areas/practice-area-process"
import PracticeAreaFaq from "@/components/practice-areas/practice-area-faq"
import PracticeAreaCta from "@/components/practice-areas/practice-area-cta"

export default function EmploymentLawPage() {
  const practiceArea = {
    title: "Employment & Labor Law",
    slug: "employment-law",
    description:
      "Comprehensive legal services for employers and employees in workplace matters and employment relationships.",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overview:
      "Our employment and labor law practice provides strategic legal guidance to both employers and employees navigating the complex landscape of workplace regulations and employment relationships. We combine deep knowledge of employment laws with practical business understanding to deliver effective solutions for workplace issues while minimizing legal risks.",
    services: [
      {
        title: "Employment Contracts & Policies",
        description:
          "Drafting and review of employment agreements, handbooks, and workplace policies to ensure legal compliance and protect interests.",
      },
      {
        title: "Workplace Discrimination & Harassment",
        description:
          "Representation in cases involving discrimination, harassment, or hostile work environment claims.",
      },
      {
        title: "Wage & Hour Compliance",
        description:
          "Guidance on minimum wage, overtime, classification, and other compensation requirements under applicable laws.",
      },
      {
        title: "Wrongful Termination",
        description:
          "Legal assistance for employees facing unjust dismissal or employers defending against wrongful termination claims.",
      },
      {
        title: "Employment Litigation",
        description:
          "Representation in employment-related lawsuits, administrative proceedings, and alternative dispute resolution.",
      },
      {
        title: "Labor Relations",
        description:
          "Advice on union matters, collective bargaining, labor disputes, and National Labor Relations Board proceedings.",
      },
    ],
    process: [
      {
        title: "Initial Consultation",
        description:
          "We begin with a thorough discussion of your employment matter, understanding the specific workplace issues and objectives.",
      },
      {
        title: "Case Assessment",
        description:
          "Our employment attorneys evaluate the legal merits of your situation, applicable laws, and potential approaches.",
      },
      {
        title: "Strategy Development",
        description:
          "We develop a customized legal strategy aligned with your goals, whether as an employer or employee.",
      },
      {
        title: "Resolution Efforts",
        description:
          "When appropriate, we pursue resolution through negotiation, mediation, or administrative proceedings.",
      },
      {
        title: "Litigation Representation",
        description:
          "If formal legal action becomes necessary, we provide strong advocacy in court or before administrative agencies.",
      },
      {
        title: "Implementation & Compliance",
        description:
          "Following resolution, we assist with implementing agreements, court orders, or compliance measures as needed.",
      },
    ],
    faqs: [
      {
        question: "What constitutes workplace discrimination?",
        answer:
          "Workplace discrimination occurs when an employee or job applicant is treated unfavorably because of protected characteristics such as race, color, religion, sex (including pregnancy, gender identity, and sexual orientation), national origin, age (40 or older), disability, or genetic information. Discriminatory practices may include hiring/firing decisions, promotion denials, unequal pay, harassment, or creating a hostile work environment. Both federal and state laws prohibit such discrimination, though specific protections may vary by jurisdiction.",
      },
      {
        question: "What should employers include in an employee handbook?",
        answer:
          "A comprehensive employee handbook typically includes: company mission and values, employment policies (at-will employment, equal opportunity, anti-discrimination/harassment), compensation and benefits information, work schedules and attendance policies, performance expectations and evaluation procedures, leave policies (vacation, sick, family, medical), workplace conduct standards, disciplinary procedures, safety protocols, technology and social media policies, and complaint/grievance procedures. We help employers develop handbooks that comply with applicable laws while reflecting their specific workplace culture and operational needs.",
      },
      {
        question: "How should employers handle terminations to minimize legal risk?",
        answer:
          "To minimize legal risk when terminating employees, employers should: ensure consistent application of policies, document performance issues and policy violations, follow progressive discipline procedures when appropriate, conduct a thorough pre-termination review, consider timing and circumstances carefully, prepare for the termination meeting, communicate clearly and professionally during termination, provide required notices and documentation, address final pay and benefits properly, and consider offering severance in exchange for a release when appropriate. Our attorneys guide employers through this process to reduce potential liability.",
      },
      {
        question: "What are my rights if I believe I've been wrongfully terminated?",
        answer:
          "If you believe you've been wrongfully terminated, you may have legal recourse if the termination violated anti-discrimination laws, breached an employment contract, constituted retaliation for protected activities (like whistleblowing or taking FMLA leave), or violated public policy. Options may include filing a complaint with government agencies like the EEOC, negotiating a severance agreement, or pursuing a wrongful termination lawsuit. Time limits apply to these actions, so it's important to consult with an employment attorney promptly to evaluate your specific situation and preserve your rights.",
      },
      {
        question: "How do I know if I'm properly classified as an independent contractor?",
        answer:
          "Proper classification depends on the actual working relationship, not just what's stated in a contract. Key factors include: degree of control over how work is performed, opportunity for profit or loss, investment in equipment/facilities, skill required, permanency of the relationship, and integration into the business. Misclassification can have significant consequences, including liability for unpaid wages, overtime, benefits, and taxes. Our attorneys can evaluate your specific situation under applicable tests (IRS, DOL, state-specific) to determine proper classification and address any misclassification issues.",
      },
    ],
    teamMembers: [
      {
        name: "Thomas Reynolds",
        position: "Employment Law Partner",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        bio: "Thomas specializes in representing employers in employment litigation, compliance matters, and workplace investigations.",
      },
      {
        name: "Maria Gonzalez",
        position: "Employee Rights Advocate",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        bio: "Maria focuses on protecting employee rights in cases involving discrimination, harassment, wrongful termination, and wage disputes.",
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

