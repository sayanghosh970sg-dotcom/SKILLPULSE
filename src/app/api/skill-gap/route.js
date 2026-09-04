import { calculateSkillGap } from '../../../lib/analytics';

export async function POST(request) {
  try {
    const body = await request.json();
    const { roleId = 'data-analyst', skills = [] } = body;

    const result = calculateSkillGap(roleId, skills);

    return Response.json({
      success: true,
      data: result
    });
  } catch (err) {
    return Response.json(
      { success: false, error: 'Invalid payload provided for skill-gap calculation.' },
      { status: 400 }
    );
  }
}
