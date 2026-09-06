'use client';

import React from 'react';
import ProgressBar from '../ProgressBar';
import { Layers, AlertTriangle, TrendingUp, Sparkles, BookOpen } from 'lucide-react';

export default function SkillPerformance({ skillsPracticed = [], weakSkillAreas = [], onFocusSkill }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Card: Skills Practiced Breakdown */}
      <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-primary-600" />
            <h3 className="text-sm font-bold text-navy-800">Skill Competency Accuracy</h3>
          </div>
          <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded">
            Evaluated
          </span>
        </div>

        <div className="space-y-3.5">
          {skillsPracticed.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700">{item.skill}</span>
                <span className="text-navy-800 font-bold">{item.accuracy}% ({item.count} solved)</span>
              </div>
              <ProgressBar
                progress={item.accuracy}
                colorClass={item.accuracy >= 80 ? 'bg-emerald-500' : item.accuracy >= 70 ? 'bg-primary-600' : 'bg-amber-500'}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Card: Weak Skill Areas & Gap Integration */}
      <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <h3 className="text-sm font-bold text-navy-800">Detected Skill Gap Areas</h3>
          </div>
          <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
            Needs Practice
          </span>
        </div>

        <p className="text-xs text-slate-500">
          Integrated with your SkillPulse Gap Analyzer diagnostics. Targeted practice here directly elevates your Job Readiness Score.
        </p>

        <div className="space-y-3">
          {weakSkillAreas.map((weak, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-start justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-navy-800">{weak.skill}</h4>
                  <span className="text-[10px] font-semibold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">
                    {weak.gapLevel}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1">{weak.gapNote}</p>
              </div>

              {onFocusSkill && (
                <button
                  type="button"
                  onClick={() => onFocusSkill(weak.category)}
                  className="px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-amber-800 hover:bg-amber-100 text-xs font-semibold transition-colors shrink-0"
                >
                  Practice Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
