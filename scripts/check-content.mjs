import { lessons } from '../src/data/course.js';
let ok = true;
for (const lesson of lessons) {
  for (const field of ['id','title','objective','setup','insight','example','trap','question','options','answer','explanation']) {
    if (lesson[field] === undefined || lesson[field] === '' || (Array.isArray(lesson[field]) && lesson[field].length === 0)) {
      console.error(`Missing ${field} in ${lesson.id || lesson.title}`);
      ok = false;
    }
  }
  if (!lesson.options?.[lesson.answer]) {
    console.error(`Bad answer index in ${lesson.id}`);
    ok = false;
  }
}
console.log(ok ? `Content check passed for ${lessons.length} lessons.` : 'Content check failed.');
process.exit(ok ? 0 : 1);
