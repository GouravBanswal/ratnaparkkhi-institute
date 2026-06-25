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
