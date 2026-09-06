'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AlignmentScore from '../../components/AlignmentScore';
import SkillGapCard from '../../components/SkillGapCard';
import ProgressBar from '../../components/ProgressBar';
import DataSourceBadge from '../../components/DataSourceBadge';
import { JOB_ROLES } from '../../data/mockData';
import { calculateSkillGap } from '../../lib/analytics';
import {
  Target,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Sparkles,
  Plus,
  X,
  Info
} from 'lucide-react';

export default function SkillGapAnalyzerPage() {
  const [selectedRoleId, setSelectedRoleId] = useState('data-analyst');
  
  // Default skills preloaded for the Data Analyst example
  const [userSkills, setUserSkills] = useState(['Python', 'SQL', 'Excel (Advanced)']);
  const [customSkillInput, setCustomSkillInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(() => calculateSkillGap('data-analyst', ['Python', 'SQL', 'Excel (Advanced)']));

  const selectedRole = JOB_ROLES.find(r => r.id === selectedRoleId) || JOB_ROLES[0];

  const handleRoleChange = (roleId) => {
    setSelectedRoleId(roleId);
    const res = calculateSkillGap(roleId, userSkills);
    setAnalysisResult(res);
  };

  const handleAddSkill = (skillToAdd) => {
    if (!skillToAdd || !skillToAdd.trim()) return;
    const trimmed = skillToAdd.trim();
    if (!userSkills.some(s => s.toLowerCase() === trimmed.toLowerCase())) {
      const updated = [...userSkills, trimmed];
      setUserSkills(updated);
      setAnalysisResult(calculateSkillGap(selectedRoleId, updated));
    }
    setCustomSkillInput('');
  };

  const handleRemoveSkill = (skillToRemove) => {
    const updated = userSkills.filter(s => s.toLowerCase() !== skillToRemove.toLowerCase());
    setUserSkills(updated);
    setAnalysisResult(calculateSkillGap(selectedRoleId, updated));
  };

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysisResult(calculateSkillGap(selectedRoleId, userSkills));
      setIsAnalyzing(false);
    }, 300);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold">
            <Target className="w-3.5 h-3.5 text-cyan-600" />
            <span>Diagnostic Readiness Evaluation</span>
          </div>
          <DataSourceBadge sourceId="skillpulse_gap_engine" />
        </div>
        <h1 className="text-3xl font-extrabold text-navy-800 tracking-tight">
          Individual Skill Gap Analyzer
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
          Benchmark your competencies against verified industry role profiles. Identify critical missing proficiencies and generate an actionable learning pathway.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Input Selection (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-2">
                1. Select Target Job Role
              </label>
              <select
                value={selectedRoleId}
                onChange={(e) => handleRoleChange(e.target.value)}
                className="w-full text-sm font-semibold border border-slate-300 rounded-xl p-3 bg-white text-navy-800 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm"
              >
                {JOB_ROLES.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.title}
                  </option>
                ))}
              </select>
              <p className="text-xs text-slate-500 mt-2">
                {selectedRole.description}
              </p>
              <div className="mt-2 text-xs font-mono text-primary-700 font-semibold bg-primary-50 px-2.5 py-1 rounded-md inline-block">
                Industry Benchmark: {selectedRole.salaryRange}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-800 mb-2">
                2. Your Current Skills
              </label>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2 mb-3 min-h-12 p-2.5 bg-slate-50 border border-slate-200 rounded-xl">
                {userSkills.map((s, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-800 shadow-2xs"
                  >
                    <span>{s}</span>
                    <button
                      onClick={() => handleRemoveSkill(s)}
                      className="text-slate-400 hover:text-rose-600 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
                {userSkills.length === 0 && (
                  <span className="text-xs text-slate-400 italic">
                    No skills added yet. Add skills below.
                  </span>
                )}
              </div>

              {/* Add Custom Skill */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a skill (e.g. Python, SQL, Docker)..."
                  value={customSkillInput}
                  onChange={(e) => setCustomSkillInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddSkill(customSkillInput)}
                  className="flex-1 text-xs font-medium border border-slate-300 rounded-xl px-3 py-2 bg-white text-navy-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  onClick={() => handleAddSkill(customSkillInput)}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>

              {/* Quick Suggest from Role */}
              <div className="mt-3">
                <span className="text-[11px] text-slate-400 block mb-1.5 font-medium">
                  Quick add from target role requirements:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedRole.requiredSkills
                    .filter(req => !userSkills.some(u => u.toLowerCase() === req.name.toLowerCase()))
                    .map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAddSkill(s.name)}
                        className="text-[11px] px-2 py-1 rounded-md bg-slate-100 hover:bg-primary-50 hover:text-primary-700 text-slate-600 border border-slate-200 transition-colors"
                      >
                        + {s.name}
                      </button>
                    ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleRunAnalysis}
              disabled={isAnalyzing}
              className="w-full py-3.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 shadow-md shadow-primary-600/20 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isAnalyzing ? 'Analyzing Alignment...' : 'Analyze My Skill Gap'}</span>
            </button>
          </div>

          {/* Methodology Caveat Note */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
            <div className="flex items-center gap-1.5 font-bold">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>Diagnostic Indicator Caveat</span>
            </div>
            <p className="text-[11px] leading-relaxed text-amber-800">
              The SkillPulse Readiness Score is an educational diagnostic index calculated from self-reported skills against role profile matrices. It does not represent an official government certification or guaranteed hiring decision.
            </p>
          </div>
        </div>

        {/* Right Column: Analysis Output (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Score Banner */}
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 flex justify-center">
              <AlignmentScore
                score={analysisResult.readinessScore}
                subtitle="SkillPulse Readiness Score"
              />
            </div>
            <div className="sm:col-span-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Target Profile
                </span>
                <span className="text-xs font-bold text-primary-600">
                  {analysisResult.matchedCount} / {analysisResult.totalSkillsCount} Skills Verified
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy-800">
                {analysisResult.targetRole}
              </h3>
              <ProgressBar
                value={analysisResult.readinessScore}
                max={100}
                color={analysisResult.readinessScore >= 75 ? 'success' : analysisResult.readinessScore >= 50 ? 'warning' : 'danger'}
                size="md"
              />
              <p className="text-xs text-slate-500 leading-relaxed">
                {analysisResult.readinessScore >= 80
                  ? 'High alignment! You possess the essential core proficiencies to apply for junior-to-mid vacancies.'
                  : analysisResult.readinessScore >= 60
                  ? 'Moderate alignment. Closing a few high-priority missing competencies will significantly enhance hiring probability.'
                  : 'Noticeable gap identified. Prioritize the structured learning steps below before submitting applications.'}
              </p>
            </div>
          </div>

          {/* Skill Breakdown Grid */}
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200">
            <h3 className="text-sm font-bold text-navy-800 mb-4">
              Detailed Role Competency Comparison
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {analysisResult.matchedSkills.map((s, idx) => (
                <SkillGapCard key={`matched-${idx}`} skill={s} status="matched" />
              ))}
              {analysisResult.missingSkills.map((s, idx) => (
                <SkillGapCard key={`missing-${idx}`} skill={s} status="missing" />
              ))}
            </div>
          </div>

          {/* Recommended Learning Path */}
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary-600" />
                <h3 className="text-sm font-bold text-navy-800">
                  Recommended Learning Milestones
                </h3>
              </div>
              <Link
                href="/career-roadmap"
                className="text-xs font-semibold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
              >
                Full Roadmap <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {analysisResult.learningPath.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-full bg-primary-100 text-primary-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-navy-800">
                        {step.skill}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        Est: {step.estWeeks} Weeks
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      {step.action}
                    </p>
                  </div>
                </div>
              ))}

              {analysisResult.learningPath.length === 0 && (
                <div className="text-center py-6 text-emerald-600 text-xs font-semibold">
                  ✓ Outstanding! You already cover all mandatory competencies for this role.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
