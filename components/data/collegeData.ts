// Configurable College Data for Ratnaparkkhi Institute™ of Engineering & Management
// Updated with the official institute profile focusing on Engineering and ITI trades

export const tagline = "Learn & Earn";
export const establishedYear = "Since 2008";
export const officialPhone = "+91 9923303437 / +91 9923313437";
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
  category: 'ENGINEERING' | 'ITI' | 'MANAGEMENT';
  isIti?: boolean;
  mode?: string;
  careerOpportunities?: string;
  approvedBy?: string;
  skillPartners?: string;
}

export const achievements = [
  { title: "Passed Students", value: "23,000+ Students", desc: "Successfully completed engineering, technical, and vocational certification programs." },
  { title: "Academic Success", value: "100% Success Rate", desc: "Maintained complete academic support and practical training guidance ensuring program success." },
  { title: "Job Placements", value: "8,000+ Placed", desc: "Students placed in private engineering enterprises and government utilities." },
  { title: "Geographical Reach", value: "PAN India Coverage", desc: "Students enrolled from all states and union territories across India." },
  { title: "Career Sectors", value: "Govt & Private", desc: "Alumni working in state power utilities, railways, and top private engineering firms." }
];

export const whyParentsTrust = [
  {
    title: "Learn & Earn Scheme Model",
    desc: "Earn monthly stipends while acquiring technical skills and trade certifications. Perfect alignment of industry-oriented learning."
  },
  {
    title: "100% Academic Success Support",
    desc: "Comprehensive counseling, course materials, and workshop guidance to ensure every student successfully clears their trades."
  },
  {
    title: "Vocational & Practical ITI Trades",
    desc: "Hands-on engineering workshops and technical trade courses designed to build job-ready mechanical and electrical operators."
  },
  {
    title: "National Skill Council Certifications",
    desc: "Approved NSDC, Skill India, NAPS, and BTP programs providing official corporate apprenticeships and vocational validations."
  },
  {
    title: "Affordable Technical Education",
    desc: "Highly accessible courses with installment options, bringing technical engineering and ITI trades within reach of everyone."
  }
];

export const campusGallery = [
  { title: "Admissions Counselling Center", category: "Infrastructure", desc: "Authorized desk for engineering, ITI, and management admissions." },
  { title: "Skill India Training Room", category: "Skill Development", desc: "Hands-on vocational labs for technical and professional development." },
  { title: "Technical Study Library", category: "Resources", desc: "Home to engineering syllabus guides, blueprints, and digital materials." },
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
    qualification: "Ph.D. in Technical Education",
    imagePlaceholder: "SD",
    bio: "Passionate expert dedicated to delivering quality engineering and technical education models for aspiring professionals."
  },
  {
    name: "Prof. Anjali Kulkarni",
    designation: "Head, Counseling & Admissions",
    qualification: "MBA in Career Guidance",
    imagePlaceholder: "AK",
    bio: "Helps students choose the right engineering branch or ITI trade pathway and coordinates training benefits."
  },
  {
    name: "Dr. Vinay Joshi",
    designation: "Dean of Engineering & Skill Development",
    qualification: "Ph.D. in Vocational Systems",
    imagePlaceholder: "VJ",
    bio: "Spearheads industry apprenticeships (NAPS/NATS) and NSDC corporate alliances for Learn & Earn placements."
  }
];

