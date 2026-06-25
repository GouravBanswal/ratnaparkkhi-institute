import { useState, useEffect } from 'react';

export function useEnquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check sessionStorage to track if popup was already shown in this session
    const hasBeenShown = sessionStorage.getItem('enquiry-popup-shown');
    if (hasBeenShown) return;

    // Start timer when page finishes loading (10 seconds timeout)
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('enquiry-popup-shown', 'true');
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Disable background scrolling while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Pressing ESC should close the modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const closePopup = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    closePopup,
  };
}
