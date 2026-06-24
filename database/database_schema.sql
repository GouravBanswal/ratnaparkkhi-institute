-- SQL Schema for RIEM Franchise Onboarding System

CREATE TABLE IF NOT EXISTS franchise_leads (
    id VARCHAR(50) PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    father_husband_name VARCHAR(100) NOT NULL,
    dob DATE NOT NULL,
    gender VARCHAR(20) NOT NULL,
    aadhaar_number VARCHAR(12) UNIQUE NOT NULL,
    pan_number VARCHAR(10) UNIQUE NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    whatsapp VARCHAR(15) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    franchise_selections TEXT[] NOT NULL,
    current_occupation VARCHAR(100) NOT NULL,
    existing_business_name VARCHAR(150),
    business_experience INTEGER NOT NULL,
    education_sector_experience INTEGER NOT NULL,
    annual_turnover VARCHAR(50) NOT NULL,
    number_of_employees INTEGER NOT NULL,
    building_ownership VARCHAR(20) CHECK (building_ownership IN ('Own', 'Lease', 'Rent')) NOT NULL,
    total_area NUMERIC(10, 2) NOT NULL,
    number_of_classrooms INTEGER NOT NULL,
    computer_lab_available BOOLEAN DEFAULT FALSE,
    internet_facility BOOLEAN DEFAULT FALSE,
    smart_class_facility BOOLEAN DEFAULT FALSE,
    power_backup BOOLEAN DEFAULT FALSE,
    building_photos TEXT[] NOT NULL,
    state VARCHAR(50) NOT NULL,
    district VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    google_maps_location VARCHAR(255),
    population_coverage VARCHAR(50) NOT NULL,
    nearby_schools_colleges TEXT,
    competitor_institutes TEXT,
    investment_capacity VARCHAR(50) NOT NULL,
    course_categories TEXT[] NOT NULL,
    centre_head_name VARCHAR(100) NOT NULL,
    trainer_count INTEGER NOT NULL,
    counselor_count INTEGER NOT NULL,
    marketing_executive_count INTEGER NOT NULL,
    
    -- Document storage file paths / references
    aadhaar_doc VARCHAR(255) NOT NULL,
    pan_doc VARCHAR(255) NOT NULL,
    educational_certificates VARCHAR(255) NOT NULL,
    building_agreement VARCHAR(255) NOT NULL,
    gst_certificate VARCHAR(255),
    business_reg VARCHAR(255),
    passport_photo VARCHAR(255) NOT NULL,
    
    -- Assessment responses
    why_join_riem TEXT NOT NULL,
    growth_plans TEXT NOT NULL,
    expected_admissions_first_year INTEGER NOT NULL,
    expected_launch_date DATE NOT NULL,
    
    -- System generated management fields
    lead_score INTEGER NOT NULL,
    status VARCHAR(30) CHECK (status IN ('New', 'Under Review', 'Approved', 'Rejected', 'On Hold')) DEFAULT 'New',
    internal_notes TEXT,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexing for fast search and aggregation
CREATE INDEX idx_franchise_leads_status ON franchise_leads(status);
CREATE INDEX idx_franchise_leads_score ON franchise_leads(lead_score);
CREATE INDEX idx_franchise_leads_state ON franchise_leads(state);
CREATE INDEX idx_franchise_leads_investment ON franchise_leads(investment_capacity);
