import { SKILL_DEMAND_DATA, EMERGING_SKILLS } from '../../../data/mockData';

export async function GET(request) {
  return Response.json({
    success: true,
    totalSkills: SKILL_DEMAND_DATA.length,
    skills: SKILL_DEMAND_DATA,
    emerging: EMERGING_SKILLS
  });
}
