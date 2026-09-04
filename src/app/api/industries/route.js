import { INDUSTRIES } from '../../../data/mockData';

export async function GET(request) {
  return Response.json({
    success: true,
    totalIndustries: INDUSTRIES.length,
    industries: INDUSTRIES
  });
}