export const coursesOffered: Course[] = [
  // --- ENGINEERING ---
  {
    name: "Computer Science Engineering",
    duration: "4 Years",
    seats: 60,
    eligibility: "12th Passed with Physics, Chemistry & Mathematics",
    fees: "Contact Counsel Desk",
    highlights: "Comprehensive curriculum in software engineering, database systems, artificial intelligence, and web technologies.",
    category: "ENGINEERING",
    mode: "Regular / Full-time",
    careerOpportunities: "Software Engineer, Web Developer, System Analyst, Database Administrator."
  },
  {
    name: "Mechanical Engineering",
    duration: "4 Years",
    seats: 60,
    eligibility: "12th Passed with Physics, Chemistry & Mathematics",
    fees: "Contact Counsel Desk",
    highlights: "Study of thermodynamics, fluid mechanics, machine design, manufacturing processes, and automotive systems.",
    category: "ENGINEERING",
    mode: "Regular / Full-time",
    careerOpportunities: "Design Engineer, Production Engineer, Maintenance Engineer, Quality Control Inspector."
  },
  {
    name: "Civil Engineering",
    duration: "4 Years",
    seats: 60,
    eligibility: "12th Passed with Physics, Chemistry & Mathematics",
    fees: "Contact Counsel Desk",
    highlights: "Structural analysis, geotechnical engineering, concrete technology, transportation, and construction management.",
    category: "ENGINEERING",
    mode: "Regular / Full-time",
    careerOpportunities: "Site Engineer, Structural Consultant, Project Manager, Quantity Surveyor."
  },
  {
    name: "Electrical Engineering",
    duration: "4 Years",
    seats: 60,
    eligibility: "12th Passed with Physics, Chemistry & Mathematics",
    fees: "Contact Counsel Desk",
    highlights: "Power systems, electrical machines, control systems, transmission and distribution networks.",
    category: "ENGINEERING",
    mode: "Regular / Full-time",
    careerOpportunities: "Electrical Engineer, Substation Engineer, Maintenance Specialist, Grid Operator."
  },
  {
    name: "Electronics & Telecommunication Engineering",
    duration: "4 Years",
    seats: 60,
    eligibility: "12th Passed with Physics, Chemistry & Mathematics",
    fees: "Contact Counsel Desk",
    highlights: "Analog & digital communication, VLSI design, signal processing, embedded systems, and networks.",
    category: "ENGINEERING",
    mode: "Regular / Full-time",
    careerOpportunities: "Telecom Engineer, Network Administrator, Embedded Systems Developer, Electronics Consultant."
  },

  // --- ITI TRADES ---
  {
    name: "Electrician",
    duration: "2 Years",
    seats: 40,
    eligibility: "10th Passed from any recognized board",
    fees: "Contact Counsel Desk",
    highlights: "Practical training in domestic and industrial wiring, electrical motors, transformers, generators, and power installations.",
    category: "ITI",
    isIti: true,
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS",
    careerOpportunities: "Electrical Contractor, Junior Electrician in Railways/Mahadiscom, Maintenance Technician, Solar Installer."
  },
  {
    name: "Fitter",
    duration: "2 Years",
    seats: 40,
    eligibility: "10th Passed from any recognized board",
    fees: "Contact Counsel Desk",
    highlights: "Hands-on training in filing, drilling, piping, structural metal fitting, welding jointing, and assembly operations.",
    category: "ITI",
    isIti: true,
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS",
    careerOpportunities: "Industrial Fitter, Maintenance Technician in Auto Plant, Mechanical Apprentice, Assembly Operator."
  },
  {
    name: "Welder",
    duration: "1 Year",
    seats: 30,
    eligibility: "8th / 10th Passed",
    fees: "Contact Counsel Desk",
    highlights: "Specialized training in gas welding, manual metal arc welding, MIG/TIG welding, plasma cutting, and structural fabrication.",
    category: "ITI",
    isIti: true,
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS",
    careerOpportunities: "Fabricator, Structural Welder, Pipe Welder, Welding Inspector."
  },
  {
    name: "COPA (Computer Operator & Programming Assistant)",
    duration: "1 Year",
    seats: 40,
    eligibility: "10th Passed from any recognized board",
    fees: "Contact Counsel Desk",
    highlights: "Fundamental training in computer hardware, operating systems, database management, internet technologies, and basic programming.",
    category: "ITI",
    isIti: true,
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS",
    careerOpportunities: "Computer Operator, Data Entry Executive, IT Assistant, Database Helpdesk Assistant."
  },
  {
    name: "Diesel Mechanic",
    duration: "1 Year",
    seats: 30,
    eligibility: "10th Passed from any recognized board",
    fees: "Contact Counsel Desk",
    highlights: "Practical training in engine repair, fuel systems, lubrication systems, engine servicing, and diagnostics of heavy diesel vehicles.",
    category: "ITI",
    isIti: true,
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS",
    careerOpportunities: "Auto Mechanic, Fleet Service Technician, Diesel Engine Operator, Railway Mechanic."
  },
  {
    name: "Turner",
    duration: "2 Years",
    seats: 20,
    eligibility: "10th Passed from any recognized board",
    fees: "Contact Counsel Desk",
    highlights: "Specialized training in metal cutting, turning operations, screw threading, taper turning, and precision machining on lathe machines.",
    category: "ITI",
    isIti: true,
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS",
    careerOpportunities: "Lathe Machine Turner, Tool Room Operator, Machinist Technician, Production Operator."
  },
  {
    name: "Machinist",
    duration: "2 Years",
    seats: 20,
    eligibility: "10th Passed from any recognized board",
    fees: "Contact Counsel Desk",
    highlights: "Instruction on milling machines, shaping machines, slotting machines, grinders, and general metal fabrication tools.",
    category: "ITI",
    isIti: true,
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS",
    careerOpportunities: "Machine Operator, Toolmaker, Production Machinist, Machine Setter."
  },
  {
    name: "Wireman",
    duration: "2 Years",
    seats: 30,
    eligibility: "8th / 10th Passed",
    fees: "Contact Counsel Desk",
    highlights: "Comprehensive training in domestic wiring, overhead distribution lines, commercial installations, and electrical testing.",
    category: "ITI",
    isIti: true,
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS",
    careerOpportunities: "Domestic Wireman, Electrical Maintenance Helper, Lineman Apprentice."
  },
  {
    name: "Plumber",
    duration: "1 Year",
    seats: 30,
    eligibility: "8th / 10th Passed",
    fees: "Contact Counsel Desk",
    highlights: "Instruction in pipe layouting, sanitary installations, water pump connections, leak repairs, and drainage configurations.",
    category: "ITI",
    isIti: true,
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS",
    careerOpportunities: "Plumbing Contractor, Maintenance Plumber, Pipefitting Assistant."
  },
  {
    name: "Refrigeration & Air Conditioning (R&AC)",
    duration: "2 Years",
    seats: 30,
    eligibility: "10th Passed from any recognized board",
    fees: "Contact Counsel Desk",
    highlights: "Specialized training in compressor repairs, refrigerator wiring, AC installations, gas charging, and cooling system diagnostics.",
    category: "ITI",
    isIti: true,
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS",
    careerOpportunities: "HVAC Technician, AC Service Specialist, Refrigerator Repairer, Plant Maintenance Mechanic."
  },
  {
    name: "Electronics Mechanic",
    duration: "2 Years",
    seats: 30,
    eligibility: "10th Passed with Science & Mathematics",
    fees: "Contact Counsel Desk",
    highlights: "Practical training in soldering, PCB designing, microcontrollers, troubleshooting of audio/video systems, and digital electronic gadgets.",
    category: "ITI",
    isIti: true,
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS",
    careerOpportunities: "Electronics Technician, PCB Designer, Hardware Support Executive, Solar Inverter Specialist."
  },
  {
    name: "Surveyor",
    duration: "2 Years",
    seats: 20,
    eligibility: "10th Passed from any recognized board",
    fees: "Contact Counsel Desk",
    highlights: "Practical instruction in leveling, chain surveying, plane table, total station usage, GPS mapping, and contour mapping.",
    category: "ITI",
    isIti: true,
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS",
    careerOpportunities: "Land Surveyor, Construction Assistant, CAD Draftsman, Mining Surveyor Assistant."
  },
  {
    name: "Other ITI Trades",
    duration: "1 - 2 Years",
    seats: 100,
    eligibility: "10th Passed or Fail",
    fees: "Contact Counsel Desk",
    highlights: "A variety of vocational trades such as Sheet Metal Worker, Welder, and basic engineering skills aligned with local industries.",
    category: "ITI",
    isIti: true,
    mode: "Regular / Practical",
    approvedBy: "DGT / NCVT",
    skillPartners: "NSDC / Skill India / NAPS",
    careerOpportunities: "Workshop Assistant, Industrial Apprentice, Skill Trainee."
  },

  // --- MANAGEMENT ---
  {
    name: "Master of Business Administration (MBA)",
    duration: "2 Years",
    seats: 120,
    eligibility: "Bachelor's Degree in any discipline",
    fees: "Contact Counsel Desk",
    highlights: "Advanced management training, strategic leadership modules, and comprehensive specialized coursework with top-tier placement support.",
    category: "MANAGEMENT",
    mode: "UGC-Approved Program",
    careerOpportunities: "Marketing Manager, Financial Analyst, HR Manager, Operations Head, Consultant."
  }
];

