// Analytics and calculation engine for Skill Gap and Readiness

import { JOB_ROLES } from '../data/mockData';

export function calculateSkillGap(targetRoleId, userSkills = []) {
  const role = JOB_ROLES.find(r => r.id === targetRoleId) || JOB_ROLES[0];
  const required = role.requiredSkills;
  
  // Normalizing string checks
  const userSkillSet = new Set(userSkills.map(s => s.trim().toLowerCase()));

  let totalWeight = 0;
  let earnedWeight = 0;
  const matchedSkills = [];
  const missingSkills = [];

  required.forEach(skill => {
    totalWeight += skill.weight;
    const isMatched = userSkillSet.has(skill.name.toLowerCase()) || 
      userSkills.some(us => us.toLowerCase().includes(skill.name.toLowerCase()) || skill.name.toLowerCase().includes(us.toLowerCase()));

    if (isMatched) {
      earnedWeight += skill.weight;
      matchedSkills.push({ ...skill, status: 'matched' });
    } else {
      missingSkills.push({ ...skill, status: 'missing' });
    }
  });

  const readinessScore = totalWeight > 0 ? Math.round((earnedWeight / totalWeight) * 100) : 0;

  // Prioritize gaps (High priority first)
  const prioritizedGaps = missingSkills.sort((a, b) => {
    if (a.priority === 'High' && b.priority !== 'High') return -1;
    if (a.priority !== 'High' && b.priority === 'High') return 1;
    return 0;
  });

  // Recommended learning path derived from missing skills
  const learningPath = prioritizedGaps.map((gap, index) => ({
    step: index + 1,
    title: `Master ${gap.name}`,
    priority: gap.priority,
    action: `Complete structured modules & build mini-projects in ${gap.name}`,
    estimatedWeeks: gap.priority === 'High' ? '2-3 Weeks' : '1-2 Weeks'
  }));

  // Capstone reminder if score < 90
  if (readinessScore < 100) {
    learningPath.push({
      step: learningPath.length + 1,
      title: 'Real-world Capstone Portfolio',
      priority: 'High',
      action: `Build 2 end-to-end industry projects showcasing ${matchedSkills.map(s => s.name).slice(0, 3).join(', ')}`,
      estimatedWeeks: '3 Weeks'
    });
  }

  return {
    targetRole: role.title,
    readinessScore,
    matchedSkills,
    missingSkills: prioritizedGaps,
    learningPath,
    roleDescription: role.description,
    salaryRange: role.salaryRange,
    totalSkillsCount: required.length,
    matchedCount: matchedSkills.length
  };
}

export function calculateCurriculumAlignment(modules = [], addedSimulations = []) {
  const allCurrentSkills = modules.flatMap(m => m.coveredSkills || []);
  const simulatedSkills = addedSimulations.map(s => s.name);
  const combined = new Set([...allCurrentSkills, ...simulatedSkills].map(s => s.toLowerCase()));

  // Industry benchmark target skills
  const industryBenchmark = [
    { name: 'Python', weight: 15 },
    { name: 'SQL', weight: 15 },
    { name: 'Git', weight: 10 },
    { name: 'Cloud Computing', weight: 20 },
    { name: 'Power BI', weight: 15 },
    { name: 'Generative AI', weight: 15 },
    { name: 'Docker', weight: 10 }
  ];

  let earned = 0;
  let total = 0;
  const covered = [];
  const missing = [];

  industryBenchmark.forEach(item => {
    total += item.weight;
    const isPresent = Array.from(combined).some(s => s.includes(item.name.toLowerCase()) || item.name.toLowerCase().includes(s));
    if (isPresent) {
      earned += item.weight;
      covered.push(item.name);
    } else {
      missing.push(item.name);
    }
  });

  const baseScore = Math.min(100, Math.round((earned / total) * 100));

  return {
    alignmentScore: baseScore,
    coveredSkills: covered,
    missingSkills: missing,
    benchmarkCount: industryBenchmark.length
  };
}
