const fs = require('fs');
const brochure = require('./brochure.js');
const website = JSON.parse(fs.readFileSync('./courses_dump.json', 'utf8'));

// Basic string normalization for comparison
function normalize(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

const report = {
  matched: [],
  differences: [],
  missing: [],
  extra: [],
  brochureTotal: brochure.length,
  websiteTotal: website.length
};

const matchedWebsiteIds = new Set();

brochure.forEach(bCourse => {
  const normB = normalize(bCourse.name);
  
  // Find potential matches in website
  const matches = website.filter(wCourse => {
    const normW = normalize(wCourse.name);
    return normW === normB || normW.includes(normB) || normB.includes(normW);
  });

  if (matches.length === 0) {
    report.missing.push(`Missing: ${bCourse.name}`);
    return;
  }

  // Check closest match (first one for now)
  const wCourse = matches[0];
  matchedWebsiteIds.add(wCourse.id);
  
  let isPerfect = true;
  let diffs = [];
  
  if (wCourse.name !== bCourse.name) {
    isPerfect = false;
    diffs.push(`Name diff: Brochure "${bCourse.name}" vs Website "${wCourse.name}"`);
  }
  
  // Normalize and compare durations
  if (normalize(wCourse.duration) !== normalize(bCourse.duration)) {
    isPerfect = false;
    diffs.push(`Duration diff for "${bCourse.name}": Brochure "${bCourse.duration}" vs Website "${wCourse.duration}"`);
  }
  
  // Normalize and compare eligibility
  if (normalize(wCourse.eligibility) !== normalize(bCourse.eligibility)) {
    isPerfect = false;
    diffs.push(`Eligibility diff for "${bCourse.name}": Brochure "${bCourse.eligibility}" vs Website "${wCourse.eligibility}"`);
  }
  
  if (isPerfect) {
    report.matched.push(bCourse.name);
  } else {
    report.differences.push({ name: bCourse.name, diffs });
  }
});

// Calculate extras
const extraCount = website.length - matchedWebsiteIds.size;

fs.writeFileSync('report_data.json', JSON.stringify({ ...report, extraCount }, null, 2));
console.log('Report generated');
