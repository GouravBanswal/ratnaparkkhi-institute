import React from 'react';
import { facultyHighlights } from '@/components/data/collegeData';
import { TM } from '@/lib/helpers';

// Local data structures for the new content to keep the component clean
const educationalPillars = [
  {
    title: "Our Educational Philosophy",
    content: "True education develops analytical thinking, communication skills, adaptability, leadership, ethical decision-making, and confidence. Our core principles are Academic Excellence, Practical Learning, Professional Ethics, Innovation and Creativity, and Lifelong Learning."
  },
  {
    title: "Student-Centered Learning",
    content: "Students remain at the heart of everything we do. We encourage independent thinking, real-world problem solving, active participation, and building confidence through practical experiences to create professionally prepared and socially responsible graduates."
  },
  {
    title: "Academic Excellence",
    content: "Quality education is our foundation. We focus on strong conceptual understanding, analytical thinking, research orientation, professional communication, and ethical values supported through interactive teaching and practical applications."
  },
  {
    title: "Skill Development",
    content: "Modern employers value skills as much as qualifications. We emphasize communication, personality development, digital skills, leadership, and problem-solving to prepare learners for professional environments with confidence."
  },
  {
    title: "Innovation and Entrepreneurship",
    content: "We encourage students to think creatively and develop practical solutions to real-world challenges. Entrepreneurship is cultivated as a mindset that encourages initiative, responsibility, innovation, and value creation."
  },
  {
    title: "Professional Development",
    content: "Career success depends upon continuous growth. We promote holistic development through career guidance, soft skills enhancement, resume building, interview readiness, and industry awareness."
  },
  {
    title: "Ethical Values and Responsibility",
    content: "Education is meaningful only when supported by integrity. Our culture promotes honesty, respect, accountability, inclusiveness, and social responsibility to encourage students to become responsible professionals and citizens."
  },
  {
    title: "Looking Towards the Future",
    content: "Our long-term focus is on creating an environment where education inspires innovation, skills create opportunities, values guide decisions, and learning continues throughout life."
  }
];

// Leadership Team data
const leadershipTeam = [
  {
    designation: "Chairman & Founder",
    names: [],
    initials: "CF",
    description: "Provides visionary leadership and strategic direction for Ratnaparkhi Institute of Engineering & Management while promoting academic excellence, innovation, ethical values, and long-term institutional growth.",
  },
  {
    designation: "Director (Operations & Administration)",
    names: ["Atul Ratnaparkhi"],
    initials: "AR",
    description: "Leads institutional operations, administration, infrastructure management, policy implementation, and organizational development while ensuring efficient coordination across all departments.",
  },
  {
    designation: "Academic Director / Principal",
    names: [],
    initials: "AD",
    description: "Provides academic leadership, curriculum planning, faculty development, quality assurance, and student-centered education while maintaining high academic standards.",
  },
  {
    designation: "Registrar",
    names: ["Sau. Pallavi Ratnaparkhi"],
    initials: "PR",
    description: "Responsible for academic administration, examinations, student records, regulatory compliance, institutional documentation, and administrative coordination.",
  },
  {
    designation: "Finance & Accounts Director",
    names: ["Navneesh Dubey"],
    initials: "ND",
    description: "Oversees budgeting, accounting, financial planning, compliance, institutional finance management, and transparent financial operations.",
  },
  {
    designation: "Administrative Officer",
    names: [],
    initials: "AO",
    description: "Coordinates day-to-day administration, office operations, institutional documentation, facilities management, and administrative support services.",
  },
  {
    designation: "Training & Admission Head",
    names: ["Sau. Purnima Holiye"],
    initials: "PH",
    description: "Leads admissions, student counseling, training initiatives, career guidance, and student support services while helping learners choose the right academic pathway.",
  },
  {
    designation: "Marketing & Placement Head",
    names: ["Yogesh Deole", "Gourav Banswal"],
    initials: "YG",
    description: "Leads institutional branding, digital marketing, admissions campaigns, industry partnerships, placement coordination, employer engagement, and student outreach initiatives.",
  },
];

