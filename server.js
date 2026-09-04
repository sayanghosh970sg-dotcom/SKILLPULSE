// Standalone Express server providing optional backend services for SkillPulse
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory dataset
const {
  INDUSTRIES,
  SKILL_DEMAND_DATA,
  JOB_ROLES,
  EMERGING_SKILLS,
  MAHARASHTRA_DISTRICTS,
  INITIAL_CURRICULUM
} = require('./src/data/mockData.js');

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', platform: 'SkillPulse API', time: new Date() });
});

// 2. GET /api/skills
app.get('/api/skills', (req, res) => {
  res.json({ success: true, skills: SKILL_DEMAND_DATA, emerging: EMERGING_SKILLS });
});

// 3. GET /api/industries
app.get('/api/industries', (req, res) => {
  res.json({ success: true, industries: INDUSTRIES });
});

// 4. GET /api/jobs
app.get('/api/jobs', (req, res) => {
  res.json({ success: true, roles: JOB_ROLES });
});

// 5. GET /api/skill-demand
app.get('/api/skill-demand', (req, res) => {
  res.json({ success: true, demand: SKILL_DEMAND_DATA, districts: MAHARASHTRA_DISTRICTS });
});

// 6. POST /api/skill-gap
app.post('/api/skill-gap', (req, res) => {
  const { roleId = 'data-analyst', skills = [] } = req.body;
  const role = JOB_ROLES.find(r => r.id === roleId) || JOB_ROLES[0];
  const userSet = new Set(skills.map(s => s.toLowerCase()));

  let totalWeight = 0;
  let earned = 0;
  const matched = [];
  const missing = [];

  role.requiredSkills.forEach(reqSkill => {
    totalWeight += reqSkill.weight;
    if (userSet.has(reqSkill.name.toLowerCase())) {
      earned += reqSkill.weight;
      matched.push(reqSkill);
    } else {
      missing.push(reqSkill);
    }
  });

  const score = totalWeight > 0 ? Math.round((earned / totalWeight) * 100) : 0;
  res.json({
    success: true,
    data: {
      role: role.title,
      readinessScore: score,
      matched,
      missing,
      learningPath: role.recommendedPath
    }
  });
});

// 7. POST /api/curriculum-analysis
app.post('/api/curriculum-analysis', (req, res) => {
  const { modules = INITIAL_CURRICULUM, additions = [] } = req.body;
  const baseline = 75;
  const boost = additions.length * 7;
  const score = Math.min(100, baseline + boost);

  res.json({
    success: true,
    data: {
      alignmentScore: score,
      modulesEvaluated: modules.length,
      simulatedAdditions: additions.length
    }
  });
});

app.listen(PORT, () => {
  console.log(`SkillPulse Express backend running on http://localhost:${PORT}`);
});
