'use client';

import React from 'react';

interface FilterOption {
  id: string;
  label: string;
}

interface CourseFiltersProps {
  selectedFilter: string;
  setSelectedFilter: (filterId: string) => void;
}

export default function CourseFilters({ selectedFilter, setSelectedFilter }: CourseFiltersProps) {
  const filters: FilterOption[] = [
    { id: 'all', label: 'All Programs' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'iti', label: 'ITI Trades' },
    { id: 'mba', label: 'MBA' },
    { id: 'diploma', label: 'Diploma' },
    { id: 'popular', label: 'Most Popular' },
    { id: 'new', label: 'Newest' },
    { id: 'placement', label: '100% Placement' },
    { id: 'skill-india', label: 'Skill India' },
    { id: 'gov-approved', label: 'Govt Approved' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 py-1.5 max-w-6xl mx-auto">
      {filters.map((filter) => {
        const isActive = selectedFilter === filter.id;
        return (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
              isActive
                ? 'bg-[#D4AF37] border-[#D4AF37] text-[#0B1F3A] shadow-md font-black scale-102'
                : 'bg-white border-slate-200 text-[#0B1F3A] hover:border-[#D4AF37] hover:bg-slate-50'
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
