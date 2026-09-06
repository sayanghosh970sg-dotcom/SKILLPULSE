'use client';

import React from 'react';
import Link from 'next/link';
import { RECOMMENDED_ROLE_EXPERTS, EXPERTS_DATA } from '../../data/expertsData';
import {
  Sparkles,
  Target,
  ArrowRight,
  UserCheck,
  CheckCircle2,
  Users
} from 'lucide-react';

export default function RecommendedExperts({ onSelectExpert }) {
  return (
    <div className="card-subtle p-6 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-slate-900 text-white shadow-xl space-y-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Role Aligned Mentorship</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">
            Recommended Experts for Your Career Goals
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Professionals matched with key skill areas diagnosed across software engineering, data analytics, and machine learning pipelines.
          </p>
        </div>

        <Link
          href="/skill-gap-analyzer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-navy-900 text-xs font-bold hover:bg-slate-100 transition-colors self-start md:self-auto shrink-0"
        >
          <span>Check My Role Gap</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Role Recommendation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
        {RECOMMENDED_ROLE_EXPERTS.map((item, idx) => {
          const matchedExperts = EXPERTS_DATA.filter(e => item.expertIds.includes(e.id));
          return (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-400 transition-all flex flex-col justify-between space-y-3"
            >
              <div>
                <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800 px-2 py-0.5 rounded block w-fit mb-1.5">
                  Target: {item.targetRoleTitle}
                </span>

                <p className="text-xs text-slate-300 leading-snug">
                  {item.rationale}
                </p>

                <div className="mt-3 space-y-1.5">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 block">
                    Recommended Mentors:
                  </span>
                  {matchedExperts.map((exp) => (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => onSelectExpert(exp)}
                      className="w-full text-left p-2 rounded-lg bg-slate-700/60 hover:bg-slate-700 border border-slate-600/50 flex items-center justify-between transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-6 h-6 rounded-full bg-gradient-to-br ${exp.avatarColor} text-white font-bold flex items-center justify-center text-[10px]`}
                        >
                          {exp.avatarInitials}
                        </div>
                        <span className="text-xs font-semibold text-white group-hover:text-cyan-300 truncate">
                          {exp.name}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {exp.yearsExperience}y exp
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
