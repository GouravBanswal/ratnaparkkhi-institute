// Configurable College Data for Ratnaparkkhi Institute of Engineering & Management
// Updated with the official institute profile data

export const tagline = "Learn & Earn";
export const establishedYear = "Since 2008";
export const officialPhone = "+91 9923313437";
export const officialEmail = "ratnaparkkhiinstitute@gmail.com";

export const placementStats = {
  highestPackage: "8,000+ Placed",
  averagePackage: "100% Success",
  placementRate: "100%",
  companiesVisited: "23,000+ Passed",
  totalOffers: "8,000+ Placed",
  internshipOffers: "NAPS/NSDC Approved",
};


  export interface Course {
  name: string;
  duration: string;
  seats: number;
  eligibility: string;
  fees: string;
  highlights: string;

  isIti?: boolean;
  mode?: string;
  careerOpportunities?: string;
  universityOrInstitution?: string;
  approvedBy?: string;
  skillPartners?: string;
};

export const recruiters = [
  { name: "National Skill Development Corporation", logoText: "NSDC" },
  { name: "Skill India", logoText: "Skill India" },
  { name: "National Apprenticeship Promotion Scheme", logoText: "NAPS" },
  { name: "Board of Practical Training", logoText: "BTP" },
  { name: "BOSS Board", logoText: "BOSS Board" },
  { name: "Yashwantrao Chavan Maharashtra Open University", logoText: "YCMOU" },
  { name: "Tilak Maharashtra Vidyapeeth", logoText: "TMV" },
  { name: "Mumbai Hindi Vidyapeeth", logoText: "MHV" },
  { name: "Maharashtra State Board of Skill Development", logoText: "MSBSVET ITI" },
  { name: "D.Y. Patil University", logoText: "DY Patil Univ" },
  { name: "Mangalayatan University", logoText: "Mangalayatan" },
  { name: "ISBM University", logoText: "ISBM Univ" },
  { name: "Dr. C.V. Raman University", logoText: "CV Raman Univ" }
];

export const achievements = [
  { title: "Passed Students", value: "23,000+ Students", desc: "Successfully completed secondary, higher secondary, graduation, and post-graduation certifications." },
  { title: "Academic Success", value: "100% Success Rate", desc: "Maintained complete academic support and guidance ensuring graduation success." },
  { title: "Job Placements", value: "8,000+ Placed", desc: "Students placed in private enterprises and government organizations." },
  { title: "Geographical Reach", value: "PAN India Coverage", desc: "Students enrolled from all states and union territories across India." },
  { title: "Career Sectors", value: "Govt & Private", desc: "Alumni working in various departments, public sectors, and top private sectors." }
];

export const whyParentsTrust = [
  {
    title: "Learn & Earn Scheme Model",
    desc: "Earn monthly stipends while acquiring skill certifications and university degrees. Perfect alignment of industry-oriented learning."
  },
  {
    title: "100% Academic Success Support",
    desc: "Comprehensive counseling, course materials, and guidance to ensure every student successfully clears their exams."
  },
  {
    title: "Flexible Online & Distance Learning",
    desc: "Designed specifically for working professionals, school dropouts, and individuals who could not complete their education."
  },
  {
    title: "National Skill Council Certifications",
    desc: "Approved NSDC, Skill India, NAPS, and BTP programs providing official corporate apprenticeships and vocational validations."
  },
  {
    title: "Affordable Fees & Installments",
    desc: "Highly accessible education with installment options, bringing top university degrees within reach of everyone."
  }
];

export const campusGallery = [
  { title: "Admissions Counselling Center", category: "Infrastructure", desc: "Authorized desk for DY Patil, Mangalayatan, and ISBM universities." },
  { title: "Skill India Training Room", category: "Skill Development", desc: "Hands-on vocational labs for technical and professional development." },
  { title: "Distance Study Library", category: "Resources", desc: "Home to distance syllabus guides, books, and digital materials." },
  { title: "ITI Practical Workspace", category: "ITI trades", desc: "Industrial tools and technical equipment setups for state board certification trades." }
];

