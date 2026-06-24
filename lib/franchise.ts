import fs from 'fs';
import path from 'path';
import { FranchiseLead } from './franchise-shared';

export * from './franchise-shared';

const dbPath = path.join(process.cwd(), 'data', 'franchise-leads.json');

/**
 * Reads franchise leads from the local JSON database file.
 */
export function getLeads(): FranchiseLead[] {
  try {
    if (!fs.existsSync(dbPath)) {
      return [];
    }
    const fileContent = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading leads from JSON:', error);
    return [];
  }
}

/**
 * Saves franchise leads back to the local JSON database file.
 */
export function saveLeads(leads: FranchiseLead[]): boolean {
  try {
    const dirPath = path.dirname(dbPath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(dbPath, JSON.stringify(leads, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing leads to JSON:', error);
    return false;
  }
}

/**
 * Generates the next sequential Franchise ID.
 */
export function generateFranchiseId(existingLeads: FranchiseLead[]): string {
  const year = new Date().getFullYear();
  let maxNum = 0;
  const prefix = `RIEM-FR-${year}-`;
  
  existingLeads.forEach(lead => {
    if (lead.id && lead.id.startsWith(prefix)) {
      const numStr = lead.id.replace(prefix, '');
      const num = parseInt(numStr, 10);
      if (!isNaN(num) && num > maxNum) {
        maxNum = num;
      }
    }
  });
  
  const nextNum = maxNum + 1;
  return `${prefix}${String(nextNum).padStart(4, '0')}`;
}
