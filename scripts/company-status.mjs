import { company } from '../src/data/company.js';
console.log(company.mission);
console.log('\nDepartments:');
for (const d of company.departments) console.log(`- ${d.name}: ${d.agents.length} agents`);
