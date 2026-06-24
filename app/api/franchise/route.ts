import { NextResponse } from 'next/server';
import { getLeads, saveLeads, calculateLeadScore, generateFranchiseId, FranchiseLead } from '@/lib/franchise';

export async function GET() {
  try {
    const leads = getLeads();
    // Sort leads by submission date, descending (newest first)
    leads.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
    return NextResponse.json(leads);
  } catch (error: any) {
    console.error('Error fetching franchise leads:', error);
    return NextResponse.json({ error: 'Failed to retrieve franchise leads' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const leads = getLeads();

    // Required fields check
    const requiredFields = [
      'fullName',
      'fatherHusbandName',
      'dob',
      'gender',
      'aadhaarNumber',
      'panNumber',
      'mobile',
      'whatsApp',
      'email',
      'currentOccupation',
      'businessExperience',
      'educationSectorExperience',
      'annualTurnover',
      'numberOfEmployees',
      'buildingOwnership',
      'totalArea',
      'numberOfClassrooms',
      'state',
      'district',
      'city',
      'pincode',
      'populationCoverage',
      'investmentCapacity',
      'centreHeadName',
      'trainerCount',
      'counselorCount',
      'marketingExecutiveCount',
      'whyJoinRIEM',
      'growthPlans',
      'expectedAdmissionsFirstYear',
      'expectedLaunchDate'
    ];

    const missingFields = requiredFields.filter(field => body[field] === undefined || body[field] === null || body[field] === '');
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Auto-generate Franchise ID
    const newId = generateFranchiseId(leads);
    
    // Auto-calculate Lead Score
    const leadScore = calculateLeadScore(body);

    const newLead: FranchiseLead = {
      id: newId,
      fullName: body.fullName,
      fatherHusbandName: body.fatherHusbandName,
      dob: body.dob,
      gender: body.gender,
      aadhaarNumber: body.aadhaarNumber,
      panNumber: body.panNumber,
      mobile: body.mobile,
      whatsApp: body.whatsApp,
      email: body.email,
      franchiseSelections: body.franchiseSelections || [],
      currentOccupation: body.currentOccupation,
      existingBusinessName: body.existingBusinessName || '',
      businessExperience: Number(body.businessExperience),
      educationSectorExperience: Number(body.educationSectorExperience),
      annualTurnover: body.annualTurnover,
      numberOfEmployees: Number(body.numberOfEmployees),
      buildingOwnership: body.buildingOwnership,
      totalArea: Number(body.totalArea),
      numberOfClassrooms: Number(body.numberOfClassrooms),
      computerLabAvailable: Boolean(body.computerLabAvailable),
      internetFacility: Boolean(body.internetFacility),
      smartClassFacility: Boolean(body.smartClassFacility),
      powerBackup: Boolean(body.powerBackup),
      buildingPhotos: body.buildingPhotos || [],
      state: body.state,
      district: body.district,
      city: body.city,
      pincode: body.pincode,
      googleMapsLocation: body.googleMapsLocation || '',
      populationCoverage: body.populationCoverage,
      nearbySchoolsColleges: body.nearbySchoolsColleges || '',
      competitorInstitutes: body.competitorInstitutes || '',
      investmentCapacity: body.investmentCapacity,
      courseCategories: body.courseCategories || [],
      centreHeadName: body.centreHeadName,
      trainerCount: Number(body.trainerCount),
      counselorCount: Number(body.counselorCount),
      marketingExecutiveCount: Number(body.marketingExecutiveCount),
      aadhaarDoc: body.aadhaarDoc || '',
      panDoc: body.panDoc || '',
      educationalCertificates: body.educationalCertificates || '',
      buildingAgreement: body.buildingAgreement || '',
      gstCertificate: body.gstCertificate || '',
      businessReg: body.businessReg || '',
      passportPhoto: body.passportPhoto || '',
      whyJoinRIEM: body.whyJoinRIEM,
      growthPlans: body.growthPlans,
      expectedAdmissionsFirstYear: Number(body.expectedAdmissionsFirstYear),
      expectedLaunchDate: body.expectedLaunchDate,
      
      // System defaults
      leadScore,
      status: 'New',
      internalNotes: '',
      submittedAt: new Date().toISOString()
    };

    leads.push(newLead);
    const success = saveLeads(leads);
    
    if (!success) {
      return NextResponse.json({ error: 'Failed to write application data' }, { status: 500 });
    }

    return NextResponse.json(newLead, { status: 201 });
  } catch (error: any) {
    console.error('Error submitting franchise application:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
