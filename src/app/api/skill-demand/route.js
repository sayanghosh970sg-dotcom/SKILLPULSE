import { SKILL_DEMAND_DATA, MAHARASHTRA_DISTRICTS } from '../../../data/mockData';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const district = searchParams.get('district');

  if (district) {
    const distData = MAHARASHTRA_DISTRICTS.find(d => d.id === district.toLowerCase());
    return Response.json({
      success: true,
      district: distData || null
    });
  }

  return Response.json({
    success: true,
    skillDemand: SKILL_DEMAND_DATA,
    districts: MAHARASHTRA_DISTRICTS
  });
}
