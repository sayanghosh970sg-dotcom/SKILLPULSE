import { calculateCurriculumAlignment } from '../../../lib/analytics';
import { INITIAL_CURRICULUM } from '../../../data/mockData';

export async function POST(request) {
  try {
    const body = await request.json();
    const { modules = INITIAL_CURRICULUM, additions = [] } = body;

    const result = calculateCurriculumAlignment(modules, additions);

    return Response.json({
      success: true,
      data: result
    });
  } catch (err) {
    return Response.json(
      { success: false, error: 'Invalid curriculum simulation payload' },
      { status: 400 }
    );
  }
}
