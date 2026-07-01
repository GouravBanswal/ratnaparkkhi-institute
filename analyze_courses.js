import fs from 'fs';
import path from 'path';

const fileContent = fs.readFileSync('components/Courses/courses.ts', 'utf-8');

// A simple regex to extract course objects for analysis.
// We'll look for blocks that look like objects within courseList
const courseListMatch = fileContent.match(/export const courseList: Course\[\] = \[\s*([\s\S]*?)\n\];/);

if (!courseListMatch) {
  console.log("Could not find courseList");
  process.exit(1);
}

// We'll do a basic regex parsing since evaluating TS is tricky without tsc
// Let's just output the ids, names, categories, and subCategories for manual review
const courses = [];
const objectRegex = /{\s*id:\s*['"]([^'"]+)['"],\s*name:\s*['"]([^'"]+)['"],\s*category:\s*['"]([^'"]+)['"],(?:\s*subCategories:\s*(\[[^\]]*\]),)?/g;

let match;
while ((match = objectRegex.exec(courseListMatch[1])) !== null) {
  courses.push({
    id: match[1],
    name: match[2],
    category: match[3],
    subCategories: match[4] ? match[4].replace(/\s+/g, ' ') : undefined
  });
}

const report = courses.map(c => `${c.id} | ${c.name} | ${c.category} | ${c.subCategories || '[]'}`).join('\n');
fs.writeFileSync('courses_analysis.txt', report);
console.log(`Analyzed ${courses.length} courses.`);
