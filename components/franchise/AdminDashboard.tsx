'use client';

import React, { useState, useEffect } from 'react';
import { FranchiseLead, getScoreCategory } from '@/lib/franchise-shared';

const ITEMS_PER_PAGE = 8;

export default function AdminDashboard() {
  const [leads, setLeads] = useState<FranchiseLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Table state
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [scoreFilter, setScoreFilter] = useState('');
  const [sortBy, setSortBy] = useState<'submittedAt' | 'leadScore' | 'fullName'>('submittedAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);

  // Review Drawer state
  const [selectedLead, setSelectedLead] = useState<FranchiseLead | null>(null);
  const [reviewNotes, setReviewNotes] = useState('');
  const [reviewStatus, setReviewStatus] = useState<FranchiseLead['status']>('New');
  const [isSaving, setIsSaving] = useState(false);
  const [activeReviewTab, setActiveReviewTab] = useState<'info' | 'infra' | 'docs' | 'assessment'>('info');

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/franchise');
      if (!res.ok) throw new Error('Failed to load leads');
      const data = await res.json();
      setLeads(data);
    } catch (e: any) {
      setError(e.message || 'Error communicating with server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleUpdateWorkflow = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead) return;

    setIsSaving(true);
    try {
      const res = await fetch(`/api/franchise/${selectedLead.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: reviewStatus,
          internalNotes: reviewNotes,
        }),
      });

      if (!res.ok) throw new Error('Failed to save updates');
      
      const updatedLead = await res.json();
      
      setLeads(prev => prev.map(lead => lead.id === updatedLead.id ? updatedLead : lead));
      setSelectedLead(updatedLead);
      
      alert(`Franchise ${updatedLead.id} status updated to ${updatedLead.status}.`);
    } catch (err: any) {
      alert(`Error updating lead: ${err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  // Metrics Calculations
  const totalLeads = leads.length;
  const approvedLeads = leads.filter(l => l.status === 'Approved').length;
  const rejectedLeads = leads.filter(l => l.status === 'Rejected').length;
  const pendingLeads = leads.filter(l => l.status === 'New' || l.status === 'Under Review' || l.status === 'On Hold').length;
  
  const avgLeadScore = totalLeads 
    ? Math.round(leads.reduce((sum, l) => sum + l.leadScore, 0) / totalLeads) 
    : 0;

  const estimatedRevenue = leads
    .filter(l => l.status === 'Approved')
    .reduce((sum, l) => sum + (Number(l.expectedAdmissionsFirstYear || 0) * 7500), 0);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Filter and Sort leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.id.toLowerCase().includes(search.toLowerCase()) ||
      lead.fullName.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.city.toLowerCase().includes(search.toLowerCase()) ||
      lead.district.toLowerCase().includes(search.toLowerCase()) ||
      lead.state.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter ? lead.status === statusFilter : true;
    
    const category = getScoreCategory(lead.leadScore);
    const matchesScore = scoreFilter ? category === scoreFilter : true;

    return matchesSearch && matchesStatus && matchesScore;
  });

  const sortedLeads = [...filteredLeads].sort((a, b) => {
    let aVal: any = a[sortBy];
    let bVal: any = b[sortBy];

    if (sortBy === 'submittedAt') {
      aVal = new Date(a.submittedAt).getTime();
      bVal = new Date(b.submittedAt).getTime();
    }

    if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedLeads.length / ITEMS_PER_PAGE);
  const paginatedLeads = sortedLeads.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSort = (field: typeof sortBy) => {
    if (sortBy === field) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
    setCurrentPage(1);
  };

  // Charts data compilation
  const stateCounts = leads.reduce((acc, lead) => {
    acc[lead.state] = (acc[lead.state] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const sortedStateData = Object.entries(stateCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const statusCounts = leads.reduce((acc, lead) => {
    acc[lead.status] = (acc[lead.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const investmentCounts = leads.reduce((acc, lead) => {
    acc[lead.investmentCapacity] = (acc[lead.investmentCapacity] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const investmentBrackets = [
    'Above ₹10 Lakh',
    '₹5 Lakh – ₹10 Lakh',
    '₹3 Lakh – ₹5 Lakh',
    '₹1 Lakh – ₹3 Lakh',
    '₹50,000 – ₹1 Lakh'
  ];

  const scoreCounts = leads.reduce((acc, lead) => {
    const cat = getScoreCategory(lead.leadScore);
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const scoreCategories: ('Excellent' | 'Good' | 'Average' | 'Weak')[] = [
    'Excellent',
    'Good',
    'Average',
    'Weak'
  ];

  // Specific Light Mode element styling variables
  const cardClasses = "p-4 rounded-xl border border-[#E2E8F0] shadow-sm bg-white text-[#0F172A]";
  const textClasses = "text-[#0F172A]";
  const placeholderClasses = "placeholder-[#64748B]";
  const borderClasses = "border-[#E2E8F0]";
  const labelClasses = "block text-[9px] font-bold uppercase tracking-wider text-[#334155] mb-1";
  
  // Explicit form styling classes matching prompt requirements
  const filterSelectClasses = "w-full sm:w-auto text-sm px-2.5 py-3 bg-white text-[#0F172A] border border-[#CBD5E1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/25 focus:border-[#D4AF37] cursor-pointer opacity-100";
  const searchInputClasses = "w-full pl-8 pr-3 py-3 text-sm bg-white text-[#0F172A] placeholder-[#64748B] border border-[#CBD5E1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/25 focus:border-[#D4AF37] transition-all opacity-100";
  const workflowInputClasses = "w-full px-3 py-3 text-sm bg-white text-[#0F172A] placeholder-[#64748B] border border-[#CBD5E1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/25 focus:border-[#D4AF37] transition-all opacity-100";

  return (
    <div className="space-y-8">
      {error && (
        <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs rounded-lg font-bold">
          {error}
        </div>
      )}

      {/* Analytics Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: 'Total Leads', val: totalLeads, desc: 'Total applications', color: 'text-[#0F172A]' },
          { label: 'Approved Leads', val: approvedLeads, desc: 'Center authorized', color: 'text-emerald-600' },
          { label: 'Pending Review', val: pendingLeads, desc: 'Awaiting checks', color: 'text-blue-600' },
          { label: 'Rejected Leads', val: rejectedLeads, desc: 'Rejected leads', color: 'text-rose-600' },
          { label: 'Avg Lead Score', val: `${avgLeadScore}/100`, desc: 'Average center grade', color: 'text-amber-600' },
          { label: 'Est. Revenue', val: formatCurrency(estimatedRevenue), desc: 'Projected first year (25%)', color: 'text-gold-650' },
        ].map((c, i) => (
          <div key={i} className={cardClasses}>
            <span className="block text-[9px] uppercase font-bold text-slate-400 tracking-wider">{c.label}</span>
            <span className={`block text-lg md:text-xl font-black mt-1 ${c.color}`}>{c.val}</span>
            <span className="block text-[8px] text-slate-400 mt-0.5 font-semibold">{c.desc}</span>
          </div>
        ))}
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Chart 1: State-wise */}
        <div className="p-5 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] space-y-4 shadow-sm">
          <h4 className="text-[10px] uppercase tracking-widest text-slate-450 font-extrabold border-b border-slate-100 pb-2">Top States</h4>
          <div className="space-y-3">
            {sortedStateData.length === 0 ? (
              <p className="text-[10px] text-slate-450 font-bold">No state data.</p>
            ) : (
              sortedStateData.map(([state, count]) => {
                const pct = totalLeads ? (count / totalLeads) * 100 : 0;
                return (
                  <div key={state} className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-slate-600">{state}</span>
                      <span className="text-[#0F172A]">{count} ({pct.toFixed(0)}%)</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-navy-700 h-full rounded-full" style={{ width: `${pct}%` }}></div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Chart 2: Status Distribution */}
        <div className="p-5 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] space-y-4 shadow-sm">
          <h4 className="text-[10px] uppercase tracking-widest text-slate-455 font-extrabold border-b border-slate-100 pb-2">Status Distribution</h4>
          <div className="space-y-3">
            {['New', 'Under Review', 'Approved', 'Rejected', 'On Hold'].map((status) => {
              const count = statusCounts[status] || 0;
              const pct = totalLeads ? (count / totalLeads) * 100 : 0;
              
              const colorMap: Record<string, string> = {
                'New': 'bg-blue-500',
                'Under Review': 'bg-amber-500',
                'Approved': 'bg-emerald-500',
                'Rejected': 'bg-rose-500',
                'On Hold': 'bg-slate-400',
              };

              return (
                <div key={status} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="text-slate-600">{status}</span>
                    <span className="text-[#0F172A]">{count} ({pct.toFixed(0)}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className={`${colorMap[status]} h-full rounded-full`} style={{ width: `${pct}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chart 3: Investment Brackets */}
        <div className="p-5 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] space-y-4 shadow-sm">
          <h4 className="text-[10px] uppercase tracking-widest text-slate-455 font-extrabold border-b border-slate-100 pb-2">Investment Capacity</h4>
          <div className="space-y-3">
            {investmentBrackets.map((bracket) => {
              const count = investmentCounts[bracket] || 0;
              const pct = totalLeads ? (count / totalLeads) * 100 : 0;
              return (
                <div key={bracket} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="text-slate-600 truncate max-w-[120px]">{bracket}</span>
                    <span className="text-[#0F172A] font-bold">{count}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-gold-500 h-full rounded-full" style={{ width: `${pct}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chart 4: Lead Quality */}
        <div className="p-5 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] space-y-4 shadow-sm">
          <h4 className="text-[10px] uppercase tracking-widest text-slate-455 font-extrabold border-b border-slate-100 pb-2">Lead Quality Distribution</h4>
          <div className="space-y-3">
            {scoreCategories.map((cat) => {
              const count = scoreCounts[cat] || 0;
              const pct = totalLeads ? (count / totalLeads) * 100 : 0;
              
              const colorMap: Record<string, string> = {
                'Excellent': 'bg-emerald-500',
                'Good': 'bg-teal-500',
                'Average': 'bg-amber-500',
                'Weak': 'bg-rose-500',
              };

              return (
                <div key={cat} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="text-slate-600">{cat}</span>
                    <span className="text-[#0F172A] font-bold">{count}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className={`${colorMap[cat]} h-full rounded-full`} style={{ width: `${pct}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Search and Table Container */}
      <div className="border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden bg-white text-[#0F172A]">
        
        {/* Table Filters Header */}
        <div className="p-4 md:p-5 border-b border-slate-100 flex flex-col md:flex-row justify-between gap-4 items-center">
          
          <div className="flex items-center gap-2.5">
            <h3 className="text-base font-extrabold text-[#0F172A] flex items-center gap-2">
              <span className="w-2.5 h-5 bg-gold-500 rounded-sm"></span>
              Franchise Applications
            </h3>
            <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-black">
              {filteredLeads.length} Matches
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-56">
              <input 
                type="text"
                placeholder="Search by ID, Name, City..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                className={searchInputClasses}
              />
              <span className="absolute left-2.5 top-2.5 text-slate-450">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>

            {/* Filter Status */}
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
              className={filterSelectClasses}
            >
              <option value="" className="bg-white text-[#0F172A]">All Statuses</option>
              <option value="New" className="bg-white text-[#0F172A]">New</option>
              <option value="Under Review" className="bg-white text-[#0F172A]">Under Review</option>
              <option value="Approved" className="bg-white text-[#0F172A]">Approved</option>
              <option value="Rejected" className="bg-white text-[#0F172A]">Rejected</option>
              <option value="On Hold" className="bg-white text-[#0F172A]">On Hold</option>
            </select>

            {/* Filter Score */}
            <select
              value={scoreFilter}
              onChange={(e) => { setScoreFilter(e.target.value); setCurrentPage(1); }}
              className={filterSelectClasses}
            >
              <option value="" className="bg-white text-[#0F172A]">All Scores</option>
              <option value="Excellent" className="bg-white text-[#0F172A]">Excellent (80-100)</option>
              <option value="Good" className="bg-white text-[#0F172A]">Good (60-79)</option>
              <option value="Average" className="bg-white text-[#0F172A]">Average (40-59)</option>
              <option value="Weak" className="bg-white text-[#0F172A]">Weak (&lt;40)</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          {loading ? (
            <div className="py-20 text-center text-xs text-slate-400 font-bold">
              Fetching applications database...
            </div>
          ) : paginatedLeads.length === 0 ? (
            <div className="py-20 text-center text-xs text-slate-400 font-bold">
              No franchise applications found matching filters.
            </div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden md:block">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-550 uppercase tracking-wider text-[9px] font-extrabold border-b border-slate-100">
                      <th className="p-3 text-slate-600">Franchise ID</th>
                      <th className="p-3 text-slate-600 cursor-pointer select-none" onClick={() => handleSort('fullName')}>
                        Applicant Name {sortBy === 'fullName' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                      </th>
                      <th className="p-3 text-slate-600">State</th>
                      <th className="p-3 text-slate-600">District</th>
                      <th className="p-3 text-slate-600">Investment Range</th>
                      <th className="p-3 text-slate-600 cursor-pointer select-none" onClick={() => handleSort('leadScore')}>
                        Score {sortBy === 'leadScore' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                      </th>
                      <th className="p-3 text-slate-600">Status</th>
                      <th className="p-3 text-slate-600 cursor-pointer select-none" onClick={() => handleSort('submittedAt')}>
                        Date Submitted {sortBy === 'submittedAt' ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
                      </th>
                      <th className="p-3 text-slate-650 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {paginatedLeads.map((lead) => {
                      const statusColors: Record<string, string> = {
                        'New': 'bg-blue-500/10 border-blue-500/20 text-blue-600',
                        'Under Review': 'bg-amber-500/10 border-amber-500/20 text-amber-700',
                        'Approved': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-650',
                        'Rejected': 'bg-rose-500/10 border-rose-500/20 text-rose-650',
                        'On Hold': 'bg-slate-500/10 border-slate-500/20 text-slate-600',
                      };

                      const scoreCat = getScoreCategory(lead.leadScore);
                      const scoreColors: Record<string, string> = {
                        'Excellent': 'bg-emerald-500/10 text-emerald-650 border-emerald-500/20',
                        'Good': 'bg-teal-500/10 text-teal-650 border-teal-500/20',
                        'Average': 'bg-amber-500/10 text-amber-700 border-amber-500/20',
                        'Weak': 'bg-rose-500/10 text-rose-650 border-rose-500/20',
                      };

                      return (
                        <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors border-b border-[#E2E8F0] font-medium">
                          <td className="p-3 font-bold text-[#0F172A]">{lead.id}</td>
                          <td className="p-3">
                            <div className="font-bold text-[#0F172A]">{lead.fullName}</div>
                            <div className="text-[10px] text-slate-450">{lead.email}</div>
                          </td>
                          <td className="p-3">{lead.state}</td>
                          <td className="p-3">{lead.district}</td>
                          <td className="p-3 font-bold text-[#0F172A]">{lead.investmentCapacity}</td>
                          <td className="p-3">
                            <div className="flex items-center gap-1.5">
                              <span className="font-black text-[#0F172A]">{lead.leadScore}</span>
                              <span className={`text-[8px] font-bold px-1.5 py-0.2 rounded border uppercase tracking-wider ${scoreColors[scoreCat]}`}>
                                {scoreCat}
                              </span>
                            </div>
                          </td>
                          <td className="p-3">
                            <span className={`px-2 py-0.5 rounded border text-[10px] font-bold ${statusColors[lead.status]}`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="p-3 text-slate-400">{new Date(lead.submittedAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
                          <td className="p-3 text-center">
                            <button
                              onClick={() => {
                                setSelectedLead(lead);
                                setReviewNotes(lead.internalNotes || '');
                                setReviewStatus(lead.status);
                                setActiveReviewTab('info');
                              }}
                              className="px-3 py-1 bg-navy-800 hover:bg-navy-900 text-white rounded font-bold hover:shadow transition-all cursor-pointer text-[10px]"
                            >
                              Review
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card-Based View */}
              <div className="block md:hidden divide-y divide-slate-100">
                {paginatedLeads.map((lead) => {
                  const statusColors: Record<string, string> = {
                    'New': 'bg-blue-500/10 border-blue-500/20 text-blue-600',
                    'Under Review': 'bg-amber-500/10 border-amber-500/20 text-amber-700',
                    'Approved': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-650',
                    'Rejected': 'bg-rose-500/10 border-rose-500/20 text-rose-650',
                    'On Hold': 'bg-slate-500/10 border-slate-500/20 text-slate-600',
                  };

                  const scoreCat = getScoreCategory(lead.leadScore);
                  const scoreColors: Record<string, string> = {
                    'Excellent': 'bg-emerald-500/10 text-emerald-650 border-emerald-500/20',
                    'Good': 'bg-teal-500/10 text-teal-650 border-teal-500/20',
                    'Average': 'bg-amber-500/10 text-amber-700 border-amber-500/20',
                    'Weak': 'bg-rose-500/10 text-rose-650 border-rose-500/20',
                  };

                  return (
                    <div key={lead.id} className="p-4 space-y-3 font-medium text-[#0F172A]">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="block text-xs font-bold text-slate-400">{lead.id}</span>
                          <span className="block text-sm font-bold mt-0.5">{lead.fullName}</span>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${statusColors[lead.status] || 'bg-slate-100'}`}>
                          {lead.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs border-t border-slate-50 pt-2 text-slate-550">
                        <div>
                          <span className="block text-[9px] uppercase font-bold text-slate-400">Location</span>
                          <span className="block font-semibold mt-0.5">{lead.city}, {lead.state}</span>
                        </div>
                        <div>
                          <span className="block text-[9px] uppercase font-bold text-slate-400">Investment</span>
                          <span className="block font-semibold mt-0.5">{lead.investmentCapacity}</span>
                        </div>
                        <div>
                          <span className="block text-[9px] uppercase font-bold text-slate-400">Lead Score</span>
                          <span className={`inline-block text-[10px] font-bold px-1.5 py-0.2 rounded border uppercase mt-0.5 ${scoreColors[scoreCat] || 'bg-slate-100'}`}>
                            {lead.leadScore} ({scoreCat})
                          </span>
                        </div>
                        <div>
                          <span className="block text-[9px] uppercase font-bold text-slate-400">Submitted</span>
                          <span className="block font-semibold mt-0.5">{new Date(lead.submittedAt).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-50 flex justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedLead(lead);
                            setReviewNotes(lead.internalNotes || '');
                            setReviewStatus(lead.status);
                            setActiveReviewTab('info');
                          }}
                          className="px-4 py-2.5 text-xs font-bold text-[#0F172A] bg-gold-500 hover:bg-gold-600 rounded-lg cursor-pointer transition-all w-full text-center"
                        >
                          Review Profile
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Table Pagination Footer */}
        {totalPages > 1 && (
          <div className="p-4 border-t border-slate-100 flex justify-between items-center text-xs">
            <span className="text-slate-400 font-semibold">Page {currentPage} of {totalPages}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 border rounded-lg font-bold transition-all ${
                  currentPage === 1 
                    ? 'border-slate-100 text-slate-300 cursor-not-allowed'
                    : 'border-slate-200 text-[#0F172A] hover:bg-slate-50 cursor-pointer'
                }`}
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 border rounded-lg font-bold transition-all ${
                  currentPage === totalPages 
                    ? 'border-slate-100 text-slate-300 cursor-not-allowed'
                    : 'border-slate-200 text-[#0F172A] hover:bg-slate-50 cursor-pointer'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Slide-over review details drawer */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end animate-fade-in">
          <div className="w-full max-w-3xl h-full flex flex-col shadow-2xl relative bg-white text-[#0F172A] border-l border-[#E2E8F0] animate-slide-in">
            
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-200 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-[#0F172A]">{selectedLead.id}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${
                    selectedLead.status === 'Approved' 
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-650'
                      : selectedLead.status === 'Rejected'
                      ? 'bg-rose-500/10 border-rose-500/20 text-rose-650'
                      : 'bg-amber-500/10 border-amber-500/20 text-amber-700'
                  }`}>
                    {selectedLead.status}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-450 mt-1">{selectedLead.fullName}</h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="p-1.5 hover:bg-slate-100 rounded-full transition-colors cursor-pointer text-slate-400"
                title="Close review panel"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer Tabs */}
            <div className="px-5 border-b border-slate-100 flex gap-4 text-xs font-bold bg-white">
              {[
                { id: 'info', label: 'Business Profile' },
                { id: 'infra', label: 'Infrastructure & Location' },
                { id: 'docs', label: 'Uploaded Documents' },
                { id: 'assessment', label: 'Franchise Assessment' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveReviewTab(tab.id as any)}
                  className={`py-3 border-b-2 transition-all cursor-pointer ${
                    activeReviewTab === tab.id 
                      ? 'border-gold-500 text-gold-650 font-extrabold' 
                      : 'border-transparent text-slate-450 hover:text-[#0F172A]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Drawer Content Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#F8FAFC]">
              
              {/* Tab 1: Profile */}
              {activeReviewTab === 'info' && (
                <div className="space-y-6">
                  {/* Personal info */}
                  <div className="space-y-3 bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                    <h5 className="text-[10px] uppercase tracking-widest text-slate-450 font-extrabold border-b border-slate-100 pb-2">Personal Details</h5>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Father/Husband Name</span><span className="font-bold text-[#0F172A]">{selectedLead.fatherHusbandName}</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Date of Birth</span><span className="font-bold text-[#0F172A]">{selectedLead.dob}</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Gender</span><span className="font-bold text-[#0F172A]">{selectedLead.gender}</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Email Address</span><span className="font-bold text-[#0F172A]">{selectedLead.email}</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Mobile / WhatsApp</span><span className="font-bold text-[#0F172A]">{selectedLead.mobile} / {selectedLead.whatsApp}</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Aadhaar / PAN Numbers</span><span className="font-bold text-[#0F172A]">{selectedLead.aadhaarNumber} / {selectedLead.panNumber}</span></div>
                    </div>
                  </div>

                  {/* Business info */}
                  <div className="space-y-3 bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                    <h5 className="text-[10px] uppercase tracking-widest text-slate-455 font-extrabold border-b border-slate-100 pb-2">Business Profile</h5>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Current Occupation</span><span className="font-bold text-[#0F172A]">{selectedLead.currentOccupation}</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Existing Business Name</span><span className="font-bold text-[#0F172A]">{selectedLead.existingBusinessName || 'N/A'}</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Business Experience</span><span className="font-bold text-[#0F172A]">{selectedLead.businessExperience} Years</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Education Experience</span><span className="font-bold text-[#0F172A]">{selectedLead.educationSectorExperience} Years</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Annual Turnover</span><span className="font-bold text-[#0F172A]">{selectedLead.annualTurnover}</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Employees count</span><span className="font-bold text-[#0F172A]">{selectedLead.numberOfEmployees} Staff</span></div>
                    </div>
                  </div>

                  {/* Selected Centers */}
                  <div className="space-y-2 bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                    <h5 className="text-[10px] uppercase tracking-widest text-slate-455 font-extrabold border-b border-slate-100 pb-2">Franchise Centre Preferences</h5>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {selectedLead.franchiseSelections.map((sel, idx) => (
                        <span key={idx} className="bg-slate-50 border border-[#E2E8F0] text-[10px] font-bold text-[#334155] px-2.5 py-1 rounded-lg">
                          {sel}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Infra */}
              {activeReviewTab === 'infra' && (
                <div className="space-y-6">
                  {/* Space Details */}
                  <div className="space-y-3 bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                    <h5 className="text-[10px] uppercase tracking-widest text-slate-455 font-extrabold border-b border-slate-100 pb-2">Physical Infrastructure</h5>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Ownership Type</span><span className="font-bold text-[#0F172A]">{selectedLead.buildingOwnership}</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Total Floor Space</span><span className="font-bold text-[#0F172A]">{selectedLead.totalArea} Sq Ft</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Classrooms Available</span><span className="font-bold text-[#0F172A]">{selectedLead.numberOfClassrooms} Rooms</span></div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="space-y-3 bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                    <h5 className="text-[10px] uppercase tracking-widest text-slate-455 font-extrabold border-b border-slate-100 pb-2">Facilities</h5>
                    <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                      {[
                        { label: 'Computer Lab Available', val: selectedLead.computerLabAvailable },
                        { label: 'Internet Facility', val: selectedLead.internetFacility },
                        { label: 'Smart Class Facility', val: selectedLead.smartClassFacility },
                        { label: 'Power Backup', val: selectedLead.powerBackup }
                      ].map((facility, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center font-bold text-[9px] ${
                            facility.val 
                              ? 'bg-emerald-500 text-white' 
                              : 'bg-slate-200 text-slate-500'
                          }`}>
                            {facility.val ? '✓' : '✗'}
                          </span>
                          <span className="font-bold text-[#334155]">{facility.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Location analysis */}
                  <div className="space-y-3 bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                    <h5 className="text-[10px] uppercase tracking-widest text-slate-455 font-extrabold border-b border-slate-100 pb-2">Geographic Analysis</h5>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Territorial Bounds</span><span className="font-bold text-[#0F172A]">{selectedLead.city}, {selectedLead.district}, {selectedLead.state} - {selectedLead.pincode}</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Population Coverage</span><span className="font-bold text-[#0F172A]">{selectedLead.populationCoverage}</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Google Maps Link</span>{selectedLead.googleMapsLocation ? <a href={selectedLead.googleMapsLocation} target="_blank" rel="noreferrer" className="text-gold-650 hover:underline font-bold truncate block max-w-xs">{selectedLead.googleMapsLocation}</a> : <span className="text-slate-400">None Provided</span>}</div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Nearby Institutions</span><span className="font-bold text-[#0F172A]">{selectedLead.nearbySchoolsColleges || 'N/A'}</span></div>
                      <div><span className="block text-slate-450 font-semibold mb-0.5">Competitor Institutes</span><span className="font-bold text-[#0F172A]">{selectedLead.competitorInstitutes || 'N/A'}</span></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Documents */}
              {activeReviewTab === 'docs' && (
                <div className="space-y-5 bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm">
                  <h5 className="text-[10px] uppercase tracking-widest text-slate-455 font-extrabold border-b border-slate-100 pb-2">Verification Records</h5>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: 'Aadhaar Card copy', file: selectedLead.aadhaarDoc },
                      { label: 'PAN Card copy', file: selectedLead.panDoc },
                      { label: 'Educational Degrees', file: selectedLead.educationalCertificates },
                      { label: 'Ownership/Rent Deed', file: selectedLead.buildingAgreement },
                      { label: 'GST Document', file: selectedLead.gstCertificate },
                      { label: 'Business Registration', file: selectedLead.businessReg },
                      { label: 'Passport Size Photo', file: selectedLead.passportPhoto }
                    ].map((doc, idx) => {
                      if (!doc.file) return null;
                      return (
                        <div key={idx} className="p-3 border border-[#E2E8F0] rounded-lg flex items-center justify-between gap-3 text-xs bg-slate-50">
                          <div className="truncate">
                            <span className="block text-[10px] text-slate-450 uppercase font-bold">{doc.label}</span>
                            <span className="font-bold truncate block max-w-[190px] text-[#0F172A]">{doc.file}</span>
                          </div>
                          
                          <button
                            type="button"
                            onClick={() => alert(`Simulating file download: ${doc.file}`)}
                            className="px-2.5 py-1 border border-slate-200 hover:border-gold-550 rounded text-[10px] font-bold cursor-pointer hover:bg-white transition-colors shrink-0 bg-white text-[#334155]"
                          >
                            Download
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Tab 4: Assessment */}
              {activeReviewTab === 'assessment' && (
                <div className="space-y-5 bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-sm text-xs">
                  <h5 className="text-[10px] uppercase tracking-widest text-slate-455 font-extrabold border-b border-slate-100 pb-2">Franchise Feasibility</h5>
                  
                  <div className="space-y-3">
                    <span className="block text-slate-450 font-bold">Why join RIEM Franchise Network?</span>
                    <p className="p-3 rounded-lg border border-[#E2E8F0] leading-relaxed font-bold bg-slate-50 text-[#0F172A]">
                      {selectedLead.whyJoinRIEM}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="block text-slate-450 font-bold">Marketing and Growth Strategy</span>
                    <p className="p-3 rounded-lg border border-[#E2E8F0] leading-relaxed font-bold bg-slate-50 text-[#0F172A]">
                      {selectedLead.growthPlans}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                    <div>
                      <span className="block text-slate-450 font-semibold">First Year Expected Admissions</span>
                      <span className="text-sm font-black text-[#0F172A]">{selectedLead.expectedAdmissionsFirstYear} Students</span>
                    </div>
                    <div>
                      <span className="block text-slate-450 font-semibold">Target Launch Date</span>
                      <span className="text-sm font-black text-[#0F172A]">
                        {new Date(selectedLead.expectedLaunchDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Lead Score Details breakdown */}
              <div className="p-4 rounded-xl border border-[#E2E8F0] bg-white text-[#0F172A] space-y-3 shadow-sm">
                <h5 className="text-[10px] uppercase tracking-widest text-slate-450 font-extrabold flex justify-between items-baseline border-b border-slate-200 pb-1">
                  <span>Lead Quality Grading Breakdown</span>
                  <span className="text-xs text-[#0F172A] font-black">{selectedLead.leadScore}/100</span>
                </h5>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-[10px] pt-1">
                  <div>
                    <span className="block text-slate-450 font-bold">Area</span>
                    <span className="font-extrabold text-[#0F172A]">{selectedLead.totalArea} sq ft</span>
                  </div>
                  <div>
                    <span className="block text-slate-450 font-bold">Ownership</span>
                    <span className="font-extrabold text-[#0F172A]">{selectedLead.buildingOwnership}</span>
                  </div>
                  <div>
                    <span className="block text-slate-450 font-bold">Investment</span>
                    <span className="font-extrabold text-[#0F172A] truncate block">{selectedLead.investmentCapacity}</span>
                  </div>
                  <div>
                    <span className="block text-slate-450 font-bold">Experience</span>
                    <span className="font-extrabold text-[#0F172A]">{selectedLead.businessExperience} / {selectedLead.educationSectorExperience} Yrs</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Drawer Status Update Workflow Footer */}
            <form onSubmit={handleUpdateWorkflow} className="p-5 border-t border-[#E2E8F0] bg-slate-50 space-y-4">
              <h5 className="text-[10px] uppercase tracking-widest text-slate-450 font-extrabold">Workflow Resolution</h5>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                <div className="sm:col-span-1">
                  <label className={labelClasses}>Update Status</label>
                  <select
                    value={reviewStatus}
                    onChange={(e) => setReviewStatus(e.target.value as any)}
                    className={filterSelectClasses + " w-full"}
                  >
                    <option value="New" className="bg-white text-[#0F172A]">New</option>
                    <option value="Under Review" className="bg-white text-[#0F172A]">Under Review</option>
                    <option value="Approved" className="bg-white text-[#0F172A]">Approved</option>
                    <option value="Rejected" className="bg-white text-[#0F172A]">Rejected</option>
                    <option value="On Hold" className="bg-white text-[#0F172A]">On Hold</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClasses}>Internal Notes</label>
                  <input
                    type="text"
                    value={reviewNotes}
                    onChange={(e) => setReviewNotes(e.target.value)}
                    placeholder="Write background comments or audit details..."
                    className={workflowInputClasses}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedLead(null)}
                  className="px-4 py-2 text-xs font-bold rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer text-slate-500 bg-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2 text-xs font-bold bg-gradient-to-r from-gold-400 to-gold-600 text-navy-955 hover:from-gold-500 hover:to-gold-700 rounded-lg shadow transition-all cursor-pointer"
                >
                  {isSaving ? 'Saving...' : 'Save Resolution'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}
