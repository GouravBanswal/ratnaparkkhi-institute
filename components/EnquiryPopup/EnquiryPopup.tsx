'use client';

import React, { useState } from 'react';
import EnquiryForm from './EnquiryForm';
import { useEnquiryPopup } from './useEnquiryPopup';
import { motion, AnimatePresence } from 'framer-motion';

export default function EnquiryPopup() {
  const { isOpen, closePopup } = useEnquiryPopup();
  const [success, setSuccess] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  const handleSuccess = () => {
    setSuccess(true);
    // Automatically close the popup after 3 seconds on success
    setTimeout(() => {
      closePopup();
      // Reset success state after closing animation transitions out
      setTimeout(() => {
        setSuccess(false);
      }, 400);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="bg-white rounded-[20px] shadow-2xl overflow-hidden w-full max-w-lg border border-slate-100 flex flex-col p-6 md:p-8 space-y-6 relative"
          >
            {/* Close Button at top-right */}
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors cursor-pointer"
              title="Close Popup"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {success ? (
              <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center border border-emerald-200 shadow-sm animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#0B1F3A]">Enquiry Submitted!</h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-xs font-semibold leading-relaxed">
                    Thank you. Our admission counsellors will contact you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="space-y-2 text-left pr-6">
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#0B1F3A] leading-tight flex items-center gap-2">
                    <span className="w-2.5 h-6 bg-[#D4AF37] rounded-full inline-block"></span>
                    Start Your Admission Journey Today
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    Our admission counsellors will help you choose the right course and guide you through the admission process.
                  </p>
                </div>

                {/* Form */}
                <EnquiryForm onSuccess={handleSuccess} onClose={closePopup} />
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
