'use client';

import React, { useState, useEffect } from 'react';
import { FranchiseLead } from '@/lib/franchise-shared';

interface FranchiseWizardProps {
  onNavigateToAdmin: () => void;
}

const STEPS = [
  { id: 1, name: 'Personal Info' },
  { id: 2, name: 'Franchise Select' },
  { id: 3, name: 'Business Profile' },
  { id: 4, name: 'Infrastructure' },
  { id: 5, name: 'Location Analysis' },
  { id: 6, name: 'Investment' },
  { id: 7, name: 'Course Categories' },
  { id: 8, name: 'Team Information' },
  { id: 9, name: 'Document Upload' },
  { id: 10, name: 'Assessment' },
];

const INITIAL_FORM_DATA = {
  fullName: '',
  fatherHusbandName: '',
  dob: '',
  gender: '',
  aadhaarNumber: '',
  panNumber: '',
  mobile: '',
  whatsApp: '',
  email: '',
  franchiseSelections: [] as string[],
  currentOccupation: '',
  existingBusinessName: '',
  businessExperience: 0,
  educationSectorExperience: 0,
  annualTurnover: '',
  numberOfEmployees: 0,
  buildingOwnership: 'Rent' as 'Own' | 'Lease' | 'Rent',
  totalArea: 0,
  numberOfClassrooms: 0,
  computerLabAvailable: false,
  internetFacility: false,
  smartClassFacility: false,
  powerBackup: false,
  buildingPhotos: [] as string[],
  state: '',
  district: '',
  city: '',
  pincode: '',
  googleMapsLocation: '',
  populationCoverage: 'Below 2 Lakhs' as 'Above 5 Lakhs' | '2 Lakhs - 5 Lakhs' | 'Below 2 Lakhs',
  nearbySchoolsColleges: '',
  competitorInstitutes: '',
  investmentCapacity: '₹50,000 – ₹1 Lakh' as '₹50,000 – ₹1 Lakh' | '₹1 Lakh – ₹3 Lakh' | '₹3 Lakh – ₹5 Lakh' | '₹5 Lakh – ₹10 Lakh' | 'Above ₹10 Lakh',
  courseCategories: [] as string[],
  centreHeadName: '',
  trainerCount: 0,
  counselorCount: 0,
  marketingExecutiveCount: 0,
  aadhaarDoc: '',
  panDoc: '',
  educationalCertificates: '',
  buildingAgreement: '',
  gstCertificate: '',
  businessReg: '',
  passportPhoto: '',
  whyJoinRIEM: '',
  growthPlans: '',
  expectedAdmissionsFirstYear: 0,
  expectedLaunchDate: '',
};