export const facultyHighlights = [
  {
    name: "Dr. Ramesh Ratnaparkkhi",
    designation: "Founder & Chairman",
    qualification: "Ph.D. in Educational Management",
    imagePlaceholder: "RR",
    bio: "A visionary academician with over 18 years of experience shaping flexible learning and skill development initiatives."
  },
  {
    name: "Dr. S. K. Deshmukh",
    designation: "Principal / Academic Director",
    qualification: "Ph.D. in Distance Education",
    imagePlaceholder: "SD",
    bio: "Passionate expert dedicated to delivering quality online and distance education models for working professionals."
  },
  {
    name: "Prof. Anjali Kulkarni",
    designation: "Head, Counseling & Admissions",
    qualification: "MBA in Career Guidance",
    imagePlaceholder: "AK",
    bio: "Helps students choose the right university pathway and coordinates government scholarship benefits."
  },
  {
    name: "Dr. Vinay Joshi",
    designation: "Dean of Skill Development & NAPS",
    qualification: "Ph.D. in Vocational Systems",
    imagePlaceholder: "VJ",
    bio: "Spearheads industry apprenticeships (NAPS/NATS) and NSDC corporate alliances for Learn & Earn placements."
  }
];

export const coursesOffered = [
  {
    name: "10th (Secondary School)",
    duration: "1 Year",
    eligibility: "School dropouts or anyone seeking secondary certification",
    fees: "Contact Counsel Desk",
    seats: 300,
    highlights: "National Institute of Open Schooling / Mumbai Hindi Vidyapeeth board patterns. Flexible learning and exams.",
    universityOrInstitution: "NIOS / Mumbai Hindi Vidyapeeth",
    mode: "Flexible / Distance"
  },
  {
    name: "12th (Senior Secondary)",
    duration: "1 Year",
    eligibility: "10th Passed from any recognized board",
    fees: "Contact Counsel Desk",
    seats: 300,
    highlights: "Flexible subject choices. Direct admission to Senior Secondary certifications. Study materials provided.",
    universityOrInstitution: "NIOS / Mumbai Hindi Vidyapeeth",
    mode: "Flexible / Distance"
  },
  {
    name: "Diploma in Electrical",
    duration: "2 Years",
    eligibility: "10th Passed from any recognized board",
    fees: "Contact Counsel Desk",
    seats: 40,
    highlights: "Practical training in electrical wiring, industrial motors, electrical machines, and domestic appliances.",
    careerOpportunities: "Electrical Contractor, Junior Electrician in Mahadiscom/Railways, Maintenance Technician, Solar Panel Installer.",
    isIti: true,
    universityOrInstitution: "Industrial Technical Institute (ITI), Maharashtra State",
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS"
  },
  {
    name: "Diploma in Fitter",
    duration: "2 Years",
    eligibility: "10th Passed from any recognized board",
    fees: "Contact Counsel Desk",
    seats: 40,
    highlights: "Hands-on training in pipe fitting, metal jointing, lathe machine operation, and structure assembly.",
    careerOpportunities: "Industrial Fitter, Mechanical Apprentice (Indian Railways, TATA Motors), Plant Maintenance Technician, Assembly Operator.",
    isIti: true,
    universityOrInstitution: "Industrial Technical Institute (ITI), Maharashtra State",
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS"
  },
  {
    name: "Diploma in Turner",
    duration: "2 Years",
    eligibility: "10th Passed from any recognized board",
    fees: "Contact Counsel Desk",
    seats: 20,
    highlights: "Specialized skill development in metal cutting, lathe machine configuration, threading, and precision engineering.",
    careerOpportunities: "Lathe Operator, Precision Machinist, Tool Room Technician, Quality Inspector in auto industries.",
    isIti: true,
    universityOrInstitution: "Industrial Technical Institute (ITI), Maharashtra State",
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS"
  },
  {
    name: "Diploma in CNC Operator",
    duration: "1 Year",
    eligibility: "10th Passed from any recognized board",
    fees: "Contact Counsel Desk",
    seats: 30,
    highlights: "Advanced vocational course covering CNC programming, milling, turning machine operations, and CAD/CAM basics.",
    careerOpportunities: "CNC Machinist, VMC Operator, Machine Setter, CNC Maintenance Assistant.",
    isIti: true,
    universityOrInstitution: "Industrial Technical Institute (ITI), Maharashtra State",
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS"
  },
  {
    name: "Diploma in Welder",
    duration: "1 Year",
    eligibility: "10th Passed / Fail",
    fees: "Contact Counsel Desk",
    seats: 30,
    highlights: "Practical expertise in arc welding, gas welding, TIG/MIG welding techniques, and safety standards.",
    careerOpportunities: "Structural Welder, Gas Fabricator, Pipeline Welder, Structural Welder.",
    isIti: true,
    universityOrInstitution: "Industrial Technical Institute (ITI), Maharashtra State",
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS"
  },
  {
    name: "Diploma in Sales & Marketing",
    duration: "1 Year",
    eligibility: "10th / 12th Passed from any stream",
    fees: "Contact Counsel Desk",
    seats: 40,
    highlights: "Job-oriented skill course in retail sales, digital marketing fundamentals, customer relation management, and sales pitch delivery.",
    careerOpportunities: "Sales Executive, Retail Store Supervisor, Customer Relationship Officer, Digital Marketing Assistant.",
    isIti: true,
    universityOrInstitution: "Industrial Technical Institute (ITI), Maharashtra State",
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS"
  },
  {
    name: "Bachelor of Arts (B.A.)",
    duration: "3 Years",
    eligibility: "12th Passed from any stream",
    fees: "Contact Counsel Desk",
    seats: 200,
    highlights: "Online and Distance degree. Choice of subjects (English, History, Sociology). Affiliated university counseling.",
    universityOrInstitution: "Mangalayatan University (MU)",
    mode: "UGC-DEB Online / Distance"
  },
  {
    name: "Bachelor of Commerce (B.Com.)",
    duration: "3 Years",
    eligibility: "12th Passed from any stream",
    fees: "Contact Counsel Desk",
    seats: 200,
    highlights: "Focus on corporate accounting, business economics, and taxation. Highly flexible for working professionals.",
    universityOrInstitution: "Tilak Maharashtra Vidyapeeth (TMV)",
    mode: "Distance / Online"
  },
  {
    name: "Bachelor of Science (B.Sc.)",
    duration: "3 Years",
    eligibility: "12th Passed in Science stream",
    fees: "Contact Counsel Desk",
    seats: 120,
    highlights: "Distance mode science education. Flexible lab schedules and comprehensive study support.",
    universityOrInstitution: "ISBM University",
    mode: "Distance / Online"
  },
  {
    name: "Bachelor of Business Administration (BBA)",
    duration: "3 Years",
    eligibility: "12th Passed in any stream",
    fees: "Contact Counsel Desk",
    seats: 120,
    highlights: "Core marketing, finance, and human resource management. Direct Learn & Earn scheme alignment.",
    universityOrInstitution: "Mangalayatan University (MU)",
    mode: "UGC-DEB Online / Distance"
  },
  {
    name: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years",
    eligibility: "12th Passed in any stream",
    fees: "Contact Counsel Desk",
    seats: 120,
    highlights: "Core programming languages, web development, and database administration via distance learning.",
    universityOrInstitution: "Mangalayatan University (MU)",
    mode: "UGC-DEB Online / Distance"
  },
  {
    name: "Master of Business Administration (MBA)",
    duration: "2 Years",
    eligibility: "Bachelor's Degree in any discipline",
    fees: "Contact Counsel Desk",
    seats: 120,
    highlights: "Specializations in HR, Marketing, Operations, and IT. Perfect for career transitions in corporate sectors.",
    universityOrInstitution: "Mangalayatan University (MU)",
    mode: "UGC-DEB Online / Distance"
  },
  {
    name: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    eligibility: "Graduation with Mathematics at 10+2 or degree level",
    fees: "Contact Counsel Desk",
    seats: 60,
    highlights: "Advanced software system design, computer architectures, and software engineering methodologies.",
    universityOrInstitution: "Mangalayatan University (MU)",
    mode: "UGC-DEB Online / Distance"
  },
  {
    name: "Master of Commerce (M.Com.)",
    duration: "2 Years",
    eligibility: "B.Com / BBA or equivalent graduation degree",
    fees: "Contact Counsel Desk",
    seats: 100,
    highlights: "Advanced business analysis, financial management, and corporate auditing modules.",
    universityOrInstitution: "Tilak Maharashtra Vidyapeeth (TMV)",
    mode: "Distance / Online"
  },
  {
    name: "Master of Arts (M.A.)",
    duration: "2 Years",
    eligibility: "Graduation in any discipline",
    fees: "Contact Counsel Desk",
    seats: 100,
    highlights: "Advanced studies in Literature, History, or Social Sciences via flexible online learning.",
    universityOrInstitution: "Tilak Maharashtra Vidyapeeth (TMV)",
    mode: "Distance / Online"
  },
  {
    name: "Skill Development Programs",
    duration: "3 - 6 Months",
    eligibility: "10th / 12th passed or working professionals",
    fees: "Contact Counsel Desk",
    seats: 500,
    highlights: "NSDC / Skill India certified job-oriented vocational modules with NAPS internship assistance.",
    universityOrInstitution: "NSDC / Skill India Center",
    mode: "Flexible / Regular"
  }
];

