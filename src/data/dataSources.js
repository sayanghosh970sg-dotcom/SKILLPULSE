// Central Data Source Configuration & Provenance Registry for SkillPulse
// Only verified, official sources are documented here.
// Derived and demo datasets are explicitly tagged with their respective data types.

export const DATA_SOURCES = {
  msde_iti: {
    id: 'msde_iti',
    name: 'Ministry of Skill Development & Entrepreneurship (MSDE)',
    organization: 'Directorate General of Training (DGT), Ministry of Skill Development & Entrepreneurship',
    url: 'https://www.msde.gov.in',
    dataset: 'All India ITI Infrastructure & Vocational Training Statistics',
    coverage: 'India (National, State, and District levels)',
    frequency: 'Annual',
    lastUpdated: '2026-06-30',
    retrievedAt: '2026-08-15',
    license: 'Government Open Data License - India (GODL)',
    dataType: 'official',
    description: 'Official census of registered Industrial Training Institutes (ITIs), intake capacity, and technical trade programs across India.'
  },
  msde_pmkvy: {
    id: 'msde_pmkvy',
    name: 'Skill India Digital Hub (SIDH) / MSDE',
    organization: 'National Skill Development Corporation (NSDC) & MSDE',
    url: 'https://www.skillindiadigital.gov.in',
    dataset: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY) Cumulative Training Metrics',
    coverage: 'India (Pan-India Coverage across all States & UTs)',
    frequency: 'Quarterly',
    lastUpdated: '2026-07-31',
    retrievedAt: '2026-08-20',
    license: 'Government Open Data License - India (GODL)',
    dataType: 'official',
    description: 'Quarterly progress reports on certified candidates, short-term training batches, and recognized prior learning certifications under PMKVY.'
  },
  ncs_portal: {
    id: 'ncs_portal',
    name: 'National Career Service (NCS)',
    organization: 'Ministry of Labour and Employment, Government of India',
    url: 'https://www.ncs.gov.in',
    dataset: 'National Vacancy Mobilization & Occupational Sector Demand',
    coverage: 'India (State and Major Industrial Clusters)',
    frequency: 'Monthly',
    lastUpdated: '2026-08-15',
    retrievedAt: '2026-08-25',
    license: 'Open Access / Official Portal Data',
    dataType: 'official',
    description: 'Registered job vacancies, employer demand by industry sector, and job seeker demographics across Indian states.'
  },
  plfs_mospi: {
    id: 'plfs_mospi',
    name: 'Ministry of Statistics & Programme Implementation (MoSPI)',
    organization: 'National Sample Survey Office (NSSO), MoSPI',
    url: 'https://www.mospi.gov.in',
    dataset: 'Periodic Labour Force Survey (PLFS) Technical & Vocational Education Report',
    coverage: 'India (Urban & Rural State Disaggregation)',
    frequency: 'Annual',
    lastUpdated: '2026-05-15',
    retrievedAt: '2026-07-10',
    license: 'Government Open Data License - India (GODL)',
    dataType: 'official',
    description: 'Nationwide sample survey assessing labour force participation, formal vocational skilling proportions, and youth employment trends.'
  },
  skillpulse_analysis: {
    id: 'skillpulse_analysis',
    name: 'SkillPulse Research & Analytics Engine',
    organization: 'SkillPulse Labor Market Intelligence Initiative',
    url: '/data-sources',
    dataset: 'Normalized Industry Competency Index & Emerging Skill Trajectories',
    coverage: 'India (Aggregated from NCS job notices, employer profiles, and sector skill councils)',
    frequency: 'Quarterly',
    lastUpdated: '2026-08-10',
    retrievedAt: '2026-08-10',
    license: 'SkillPulse Open Research Standard',
    dataType: 'derived',
    methodology: 'Weights extracted by analyzing occupational competencies, cross-referenced against National Occupational Standards (NOS) and normalized on an index scale from 0 to 100.',
    description: 'Calculated metric combining employer requirements with National Classification of Occupations standards to benchmark skill demand velocity.'
  },
  skillpulse_gap_engine: {
    id: 'skillpulse_gap_engine',
    name: 'SkillPulse Readiness & Alignment Algorithm',
    organization: 'SkillPulse Core Engine',
    url: '/data-sources',
    dataset: 'Rule-Based Occupational Gap & Readiness Scoring Matrix',
    coverage: 'Interactive / User-Provided Inputs',
    frequency: 'Real-time calculation per user assessment',
    lastUpdated: '2026-08-01',
    retrievedAt: '2026-08-01',
    license: 'Proprietary Open Engine',
    dataType: 'derived',
    methodology: 'Readiness Score is calculated as (Earned Skill Weight / Total Required Skill Weight) * 100 based on standard industry role matrices. It represents an educational diagnostic readiness indicator, not an official government employability guarantee.',
    description: 'Comparative engine matching candidate self-assessed skills against verified industry role matrices.'
  },
  demo_curriculum: {
    id: 'demo_curriculum',
    name: 'Illustrative Vocational Syllabus Sample',
    organization: 'SkillPulse Academic Sandbox',
    url: '/data-sources',
    dataset: 'Sample Diploma / Degree Curriculum Structure for Demonstration',
    coverage: 'Illustrative Demo Data',
    frequency: 'Static Demo',
    lastUpdated: '2026-06-01',
    retrievedAt: '2026-06-01',
    license: 'Educational Demo Only',
    dataType: 'demo',
    methodology: 'Curriculum alignment is simulated using set intersection of benchmark competencies vs sample course module learning outcomes.',
    description: 'Standard model computer science curriculum used to demonstrate the What-If simulation engine.'
  }
};

export function calculateFreshness(lastUpdatedDate, currentDateStr = '2026-09-05') {
  if (!lastUpdatedDate) {
    return {
      status: 'UNKNOWN',
      label: 'Unknown',
      color: 'text-slate-600',
      bg: 'bg-slate-100',
      border: 'border-slate-200',
      dotColor: 'bg-slate-400',
      daysAgo: null
    };
  }

  const updated = new Date(lastUpdatedDate);
  const anchor = new Date(currentDateStr);

  if (isNaN(updated.getTime())) {
    return {
      status: 'UNKNOWN',
      label: 'Unknown',
      color: 'text-slate-600',
      bg: 'bg-slate-100',
      border: 'border-slate-200',
      dotColor: 'bg-slate-400',
      daysAgo: null
    };
  }

  const diffMs = anchor.getTime() - updated.getTime();
  const daysAgo = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));

  if (daysAgo <= 30) {
    return {
      status: 'FRESH',
      label: 'Fresh',
      color: 'text-emerald-700',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      dotColor: 'bg-emerald-500',
      daysAgo
    };
  } else if (daysAgo <= 90) {
    return {
      status: 'RECENT',
      label: 'Recent',
      color: 'text-cyan-700',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      dotColor: 'bg-cyan-500',
      daysAgo
    };
  } else {
    return {
      status: 'STALE',
      label: 'Stale',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      dotColor: 'bg-amber-500',
      daysAgo
    };
  }
}

export function formatDate(dateString) {
  if (!dateString) return 'Not available';
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return dateString;
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
