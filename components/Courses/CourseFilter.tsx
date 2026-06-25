'use client';

import React from 'react';

interface CourseFilterProps {
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
}

export const filterChips = [
  { id: 'all', label: 'All' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'iti', label: 'ITI' },
  { id: 'mba', label: 'MBA' },
  { id: 'diploma', label: 'Diploma' },
  { id: 'popular', label: 'Popular' },
  { id: 'new', label: 'New' },
  { id: 'placement', label: 'Placement' },
  { id: 'skill-india', label: 'Skill India' },
  { id: 'gov-approved', label: 'Government Approved' }
];

export default function CourseFilter({ selectedFilter, setSelectedFilter }: CourseFilterProps) {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto py-2">
      {filterChips.map((chip) => {
        const isActive = selectedFilter === chip.id;
        return (
          <button
            key={chip.id}
            onClick={() => setSelectedFilter(chip.id)}
            className={`px-4 py-2 rounded-full border text-xs font-bold transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-[#D4AF37] border-[#D4AF37] text-[#0B1F3A] shadow-md font-black'
                : 'bg-white border-slate-200 text-slate-700 hover:border-[#0B1F3A] hover:text-[#0B1F3A] hover:bg-slate-50'
            }`}
          >
            {chip.label}
          </button>
        );
      })}
    </div>
  );
}
