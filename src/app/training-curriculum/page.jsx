'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AlignmentScore from '../../components/AlignmentScore';
import ProgressBar from '../../components/ProgressBar';
import DataSourceBadge from '../../components/DataSourceBadge';
import { INITIAL_CURRICULUM, OPTIONAL_SIMULATOR_SKILLS } from '../../data/mockData';
import { calculateCurriculumAlignment } from '../../lib/analytics';
import {
  GraduationCap,
  Sparkles,
  Sliders,
  CheckCircle,
  XCircle,
  Plus,
  BookOpen,
  ArrowRight,
  TrendingUp,
  FileCode,
  Info
} from 'lucide-react';

export default function TrainingCurriculumPage() {
  const [modules, setModules] = useState(INITIAL_CURRICULUM);
  const [simulatedSkills, setSimulatedSkills] = useState([]);

  // Calculate alignment based on current modules + simulated additions
  const currentAlignment = calculateCurriculumAlignment(modules, simulatedSkills);

  const toggleSimulationSkill = (skill) => {
    if (simulatedSkills.some(s => s.id === skill.id)) {
      setSimulatedSkills(simulatedSkills.filter(s => s.id !== skill.id));
    } else {
      setSimulatedSkills([...simulatedSkills, skill]);
    }
  };

  const isSimulated = (skillId) => simulatedSkills.some(s => s.id === skillId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
            <span>Institutional Curriculum Intelligence</span>
          </div>
          <DataSourceBadge sourceId="demo_curriculum" />
        </div>
        <h1 className="text-3xl font-extrabold text-navy-800 tracking-tight">
          Training & Curriculum Alignment Simulator
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
          Audit university and vocational curricula against industry demands and run live simulations to test modern competency additions.
        </p>
      </div>

      {/* Main Analysis and Simulator Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Current Curriculum & Modules (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Sample Syllabus Sandbox
                </span>
                <h3 className="text-base font-bold text-navy-800">
                  B.Tech / Diploma in Computer Science & Tech
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-mono">
                {modules.length} Modules Audited
              </span>
            </div>

            <div className="space-y-3">
              {modules.map((mod) => (
                <div key={mod.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-navy-800">{mod.name}</h4>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                      Sample Audited
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {mod.coveredSkills.map((sk, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                      >
                        ✓ {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-xl text-xs text-blue-900 leading-relaxed">
              💡 <strong>Diagnostic Observation:</strong> The base syllabus covers classical programming and databases well, but lacks modern cloud and visual analytics required by contemporary enterprise postings.
            </div>
          </div>
        </div>

        {/* Right Col: Score & What-If Simulator (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Live Score Banner */}
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-5 flex justify-center">
              <AlignmentScore
                score={currentAlignment.alignmentScore}
                subtitle="Curriculum Alignment Score"
              />
            </div>
            <div className="sm:col-span-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Alignment Rating
                </span>
                {simulatedSkills.length > 0 && (
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    +{simulatedSkills.reduce((acc, curr) => acc + curr.boost, 0)}% Boost Applied
                  </span>
                )}
              </div>
              <ProgressBar
                value={currentAlignment.alignmentScore}
                max={100}
                color={currentAlignment.alignmentScore >= 80 ? 'success' : currentAlignment.alignmentScore >= 65 ? 'primary' : 'warning'}
                size="md"
              />
              <p className="text-xs text-slate-500 leading-relaxed">
                {currentAlignment.alignmentScore >= 85
                  ? 'High alignment. Graduates under this simulated structure possess modern proficiencies expected by active employers.'
                  : 'Actionable improvements identified. Incorporating missing competencies significantly elevates placement rates.'}
              </p>
            </div>
          </div>

          {/* WHAT-IF CURRICULUM SIMULATOR */}
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-600" />
                <h3 className="text-sm font-bold text-navy-800">
                  What-If Curriculum Simulator
                </h3>
              </div>
              <span className="text-[11px] font-semibold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">
                Interactive Sandbox
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Toggle emerging module additions to simulate real-time impact on your institute's alignment score.
            </p>

            <div className="space-y-2.5">
              {OPTIONAL_SIMULATOR_SKILLS.map((sk) => {
                const active = isSimulated(sk.id);
                return (
                  <div
                    key={sk.id}
                    onClick={() => toggleSimulationSkill(sk)}
                    className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      active
                        ? 'bg-cyan-50/80 border-cyan-300 ring-1 ring-cyan-400'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-navy-800">{sk.name}</span>
                        <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                          +{sk.boost}% Alignment
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 mt-0.5 block">
                        Category: {sk.category}
                      </span>
                    </div>

                    <button
                      type="button"
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold transition-colors ${
                        active
                          ? 'bg-cyan-600 text-white'
                          : 'bg-white border border-slate-300 text-slate-500'
                      }`}
                    >
                      {active ? '✓' : '+'}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>Simulation mode • No database changes</span>
              <Link href="/data-sources" className="text-primary-600 hover:underline">
                Methodology →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