const leadershipMessages = [
  {
    role: "Proprietor & Founder",
    title: "Message from the Proprietor & Founder",
    initials: "PF",
    content: "Welcome to Ratnaparkhi Institute of Engineering & Management (RIEM). Education is one of the most powerful tools for transforming lives and building a progressive society. With this belief, RIEM was established to provide quality education, practical learning, and career-oriented guidance that empowers students to achieve their professional aspirations. Our objective is to create an institution where academic excellence, ethical values, innovation, and lifelong learning are equally valued. We continuously strive to strengthen our academic practices, embrace modern technologies, and encourage industry-oriented learning experiences."
  },
  {
    role: "Director (Operations & Administration)",
    title: "Message from the Director",
    initials: "DO",
    content: "Operational excellence and efficient administration are the foundation of every successful educational institution. At RIEM, our goal is to ensure that every academic and administrative process functions with professionalism, transparency, accountability, and efficiency. We focus on creating a safe, disciplined, and student-friendly campus culture where learning can flourish, supporting the long-term vision of RIEM."
  },
  {
    role: "Academic Director / Principal",
    title: "Message from the Principal",
    initials: "AD",
    content: "Learning is the foundation of personal and professional success. At RIEM, our academic philosophy focuses on developing knowledgeable, skilled, ethical, and confident individuals who are prepared for future challenges. We encourage students to think critically, innovate responsibly, and pursue excellence in every aspect of their educational journey."
  },
  {
    role: "Registrar / Administrative Officer",
    title: "Message from the Registrar",
    initials: "RO",
    content: "The Registrar's Office plays a vital role in maintaining the academic and administrative framework of the institution. Our objective is to ensure efficient coordination, transparent processes, timely communication, and quality student services so students can focus on learning while receiving prompt assistance."
  },
  {
    role: "Training & Placement Head",
    title: "Message from Training & Placement",
    initials: "TP",
    content: "Career development is one of the most important aspects of higher education. At RIEM, we are committed to helping students enhance their professional skills, industry awareness, employability, and career readiness. By promoting practical exposure and professional development, we aim to prepare students for meaningful career opportunities."
  },
  {
    role: "Finance & Accounts Manager",
    title: "Message from Finance & Accounts",
    initials: "FA",
    content: "Financial responsibility and transparency are essential to the sustainable growth of any educational institution. At RIEM, we ensure that financial operations are conducted with integrity, accountability, and compliance, contributing significantly to institutional stability and long-term development."
  },
  {
    role: "Marketing & Admissions Head",
    title: "Message from Marketing & Admissions",
    initials: "MA",
    content: "Every student's educational journey begins with informed guidance and the right academic choice. Our team is committed to providing transparent information, personalized support, and a seamless admission experience. We warmly welcome aspiring learners to become part of the RIEM family."
  }
];

