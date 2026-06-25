'use client';

import React, { useState, useRef, useEffect } from 'react';
import { coursesOffered } from '@/components/data/collegeData';

interface EnquiryFormProps {
  onSuccess: () => void;
  onClose: () => void;
}

export default function EnquiryForm({ onSuccess, onClose }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: '',
    city: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Focus the first input automatically when modal opens
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear validation error when typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile Number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate submission request delay
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
          Full Name <span className="text-rose-500">*</span>
        </label>
        <input
          ref={nameInputRef}
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="e.g. Amit Patil"
          className={`w-full px-4 py-2.5 text-sm bg-white text-[#0B1F3A] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all ${
            errors.fullName ? 'border-rose-400' : 'border-slate-200'
          }`}
        />
        {errors.fullName && <p className="text-[11px] text-rose-500 mt-1 font-semibold">{errors.fullName}</p>}
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
            className={`w-full px-4 py-2.5 text-sm bg-white text-[#0B1F3A] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all ${
              errors.phone ? 'border-rose-400' : 'border-slate-200'
            }`}
          />
          {errors.phone && <p className="text-[11px] text-rose-500 mt-1 font-semibold">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. amit@gmail.com"
            className={`w-full px-4 py-2.5 text-sm bg-white text-[#0B1F3A] border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all ${
              errors.email ? 'border-rose-400' : 'border-slate-200'
            }`}
          />
          {errors.email && <p className="text-[11px] text-rose-500 mt-1 font-semibold">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
            Course Interested In
          </label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-4 py-2.5 text-sm bg-white text-[#0B1F3A] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all cursor-pointer"
          >
            <option value="">-- Choose Course --</option>
            {coursesOffered.map((c, i) => (
              <option key={i} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Pune"
            className="w-full px-4 py-2.5 text-sm bg-white text-[#0B1F3A] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={2}
          placeholder="Questions about admissions, fees, etc."
          className="w-full px-4 py-2.5 text-sm bg-white text-[#0B1F3A] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="flex-grow py-3 px-6 text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-700 rounded-lg shadow-md hover:shadow-lg focus:outline-none transition-all cursor-pointer text-center"
        >
          {loading ? 'Submitting Request...' : 'Submit Enquiry'}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="py-3 px-6 text-sm font-bold uppercase tracking-wider text-slate-650 bg-slate-100 hover:bg-slate-200 rounded-lg focus:outline-none transition-all cursor-pointer text-center"
        >
          Close
        </button>
      </div>
    </form>
  );
}