export const successStories = [
  {
    name: "Aditya Sharma",
    branch: "BBA (Batch of 2024)",
    company: "ICICI Bank",
    designation: "Assistant Manager",
    package: "Learn & Earn Graduate",
    imagePlaceholder: "AS",
    quote: "Thanks to the flexible Distance BBA at Ratnaparkkhi Institute, I was able to manage my work while completing my degree, which immediately led to a corporate promotion."
  },
  {
    name: "Pooja Patil",
    branch: "ITI Electrician (Batch of 2023)",
    company: "Mahadiscom",
    designation: "Junior Technical Apprentice",
    package: "NAPS Placed",
    imagePlaceholder: "PP",
    quote: "The practical trades program and NAPS apprenticeship coordinates at Ratnaparkkhi Institute prepared me directly for government energy sector placements."
  },
  {
    name: "Rahul Deshpande",
    branch: "MBA (Batch of 2024)",
    company: "TATA Motors",
    designation: "Operations Executive",
    package: "Distance Learning Success",
    imagePlaceholder: "RD",
    quote: "Completing my MBA online through Ratnaparkkhi Institute's authorized university counseling gave me the credentials needed to take on management roles."
  },
  {
    name: "Sneha Nair",
    branch: "BCA (Batch of 2023)",
    company: "Infosys BPM",
    designation: "Process Associate",
    package: "Skill India Placed",
    imagePlaceholder: "SN",
    quote: "Combining the BCA degree with the NSDC Skill Development program gave me an exceptional edge in clearing placement interviews."
  }
];