export default function AboutPage() {
  return (
    <div className="pb-20 space-y-16">
      
      {/* Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-navy-900">About Ratnaparkhi Institute of Engineering & Management<TM /></h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Shaping Knowledge, Skills, and Careers for a Better Tomorrow
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm space-y-6 text-slate-700 leading-relaxed">
          <p>
            <strong>Ratnaparkhi Institute of Engineering & Management (RIEM)</strong> is a progressive educational institution committed to empowering learners through quality education, skill development, professional training, and lifelong learning opportunities. Our vision is to create an academic environment where knowledge, innovation, ethics, and practical experience come together to prepare students for meaningful careers and responsible citizenship.
          </p>
          <p>
            Education today extends far beyond classrooms and textbooks. In a rapidly changing world driven by technology, globalization, and evolving industry expectations, students require a balanced learning experience that combines academic excellence with practical knowledge, professional values, leadership skills, and continuous personal development. At RIEM, we strive to create such an environment by encouraging curiosity, creativity, critical thinking, collaboration, and a commitment to lifelong learning.
          </p>
          <p>
            We believe that every student possesses unique potential. Our role is to nurture that potential through structured learning, academic guidance, skill enhancement, and career-focused development. Whether a learner is beginning a new academic journey, upgrading professional qualifications, or seeking industry-relevant knowledge, RIEM aims to provide the support, resources, and opportunities necessary for growth and success.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900">Leadership Team</h2>
          <p className="text-sm text-slate-500 font-medium">
            Meet the experienced leadership guiding Ratnaparkhi Institute of Engineering &amp; Management with a commitment to academic excellence, innovation, student success, and institutional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipTeam.map((member, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-slate-100 rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col items-center text-center"
            >
              {/* Top gold accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500 rounded-t-xl" />

              {/* Avatar */}
              <div className="mt-4 w-16 h-16 rounded-full bg-navy-50 border-2 border-gold-500 flex items-center justify-center font-bold text-navy-900 text-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                {member.initials}
              </div>

              {/* Designation */}
              <h3 className="text-base font-bold text-navy-900 leading-snug">
                {member.designation}
              </h3>

              {/* Name(s) */}
              {member.names.length > 0 && (
                <div className="mt-1 space-y-0.5">
                  {member.names.map((name, nIdx) => (
                    <p key={nIdx} className="text-sm text-gold-600 font-semibold">
                      {name}
                    </p>
                  ))}
                </div>
              )}

              {/* Divider */}
              <div className="w-8 h-px bg-slate-200 my-3" />

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {member.description}
              </p>

              {/* Subtle hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_65%)]" />
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-100 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
            <div className="w-12 h-12 bg-navy-50 border border-slate-100 text-gold-600 rounded-lg flex items-center justify-center font-bold text-xl">
              V
            </div>
            <h3 className="text-xl font-bold text-navy-900">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              To become a respected institution recognized for academic quality, innovation, skill development, ethical values, and excellence in professional education while contributing to the development of competent, confident, and socially responsible individuals.
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4">
            <div className="w-12 h-12 bg-navy-50 border border-slate-100 text-gold-600 rounded-lg flex items-center justify-center font-bold text-xl">
              M
            </div>
            <h3 className="text-xl font-bold text-navy-900">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Our mission is to provide accessible, learner-centric, and career-oriented education that equips students with the knowledge, practical skills, and professional competencies required in today&apos;s dynamic world. We are committed to:
            </p>
            <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1 font-medium">
              <li>Delivering quality education with academic integrity.</li>
              <li>Promoting practical learning and skill enhancement.</li>
              <li>Encouraging innovation, creativity, and entrepreneurship.</li>
              <li>Supporting students in their academic and professional development.</li>
              <li>Creating an inclusive, ethical, and collaborative learning environment.</li>
              <li>Inspiring lifelong learning and continuous self-improvement.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Educational Philosophy & Pillars */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-navy-900">Our Approach to Education</h2>
            <p className="text-sm text-slate-500 font-medium">
              Building confidence, developing capabilities, and discovering potential through structured learning and continuous improvement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationalPillars.map((pillar, idx) => (
              <div key={idx} className="bg-white border border-slate-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-navy-900 mb-2">{pillar.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {pillar.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900">Leadership Messages</h2>
          <p className="text-sm text-slate-500 font-medium">
            Hear from the visionaries and administrators guiding the future of RIEM.
          </p>
        </div>

        <div className="space-y-8">
          {leadershipMessages.map((msg, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className={`lg:col-span-3 text-center ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className="w-24 h-24 rounded-full bg-navy-50 border-2 border-gold-500 flex items-center justify-center font-bold text-navy-900 text-2xl mx-auto mb-4">
                  {msg.initials}
                </div>
                <h4 className="text-md font-bold text-navy-900">{msg.role}</h4>
              </div>
              <div className="lg:col-span-9 space-y-4">
                <h3 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-gold-500 rounded-full"></span>
                  {msg.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium italic">
                  &quot;{msg.content}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Faculty Highlights (Retained from original component) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-slate-100">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl font-extrabold text-navy-900">Our Core Faculty</h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Dedicated educators and managers guiding the Institute&apos;s operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyHighlights.map((f, i) => (
            <div key={i} className="bg-white border border-slate-100 p-6 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-navy-50 border border-gold-500 flex items-center justify-center font-bold text-navy-900 text-xl mx-auto mb-4">
                {f.imagePlaceholder}
              </div>
              <h4 className="font-bold text-navy-900">{f.name}</h4>
              <span className="text-xs text-gold-600 font-bold uppercase tracking-wider block mt-1">{f.designation}</span>
              <span className="text-xs text-slate-500 block mt-1 font-semibold">{f.qualification}</span>
              <p className="text-xs text-slate-500 mt-3 border-t border-slate-50 pt-3 leading-relaxed font-medium">
                {f.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}