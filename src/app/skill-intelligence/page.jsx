'use client';

import React, { useState } from 'react';
import StatCard from '../../components/StatCard';
import SkillCard from '../../components/SkillCard';
import SkillDemandChart from '../../components/SkillDemandChart';
import IndustryChart from '../../components/IndustryChart';
import { SKILL_DEMAND_DATA, INDUSTRIES, EMERGING_SKILLS } from '../../data/mockData';
import {
  TrendingUp,
  Filter,
  Layers,
  MapPin,
  Calendar,
  Sparkles,
  Zap,
  BarChart3,
  Briefcase
} from 'lucide-react';

export default function SkillIntelligencePage() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('q4');

  // Filter skills based on industry selection
  const filteredSkills = selectedIndustry === 'all'
    ? SKILL_DEMAND_DATA
    : SKILL_DEMAND_DATA.filter(s => s.industry.toLowerCase().includes(selectedIndustry.toLowerCase()) || s.industry === 'Cross-Industry' || s.industry === 'Universal');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold mb-2">
          <TrendingUp className="w-3.5 h-3.5 text-primary-600" />
          <span>Real-Time Labor Market Intelligence</span>
        </div>
        <h1 className="text-3xl font-extrabold text-navy-800 tracking-tight">
          Industry Skill Demand Intelligence
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
          Aggregated demand patterns, hiring velocity, and quarterly shift trends across primary industries.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="card-subtle p-5 rounded-2xl bg-white border border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-4 h-4 text-primary-600" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-navy-800">
            Market Filter Matrix
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Industry Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Sector / Industry
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full text-xs font-medium border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Sectors (Cross-Industry)</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.name}
                </option>
              ))}
            </select>
          </div>

          {/* Location Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Geographic Scope
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full text-xs font-medium border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">National (All India Aggregation)</option>
              <option value="maharashtra">Maharashtra (Mumbai-Pune Hub)</option>
              <option value="bengaluru">Karnataka (Bengaluru Hub)</option>
              <option value="delhi-ncr">Delhi NCR Region</option>
            </select>
          </div>

          {/* Timeframe */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Analysis Window
            </label>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="w-full text-xs font-medium border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="q4">Current Quarter (Q4 Aggregation)</option>
              <option value="q3">Previous Quarter (Q3)</option>
              <option value="year">Annual Cumulative (Past 12 Months)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Analytics Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart 1: Skill Demand Breakdown */}
        <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-navy-800">Most Demanded Skills (Index 0-100)</h3>
              <p className="text-xs text-slate-500">Frequency extracted from job vacancy requirements</p>
            </div>
            <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-md">
              Top Ranked
            </span>
          </div>
          <SkillDemandChart data={filteredSkills} />
        </div>

        {/* Chart 2: Demand Over Time */}
        <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-navy-800">Industry Hiring Trajectory</h3>
              <p className="text-xs text-slate-500">Quarterly growth trajectory across IT & BFSI</p>
            </div>
            <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-md">
              Quarterly Trend
            </span>
          </div>
          <IndustryChart data={filteredSkills} />
        </div>
      </div>

      {/* Emerging Skills Showcase */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-navy-800">Emerging & Rapidly Growing Skills</h2>
            <p className="text-xs text-slate-500">
              Skills experiencing the highest percentage growth in enterprise job postings
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs text-emerald-600 font-semibold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High Velocity Focus</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EMERGING_SKILLS.map((item, idx) => (
            <div
              key={idx}
              className="card-subtle p-5 rounded-2xl bg-white border border-slate-200 hover:border-primary-300 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {item.growth}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                  {item.urgency}
                </span>
              </div>
              <h4 className="text-sm font-bold text-navy-800 mt-2">{item.name}</h4>
              <p className="text-xs text-slate-500 mt-1">{item.category}</p>
              
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Impact level</span>
                <span className="font-semibold text-primary-600">{item.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Monitored Skills Directory */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-navy-800">Monitored Core Competencies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((s, idx) => (
            <SkillCard key={idx} skill={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
