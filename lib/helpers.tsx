import React from 'react';

/**
 * Helper to strip spaces and special characters from phone numbers for use in tel: links
 */
export function formatPhoneNumber(phone: string): string {
  return phone.split('/')[0].trim().replace(/\s+/g, '');
}

/**
 * Capitalizes the first letter of a string
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Global Trademark Component
 */
export function TM() {
  return <sup className="tm-symbol">™</sup>;
}

/**
 * Utility function to render a string replacing '™' with the styled TM component
 */
export function renderTextWithTM(text: string): React.ReactNode {
  if (!text) return '';
  const parts = text.split('™');
  if (parts.length === 1) return text;

  return parts.map((part, index) => {
    if (index === parts.length - 1) {
      return part;
    }
    return (
      <React.Fragment key={index}>
        {part}
        <TM />
      </React.Fragment>
    );
  });
}