export const mbaSpecializations = [
  { name: "Marketing Management", desc: "Focus on consumer behavior, brand management, digital marketing, and market research." },
  { name: "Financial Management", desc: "Covers corporate finance, investment banking, portfolio management, and financial analysis." },
  { name: "Human Resource Management", desc: "Training in talent acquisition, employee relations, organizational behavior, and performance systems." },
  { name: "Information Technology", desc: "Bridge business and technology with systems analysis, database management, and tech strategy." },
  { name: "Operations Management", desc: "Optimize processes, quality control, logistics, lean manufacturing, and project management." },
  { name: "Business Analytics", desc: "Learn data-driven decision making, predictive modeling, data visualization, and business intelligence." },
  { name: "International Business", desc: "Understand global trade, cross-border management, international finance, and global markets." },
  { name: "Supply Chain Management", desc: "Covers procurement, supply network design, materials management, and logistics execution." },
  { name: "Hospital Management", desc: "Healthcare systems management, hospital operations, healthcare policies, and administration." },
  { name: "Retail Management", desc: "Store operations, visual merchandising, supply chain in retail, and customer relationship management." },
  { name: "Entrepreneurship", desc: "New venture creation, startup financing, business planning, and innovation management." },
  { name: "Banking & Finance", desc: "Commercial banking, risk management, financial markets, and wealth management services." },
  { name: "Digital Marketing", desc: "SEO/SEM, social media marketing, content strategy, email marketing, and growth hacking." }
];

