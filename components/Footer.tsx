import React from 'react';
import Link from 'next/link';
import { officialPhone, officialEmail, tagline } from './data/collegeData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-900 pt-16 pb-8 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Ratnaparkkhi Institute Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Ratnaparkkhi Institute of Engineering & Management Logo" 
                className="w-10 h-10 object-contain bg-white rounded p-0.5" 
              />
              <div>
                <span className="block font-black text-white text-xs tracking-wide uppercase leading-tight max-w-[180px]">
                  Ratnaparkkhi Institute™ of Engineering & Management
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Ratnaparkkhi Institute™ of Engineering & Management is a premier educational center dedicated to producing skilled professionals and industry leaders through holistic mentoring and advanced technological labs.
            </p>
            <div className="pt-2 space-y-2">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Affiliations & Registrations</span>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-navy-900 border border-navy-800 text-[10px] text-gold-500 font-bold px-2.5 py-1.5 rounded uppercase tracking-wider">
                  Skill India
                </span>
                <span className="inline-block bg-navy-900 border border-navy-800 text-[10px] text-gold-500 font-bold px-2.5 py-1.5 rounded uppercase tracking-wider">
                  BTP
                </span>
                <span className="inline-block bg-navy-900 border border-navy-800 text-[10px] text-gold-500 font-bold px-2.5 py-1.5 rounded uppercase tracking-wider">
                  MHV
                </span>
              </div>
            </div>
          </div>

          {/* Quick Academic Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-gold-500 rounded-full"></span>
              Academics & Careers
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/courses" className="hover:text-gold-500 hover:underline transition-all">Courses Offered</Link>
              </li>
              <li>
                <Link href="/placement-cell" className="hover:text-gold-500 hover:underline transition-all">Placement Cell</Link>
              </li>
              <li>
                <Link href="/internship-program" className="hover:text-gold-500 hover:underline transition-all">Internship Program</Link>
              </li>
              <li>
                <Link href="/scholarship-program" className="hover:text-gold-500 hover:underline transition-all">Scholarships & Financial Aid</Link>
              </li>
              <li>
                <Link href="/student-success-stories" className="hover:text-gold-500 hover:underline transition-all">Student Success Stories</Link>
              </li>
            </ul>
          </div>

          {/* Resources & Partnerships */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-gold-500 rounded-full"></span>
              Institute Network
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/about-riem" className="hover:text-gold-500 hover:underline transition-all">About the Institute</Link>
              </li>
              <li>
                <Link href="/online-admission" className="hover:text-gold-500 hover:underline transition-all">Online Admission Portal</Link>
              </li>
              <li>
                <Link href="/franchise-network" className="hover:text-gold-500 hover:underline transition-all">Franchise & Collaboration</Link>
              </li>
              <li>
                <Link href="/career-guidance-blog" className="hover:text-gold-500 hover:underline transition-all">Career Guidance Blog</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gold-500 hover:underline transition-all">Contact Us Office</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-gold-500 rounded-full"></span>
              Reach Us
            </h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="leading-relaxed text-slate-400">
                  &quot;Tirumal&quot; Plot No. 8, New Shantiniketan Colony, Trimurti Chowk, Chh. Sambhajinagar.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href={`tel:${officialPhone.split('/')[0].trim().replace(/\s+/g, '')}`}
                  title="Click to Call Admissions"
                  className="text-slate-400 hover:text-gold-500 transition-colors cursor-pointer"
                >
                  {officialPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href={`mailto:${officialEmail}`}
                  title="Click to Email Registrar"
                  className="text-slate-400 hover:text-gold-500 transition-colors cursor-pointer"
                >
                  {officialEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Socials & Copy bar (Official Social Media handles) */}
        <div className="mt-16 pt-8 border-t border-navy-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Ratnaparkkhi Institute™ of Engineering & Management. All rights reserved. Estd 2008.
          </div>
          <div className="flex gap-6 font-semibold">
            <a 
              href="https://www.facebook.com/profile.php?id=61590633531243" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold-500 transition-colors cursor-pointer"
            >
              Facebook
            </a>
            <a 
              href="https://www.instagram.com/ratnaparkkhiinstitute/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold-500 transition-colors cursor-pointer"
            >
              Instagram
            </a>
            <a 
              href="https://x.com/RatnaparkkhiEdu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold-500 transition-colors cursor-pointer"
            >
              Twitter (X)
            </a>
            <a 
              href="https://www.linkedin.com/in/ratnaparkkhi-institute-13752b411/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold-500 transition-colors cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;