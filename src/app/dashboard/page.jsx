'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import StatCard from '../../components/StatCard';
import ProgressBar from '../../components/ProgressBar';
import AlignmentScore from '../../components/AlignmentScore';
import {
  LayoutDashboard,
  TrendingUp,
  Target,
  Compass,
  GraduationCap,
  FileText,
  User,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const sidebarLinks = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'intelligence', name: 'Skill Intelligence', icon: TrendingUp, href: '/skill-intelligence' },
    { id: 'analyzer', name: 'Skill Gap Analyzer', icon: Target, href: '/skill-gap-analyzer' },
    { id: 'roadmap', name: 'Career Roadmap', icon: Compass, href: '/career-roadmap' },
    { id: 'curriculum', name: 'Curriculum Simulator', icon: GraduationCap, href: '/training-curriculum' },
    { id: 'reports', name: 'Reports & Downloads', icon: FileText },
    { id: 'profile', name: 'Profile & Settings', icon: User },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sidebar (3 cols) */}
        <aside className="lg:col-span-3">
          <div className="card-subtle p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
            <div className="px-3 py-2 border-b border-slate-100 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Dashboard Menu
              </span>
            </div>

            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              const isCurrent = activeTab === item.id;

              if (item.href) {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-navy-800 hover:bg-slate-50 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-slate-400" />
                    <span>{item.name}</span>
                  </Link>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    isCurrent
                      ? 'bg-primary-50 text-primary-700 font-bold'
                      : 'text-slate-600 hover:text-navy-800 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-primary-600' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Content Area (9 cols) */}
        <div className="lg:col-span-9 space-y-6">
          {/* Welcome User Banner */}
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-navy-800">
                  Welcome back, Alex Kumar
                </h1>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Student Account
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Target Role: <strong>Data Analyst</strong> • Synced with Q4 Industry Demands
              </p>
            </div>

            <Link
              href="/skill-gap-analyzer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-600 text-white text-xs font-semibold hover:bg-primary-700 transition-colors shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Update Skills</span>
            </Link>
          </div>

          {/* 4 Dashboard Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Job Readiness"
              value="72%"
              change="+8% last test"
              description="Calculated based on verified data analyst requirements."
            />
            <StatCard
              title="Skills Matched"
              value="8 / 11"
              description="Core proficiencies aligned with current hiring expectations."
            />
            <StatCard
              title="Skills to Improve"
              value="3 Left"
              change="Action Needed"
              description="Power BI, Business Statistics & Data Storytelling."
            />
            <StatCard
              title="Roadmap Progress"
              value="45%"
              change="Step 3 of 6"
              description="On track to complete foundational milestones."
            />
          </div>

          {/* Detailed Panels */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Quick Readiness Score Gauge (5 cols) */}
            <div className="md:col-span-5">
              <AlignmentScore score={72} subtitle="Overall Job Readiness" />
            </div>

            {/* Quick Learning Tracker (7 cols) */}
            <div className="md:col-span-7 card-subtle p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy-800">
                  Target Role Skill Alignment
                </h3>
                <span className="text-xs font-semibold text-primary-600">
                  Data Analyst
                </span>
              </div>

              <div className="space-y-3">
                <ProgressBar label="SQL & Relational DBs" value={95} color="success" size="sm" />
                <ProgressBar label="Python & Pandas" value={85} color="success" size="sm" />
                <ProgressBar label="Excel (Advanced Formulas)" value={90} color="success" size="sm" />
                <ProgressBar label="Power BI & Dashboards" value={35} color="warning" size="sm" />
                <ProgressBar label="Statistical Modeling" value={45} color="danger" size="sm" />
              </div>

              <div className="pt-2">
                <Link
                  href="/career-roadmap"
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 hover:gap-2 transition-all"
                >
                  <span>Continue Next Learning Milestone</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
