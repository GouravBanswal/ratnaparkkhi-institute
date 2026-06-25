export interface HeroSlideData {
  id: number;
  image: string;
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  primaryButton: string;
  primaryLink: string;
  secondaryButton: string;
  secondaryLink: string;
}

export const heroSlides: HeroSlideData[] = [
  {
    id: 1,
    image: "/images/hero/hero-1.png",
    badge: "Admissions Open 2026",
    title: "Build Your Future with",
    subtitle: "Quality Education",
    description: "Ratnaparkkhi Institute™ provides Engineering Education, ITI Programs, Skill Development, MBA Programs, Technical Education, and Career-Oriented Training.",
    primaryButton: "Apply Now 2026",
    primaryLink: "/online-admission",
    secondaryButton: "Explore Courses",
    secondaryLink: "#courses-section"
  },
  {
    id: 2,
    image: "/images/hero/hero-2.png",
    badge: "Learn & Earn Scheme",
    title: "Earn Monthly Stipends with",
    subtitle: "Apprenticeships & Jobs",
    description: "Approved NAPS, NSDC, and BTP programs providing official corporate apprenticeships. Gain hands-on engineering/technical training while earning a stipend.",
    primaryButton: "Apply Now 2026",
    primaryLink: "/online-admission",
    secondaryButton: "Placement Cell",
    secondaryLink: "/placement-cell"
  },
  {
    id: 3,
    image: "/images/hero/hero-3.png",
    badge: "ITI Vocational Trades",
    title: "Start Your Journey in",
    subtitle: "Technical ITI Trades",
    description: "NCVT-approved Electrician, Fitter, Welder, Turner, COPA, and Machinist trades. Access practical workshops designed for state board certification.",
    primaryButton: "Apply Now 2026",
    primaryLink: "/online-admission",
    secondaryButton: "View ITI Courses",
    secondaryLink: "/courses"
  },
  {
    id: 4,
    image: "/images/hero/hero-4.png",
    badge: "Management Careers",
    title: "Advance Your Career with",
    subtitle: "UGC-Approved MBA",
    description: "Specialized MBA programs in Marketing, Finance, HR, Operations, and Business Analytics. Accessible flexible learning with installment options.",
    primaryButton: "Apply Now 2026",
    primaryLink: "/online-admission",
    secondaryButton: "Explore Programs",
    secondaryLink: "/courses"
  }
];
