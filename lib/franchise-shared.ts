export interface FranchiseLead {
  id: string;
  fullName: string;
  fatherHusbandName: string;
  dob: string;
  gender: string;
  aadhaarNumber: string;
  panNumber: string;
  mobile: string;
  whatsApp: string;
  email: string;
  franchiseSelections: string[];
  currentOccupation: string;
  existingBusinessName?: string;
  businessExperience: number;
  educationSectorExperience: number;
  annualTurnover: string;
  numberOfEmployees: number;
  buildingOwnership: 'Own' | 'Lease' | 'Rent';
  totalArea: number;
  numberOfClassrooms: number;
  computerLabAvailable: boolean;
  internetFacility: boolean;
  smartClassFacility: boolean;
  powerBackup: boolean;
  buildingPhotos: string[];
  state: string;
  district: string;
  city: string;
  pincode: string;
  googleMapsLocation?: string;
  populationCoverage: 'Above 5 Lakhs' | '2 Lakhs - 5 Lakhs' | 'Below 2 Lakhs';
  nearbySchoolsColleges?: string;
  competitorInstitutes?: string;
  investmentCapacity: '₹50,000 – ₹1 Lakh' | '₹1 Lakh – ₹3 Lakh' | '₹3 Lakh – ₹5 Lakh' | '₹5 Lakh – ₹10 Lakh' | 'Above ₹10 Lakh';
  courseCategories: string[];
  centreHeadName: string;
  trainerCount: number;
  counselorCount: number;
  marketingExecutiveCount: number;
  aadhaarDoc: string;
  panDoc: string;
  educationalCertificates: string;
  buildingAgreement: string;
  gstCertificate?: string;
  businessReg?: string;
  passportPhoto: string;
  whyJoinRIEM: string;
  growthPlans: string;
  expectedAdmissionsFirstYear: number;
  expectedLaunchDate: string;
  
  // System-generated fields
  leadScore: number;
  status: 'New' | 'Under Review' | 'Approved' | 'Rejected' | 'On Hold';
  internalNotes: string;
  submittedAt: string;
}

/**
 * Computes a lead score between 0 and 100 based on standard factors.
 */
export function calculateLeadScore(data: Partial<FranchiseLead>): number {
  let score = 0;

  // 1. Infrastructure Area (Sq Ft) - Max 15 points
  const area = Number(data.totalArea) || 0;
  if (area >= 2000) {
    score += 15;
  } else if (area >= 1000) {
    score += 10;
  } else {
    score += 5;
  }

  // 2. Ownership Type - Max 15 points
  const ownership = data.buildingOwnership || 'Rent';
  if (ownership === 'Own') {
    score += 15;
  } else if (ownership === 'Lease') {
    score += 10;
  } else {
    score += 5; // Rent
  }

  // 3. Investment Capacity - Max 20 points
  const investment = data.investmentCapacity || '₹50,000 – ₹1 Lakh';
  if (investment === 'Above ₹10 Lakh') {
    score += 20;
  } else if (investment === '₹5 Lakh – ₹10 Lakh') {
    score += 15;
  } else if (investment === '₹3 Lakh – ₹5 Lakh') {
    score += 10;
  } else if (investment === '₹1 Lakh – ₹3 Lakh') {
    score += 5;
  } else {
    score += 2; // ₹50,000 – ₹1 Lakh
  }

  // 4. Smart Class Availability - Max 5 points
  if (data.smartClassFacility) {
    score += 5;
  }

  // 5. Internet Availability - Max 5 points
  if (data.internetFacility) {
    score += 5;
  }

  // 6. Team Size - Max 10 points
  const trainers = Number(data.trainerCount) || 0;
  const counselors = Number(data.counselorCount) || 0;
  const marketers = Number(data.marketingExecutiveCount) || 0;
  const totalTeam = trainers + counselors + marketers;
  if (trainers >= 3 || totalTeam >= 5) {
    score += 10;
  } else if (trainers >= 1 || totalTeam >= 2) {
    score += 5;
  } else {
    score += 2;
  }

  // 7. Experience - Max 15 points
  const busExp = Number(data.businessExperience) || 0;
  const edExp = Number(data.educationSectorExperience) || 0;
  if (busExp >= 5 || edExp >= 3) {
    score += 15;
  } else if (busExp >= 2 || edExp >= 1) {
    score += 10;
  } else {
    score += 5;
  }

  // 8. Location Category (Population Coverage) - Max 15 points
  const population = data.populationCoverage || 'Below 2 Lakhs';
  if (population === 'Above 5 Lakhs') {
    score += 15;
  } else if (population === '2 Lakhs - 5 Lakhs') {
    score += 10;
  } else {
    score += 5; // Below 2 Lakhs
  }

  return score;
}

/**
 * Gets a human-readable lead score category rating.
 */
export function getScoreCategory(score: number): 'Excellent' | 'Good' | 'Average' | 'Weak' {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Average';
  return 'Weak';
}
