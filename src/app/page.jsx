'use client';

import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';
import StatCard from '../components/StatCard';
import SkillCard from '../components/SkillCard';
import { SKILL_DEMAND_DATA, EMERGING_SKILLS, JOB_ROLES } from '../data/mockData';
import {
  Briefcase,
  Layers,
  GraduationCap,
  Percent,
  TrendingUp,
  ArrowRight,
  Shield,
  Building2,
  Users,
  Compass,
  Zap,
  CheckCircle
} from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. STATS OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Job Requirements Analyzed"
            value="12,500+"
            change="+14% this month"
            icon={Briefcase}
            description="Continuous crawling across tech, BFSI, manufacturing & healthcare."
          />
          <StatCard
            title="Skills Tracked in Real-Time"
            value="850+"
            change="+42 new"
            icon={Layers}
            description="Normalized competencies mapped to occupational standards."
          />
          <StatCard
            title="Training Programs Evaluated"
            value="120+"
            change="+18 verified"
            icon={GraduationCap}
            description="University & vocational curricula audited for market relevance."
          />
          <StatCard
            title="Average Alignment Score"
            value="78%"
            change="+6% YoY"
            icon={Percent}
            description="Industry baseline readiness index across active batches."
          />
        </div>
      </section>

      {/* 3. PLATFORM CORE ARCHITECTURE & AUDIENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-200">
            Systemic Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 tracking-tight mt-3">
            Connecting All 4 Pillars of Skill Development
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            SkillPulse replaces guesswork with labor market telemetry, synchronizing education with real employment demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Students */}
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-navy-800">For Students & Jobseekers</h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Identify individual skill gaps against specific job roles and unlock personalized, step-by-step career roadmaps.
            </p>
            <Link
              href="/skill-gap-analyzer"
              className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 mt-4 hover:gap-2 transition-all"
            >
              Analyze Your Gap <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Institutes */}
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-navy-800">For Training Institutes</h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Benchmark course syllabi against current hiring trends. Use the curriculum simulator to elevate placement readiness.
            </p>
            <Link
              href="/training-curriculum"
              className="inline-flex items-center gap-1 text-xs font-bold text-cyan-600 mt-4 hover:gap-2 transition-all"
            >
              Test Curriculum Simulator <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Employers */}
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-navy-800">For Industry Employers</h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Publish structured talent requirement profiles and bridge the sourcing lead-time with pre-aligned candidates.
            </p>
            <Link
              href="/employer"
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 mt-4 hover:gap-2 transition-all"
            >
              Post Skill Profile <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 4: Government */}
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-navy-800">For Government & Policy</h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Identify district-level skill shortages (e.g. Pune, Mumbai, Nagpur) to optimize training budget allocations.
            </p>
            <Link
              href="/government"
              className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 mt-4 hover:gap-2 transition-all"
            >
              View District Heatmaps <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. RAPID PREVIEW OF EMERGING SKILLS & HIGHEST DEMAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-2">
                <Zap className="w-3.5 h-3.5" />
                <span>Real-Time Market Pulse</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Top Emerging Skills in Today's Market
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Highest quarterly growth in open vacancy requirements across leading tech clusters.
              </p>
            </div>
            <Link
              href="/skill-intelligence"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-white text-navy-900 hover:bg-slate-100 transition-all shrink-0 self-start md:self-auto"
            >
              <span>Explore All 850+ Skills</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EMERGING_SKILLS.slice(0, 4).map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 hover:bg-slate-800 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">{skill.growth}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                    {skill.urgency}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mt-3">{skill.name}</h3>
                <p className="text-xs text-slate-400 mt-1">{skill.category}</p>
                <div className="mt-4 pt-3 border-t border-slate-700/50 flex justify-between items-center text-[11px] text-slate-400">
                  <span>Demand Impact</span>
                  <span className="text-white font-semibold">{skill.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-primary-50 border border-primary-200 relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-800 tracking-tight">
            Ready to Verify Your Industry Job Readiness?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mt-2">
            Select your target career path, input your current competencies, and get an immediate readiness score with custom learning milestones.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/skill-gap-analyzer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 shadow-md shadow-primary-600/20 transition-all"
            >
              <span>Launch Skill Gap Analyzer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/career-roadmap"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all"
            >
              <span>Browse Career Roadmaps</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
