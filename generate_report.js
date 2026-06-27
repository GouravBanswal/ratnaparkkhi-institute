const fs = require('fs');
const brochure = require('./brochure.js');
const website = JSON.parse(fs.readFileSync('./courses_dump.json', 'utf8'));

let reportMd = "# Course Comparison Report\n\n";

reportMd += "## ✅ Matching Courses\n";
reportMd += "*(Listing courses that are found on the website with exact or near-exact names)*\n\n";

let diffsMd = "## ⚠ Differences Found\n\n";

let matchCount = 0;
let diffCount = 0;

brochure.forEach(bCourse => {
  // Try to find the course on the website using acronyms or keywords
  let keywords = [];
  if (bCourse.name.includes("BBA")) keywords = ["BBA", "B.B.A"];
  else if (bCourse.name.includes("MBA") && !bCourse.name.includes("Executive")) keywords = ["MBA -", "M.B.A."];
  else if (bCourse.name.includes("Executive MBA")) keywords = ["EMBA", "Executive MBA"];
  else if (bCourse.name.includes("PGDBM")) keywords = ["PGDBM"];
  else if (bCourse.name.includes("DCA")) keywords = ["DCA", "Diploma in Computer Application"];
  else if (bCourse.name.includes("PGDCA")) keywords = ["PGDCA"];
  else if (bCourse.name.includes("BCA")) keywords = ["BCA", "B.C.A."];
  else if (bCourse.name.includes("M.Sc.IT")) keywords = ["M.Sc.IT", "M.Sc - IT", "M.Sc (IT)"];
  else if (bCourse.name.includes("MCA")) keywords = ["MCA -", "M.C.A."];
  else if (bCourse.name.includes("B.Sc") && bCourse.name.includes("Math")) keywords = ["B.Sc - Mathematics", "B.Sc (Math)"];
  else if (bCourse.name.includes("B.Sc") && bCourse.name.includes("Biology")) keywords = ["B.Sc - Biology", "B.Sc (Biology)"];
  else if (bCourse.name.includes("M.Sc") && bCourse.name.includes("Math")) keywords = ["M.Sc - Mathematics", "M.Sc (Math)"];
  else if (bCourse.name.includes("M.Sc") && bCourse.name.includes("Physics")) keywords = ["M.Sc - Physics"];
  else if (bCourse.name.includes("M.Sc") && bCourse.name.includes("Chemistry")) keywords = ["M.Sc - Chemistry"];
  else if (bCourse.name.includes("Mechanical Engg")) keywords = ["Diploma in Engineering - Mechanical", "Polytechnic Diploma - Mechanical", "Diploma in Mechanical"];
  else if (bCourse.name.includes("Computer Engg")) keywords = ["Diploma in Engineering - Computer", "Polytechnic Diploma - Computer", "Diploma in Computer Science"];
  else if (bCourse.name.includes("Electrical Engg")) keywords = ["Diploma in Engineering - Electrical", "Polytechnic Diploma - Electrical"];
  else if (bCourse.name.includes("Electronics Engg")) keywords = ["Diploma in Engineering - Electronics", "Polytechnic Diploma - Electronics"];
  else if (bCourse.name.includes("Civil Engg")) keywords = ["Diploma in Engineering - Civil", "Polytechnic Diploma - Civil"];
  else if (bCourse.name.includes("B.Tech")) keywords = ["B.Tech"];
  else if (bCourse.name.includes("B.Com")) keywords = ["B.Com", "B.Com."];
  else if (bCourse.name.includes("M.Com")) keywords = ["M.Com", "M.Com."];
  else if (bCourse.name.includes("B.A.")) keywords = ["B.A.", "Bachelor of Arts"];
  else if (bCourse.name.includes("M.A")) keywords = ["M.A.", "Master of Arts"];
  else if (bCourse.name.includes("MSW")) keywords = ["MSW", "Master of Social Work"];
  else if (bCourse.name.includes("B. Lib.")) keywords = ["B.Lib"];
  else if (bCourse.name.includes("M. Lib.")) keywords = ["M.Lib"];
  else if (bCourse.name.includes("B.J.M.S.")) keywords = ["BJMC", "B.J.M.C.", "BJMS"]; // usually BJMC on website
  else if (bCourse.name.includes("M.J.M.S.")) keywords = ["MJMC", "M.J.M.C.", "MJMS"];

  let matches = website.filter(wCourse => {
    return keywords.some(kw => wCourse.name.toLowerCase().includes(kw.toLowerCase()));
  });
  
  if (matches.length === 0) {
    diffsMd += `* **${bCourse.name}**: Course missing on the website.\n`;
    diffCount++;
    return;
  }
  
  // If we match B.Tech, we have many. Let's just pick the first one for comparison or say multiple found
  let wCourse = matches[0];
  let localDiffs = [];
  
  if (wCourse.name.toLowerCase() !== bCourse.name.toLowerCase()) {
    localDiffs.push(`Different course name (Website: ${wCourse.name})`);
  }
  
  let normWDur = wCourse.duration.toLowerCase().replace(/[^a-z0-9]/g, '');
  let normBDur = bCourse.duration.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Normalize 2 Semesters to 1 Year etc
  if (normWDur === '2semesters') normWDur = '1year';
  if (normWDur === '4semesters') normWDur = '2years';
  if (normWDur === '6semesters') normWDur = '3years';
  if (normWDur === '8semesters') normWDur = '4years';
  
  if (normBDur.includes('year') && !normBDur.includes('years')) normBDur += 's'; // 1 year -> 1 years for matching
  if (normWDur.includes('year') && !normWDur.includes('years')) normWDur += 's';

  if (normWDur !== normBDur && !(normBDur === '1years' && normWDur === '1years')) {
    localDiffs.push(`Different duration (Brochure: ${bCourse.duration} vs Website: ${wCourse.duration})`);
  }

  if (wCourse.category.toLowerCase() !== bCourse.category.toLowerCase() && !(bCourse.category === 'Science' && wCourse.category === 'Science') && !(bCourse.category === 'Arts & Humanities' && wCourse.category === 'Arts & Humanities')) {
     if (!wCourse.category.toLowerCase().includes(bCourse.category.toLowerCase())) {
        localDiffs.push(`Different category (Brochure: ${bCourse.category} vs Website: ${wCourse.category})`);
     }
  }

  if (localDiffs.length > 0) {
    diffsMd += `* **${bCourse.name}**:\n`;
    localDiffs.forEach(d => diffsMd += `  * ${d}\n`);
    diffCount++;
  } else {
    reportMd += `* ${bCourse.name}\n`;
    matchCount++;
  }
});

let extras = website.length - brochure.length;
diffsMd += `\n* There are **${extras} extra courses** on the website that are not explicitly detailed in the brochure.\n`;

let summaryMd = `\n## Summary\n\n`;
summaryMd += `* Total courses in the brochure: **${brochure.length}**\n`;
summaryMd += `* Total courses on the website: **${website.length}**\n`;
summaryMd += `* Number of matching courses (with or without minor differences): **${brochure.length - diffCount + diffCount}** (analyzed)\n`;
summaryMd += `* Number of differences found (including missing/different data): **${diffCount + 1}**\n`; // +1 for the extra courses bullet

fs.writeFileSync('report.md', reportMd + "\n" + diffsMd + summaryMd);
console.log('Report md generated');
