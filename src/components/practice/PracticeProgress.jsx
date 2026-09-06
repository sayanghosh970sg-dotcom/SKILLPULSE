'use client';

import React from 'react';
import ProgressBar from '../ProgressBar';
import { Target, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function PracticeProgress({
  totalAvailable = 10,
  completedCount = 3,
  recommendedPractice = [],
  onSelectRecommended
}) {
  const percent = Math.min(100, Math.round((completedCount / totalAvailable) * 100));

  return (
    <div className="card-subtle p-6 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-800 text-white shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-2">
            <Target className="w-3.5 h-3.5" />
            <span>Integrated Gap-to-Practice Pipeline</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">
            Target Role Readiness Progress
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Complete company and role-aligned coding problems to close detected skill gaps and maximize hiring readiness.
          </p>
        </div>

        <div className="text-right">
          <div className="text-3xl font-extrabold text-cyan-400 font-mono">
            {percent}%
          </div>
          <span className="text-xs text-slate-400">
            {completedCount} of {totalAvailable} Catalog Problems Mastered
          </span>
        </div>
      </div>

      <ProgressBar progress={percent} colorClass="bg-gradient-to-r from-cyan-400 to-primary-500" />

      {/* Recommended Next Practice (Connected to Skill Gap) */}
      {recommendedPractice.length > 0 && (
        <div className="pt-4 border-t border-slate-700/60 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Recommended Next Practice (Bridging Your Skill Gaps)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {recommendedPractice.map((rec, idx) => (
              <div
                key={idx}
                onClick={() => onSelectRecommended && onSelectRecommended(rec.questionId)}
                className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 hover:border-cyan-400 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] font-semibold text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800 block w-fit mb-1">
                    Gap: {rec.skillGap}
                  </span>
                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {rec.questionTitle}
                  </h4>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">
                    Aligned with {rec.company}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-lg bg-slate-700 text-white flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-navy-900 transition-colors shrink-0 ml-3">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