export default function FranchiseWizard({ onNavigateToAdmin }: FranchiseWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<FranchiseLead | null>(null);
  const [fileProgress, setFileProgress] = useState<Record<string, number>>({});
  const [filePreviews, setFilePreviews] = useState<Record<string, string>>({});

  // Styles utility mapping based on light theme specifications
  const inputClasses = "w-full px-3 py-2 text-xs bg-white text-[#0F172A] placeholder-[#64748B] border border-[#CBD5E1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/25 focus:border-[#D4AF37] transition-all opacity-100";
  const selectClasses = "w-full px-3 py-2 text-xs bg-white text-[#0F172A] border border-[#CBD5E1] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/25 focus:border-[#D4AF37] transition-all cursor-pointer opacity-100";
  const labelClasses = "block text-[10px] font-bold uppercase tracking-wider text-[#334155] mb-1";
  const headingClasses = "text-base font-extrabold text-[#0F172A] flex items-center gap-2";

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('riem_franchise_wizard_draft');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch (e) {
        console.error('Failed to load draft data:', e);
      }
    }
    
    const savedStep = localStorage.getItem('riem_franchise_wizard_step');
    if (savedStep) {
      const stepNum = parseInt(savedStep, 10);
      if (stepNum >= 1 && stepNum <= 10) {
        setCurrentStep(stepNum);
      }
    }
  }, []);

  // Save progress to localStorage on change
  const saveDraft = (data: typeof formData, step: number) => {
    localStorage.setItem('riem_franchise_wizard_draft', JSON.stringify(data));
    localStorage.setItem('riem_franchise_wizard_step', String(step));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    let updatedVal: any = value;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      updatedVal = checkbox.checked;
    } else if (type === 'number') {
      updatedVal = value === '' ? 0 : Number(value);
    }

    // Special formats
    if (name === 'panNumber') {
      updatedVal = value.toUpperCase().slice(0, 10);
    }
    if (name === 'aadhaarNumber') {
      updatedVal = value.replace(/\D/g, '').slice(0, 12);
    }
    if (name === 'mobile' || name === 'whatsApp' || name === 'pincode') {
      updatedVal = value.replace(/\D/g, '');
      if (name === 'pincode') updatedVal = updatedVal.slice(0, 6);
      else updatedVal = updatedVal.slice(0, 10);
    }

    const updatedData = { ...formData, [name]: updatedVal };
    setFormData(updatedData);
    saveDraft(updatedData, currentStep);
    
    // Clear field-specific error
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleCheckboxListChange = (listName: 'franchiseSelections' | 'courseCategories', option: string) => {
    const currentList = [...(formData[listName] as string[])];
    const index = currentList.indexOf(option);
    
    if (index > -1) {
      currentList.splice(index, 1);
    } else {
      currentList.push(option);
    }

    const updatedData = { ...formData, [listName]: currentList };
    setFormData(updatedData);
    saveDraft(updatedData, currentStep);

    if (errors[listName]) {
      const newErrors = { ...errors };
      delete newErrors[listName];
      setErrors(newErrors);
    }
  };

  // Mock document file uploader logic
  const handleFileUpload = (fieldName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileProgress(prev => ({ ...prev, [fieldName]: 10 }));
    
    let progress = 10;
    const interval = setInterval(() => {
      progress += 20;
      if (progress >= 100) {
        clearInterval(interval);
        setFileProgress(prev => ({ ...prev, [fieldName]: 100 }));
        
        const updatedData = { ...formData, [fieldName]: file.name };
        setFormData(updatedData);
        saveDraft(updatedData, currentStep);

        if (errors[fieldName]) {
          const newErrors = { ...errors };
          delete newErrors[fieldName];
          setErrors(newErrors);
        }

        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (event) => {
            if (event.target?.result) {
              setFilePreviews(prev => ({ ...prev, [fieldName]: event.target!.result as string }));
            }
          };
          reader.readAsDataURL(file);
        } else {
          setFilePreviews(prev => ({ ...prev, [fieldName]: 'pdf-placeholder' }));
        }
      } else {
        setFileProgress(prev => ({ ...prev, [fieldName]: progress }));
      }
    }, 150);
  };

  const handleMultipleFilesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setFileProgress(prev => ({ ...prev, buildingPhotos: 10 }));
    
    let progress = 10;
    const interval = setInterval(() => {
      progress += 30;
      if (progress >= 100) {
        clearInterval(interval);
        setFileProgress(prev => ({ ...prev, buildingPhotos: 100 }));
        
        const fileNames = Array.from(files).map(f => f.name);
        const updatedData = { ...formData, buildingPhotos: [...formData.buildingPhotos, ...fileNames] };
        setFormData(updatedData);
        saveDraft(updatedData, currentStep);

        Array.from(files).forEach((file, index) => {
          if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target?.result) {
                setFilePreviews(prev => ({ ...prev, [`buildingPhoto_${index}_${file.name}`]: event.target!.result as string }));
              }
            };
            reader.readAsDataURL(file);
          }
        });
      } else {
        setFileProgress(prev => ({ ...prev, buildingPhotos: progress }));
      }
    }, 200);
  };

  const removePhoto = (photoName: string) => {
    const list = formData.buildingPhotos.filter(name => name !== photoName);
    const updatedData = { ...formData, buildingPhotos: list };
    setFormData(updatedData);
    saveDraft(updatedData, currentStep);
    
    const keyToClean = Object.keys(filePreviews).find(k => k.endsWith(photoName));
    if (keyToClean) {
      const newPreviews = { ...filePreviews };
      delete newPreviews[keyToClean];
      setFilePreviews(newPreviews);
    }
  };

  const removeDocument = (fieldName: string) => {
    const updatedData = { ...formData, [fieldName]: '' };
    setFormData(updatedData);
    saveDraft(updatedData, currentStep);
    
    setFileProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fieldName];
      return newProgress;
    });

    setFilePreviews(prev => {
      const newPreviews = { ...prev };
      delete newPreviews[fieldName];
      return newPreviews;
    });
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
      if (!formData.fatherHusbandName.trim()) newErrors.fatherHusbandName = 'Father/Husband Name is required';
      if (!formData.dob) newErrors.dob = 'Date of Birth is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
      if (!formData.aadhaarNumber || formData.aadhaarNumber.length !== 12) newErrors.aadhaarNumber = 'Valid 12-digit Aadhaar Number is required';
      if (!formData.panNumber || formData.panNumber.length !== 10) newErrors.panNumber = 'Valid 10-digit PAN Number is required';
      if (!formData.mobile || formData.mobile.length !== 10) newErrors.mobile = 'Valid 10-digit Mobile Number is required';
      if (!formData.whatsApp || formData.whatsApp.length !== 10) newErrors.whatsApp = 'Valid 10-digit WhatsApp Number is required';
      if (!formData.email || !emailRegex.test(formData.email)) newErrors.email = 'Valid Email Address is required';
    }

    if (step === 2) {
      if (formData.franchiseSelections.length === 0) {
        newErrors.franchiseSelections = 'Select at least one Franchise Centre option';
      }
    }

    if (step === 3) {
      if (!formData.currentOccupation.trim()) newErrors.currentOccupation = 'Occupation is required';
      if (formData.businessExperience < 0) newErrors.businessExperience = 'Experience cannot be negative';
      if (formData.educationSectorExperience < 0) newErrors.educationSectorExperience = 'Experience cannot be negative';
      if (!formData.annualTurnover) newErrors.annualTurnover = 'Annual Turnover is required';
      if (formData.numberOfEmployees < 0) newErrors.numberOfEmployees = 'Employees count cannot be negative';
    }

    if (step === 4) {
      if (!formData.buildingOwnership) newErrors.buildingOwnership = 'Building Ownership is required';
      if (!formData.totalArea || formData.totalArea <= 0) newErrors.totalArea = 'Valid Total Area in Sq Ft is required';
      if (!formData.numberOfClassrooms || formData.numberOfClassrooms <= 0) newErrors.numberOfClassrooms = 'Valid Classrooms count is required';
    }

    if (step === 5) {
      if (!formData.state.trim()) newErrors.state = 'State is required';
      if (!formData.district.trim()) newErrors.district = 'District is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.pincode || formData.pincode.length !== 6) newErrors.pincode = 'Valid 6-digit Pincode is required';
      if (!formData.populationCoverage) newErrors.populationCoverage = 'Population Coverage is required';
    }

    if (step === 6) {
      if (!formData.investmentCapacity) newErrors.investmentCapacity = 'Investment Capacity selection is required';
    }

    if (step === 7) {
      if (formData.courseCategories.length === 0) {
        newErrors.courseCategories = 'Select at least one Course Category of interest';
      }
    }

    if (step === 8) {
      if (!formData.centreHeadName.trim()) newErrors.centreHeadName = 'Centre Head Name is required';
      if (formData.trainerCount < 0) newErrors.trainerCount = 'Trainer count cannot be negative';
      if (formData.counselorCount < 0) newErrors.counselorCount = 'Counselor count cannot be negative';
      if (formData.marketingExecutiveCount < 0) newErrors.marketingExecutiveCount = 'Marketing count cannot be negative';
    }

    if (step === 9) {
      if (!formData.aadhaarDoc) newErrors.aadhaarDoc = 'Aadhaar Document upload is required';
      if (!formData.panDoc) newErrors.panDoc = 'PAN Document upload is required';
      if (!formData.educationalCertificates) newErrors.educationalCertificates = 'Educational Certificates are required';
      if (!formData.buildingAgreement) newErrors.buildingAgreement = 'Rent/Lease/Ownership Agreement is required';
      if (!formData.passportPhoto) newErrors.passportPhoto = 'Passport Photo upload is required';
    }

    if (step === 10) {
      if (!formData.whyJoinRIEM.trim()) newErrors.whyJoinRIEM = 'Please explain why you want to join RIEM';
      if (!formData.growthPlans.trim()) newErrors.growthPlans = 'Please provide details on your center growth plans';
      if (!formData.expectedAdmissionsFirstYear || formData.expectedAdmissionsFirstYear <= 0) newErrors.expectedAdmissionsFirstYear = 'Please provide expected admissions';
      if (!formData.expectedLaunchDate) newErrors.expectedLaunchDate = 'Please select an expected launch date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 10) {
        const nextStep = currentStep + 1;
        setCurrentStep(nextStep);
        saveDraft(formData, nextStep);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      saveDraft(formData, prevStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(10)) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/franchise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit application');
      }

      const data = await res.json();
      setSubmitSuccess(data);
      
      localStorage.removeItem('riem_franchise_wizard_draft');
      localStorage.removeItem('riem_franchise_wizard_step');
      setFormData(INITIAL_FORM_DATA);
      setFilePreviews({});
      setFileProgress({});
    } catch (e: any) {
      setErrors({ apiError: e.message || 'Server connection failed. Try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const INDIAN_STATES = [
    'Maharashtra', 'Karnataka', 'Gujarat', 'Delhi', 'Madhya Pradesh', 
    'Uttar Pradesh', 'Rajasthan', 'Tamil Nadu', 'Andhra Pradesh', 
    'Telangana', 'West Bengal', 'Bihar', 'Punjab', 'Haryana', 'Kerala'
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      {submitSuccess ? (
        <div className="p-8 md:p-12 rounded-2xl border border-[#E2E8F0] text-center space-y-6 shadow-sm max-w-2xl mx-auto bg-white text-[#0F172A] animate-fade-in">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-3xl font-black tracking-tight text-[#0F172A]">Application Received!</h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto font-medium">
              Your franchise onboarding application has been filed successfully. Our team will review the details.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[#E2E8F0] space-y-4 max-w-sm mx-auto bg-slate-50">
            <div>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-450">Franchise ID</span>
              <span className="text-xl font-black text-gold-650">{submitSuccess.id}</span>
            </div>

            <div className="flex justify-between items-center px-4 border-t border-slate-200 pt-3">
              <div>
                <span className="block text-[9px] uppercase font-bold text-slate-450">Lead Score</span>
                <span className="text-lg font-bold text-[#0F172A]">{submitSuccess.leadScore}/100</span>
              </div>
              <div>
                <span className="block text-[9px] uppercase font-bold text-slate-450">Category</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded border ${
                  submitSuccess.leadScore >= 80 
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-650' 
                    : submitSuccess.leadScore >= 60
                    ? 'bg-teal-500/10 border-teal-500/20 text-teal-650'
                    : submitSuccess.leadScore >= 40
                    ? 'bg-amber-500/10 border-amber-500/20 text-amber-650'
                    : 'bg-rose-500/10 border-rose-500/20 text-rose-650'
                }`}>
                  {submitSuccess.leadScore >= 80 ? 'Excellent' : submitSuccess.leadScore >= 60 ? 'Good' : submitSuccess.leadScore >= 40 ? 'Average' : 'Weak'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button
              onClick={() => setSubmitSuccess(null)}
              className="px-6 py-2.5 rounded-lg text-xs font-bold bg-navy-800 hover:bg-navy-900 text-white transition-colors cursor-pointer"
            >
              Submit Another Form
            </button>
            <button
              onClick={onNavigateToAdmin}
              className="px-6 py-2.5 rounded-lg text-xs font-bold bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 hover:from-gold-500 hover:to-gold-700 transition-colors cursor-pointer"
            >
              Go to Admin Console
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Sidebar Step indicator */}
          <div className="lg:col-span-1 space-y-4">
            <div className="p-4 rounded-xl border border-[#E2E8F0] bg-white shadow-sm">
              <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold mb-3">Onboarding Wizard</h4>
              
              {/* Desktop list layout */}
              <div className="hidden lg:flex flex-col gap-2">
                {STEPS.map((s) => {
                  const isActive = currentStep === s.id;
                  const isCompleted = currentStep > s.id;
                  return (
                    <div 
                      key={s.id}
                      onClick={() => {
                        if (s.id < currentStep) {
                          setCurrentStep(s.id);
                        } else {
                          let valid = true;
                          for (let st = currentStep; st < s.id; st++) {
                            if (!validateStep(st)) {
                              valid = false;
                              break;
                            }
                          }
                          if (valid) setCurrentStep(s.id);
                        }
                      }}
                      className={`flex items-center gap-3 p-2 rounded-lg border text-left cursor-pointer transition-all ${
                        isActive 
                          ? 'bg-navy-800 border-gold-500 text-white font-bold' 
                          : isCompleted
                          ? 'bg-emerald-500/5 border-emerald-100 text-emerald-650'
                          : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${
                        isActive
                          ? 'bg-gold-500 text-navy-950'
                          : isCompleted
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {isCompleted ? '✓' : s.id}
                      </div>
                      <span className="text-xs truncate">{s.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* Mobile stepper indicator */}
              <div className="lg:hidden flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold">Step {currentStep} of 10</span>
                  <h5 className="text-sm font-bold text-[#0F172A] leading-tight">
                    {STEPS[currentStep - 1].name}
                  </h5>
                </div>
                
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <svg className="w-10 h-10 transform -rotate-90">
                    <circle cx="20" cy="20" r="16" stroke="currentColor" className="text-slate-200" strokeWidth="3" fill="transparent" />
                    <circle cx="20" cy="20" r="16" stroke="currentColor" className="text-gold-500" strokeWidth="3" fill="transparent" 
                      strokeDasharray={`${2 * Math.PI * 16}`}
                      strokeDashoffset={`${2 * Math.PI * 16 * (1 - currentStep / 10)}`}
                    />
                  </svg>
                  <span className="absolute text-[10px] font-black text-[#0F172A]">{currentStep * 10}%</span>
                </div>
              </div>
            </div>

            {/* Auto Score Simulator display */}
            <div className="p-4 rounded-xl border border-[#E2E8F0] bg-white shadow-sm space-y-3">
              <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-extrabold flex justify-between">
                <span>Real-Time Lead Quality</span>
                <span className="text-[8px] bg-gold-500/10 text-gold-700 px-1.5 py-0.5 rounded uppercase tracking-wider font-extrabold border border-gold-500/10">Dynamic</span>
              </h4>
              
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl font-black text-[#0F172A]">
                    {(() => {
                      let sc = 5;
                      if (formData.totalArea >= 2000) sc += 15;
                      else if (formData.totalArea >= 1000) sc += 10;
                      else sc += 5;

                      if (formData.buildingOwnership === 'Own') sc += 15;
                      else if (formData.buildingOwnership === 'Lease') sc += 10;
                      else sc += 5;

                      if (formData.investmentCapacity === 'Above ₹10 Lakh') sc += 20;
                      else if (formData.investmentCapacity === '₹5 Lakh – ₹10 Lakh') sc += 15;
                      else if (formData.investmentCapacity === '₹3 Lakh – ₹5 Lakh') sc += 10;
                      else if (formData.investmentCapacity === '₹1 Lakh – ₹3 Lakh') sc += 5;
                      else sc += 2;

                      if (formData.smartClassFacility) sc += 5;
                      if (formData.internetFacility) sc += 5;

                      const team = formData.trainerCount + formData.counselorCount + formData.marketingExecutiveCount;
                      if (formData.trainerCount >= 3 || team >= 5) sc += 10;
                      else if (formData.trainerCount >= 1 || team >= 2) sc += 5;
                      else sc += 2;

                      if (formData.businessExperience >= 5 || formData.educationSectorExperience >= 3) sc += 15;
                      else if (formData.businessExperience >= 2 || formData.educationSectorExperience >= 1) sc += 10;
                      else sc += 5;

                      if (formData.populationCoverage === 'Above 5 Lakhs') sc += 15;
                      else if (formData.populationCoverage === '2 Lakhs - 5 Lakhs') sc += 10;
                      else sc += 5;

                      return sc;
                    })()}/100
                  </span>
                  
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${
                    (() => {
                      let sc = 5;
                      if (formData.totalArea >= 2000) sc += 15;
                      else if (formData.totalArea >= 1000) sc += 10;
                      else sc += 5;
                      if (formData.buildingOwnership === 'Own') sc += 15;
                      else if (formData.buildingOwnership === 'Lease') sc += 10;
                      else sc += 5;
                      if (formData.investmentCapacity === 'Above ₹10 Lakh') sc += 20;
                      else if (formData.investmentCapacity === '₹5 Lakh – ₹10 Lakh') sc += 15;
                      else if (formData.investmentCapacity === '₹3 Lakh – ₹5 Lakh') sc += 10;
                      else if (formData.investmentCapacity === '₹1 Lakh – ₹3 Lakh') sc += 5;
                      else sc += 2;
                      if (formData.smartClassFacility) sc += 5;
                      if (formData.internetFacility) sc += 5;
                      const team = formData.trainerCount + formData.counselorCount + formData.marketingExecutiveCount;
                      if (formData.trainerCount >= 3 || team >= 5) sc += 10;
                      else if (formData.trainerCount >= 1 || team >= 2) sc += 5;
                      else sc += 2;
                      if (formData.businessExperience >= 5 || formData.educationSectorExperience >= 3) sc += 15;
                      else if (formData.businessExperience >= 2 || formData.educationSectorExperience >= 1) sc += 10;
                      else sc += 5;
                      if (formData.populationCoverage === 'Above 5 Lakhs') sc += 15;
                      else if (formData.populationCoverage === '2 Lakhs - 5 Lakhs') sc += 10;
                      else sc += 5;

                      if (sc >= 80) return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-650';
                      if (sc >= 60) return 'bg-teal-500/10 border-teal-500/20 text-teal-655';
                      if (sc >= 40) return 'bg-amber-500/10 border-amber-500/20 text-amber-655';
                      return 'bg-rose-500/10 border-rose-500/20 text-rose-650';
                    })()
                  }`}>
                    {(() => {
                      let sc = 5;
                      if (formData.totalArea >= 2000) sc += 15;
                      else if (formData.totalArea >= 1000) sc += 10;
                      else sc += 5;
                      if (formData.buildingOwnership === 'Own') sc += 15;
                      else if (formData.buildingOwnership === 'Lease') sc += 10;
                      else sc += 5;
                      if (formData.investmentCapacity === 'Above ₹10 Lakh') sc += 20;
                      else if (formData.investmentCapacity === '₹5 Lakh – ₹10 Lakh') sc += 15;
                      else if (formData.investmentCapacity === '₹3 Lakh – ₹5 Lakh') sc += 10;
                      else if (formData.investmentCapacity === '₹1 Lakh – ₹3 Lakh') sc += 5;
                      else sc += 2;
                      if (formData.smartClassFacility) sc += 5;
                      if (formData.internetFacility) sc += 5;
                      const team = formData.trainerCount + formData.counselorCount + formData.marketingExecutiveCount;
                      if (formData.trainerCount >= 3 || team >= 5) sc += 10;
                      else if (formData.trainerCount >= 1 || team >= 2) sc += 5;
                      else sc += 2;
                      if (formData.businessExperience >= 5 || formData.educationSectorExperience >= 3) sc += 15;
                      else if (formData.businessExperience >= 2 || formData.educationSectorExperience >= 1) sc += 10;
                      else sc += 5;
                      if (formData.populationCoverage === 'Above 5 Lakhs') sc += 15;
                      else if (formData.populationCoverage === '2 Lakhs - 5 Lakhs') sc += 10;
                      else sc += 5;

                      if (sc >= 80) return 'Excellent';
                      if (sc >= 60) return 'Good';
                      if (sc >= 40) return 'Average';
                      return 'Weak';
                    })()}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                  Lead score is simulated live using your inputs like area, ownership, investment capacity, experience, and facilities.
                </p>
              </div>
            </div>
          </div>

          {/* Form Wizard Card */}
          <div className="lg:col-span-3">
            <div className="p-6 md:p-8 rounded-2xl border border-[#E2E8F0] bg-white shadow-sm space-y-6 animate-fade-in text-[#0F172A]">
              
              {/* Stepper Progress Bar */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 rounded-full" 
                  style={{ width: `${currentStep * 10}%` }}
                ></div>
              </div>

              {errors.apiError && (
                <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs rounded-lg font-bold">
                  {errors.apiError}
                </div>
              )}

              {/* STEP 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className={headingClasses}>
                      <span className="w-2 h-5 bg-gold-500 rounded-sm"></span>
                      Step 1: Personal Information
                    </h3>
                    <p className="text-xs text-slate-400 font-bold">Enter your personal credentials to verify identity.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Devendra Patil"
                        className={`${inputClasses} ${errors.fullName ? 'border-rose-500' : ''}`}
                      />
                      {errors.fullName && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Father/Husband Name *</label>
                      <input 
                        type="text" 
                        name="fatherHusbandName"
                        value={formData.fatherHusbandName}
                        onChange={handleInputChange}
                        placeholder="Father or Husband's Full Name"
                        className={`${inputClasses} ${errors.fatherHusbandName ? 'border-rose-500' : ''}`}
                      />
                      {errors.fatherHusbandName && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.fatherHusbandName}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Date of Birth *</label>
                      <input 
                        type="date" 
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        className={`${inputClasses} ${errors.dob ? 'border-rose-500' : ''}`}
                      />
                      {errors.dob && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.dob}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Gender *</label>
                      <select 
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className={`${selectClasses} ${errors.gender ? 'border-rose-500' : ''}`}
                      >
                        <option value="" className="bg-white text-[#0F172A]">-- Choose Gender --</option>
                        <option value="Male" className="bg-white text-[#0F172A]">Male</option>
                        <option value="Female" className="bg-white text-[#0F172A]">Female</option>
                        <option value="Other" className="bg-white text-[#0F172A]">Other</option>
                      </select>
                      {errors.gender && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.gender}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Aadhaar Card Number *</label>
                      <input 
                        type="text" 
                        name="aadhaarNumber"
                        value={formData.aadhaarNumber}
                        onChange={handleInputChange}
                        placeholder="12-digit numeric Aadhaar"
                        className={`${inputClasses} ${errors.aadhaarNumber ? 'border-rose-500' : ''}`}
                      />
                      {errors.aadhaarNumber && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.aadhaarNumber}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>PAN Card Number *</label>
                      <input 
                        type="text" 
                        name="panNumber"
                        value={formData.panNumber}
                        onChange={handleInputChange}
                        placeholder="10-character PAN ID"
                        className={`${inputClasses} ${errors.panNumber ? 'border-rose-500' : ''}`}
                      />
                      {errors.panNumber && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.panNumber}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Mobile Number *</label>
                      <input 
                        type="tel" 
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="10-digit primary number"
                        className={`${inputClasses} ${errors.mobile ? 'border-rose-500' : ''}`}
                      />
                      {errors.mobile && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.mobile}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        name="whatsApp"
                        value={formData.whatsApp}
                        onChange={handleInputChange}
                        placeholder="10-digit WhatsApp number"
                        className={`${inputClasses} ${errors.whatsApp ? 'border-rose-500' : ''}`}
                      />
                      {errors.whatsApp && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.whatsApp}</p>}
                    </div>
                  </div>

                  <div>
                    <label className={labelClasses}>Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@company.com"
                      className={`${inputClasses} ${errors.email ? 'border-rose-500' : ''}`}
                    />
                    {errors.email && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.email}</p>}
                  </div>
                </div>
              )}

              {/* STEP 2: Franchise Selection */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className={headingClasses}>
                      <span className="w-2 h-5 bg-gold-500 rounded-sm"></span>
                      Step 2: Franchise Selection
                    </h3>
                    <p className="text-xs text-slate-400 font-bold">Select the institutional centers you are interested in opening. (Select multiple)</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'School Education Centre',
                      'Skill Development Centre',
                      'Computer Training Centre',
                      'Engineering & Technical Centre',
                      'Management Academy',
                      'Career & Placement Centre',
                      'Distance Learning Centre',
                      'Vocational Training Centre'
                    ].map((model) => {
                      const isChecked = formData.franchiseSelections.includes(model);
                      return (
                        <div 
                          key={model}
                          onClick={() => handleCheckboxListChange('franchiseSelections', model)}
                          className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer select-none transition-all ${
                            isChecked 
                              ? 'bg-gold-500/5 border-gold-500 ring-1 ring-gold-500/30' 
                              : 'bg-white border-[#CBD5E1] hover:bg-slate-50'
                          }`}
                        >
                          <input 
                            type="checkbox" 
                            checked={isChecked}
                            onChange={() => {}}
                            className="w-4 h-4 rounded text-gold-500 focus:ring-gold-500 accent-gold-500 cursor-pointer"
                          />
                          <span className="text-xs font-bold text-[#0F172A]">{model}</span>
                        </div>
                      );
                    })}
                  </div>
                  {errors.franchiseSelections && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.franchiseSelections}</p>}
                </div>
              )}

              {/* STEP 3: Business Profile */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className={headingClasses}>
                      <span className="w-2 h-5 bg-gold-500 rounded-sm"></span>
                      Step 3: Business Profile
                    </h3>
                    <p className="text-xs text-slate-400 font-bold">Tell us about your educational background or corporate experiences.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Current Occupation *</label>
                      <input 
                        type="text" 
                        name="currentOccupation"
                        value={formData.currentOccupation}
                        onChange={handleInputChange}
                        placeholder="e.g. Business Partner, School Director, Job Seeker"
                        className={`${inputClasses} ${errors.currentOccupation ? 'border-rose-500' : ''}`}
                      />
                      {errors.currentOccupation && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.currentOccupation}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Existing Business Name (Optional)</label>
                      <input 
                        type="text" 
                        name="existingBusinessName"
                        value={formData.existingBusinessName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ratnaparkhi Vocational Academy"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>Total Business Experience (Years) *</label>
                      <input 
                        type="number" 
                        name="businessExperience"
                        value={formData.businessExperience}
                        onChange={handleInputChange}
                        min="0"
                        className={`${inputClasses} ${errors.businessExperience ? 'border-rose-500' : ''}`}
                      />
                      {errors.businessExperience && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.businessExperience}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Education Sector Experience (Years) *</label>
                      <input 
                        type="number" 
                        name="educationSectorExperience"
                        value={formData.educationSectorExperience}
                        onChange={handleInputChange}
                        min="0"
                        className={`${inputClasses} ${errors.educationSectorExperience ? 'border-rose-500' : ''}`}
                      />
                      {errors.educationSectorExperience && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.educationSectorExperience}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Annual Turnover *</label>
                      <select 
                        name="annualTurnover"
                        value={formData.annualTurnover}
                        onChange={handleInputChange}
                        className={`${selectClasses} ${errors.annualTurnover ? 'border-rose-500' : ''}`}
                      >
                        <option value="" className="bg-white text-[#0F172A]">-- Choose Turnover --</option>
                        <option value="None" className="bg-white text-[#0F172A]">None</option>
                        <option value="Under ₹5 Lakhs" className="bg-white text-[#0F172A]">Under ₹5 Lakhs</option>
                        <option value="₹5 Lakhs - ₹10 Lakhs" className="bg-white text-[#0F172A]">₹5 Lakhs - ₹10 Lakhs</option>
                        <option value="₹10 Lakhs - ₹15 Lakhs" className="bg-white text-[#0F172A]">₹10 Lakhs - ₹15 Lakhs</option>
                        <option value="₹15 Lakhs - ₹25 Lakhs" className="bg-white text-[#0F172A]">₹15 Lakhs - ₹25 Lakhs</option>
                        <option value="₹25 Lakhs - ₹50 Lakhs" className="bg-white text-[#0F172A]">₹25 Lakhs - ₹50 Lakhs</option>
                        <option value="Above ₹50 Lakhs" className="bg-white text-[#0F172A]">Above ₹50 Lakhs</option>
                      </select>
                      {errors.annualTurnover && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.annualTurnover}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Number of Employees *</label>
                      <input 
                        type="number" 
                        name="numberOfEmployees"
                        value={formData.numberOfEmployees}
                        onChange={handleInputChange}
                        min="0"
                        className={`${inputClasses} ${errors.numberOfEmployees ? 'border-rose-500' : ''}`}
                      />
                      {errors.numberOfEmployees && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.numberOfEmployees}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Centre Infrastructure */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className={headingClasses}>
                      <span className="w-2 h-5 bg-gold-500 rounded-sm"></span>
                      Step 4: Centre Infrastructure Details
                    </h3>
                    <p className="text-xs text-slate-400 font-bold">Define your physical center capabilities and floor dimensions.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className={labelClasses}>Building Ownership *</label>
                      <div className="flex gap-4 mt-2">
                        {['Own', 'Lease', 'Rent'].map((option) => (
                          <label key={option} className="flex items-center gap-2 text-xs text-[#0F172A] cursor-pointer select-none">
                            <input 
                              type="radio" 
                              name="buildingOwnership"
                              value={option}
                              checked={formData.buildingOwnership === option}
                              onChange={handleInputChange}
                              className="text-gold-500 focus:ring-gold-500 accent-gold-500 cursor-pointer"
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                      {errors.buildingOwnership && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.buildingOwnership}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Total Floor Space (Sq Ft) *</label>
                      <input 
                        type="number" 
                        name="totalArea"
                        value={formData.totalArea}
                        onChange={handleInputChange}
                        placeholder="e.g. 1500"
                        min="0"
                        className={`${inputClasses} ${errors.totalArea ? 'border-rose-500' : ''}`}
                      />
                      {errors.totalArea && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.totalArea}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Number of Classrooms *</label>
                      <input 
                        type="number" 
                        name="numberOfClassrooms"
                        value={formData.numberOfClassrooms}
                        onChange={handleInputChange}
                        placeholder="e.g. 3"
                        min="0"
                        className={`${inputClasses} ${errors.numberOfClassrooms ? 'border-rose-500' : ''}`}
                      />
                      {errors.numberOfClassrooms && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.numberOfClassrooms}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-[#E2E8F0]">
                    {[
                      { key: 'computerLabAvailable', label: 'Computer Lab Available' },
                      { key: 'internetFacility', label: 'Internet Facility' },
                      { key: 'smartClassFacility', label: 'Smart Class Facility' },
                      { key: 'powerBackup', label: 'Power Backup' }
                    ].map((f) => (
                      <label 
                        key={f.key} 
                        className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs font-bold cursor-pointer select-none transition-colors ${
                          formData[f.key as keyof typeof formData] 
                            ? 'bg-gold-500/10 border-gold-500/30 text-gold-700' 
                            : 'bg-white border-[#CBD5E1] text-[#334155]'
                        }`}
                      >
                        <input 
                          type="checkbox"
                          name={f.key}
                          checked={formData[f.key as keyof typeof formData] as boolean}
                          onChange={handleInputChange}
                          className="w-4 h-4 rounded text-gold-500 focus:ring-gold-500 accent-gold-500 cursor-pointer"
                        />
                        {f.label}
                      </label>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <label className={labelClasses}>Upload Building Photos</label>
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                      <label className="flex flex-col items-center justify-center w-full md:w-48 h-32 border-2 border-dashed border-[#CBD5E1] hover:border-gold-500 rounded-xl cursor-pointer bg-slate-50 transition-all">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                          <svg className="w-8 h-8 mb-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <p className="text-[10px] text-slate-500 font-bold uppercase">Browse Photos</p>
                          <p className="text-[8px] text-slate-400 mt-1">PNG, JPG up to 10MB</p>
                        </div>
                        <input type="file" multiple accept="image/*" className="hidden" onChange={handleMultipleFilesUpload} />
                      </label>

                      {fileProgress.buildingPhotos !== undefined && fileProgress.buildingPhotos < 100 && (
                        <div className="w-full max-w-xs space-y-2">
                          <div className="flex justify-between text-[10px] font-bold text-[#0F172A]">
                            <span>Processing images...</span>
                            <span>{fileProgress.buildingPhotos}%</span>
                          </div>
                          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                            <div className="h-full bg-gold-500 rounded-full" style={{ width: `${fileProgress.buildingPhotos}%` }}></div>
                          </div>
                        </div>
                      )}

                      {formData.buildingPhotos.length > 0 && (
                        <div className="flex-1 flex flex-wrap gap-3">
                          {formData.buildingPhotos.map((photo, i) => {
                            const preview = filePreviews[`buildingPhoto_${i}_${photo}`];
                            return (
                              <div key={photo} className="relative group w-20 h-20 rounded-lg overflow-hidden border border-[#E2E8F0] shadow-md">
                                {preview ? (
                                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-400 font-bold">Photo</div>
                                )}
                                <button 
                                  type="button" 
                                  onClick={() => removePhoto(photo)}
                                  className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                                  title="Delete photo"
                                >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Location Analysis */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className={headingClasses}>
                      <span className="w-2 h-5 bg-gold-500 rounded-sm"></span>
                      Step 5: Location Analysis
                    </h3>
                    <p className="text-xs text-slate-400 font-bold">Verify your geographical operation boundaries and territorial size.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className={labelClasses}>State *</label>
                      <select 
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className={`${selectClasses} ${errors.state ? 'border-rose-500' : ''}`}
                      >
                        <option value="" className="bg-white text-[#0F172A]">-- Choose State --</option>
                        {INDIAN_STATES.map((s) => (
                          <option key={s} value={s} className="bg-white text-[#0F172A]">{s}</option>
                        ))}
                      </select>
                      {errors.state && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.state}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>District *</label>
                      <input 
                        type="text" 
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        placeholder="e.g. Pune, Ludhiana"
                        className={`${inputClasses} ${errors.district ? 'border-rose-500' : ''}`}
                      />
                      {errors.district && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.district}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>City/Town *</label>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="e.g. Pune"
                        className={`${inputClasses} ${errors.city ? 'border-rose-500' : ''}`}
                      />
                      {errors.city && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.city}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Pincode *</label>
                      <input 
                        type="text" 
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="6-digit postal code"
                        className={`${inputClasses} ${errors.pincode ? 'border-rose-500' : ''}`}
                      />
                      {errors.pincode && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.pincode}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Google Maps Location URL</label>
                      <input 
                        type="url" 
                        name="googleMapsLocation"
                        value={formData.googleMapsLocation}
                        onChange={handleInputChange}
                        placeholder="https://maps.google.com/?q=..."
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label className={labelClasses}>Population Coverage *</label>
                      <select 
                        name="populationCoverage"
                        value={formData.populationCoverage}
                        onChange={handleInputChange}
                        className={selectClasses}
                      >
                        <option value="Above 5 Lakhs" className="bg-white text-[#0F172A]">Above 5 Lakhs (Metropolitan)</option>
                        <option value="2 Lakhs - 5 Lakhs" className="bg-white text-[#0F172A]">2 Lakhs - 5 Lakhs (Tier 2)</option>
                        <option value="Below 2 Lakhs" className="bg-white text-[#0F172A]">Below 2 Lakhs (Tier 3/Rural)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Nearby Schools / Colleges</label>
                      <textarea 
                        name="nearbySchoolsColleges"
                        value={formData.nearbySchoolsColleges}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="e.g. Government ITI, Shivaji Public School"
                        className={`${inputClasses} h-16 resize-none`}
                      ></textarea>
                    </div>

                    <div>
                      <label className={labelClasses}>Competitor Institutes</label>
                      <textarea 
                        name="competitorInstitutes"
                        value={formData.competitorInstitutes}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="e.g. Apex Training Node, Bright Computers"
                        className={`${inputClasses} h-16 resize-none`}
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 6: Investment Capacity */}
              {currentStep === 6 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className={headingClasses}>
                      <span className="w-2 h-5 bg-gold-500 rounded-sm"></span>
                      Step 6: Investment Capacity
                    </h3>
                    <p className="text-xs text-slate-400 font-bold">Select your capital mobilization bracket for center startup.</p>
                  </div>

                  <div className="flex flex-col gap-3 max-w-md">
                    {[
                      '₹50,000 – ₹1 Lakh',
                      '₹1 Lakh – ₹3 Lakh',
                      '₹3 Lakh – ₹5 Lakh',
                      '₹5 Lakh – ₹10 Lakh',
                      'Above ₹10 Lakh'
                    ].map((bracket) => {
                      const isSelected = formData.investmentCapacity === bracket;
                      return (
                        <label 
                          key={bracket} 
                          className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer select-none transition-all ${
                            isSelected 
                              ? 'bg-gold-500/5 border-gold-500 ring-1 ring-gold-500/30 font-bold text-[#0F172A]' 
                              : 'bg-white border-[#CBD5E1] hover:bg-slate-50 text-[#334155]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input 
                              type="radio" 
                              name="investmentCapacity"
                              value={bracket}
                              checked={isSelected}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-gold-500 focus:ring-gold-500 accent-gold-500 cursor-pointer"
                            />
                            <span className="text-xs font-semibold">{bracket}</span>
                          </div>
                          {bracket.startsWith('Above') && (
                            <span className="bg-gold-500/20 text-gold-800 border border-gold-500/30 text-[8px] font-black tracking-wider uppercase px-2 py-0.5 rounded">High Score Priority</span>
                          )}
                        </label>
                      );
                    })}
                  </div>
                  {errors.investmentCapacity && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.investmentCapacity}</p>}
                </div>
              )}

              {/* STEP 7: Course Categories */}
              {currentStep === 7 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className={headingClasses}>
                      <span className="w-2 h-5 bg-gold-500 rounded-sm"></span>
                      Step 7: Course Categories Interested In
                    </h3>
                    <p className="text-xs text-slate-400 font-bold">Select course divisions you wish to run in your center. (Select multiple)</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      'Engineering Programs',
                      'IT & Computer Courses',
                      'Management Programs',
                      'Skill Development',
                      'Vocational Training',
                      'Digital Marketing',
                      'AI & Data Science',
                      'Internship Programs',
                      'Distance Education'
                    ].map((course) => {
                      const isChecked = formData.courseCategories.includes(course);
                      return (
                        <div 
                          key={course}
                          onClick={() => handleCheckboxListChange('courseCategories', course)}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                            isChecked 
                              ? 'bg-gold-500/5 border-gold-500 ring-1 ring-gold-500/30' 
                              : 'bg-white border-[#CBD5E1] hover:bg-slate-50'
                          }`}
                        >
                          <input 
                            type="checkbox" 
                            checked={isChecked}
                            onChange={() => {}}
                            className="w-4 h-4 rounded text-gold-500 focus:ring-gold-500 accent-gold-500 cursor-pointer"
                          />
                          <span className="text-xs font-bold text-[#0F172A]">{course}</span>
                        </div>
                      );
                    })}
                  </div>
                  {errors.courseCategories && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.courseCategories}</p>}
                </div>
              )}

              {/* STEP 8: Team Information */}
              {currentStep === 8 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className={headingClasses}>
                      <span className="w-2 h-5 bg-gold-500 rounded-sm"></span>
                      Step 8: Team Information
                    </h3>
                    <p className="text-xs text-slate-400 font-bold">Verify your operational management team and trainer resources.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Centre Head Name *</label>
                      <input 
                        type="text" 
                        name="centreHeadName"
                        value={formData.centreHeadName}
                        onChange={handleInputChange}
                        placeholder="Appointed Centre Director Full Name"
                        className={`${inputClasses} ${errors.centreHeadName ? 'border-rose-500' : ''}`}
                      />
                      {errors.centreHeadName && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.centreHeadName}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Trainer Count *</label>
                      <input 
                        type="number" 
                        name="trainerCount"
                        value={formData.trainerCount}
                        onChange={handleInputChange}
                        min="0"
                        className={`${inputClasses} ${errors.trainerCount ? 'border-rose-500' : ''}`}
                      />
                      {errors.trainerCount && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.trainerCount}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Counselor Count *</label>
                      <input 
                        type="number" 
                        name="counselorCount"
                        value={formData.counselorCount}
                        onChange={handleInputChange}
                        min="0"
                        className={`${inputClasses} ${errors.counselorCount ? 'border-rose-500' : ''}`}
                      />
                      {errors.counselorCount && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.counselorCount}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>Marketing Executive Count *</label>
                      <input 
                        type="number" 
                        name="marketingExecutiveCount"
                        value={formData.marketingExecutiveCount}
                        onChange={handleInputChange}
                        min="0"
                        className={`${inputClasses} ${errors.marketingExecutiveCount ? 'border-rose-500' : ''}`}
                      />
                      {errors.marketingExecutiveCount && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.marketingExecutiveCount}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 9: Document Upload */}
              {currentStep === 9 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className={headingClasses}>
                      <span className="w-2 h-5 bg-gold-500 rounded-sm"></span>
                      Step 9: Document Upload
                    </h3>
                    <p className="text-xs text-slate-400 font-bold">Upload mandatory corporate records to verify center authorization.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { key: 'aadhaarDoc', label: 'Aadhaar Card Copy *' },
                      { key: 'panDoc', label: 'PAN Card Copy *' },
                      { key: 'educationalCertificates', label: 'Educational Certificates *' },
                      { key: 'buildingAgreement', label: 'Rent/Lease/Ownership Agreement *' },
                      { key: 'gstCertificate', label: 'GST Certificate (Optional)' },
                      { key: 'businessReg', label: 'Business Registration (Optional)' },
                      { key: 'passportPhoto', label: 'Passport Size Photo *' }
                    ].map((doc) => {
                      const uploadedFile = formData[doc.key as keyof typeof formData] as string;
                      const progress = fileProgress[doc.key];
                      const preview = filePreviews[doc.key];
                      
                      return (
                        <div key={doc.key} className="p-4 border border-[#E2E8F0] bg-white rounded-xl space-y-2">
                          <label className={labelClasses}>{doc.label}</label>
                          
                          {uploadedFile ? (
                            <div className="flex items-center justify-between bg-slate-50 p-2.5 rounded-lg border border-[#E2E8F0]">
                              <div className="flex items-center gap-2.5 truncate">
                                {preview && preview !== 'pdf-placeholder' ? (
                                  <img src={preview} alt="Doc Thumbnail" className="w-10 h-10 rounded object-cover border border-[#E2E8F0] shadow" />
                                ) : (
                                  <div className="w-10 h-10 rounded bg-gold-500/10 text-gold-700 flex items-center justify-center font-bold text-xs shrink-0">Doc</div>
                                )}
                                <div className="truncate">
                                  <p className="text-xs font-bold text-[#0F172A] truncate">{uploadedFile}</p>
                                  <p className="text-[9px] text-slate-400">File attached</p>
                                </div>
                              </div>
                              <button 
                                type="button" 
                                onClick={() => removeDocument(doc.key)}
                                className="text-[10px] font-bold text-red-500 hover:text-red-650 px-2.5 py-1 border border-red-500/10 hover:border-red-500/20 rounded-md transition-colors cursor-pointer"
                              >
                                Remove
                              </button>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              <label className="flex items-center justify-center w-full h-11 border border-dashed border-[#CBD5E1] hover:border-gold-500 rounded-lg cursor-pointer bg-slate-50 transition-colors">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Attach Document</span>
                                <input type="file" className="hidden" accept=".pdf,.png,.jpg,.jpeg" onChange={(e) => handleFileUpload(doc.key, e)} />
                              </label>
                              
                              {progress !== undefined && progress < 100 && (
                                <div className="space-y-1">
                                  <div className="flex justify-between text-[8px] font-black text-slate-400 uppercase">
                                    <span>Uploading...</span>
                                    <span>{progress}%</span>
                                  </div>
                                  <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                                    <div className="h-full bg-gold-500 rounded-full" style={{ width: `${progress}%` }}></div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          {errors[doc.key] && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors[doc.key]}</p>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 10: Franchise Assessment */}
              {currentStep === 10 && (
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className={headingClasses}>
                      <span className="w-2 h-5 bg-gold-500 rounded-sm"></span>
                      Step 10: Franchise Assessment
                    </h3>
                    <p className="text-xs text-slate-400 font-bold">Provide strategic details about your launch readiness and scaling vision.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className={labelClasses}>Why do you want to join RIEM Franchise Network? *</label>
                      <textarea 
                        name="whyJoinRIEM"
                        value={formData.whyJoinRIEM}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Detail your motivation, alignment with educational goals, or business expansion strategy..."
                        className={`${inputClasses} ${errors.whyJoinRIEM ? 'border-rose-500' : ''} h-24 resize-none`}
                      ></textarea>
                      {errors.whyJoinRIEM && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.whyJoinRIEM}</p>}
                    </div>

                    <div>
                      <label className={labelClasses}>What are your marketing and growth plans for the first year? *</label>
                      <textarea 
                        name="growthPlans"
                        value={formData.growthPlans}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Detail your marketing plans, school/college connect programs, banners, digital ads, and admissions strategy..."
                        className={`${inputClasses} ${errors.growthPlans ? 'border-rose-500' : ''} h-24 resize-none`}
                      ></textarea>
                      {errors.growthPlans && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.growthPlans}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClasses}>Expected Admissions in First Year *</label>
                        <input 
                          type="number" 
                          name="expectedAdmissionsFirstYear"
                          value={formData.expectedAdmissionsFirstYear}
                          onChange={handleInputChange}
                          placeholder="e.g. 100"
                          min="1"
                          className={`${inputClasses} ${errors.expectedAdmissionsFirstYear ? 'border-rose-500' : ''}`}
                        />
                        {errors.expectedAdmissionsFirstYear && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.expectedAdmissionsFirstYear}</p>}
                      </div>

                      <div>
                        <label className={labelClasses}>Expected Launch Date *</label>
                        <input 
                          type="date" 
                          name="expectedLaunchDate"
                          value={formData.expectedLaunchDate}
                          onChange={handleInputChange}
                          className={`${inputClasses} ${errors.expectedLaunchDate ? 'border-rose-500' : ''}`}
                        />
                        {errors.expectedLaunchDate && <p className="text-[10px] text-rose-500 mt-1 font-bold">{errors.expectedLaunchDate}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Wizard Navigation Footer */}
              <div className="flex justify-between items-center border-t border-slate-200 pt-5">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 1 || isSubmitting}
                  className={`px-5 py-2.5 text-xs font-bold rounded-lg border transition-all ${
                    currentStep === 1 
                      ? 'border-slate-100 text-slate-300 cursor-not-allowed'
                      : 'border-slate-200 text-[#0F172A] hover:bg-slate-50 cursor-pointer'
                  }`}
                >
                  Previous Step
                </button>

                {currentStep < 10 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 text-xs font-bold bg-gradient-to-r from-gold-400 to-gold-600 text-navy-955 hover:from-gold-500 hover:to-gold-700 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-7 py-2.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-gold-400 to-gold-600 text-navy-955 hover:from-gold-500 hover:to-gold-700 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