export const scholarshipsList = [
  {
    name: "Distance Education Merit Waiver",
    benefit: "Partial Fee Concession",
    eligibility: "For students with outstanding academic records in 10th or 12th board exams."
  },
  {
    name: "Working Professionals Assistance",
    benefit: "Flexible Payment Installments",
    eligibility: "For currently employed professionals seeking graduation/post-graduation degrees."
  },
  {
    name: "Social Welfare Scholarship Support",
    benefit: "Fee Reimbursement Coordination",
    eligibility: "Full guidance and assistance in submitting state scholarship forms for eligible candidates."
  },
  {
    name: "Skill Development Sponsorship",
    benefit: "Sponsorship for NSDC Trades",
    eligibility: "Reserved for students from economically weaker sections showing merit in vocational tests."
  }
];

export const blogPosts = [
  {
    slug: "benefits-of-distance-learning",
    title: "Why Distance & Online Education is the Future for Professionals",
    excerpt: "Discover how distance learning is enabling working professionals to gain degrees without resigning from their jobs.",
    date: "June 15, 2026",
    author: "Dr. S. K. Deshmukh (Academic Director)",
    content: "With rising demands for credentials in the job market, returning to a physical classroom isn't feasible for everyone. Online and Distance Education provides the ultimate flexibility, allowing you to learn at your own pace while maintaining a full-time job. Ratnaparkkhi Institute provides comprehensive study materials, counseling, and exam support for UGC-approved degrees, ensuring you achieve academic success without compromise.",
    readTime: "4 min read"
  },
  {
    slug: "learn-and-earn-scheme-benefits",
    title: "Understanding the Learn & Earn Scheme for Skill Development",
    excerpt: "Learn how NSDC and Skill India certified courses can help you earn stipends while studying.",
    date: "June 08, 2026",
    author: "Dr. Vinay Joshi (Dean of Skill Development)",
    content: "The Learn & Earn model is a revolutionary pathway bridging education and immediate employment. By enrolling in certified skill programs, students participate in real-world corporate apprenticeships (NAPS). This gives them critical hand-on skills, a monthly stipend to support their fees, and a direct path to full-time placement after graduation.",
    readTime: "5 min read"
  },
  {
    slug: "career-guidance-after-iti-trades",
    title: "Career Pathways & NAPS Apprenticeships after ITI Trades",
    excerpt: "A complete guide on securing government and private technical jobs after your vocational training.",
    date: "May 28, 2026",
    author: "Prof. Anjali Kulkarni (Admissions Head)",
    content: "Completing an ITI trade is one of the fastest routes to a stable technical career. Under the National Apprenticeship Promotion Scheme (NAPS), ITI graduates can directly secure internships at state utilities like Mahadiscom, railways, or private engineering corporations. Ratnaparkkhi Institute coordinates NAPS application desk support, helping students secure their placement.",
    readTime: "4 min read"
  }
];
