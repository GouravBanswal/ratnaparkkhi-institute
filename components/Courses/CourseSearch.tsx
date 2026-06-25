import React from 'react';

interface CourseSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function CourseSearch({ searchQuery, setSearchQuery }: CourseSearchProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Search Input Box */}
      <div className="relative flex items-center bg-white border border-slate-200 focus-within:border-gold-500 focus-within:ring-2 focus-within:ring-gold-500/10 rounded-2xl shadow-sm transition-all duration-300 overflow-hidden">
        {/* Search Icon */}
        <div className="pl-5 pr-3 text-slate-400 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Engineering, ITI Trade, MBA, Diploma..."
          className="w-full py-4 pr-5 text-sm md:text-base text-navy-950 placeholder-slate-400 font-semibold focus:outline-none bg-transparent"
        />

        {/* Clear Button */}
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="pr-5 text-slate-400 hover:text-navy-900 transition-colors cursor-pointer text-xs font-bold"
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}
