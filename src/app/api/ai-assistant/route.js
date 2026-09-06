import OpenAI from 'openai';

// Server-side OpenAI client initialization
const getOpenAIClient = () => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey.trim() === '') {
    return null;
  }
  return new OpenAI({ apiKey: apiKey.trim() });
};

// System prompt enforcing SkillPulse data transparency and career intelligence principles
const SYSTEM_INSTRUCTIONS = `You are PulseAI, the intelligent career and skill advisory agent for SkillPulse — India's National Industry-to-Skill Intelligence Platform.

YOUR MISSION:
Help learners, developers, job seekers, and workforce planners bridge the gap between their current skills and modern industry demand across India.

CORE CAPABILITIES:
1. Skill Gap Analysis: Advise users on skills required for target roles (Frontend Developer, Backend Developer, Full Stack Developer, Data Analyst, Cloud/DevOps Engineer, AI/ML Specialist).
2. Company & Role Practice: Guide users on preparing for technical rounds, DSA, and role-specific assessments for top companies (Google, Microsoft, Amazon, TCS, Infosys, Wipro, Accenture) using SkillPulse's practice module.
3. Curated Learning Paths: Recommend high-value courses, certifications, and hands-on projects available in the SkillPulse course catalog.
4. Expert Mentorship: Connect users with vetted industry professionals for 1-on-1 career guidance, mock interviews, and code reviews.
5. Labor Market Telemetry: Explain skill demand trends, hiring growth, and geographical skill clusters across India.

CRITICAL DATA TRANSPARENCY & TRUST RULES (STRICTLY FOLLOW):
1. NEVER fabricate statistics, employment rates, or salary figures.
2. NEVER claim to possess proprietary, leaked, or confidential interview questions from companies like Google, Microsoft, or TCS. Clarify that SkillPulse practice questions are industry-curated benchmarks and mock scenarios.
3. NEVER claim formal, commercial, or exclusive partnerships with employers unless officially verified.
4. Always respect SkillPulse data freshness standards:
   - Fresh (<90 days)
   - Recent (<1 year)
   - Stale (>1 year)
5. Distinguish between India-wide baseline data (AISHE, NSDC, PLFS) and localized/district-level telemetry.
6. IF YOU DO NOT HAVE VERIFIED DATA for a specific statistic or metric, explicitly state: "I don't have verified data for that yet."
7. Provide actionable next steps and link users to relevant SkillPulse platform features:
   - /skill-gap-analyzer : Calculate personal skill deficit and readiness score
   - /practice : Solve company & role coding and technical questions
   - /courses : Discover curated free & paid learning programs
   - /experts : Connect with industry mentors and engineering leads
   - /career-roadmap : Step-by-step career milestone paths
   - /skill-intelligence : National skill demand telemetry & analytics
   - /data-sources : Full transparency registry of official datasets

TONE & FORMAT:
- Professional, encouraging, data-grounded, and concise.
- Use markdown formatting (bullet points, bold text, code snippets) where appropriate.
`;

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { message, history = [], context = {} } = body;

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return Response.json(
        { success: false, error: 'Message is required and must be a non-empty string.' },
        { status: 400 }
      );
    }

    const trimmedMessage = message.trim();
    const apiKey = process.env.OPENAI_API_KEY;

    // Graceful fallback when API key is not configured
    if (!apiKey || apiKey.trim() === '') {
      const fallbackReply = generateFallbackResponse(trimmedMessage, context);
      return Response.json({
        success: true,
        configured: false,
        reply: fallbackReply,
        note: 'PulseAI is running in demonstration mode. Add your OPENAI_API_KEY to .env.local to enable full OpenAI Responses API capabilities.',
      });
    }

    const openai = getOpenAIClient();
    const model = process.env.OPENAI_MODEL || 'gpt-5.6-luna';

    // Prepare contextual supplement if client passed active user state
    let contextualInstructions = SYSTEM_INSTRUCTIONS;
    if (context && Object.keys(context).length > 0) {
      contextualInstructions += `\n\nCURRENT USER SESSION CONTEXT:
- Target Role: ${context.targetRole || 'Not specified'}
- Target Company: ${context.targetCompany || 'Not specified'}
- Current Skills: ${Array.isArray(context.currentSkills) ? context.currentSkills.join(', ') : 'None specified'}
- Diagnosed Skill Gaps: ${Array.isArray(context.skillGaps) ? context.skillGaps.join(', ') : 'None detected'}
- Practice Completed: ${context.practiceScore ? `${context.practiceScore.completed}/${context.practiceScore.total}` : 'None'}
Use this context to tailor your advice specifically to their journey.`;
    }

    // Prepare conversation input items
    const inputItems = [];

    // Include recent history (up to last 6 turns)
    const recentHistory = Array.isArray(history) ? history.slice(-6) : [];
    for (const item of recentHistory) {
      if (item && item.role && item.content) {
        inputItems.push({
          role: item.role === 'assistant' ? 'assistant' : 'user',
          content: String(item.content),
        });
      }
    }

    // Append current user message
    inputItems.push({
      role: 'user',
      content: trimmedMessage,
    });

    let replyText = '';

    // Primary: Attempt OpenAI Responses API
    try {
      if (openai.responses && typeof openai.responses.create === 'function') {
        const response = await openai.responses.create({
          model: model,
          instructions: contextualInstructions,
          input: inputItems,
          max_output_tokens: 1000,
        });

        if (response && response.output_text) {
          replyText = response.output_text;
        } else if (response && Array.isArray(response.output)) {
          for (const outItem of response.output) {
            if (outItem.type === 'message' && Array.isArray(outItem.content)) {
              for (const c of outItem.content) {
                if (c.type === 'output_text' && c.text) {
                  replyText += c.text;
                }
              }
            }
          }
        }
      }
    } catch (responsesErr) {
      console.warn('OpenAI Responses API invocation failed, falling back to chat completions:', responsesErr.message);
    }

    // Resilient fallback: standard chat.completions if Responses API didn't return text
    if (!replyText) {
      const chatMessages = [
        { role: 'system', content: contextualInstructions },
        ...inputItems.map(item => ({
          role: item.role,
          content: typeof item.content === 'string' ? item.content : JSON.stringify(item.content)
        }))
      ];

      const completion = await openai.chat.completions.create({
        model: model.startsWith('gpt-5') ? 'gpt-4o-mini' : model,
        messages: chatMessages,
        max_tokens: 1000,
      });

      replyText = completion?.choices?.[0]?.message?.content || "I'm sorry, I could not generate a response at this time.";
    }

    return Response.json({
      success: true,
      configured: true,
      reply: replyText,
    });

  } catch (error) {
    console.error('Error in /api/ai-assistant:', error);
    return Response.json({
      success: false,
      configured: Boolean(process.env.OPENAI_API_KEY),
      error: error.message || 'Internal server error while communicating with AI service.',
      reply: "PulseAI encountered an issue processing your request. If this persists, please verify your OpenAI API key and network connection.",
    }, { status: 500 });
  }
}

