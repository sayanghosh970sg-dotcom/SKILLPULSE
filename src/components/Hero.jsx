import React from 'react';
import Link from 'next/link';
import { ArrowRight, Compass, CheckCircle2, TrendingUp, Sparkles, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-primary-600" />
              <span>National Industry-to-Skill Intelligence</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy-800 tracking-tight leading-[1.15]">
              Bridge the Gap Between <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-cyan-600 bg-clip-text text-transparent">
                Industry Demand
              </span>{' '}
              and Skills.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              SkillPulse analyzes industry requirements, identifies skill gaps, and helps students and training institutes build job-ready skills.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/skill-intelligence"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 shadow-md shadow-primary-600/20 transition-all hover:-translate-y-0.5"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Explore Skill Intelligence</span>
              </Link>

              <Link
                href="/skill-gap-analyzer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                <span>Analyze Skill Gap</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Quick verification points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Real-time job postings aggregated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Curriculum what-if simulation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Pipeline Graphic */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-navy-800 uppercase tracking-wider">
                    Core Intelligence Pipeline
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  System Live
                </span>
              </div>

              {/* 4 Pipeline Stages */}
              <div className="space-y-3">
                {/* Stage 1 */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-navy-800 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    01
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-navy-800 flex items-center justify-between">
                      <span>Industry Demand</span>
                      <span className="text-[10px] text-primary-600 font-mono">18.4L+ NCS Requisitions</span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">
                      National Career Service portal vacancies & active employer requisitions
                    </p>
                  </div>
                </div>

                <div className="flex justify-center -my-1">
                  <span className="text-primary-500 font-mono text-xs">↓</span>
                </div>

                {/* Stage 2 */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-primary-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    02
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-navy-800 flex items-center justify-between">
                      <span>Required Skills Standards</span>
                      <span className="text-[10px] text-primary-600 font-mono">NOS Standards</span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">
                      Mapped to National Occupational Standards (NOS) & Sector Skill Councils
                    </p>
                  </div>
                </div>

                <div className="flex justify-center -my-1">
                  <span className="text-primary-500 font-mono text-xs">↓</span>
                </div>

                {/* Stage 3 */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-cyan-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    03
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-navy-800 flex items-center justify-between">
                      <span>Vocational Infrastructure</span>
                      <span className="text-[10px] text-cyan-600 font-mono">14,950+ ITIs</span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">
                      DGT/MSDE registered training institutes & PMKVY skill centers
                    </p>
                  </div>
                </div>

                <div className="flex justify-center -my-1">
                  <span className="text-emerald-500 font-mono text-xs">↓</span>
                </div>

                {/* Stage 4 */}
                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    04
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-navy-800 flex items-center justify-between">
                      <span>Job Readiness Diagnostic</span>
                      <span className="text-[10px] text-emerald-700 font-mono">SkillPulse Engine</span>
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">
                      Calculated diagnostic gap score & recommended learning milestones
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Continuously updated telemetry</span>
                <span className="text-primary-600 font-semibold hover:underline cursor-pointer">
                  View Data Model →
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
