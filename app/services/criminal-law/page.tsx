import PracticeAreaHero from "@/components/practice-areas/practice-area-hero"
import PracticeAreaOverview from "@/components/practice-areas/practice-area-overview"
import PracticeAreaServices from "@/components/practice-areas/practice-area-services"
import PracticeAreaProcess from "@/components/practice-areas/practice-area-process"
import PracticeAreaFaq from "@/components/practice-areas/practice-area-faq"
import PracticeAreaCta from "@/components/practice-areas/practice-area-cta"

export default function CriminalLawPage() {
  const practiceArea = {
    title: "Criminal Law",
    slug: "criminal-law",
    description: "Strategic defense and representation in criminal cases, from minor offenses to serious felonies.",
    heroImage:
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    overview:
      "Our criminal law practice provides robust defense strategies for individuals facing criminal charges. We understand that being accused of a crime can be a life-altering experience, which is why our experienced criminal defense attorneys are committed to protecting your rights, freedom, and reputation through every stage of the criminal justice process.",
    services: [
      {
        title: "Criminal Defense",
        description:
          "Comprehensive defense representation for individuals charged with misdemeanors or felonies at both state and federal levels.",
      },
      {
        title: "Bail Applications",
        description: "Assistance with securing pretrial release through strategic bail applications and arguments.",
      },
      {
        title: "Trial Representation",
        description:
          "Skilled courtroom advocacy, evidence analysis, witness examination, and persuasive arguments before judges and juries.",
      },
      {
        title: "Appeals",
        description:
          "Representation in criminal appeals, challenging convictions or sentences based on legal errors or constitutional violations.",
      },
      {
        title: "Cybercrime Defense",
        description:
          "Specialized defense for individuals accused of computer crimes, hacking, online fraud, or digital evidence-related offenses.",
      },
      {
        title: "White-Collar Crime",
        description:
          "Defense against allegations of financial crimes, including fraud, embezzlement, money laundering, and securities violations.",
      },
    ],
    process: [
      {
        title: "Initial Consultation",
        description:
          "We begin with a confidential discussion about your case, gathering essential information and explaining your legal options.",
      },
      {
        title: "Case Investigation",
        description:
          "Our team conducts a thorough investigation, reviewing evidence, police reports, witness statements, and other relevant information.",
      },
      {
        title: "Defense Strategy Development",
        description:
          "We develop a customized defense strategy based on the specific facts of your case and applicable laws.",
      },
      {
        title: "Pretrial Motions & Negotiations",
        description:
          "We file appropriate motions to suppress evidence or dismiss charges when possible, and negotiate with prosecutors for favorable outcomes.",
      },
      {
        title: "Trial Preparation & Representation",
        description:
          "If your case proceeds to trial, we meticulously prepare all aspects of your defense and provide strong courtroom advocacy.",
      },
      {
        title: "Post-Trial Assistance",
        description:
          "Following the resolution of your case, we provide guidance on appeals, record expungement, or compliance with court orders.",
      },
    ],
    faqs: [
      {
        question: "What should I do if I'm arrested?",
        answer:
          "If you're arrested, remain calm and exercise your right to remain silent. Do not provide statements to law enforcement without an attorney present. Request to speak with an attorney immediately, and contact our firm as soon as possible. We can guide you through the process and begin building your defense.",
      },
      {
        question: "Can criminal charges be dropped or reduced?",
        answer:
          "Yes, charges can be dropped or reduced under various circumstances. Our attorneys may negotiate with prosecutors based on evidence weaknesses, legal issues, or mitigating factors. We explore all options, including pretrial diversion programs or plea agreements when appropriate to achieve the best possible outcome.",
      },
      {
        question: "How long does a criminal case typically take?",
        answer:
          "The duration varies significantly depending on the complexity of the case, court schedules, and whether the case goes to trial. Minor offenses might resolve in a few months, while serious felonies can take a year or longer. We work efficiently while ensuring your defense receives the time and attention it deserves.",
      },
      {
        question: "Will my case go to trial?",
        answer:
          "Not all criminal cases go to trial. Many are resolved through plea negotiations or dismissals. Our attorneys evaluate each case individually and advise you on the best approach. If trial is necessary, we provide thorough preparation and strong courtroom representation to protect your rights.",
      },
      {
        question: "What are the potential consequences of a criminal conviction?",
        answer:
          "Consequences may include imprisonment, fines, probation, community service, and a criminal record that can affect employment, housing, professional licensing, and immigration status. Our goal is to minimize these consequences through strategic defense and, when possible, seek alternatives to traditional sentencing.",
      },
    ],
    teamMembers: [
      {
        name: "Michael Chen",
        position: "Senior Criminal Defense Attorney",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "Michael has 20 years of experience in criminal defense, having successfully represented clients in high-profile cases and complex criminal matters.",
      },
      {
        name: "Amina Patel",
        position: "Criminal Appeals Specialist",
        image:
          "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        bio: "Amina specializes in criminal appeals and post-conviction relief, with extensive experience challenging convictions and sentences at appellate courts.",
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