// Deterministic intelligent fallback when OPENAI_API_KEY is not configured
function generateFallbackResponse(userMsg, context) {
  const q = userMsg.toLowerCase();

  if (q.includes('practice') || q.includes('interview') || q.includes('question') || q.includes('coding') || q.includes('google') || q.includes('tcs') || q.includes('microsoft')) {
    return `### 💡 Company & Role Practice Recommendations

SkillPulse provides curated practice problem sets tailored to specific tech companies and roles.

**Recommended Action:**
- Visit our **[Company & Role Practice Module](/practice)** to practice curated DSA, System Design, and behavioral questions.
- Select your target company (e.g., Google, Microsoft, TCS, Amazon) and role (Frontend, Backend, Full Stack, Data Analyst).
- Filter by difficulty (Easy, Medium, Hard) and practice with the built-in code editor and solution hints.

*Note: SkillPulse practice problems are vetted industry benchmarks designed to reflect real assessment standards.*`;
  }

  if (q.includes('data') || q.includes('source') || q.includes('transparency') || q.includes('dataset') || q.includes('aishe') || q.includes('plfs')) {
    return `### 📊 SkillPulse Data Transparency & Sources

SkillPulse is committed to total data integrity and does not fabricate metrics.

**Our Official Data Foundation:**
- **AISHE** (All India Survey on Higher Education) — Higher education enrollment & graduation metrics.
- **PLFS / MoSPI** — Periodic Labour Force Survey for national employment baselines.
- **NSDC & NCVET** — National Skill Development Corporation vocational training standards.
- **NCO-2015** — National Classification of Occupations framework.

Explore the complete registry at **[Data Sources & Transparency](/data-sources)**.`;
  }

  if (q.includes('gap') || q.includes('skill') || q.includes('analyze') || q.includes('deficit') || q.includes('readiness')) {
    return `### 🎯 Skill Gap Diagnosis & Alignment

SkillPulse compares your self-reported skill proficiencies against real-time industry job specifications across India.

**How to get diagnosed:**
1. Head to the **[Skill Gap Analyzer](/skill-gap-analyzer)**.
2. Select your target role (such as Data Analyst, Frontend Developer, or Cloud Engineer).
3. Rate your current proficiency across core competencies (e.g. Python, SQL, React, Cloud).
4. Review your **Skill Readiness Index** and tailored priority areas.

*Grounded in National Classification of Occupations (NCO-2015) and live labor telemetry.*`;
  }

  if (q.includes('course') || q.includes('learn') || q.includes('study') || q.includes('tutorial') || q.includes('certification')) {
    return `### 📚 Curated Learning Resources

To efficiently close your skill gaps, SkillPulse indexes top-rated technical courses across domains:

**Explore Courses:**
- Browse the **[SkillPulse Course Catalog](/courses)**.
- Filter by skill (Python, React, Docker, Machine Learning), level (Beginner, Intermediate, Advanced), and pricing (Free / Paid).
- Access accredited programs from SWAYAM, NPTEL, Coursera, freeCodeCamp, and edX.

*All listed courses are evaluated against industry skill demand metrics.*`;
  }

  if (q.includes('mentor') || q.includes('expert') || q.includes('guidance') || q.includes('advisor') || q.includes('consult')) {
    return `### 👥 Connect with Industry Experts

Need personalized guidance, portfolio review, or interview coaching?

**Meet our Experts:**
- Visit the **[Industry Experts Directory](/experts)**.
- Connect with experienced engineering leads, data scientists, and architects from top tech firms.
- Filter by domain (AI/ML, Web Dev, Cloud Architecture, Cyber Security) and book 1-on-1 consultations.`;
  }

  if (q.includes('roadmap') || q.includes('path') || q.includes('career') || q.includes('milestone')) {
    return `### 🗺️ Step-by-Step Career Roadmaps

SkillPulse offers structured, milestone-based roadmaps for transitioning into high-demand tech roles:

**Get Started:**
- Check out the **[Career Roadmap](/career-roadmap)**.
- View progressive tracks breaking down concepts into weekly sprints and capstone projects.
- Track your completion rate and benchmark your pace against industry standards.`;
  }

  // General welcome & guidance
  return `### 👋 Welcome to PulseAI — Your Career & Skill Co-pilot!

I'm here to help you accelerate your technical career using verified SkillPulse intelligence.

**What I can do for you:**
- **Diagnose Skill Gaps**: Identify missing proficiencies for your target role.
- **Company Practice**: Guide your preparation for technical rounds at top employers.
- **Recommend Courses**: Find high-impact learning resources to close skill deficits.
- **Connect Mentors**: Match you with seasoned industry specialists.

*PulseAI is running in demonstration mode. To enable full generative AI chat, configure your \`OPENAI_API_KEY\` in \`.env.local\`.*

How can I help you today?`;
}
