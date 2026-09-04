import { JOB_ROLES } from '../../../data/mockData';

export async function GET(request) {
  return Response.json({
    success: true,
    totalRoles: JOB_ROLES.length,
    roles: JOB_ROLES
  });
}
