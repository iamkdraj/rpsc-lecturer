import { lessons } from '../src/data/lessons.js';
let ok = true;
for (const lesson of lessons) {
  for (const field of ['id','title','track','concept','example','quiz']) {
    if (!lesson[field] || (Array.isArray(lesson[field]) && lesson[field].length === 0)) {
      console.error(`Missing ${field} in ${lesson.id || lesson.title}`);
      ok = false;
    }
  }
  lesson.quiz?.forEach((q, i) => {
    if (!q.options?.[q.correct]) { console.error(`Bad correct index in ${lesson.id} quiz ${i}`); ok = false; }
  });
}
console.log(ok ? `Content check passed for ${lessons.length} lessons.` : 'Content check failed.');
process.exit(ok ? 0 : 1);
