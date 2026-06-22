import React from 'react';
import Link from 'next/link';
import EnquiryForm from '@/components/EnquiryForm';
import { blogPosts } from '@/components/data/collegeData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Find matching blog post
  const post = blogPosts.find(b => b.slug === slug);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-navy-900">Article Not Found</h2>
        <p className="text-sm text-slate-500">The career guidance post you are looking for does not exist or has been moved.</p>
        <Link 
          href="/career-guidance-blog" 
          className="inline-block px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-950 rounded-lg cursor-pointer"
        >
          Back to Blog List
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20 space-y-12">
      
      {/* Blog Article Banner */}
      <section className="bg-slate-50 border-b border-slate-100 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#0b2240_1px,transparent_1px),linear-gradient(to_bottom,#0b2240_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="flex justify-center items-center gap-4 text-xs text-gold-600 font-bold uppercase tracking-wider">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-navy-900">
            {post.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Written by {post.author}
          </p>
        </div>
      </section>

      {/* Article Content & conversion sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Body */}
          <article className="lg:col-span-8 space-y-6 text-slate-700">
            <h3 className="text-xl font-bold text-navy-900 border-l-4 border-gold-500 pl-4 py-1.5 bg-slate-50 rounded-r-lg">
              Summary Outline
            </h3>
            <p className="text-sm italic leading-relaxed text-slate-500 font-semibold">
              {post.excerpt}
            </p>
            
            <div className="border-t border-slate-100 pt-6 space-y-4 text-sm sm:text-base leading-relaxed font-medium">
              {post.content.split('\n\n').map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
            
            {/* Extended academic context block */}
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl space-y-4 text-xs mt-10">
              <h4 className="font-bold text-navy-900">Academic Guidance Policy</h4>
              <p className="text-slate-500 leading-relaxed font-medium">
                Ratnaparkkhi Institute of Engineering & Management is dedicated to keeping engineering and management syllabi updated with current industrial developments. We provide all students with access to software tools, coding bootcamps, mock tests, and alumni referral opportunities. Admissions are currently open for B.Tech, MBA, and MCA courses.
              </p>
            </div>

            <div className="pt-8">
              <Link 
                href="/career-guidance-blog"
                className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 hover:text-gold-600 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog list
              </Link>
            </div>
          </article>

          {/* Enquiry Sidebar */}
          <div className="lg:col-span-4 w-full space-y-6">
            <EnquiryForm 
              title="Speak to Counsel Desk"
              subtitle="Get guidance on cutoffs, direct seats, and fees structure."
              compact={true}
            />

            {/* Quick Contact Box */}
            <div className="bg-white border border-slate-100 p-6 rounded-xl shadow-md text-center space-y-4">
              <h4 className="font-bold text-navy-900 text-sm">Need help choosing a branch?</h4>
              <p className="text-xs text-slate-500">Our admission experts will review your CET/JEE grades and guide you.</p>
              <a 
                href="tel:+919876543210"
                className="block w-full py-2.5 text-xs font-bold text-navy-950 bg-gold-500 hover:bg-gold-600 rounded-lg cursor-pointer"
              >
                Call Hotline
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
