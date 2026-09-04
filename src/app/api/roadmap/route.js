import { JOB_ROLES } from '../../../data/mockData';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const roleId = searchParams.get('role');

  if (roleId) {
    const role = JOB_ROLES.find(r => r.id === roleId.toLowerCase());
    if (role) {
      return Response.json({
        success: true,
        role: role.title,
        roadmap: role.recommendedPath
      });
    }
  }

  return Response.json({
    success: true,
    roadmaps: JOB_ROLES.map(r => ({
      id: r.id,
      title: r.title,
      stepsCount: r.recommendedPath.length,
      salaryRange: r.salaryRange
    }))
  });
}