export const successStories = [
  {
    name: "Aditya Sharma",
    branch: "Computer Science Engineering (Batch of 2024)",
    company: "Tech Mahindra",
    designation: "Assistant Manager",
    package: "Learn & Earn Graduate",
    imagePlaceholder: "AS",
    quote: "Thanks to the industry-aligned Computer Science Engineering program at Ratnaparkkhi Institute™, I gained solid software engineering skills that helped me secure a campus placement as an Assistant Manager."
  },
  {
    name: "Pooja Patil",
    branch: "ITI Electrician (Batch of 2023)",
    company: "Mahadiscom",
    designation: "Junior Technical Apprentice",
    package: "NAPS Placed",
    imagePlaceholder: "PP",
    quote: "The practical trades program and NAPS apprenticeship coordinates at Ratnaparkkhi Institute™ prepared me directly for government energy sector placements."
  },
  {
    name: "Rahul Deshpande",
    branch: "MBA - Operations Management (Batch of 2024)",
    company: "TATA Motors",
    designation: "Operations Executive",
    package: "Technical Program Graduate",
    imagePlaceholder: "RD",
    quote: "Completing my MBA with a specialization in Operations Management through Ratnaparkkhi Institute™ gave me the leadership and technical credentials needed to take on management roles."
  },
  {
    name: "Sneha Nair",
    branch: "Mechanical Engineering (Batch of 2023)",
    company: "TATA AutoComp Systems",
    designation: "Design Engineer",
    package: "Industry Apprentice Placement",
    imagePlaceholder: "SN",
    quote: "Combining the Mechanical Engineering branch with the advanced CNC and design tool training gave me an exceptional edge in clearing structural manufacturing placement interviews."
  }
];

export const scholarshipsList = [
  {
    name: "Technical Education Merit Waiver",
    benefit: "Partial Fee Concession",
    eligibility: "For students with outstanding academic records in 10th or 12th board exams."
  },
  {
    name: "Working Professionals Assistance",
    benefit: "Flexible Payment Installments",
    eligibility: "For currently employed professionals seeking technical engineering or MBA specializations."
  },
  {
    name: "Social Welfare Scholarship Support",
    benefit: "Fee Reimbursement Coordination",
    eligibility: "Full guidance and assistance in submitting state scholarship forms for eligible candidates."
  },
  {
    name: "Skill Development Sponsorship",
    benefit: "Sponsorship for NSDC & ITI Trades",
    eligibility: "Reserved for students from economically weaker sections showing merit in vocational tests."
  }
];

export const blogPosts = [
  {
    slug: "benefits-of-technical-education",
    title: "Why Technical & Engineering Education is the Future for Professionals",
    excerpt: "Discover how advanced technical training is enabling working professionals to gain engineering credentials without resigning.",
    date: "June 15, 2026",
    author: "Dr. S. K. Deshmukh (Academic Director)",
    content: "With rising demands for technical skills in the job market, technical and engineering education provides the ultimate career gateway. Ratnaparkkhi Institute™ provides comprehensive study materials, counseling, and exam support for technical branches, ensuring you achieve academic success without compromise.",
    readTime: "4 min read"
  },
  {
    slug: "learn-and-earn-scheme-benefits",
    title: "Understanding the Learn & Earn Scheme for Skill Development",
    excerpt: "Learn how NSDC and Skill India certified courses can help you earn stipends while studying.",
    date: "June 08, 2026",
    author: "Dr. Vinay Joshi (Dean of Engineering)",
    content: "The Learn & Earn model is a revolutionary pathway bridging education and immediate employment. By enrolling in certified skill programs, students participate in real-world corporate apprenticeships (NAPS). This gives them critical hand-on skills, a monthly stipend to support their fees, and a direct path to full-time placement after graduation.",
    readTime: "5 min read"
  },
  {
    slug: "career-guidance-after-iti-trades",
    title: "Career Pathways & NAPS Apprenticeships after ITI Trades",
    excerpt: "A complete guide on securing government and private technical jobs after your vocational training.",
    date: "May 28, 2026",
    author: "Prof. Anjali Kulkarni (Admissions Head)",
    content: "Completing an ITI trade is one of the fastest routes to a stable technical career. Under the National Apprenticeship Promotion Scheme (NAPS), ITI graduates can directly secure internships at state utilities like Mahadiscom, railways, or private engineering corporations. Ratnaparkkhi Institute™ coordinates NAPS application desk support, helping students secure their placement.",
    readTime: "4 min read"
  }
];
