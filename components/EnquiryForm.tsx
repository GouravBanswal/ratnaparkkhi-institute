'use client';

import React, { useState } from 'react';
import { coursesOffered } from './data/collegeData';

interface EnquiryFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({ 
  title = "Admission Enquiry Form", 
  subtitle = "Fill in the details to speak with our admission counselors.",
  compact = false 
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.course) {
      setError('Please fill in all required fields.');
      return;
    }
    
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="w-full bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden p-6 md:p-8">
      {success ? (
        <div className="flex flex-col items-center justify-center text-center py-8">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 border border-emerald-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-navy-900 mb-2">Enquiry Submitted!</h3>
          <p className="text-sm text-slate-500 max-w-xs">
            Thank you for your interest. One of our admission experts will call or email you within 24 hours.
          </p>
          <button 
            type="button"
            onClick={() => setSuccess(false)}
            className="mt-6 px-5 py-2 text-xs font-semibold text-white bg-navy-800 hover:bg-navy-900 rounded-lg transition-colors cursor-pointer"
          >
            Submit Another Query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={compact ? "mb-2" : "mb-6"}>
            <h3 className="text-lg md:text-xl font-bold text-navy-900 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-gold-500 rounded-full inline-block"></span>
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs md:text-sm text-slate-500 mt-1">
                {subtitle}
              </p>
            )}
          </div>

          {error && (
            <div className="p-3 text-xs bg-rose-50 text-rose-600 rounded-lg border border-rose-100">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Amit Patil" 
              className="w-full px-4 py-2.5 text-sm bg-white text-navy-900 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Mobile Number <span className="text-rose-500">*</span>
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit number" 
                className="w-full px-4 py-2.5 text-sm bg-white text-navy-900 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. amit@gmail.com" 
                className="w-full px-4 py-2.5 text-sm bg-white text-navy-900 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
              Select Course <span className="text-rose-500">*</span>
            </label>
            <select 
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm bg-white text-navy-900 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all cursor-pointer"
              required
            >
              <option value="">-- Choose Course --</option>
              {coursesOffered.map((c, i) => (
                <option key={i} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>

          {!compact && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Questions or Message
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Optional questions about fee structure, course mode, admissions, etc."
                className="w-full px-4 py-2.5 text-sm bg-white text-navy-900 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
              ></textarea>
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 px-6 text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-700 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 transition-all cursor-pointer text-center"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-navy-900" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting Request...
              </span>
            ) : "Submit Enquiry"}
          </button>
        </form>
      )}
    </div>
  );
};

export default EnquiryForm;
