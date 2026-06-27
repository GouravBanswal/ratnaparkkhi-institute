const fs = require('fs');
const content = fs.readFileSync('components/Courses/courses.ts', 'utf8');
const lines = content.split('\n');
let courses = [];
let currentCourse = {};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('id:') && !line.includes('//')) currentCourse.id = line.split('id:')[1].replace(/['",]/g, '').trim();
  if (line.includes('name:') && !line.includes('//')) currentCourse.name = line.split(/name:\s*/)[1].replace(/['",]/g, '').trim();
  if (line.includes('category:') && !line.includes('//')) currentCourse.category = line.split(/category:\s*/)[1].replace(/['",]/g, '').trim();
  if (line.includes('level:') && !line.includes('//')) currentCourse.level = line.split(/level:\s*/)[1].replace(/['",]/g, '').trim();
  if (line.includes('duration:') && !line.includes('//')) currentCourse.duration = line.split(/duration:\s*/)[1].replace(/['",]/g, '').trim();
  if (line.includes('eligibility:') && !line.includes('//')) currentCourse.eligibility = line.split(/eligibility:\s*/)[1].replace(/['",]/g, '').trim();
  
  if (line.trim() === '},' || line.trim() === '}') {
    if (Object.keys(currentCourse).length > 2) {
      courses.push({...currentCourse});
      currentCourse = {};
    }
  }
}
fs.writeFileSync('courses_dump.json', JSON.stringify(courses, null, 2));
console.log('Dumped ' + courses.length + ' courses');
