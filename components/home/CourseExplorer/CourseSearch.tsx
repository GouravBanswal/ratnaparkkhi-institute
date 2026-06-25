'use client';

import React from 'react';

interface CourseSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function CourseSearch({ searchQuery, setSearchQuery }: CourseSearchProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center bg-white border border-slate-200 focus-within:border-[#D4AF37] rounded-full overflow-hidden transition-all shadow-md focus-within:shadow-lg w-full max-w-2xl mx-auto"
    >
      <div className="pl-5 text-slate-400 shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search engineering, ITI trades, MBA branches, eligibility..."
        className="w-full bg-transparent border-none text-xs sm:text-sm text-[#0B1F3A] px-4 py-4 focus:outline-none placeholder:text-slate-400 font-semibold"
      />
      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery('')}
          className="pr-4 text-slate-400 hover:text-[#0B1F3A] transition-colors cursor-pointer shrink-0"
          title="Clear search"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
      <button
        type="submit"
        className="bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0B1F3A] font-black text-xs sm:text-sm px-6 py-4.5 transition-colors border-l border-slate-200 cursor-pointer shrink-0"
      >
        Search
      </button>
    </form>
  );
}
