'use client';

import React from 'react';
import Link from 'next/link';
import { RECOMMENDED_GAP_MAPPINGS } from '../../data/coursesData';
import {
  Sparkles,
  Target,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function RecommendedCourses({ onSelectSkill }) {
  return (
    <div className="card-subtle p-6 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-slate-900 text-white shadow-xl space-y-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connected with Skill Gap Diagnostics</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">
            Recommended Learning Paths for Detected Gaps
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
            These learning resources are specifically prioritized to bridge competencies where your 
            SkillPulse Readiness Score detected missing proficiencies.
          </p>
        </div>

        <Link
          href="/skill-gap-analyzer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-navy-900 text-xs font-bold hover:bg-slate-100 transition-colors self-start md:self-auto shrink-0"
        >
          <span>Run Fresh Gap Audit</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
        {RECOMMENDED_GAP_MAPPINGS.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onSelectSkill && onSelectSkill(item.skillGap)}
            className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-400 transition-all cursor-pointer flex flex-col justify-between space-y-3 group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-rose-300 bg-rose-950/80 border border-rose-800/80 px-2 py-0.5 rounded">
                  Gap: {item.skillGap}
                </span>
                <span className="text-[10px] font-medium text-slate-400">
                  {item.duration}
                </span>
              </div>

              <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
                {item.recommendedCourseTitle}
              </h4>

              <p className="text-[11px] text-slate-400 mt-1.5 line-clamp-2">
                {item.gapContext}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
              <span className="text-slate-400 truncate">{item.provider}</span>
              <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Explore <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
