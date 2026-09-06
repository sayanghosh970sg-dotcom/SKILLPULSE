'use client';

import React, { useState } from 'react';
import StatCard from '../../components/StatCard';
import SkillCard from '../../components/SkillCard';
import SkillDemandChart from '../../components/SkillDemandChart';
import IndustryChart from '../../components/IndustryChart';
import DataSourceBadge from '../../components/DataSourceBadge';
import { SKILL_DEMAND_DATA, INDUSTRIES, EMERGING_SKILLS } from '../../data/mockData';
import { GEOGRAPHY } from '../../data/geography';
import {
  TrendingUp,
  Filter,
  Layers,
  MapPin,
  Calendar,
  Sparkles,
  Zap,
  BarChart3,
  Briefcase,
  Globe
} from 'lucide-react';

export default function SkillIntelligencePage() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedStateId, setSelectedStateId] = useState('all');
  const [selectedDistrictId, setSelectedDistrictId] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('q4');

  // Selected state object
  const currentState = selectedStateId !== 'all'
    ? GEOGRAPHY.states.find(s => s.id === selectedStateId)
    : null;

  const availableDistricts = currentState ? currentState.districts : [];

  // Filter skills based on industry selection
  const filteredSkills = selectedIndustry === 'all'
    ? SKILL_DEMAND_DATA
    : SKILL_DEMAND_DATA.filter(s => s.industry.toLowerCase().includes(selectedIndustry.toLowerCase()) || s.industry === 'Cross-Industry' || s.industry === 'Universal');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold">
            <TrendingUp className="w-3.5 h-3.5 text-primary-600" />
            <span>Real-Time Labor Market Intelligence</span>
          </div>
          <DataSourceBadge sourceId="skillpulse_analysis" />
        </div>
        <h1 className="text-3xl font-extrabold text-navy-800 tracking-tight">
          Industry Skill Demand Intelligence
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
          Aggregated demand patterns, hiring velocity, and quarterly shift trends across primary industries and geographic zones in India.
        </p>
      </div>

      {/* Multi-Tier Filter Bar */}
      <div className="card-subtle p-5 rounded-2xl bg-white border border-slate-200 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-primary-600" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-navy-800">
              Multi-Tier Intelligence Filter Matrix
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-medium">
            Active Scope: {selectedStateId === 'all' ? 'All India' : currentState?.name}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              <option value="all">All Sectors ({INDUSTRIES.length})</option>
              {INDUSTRIES.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.name}
                </option>
              ))}
            </select>
          </div>

          {/* State / Region */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              State / Region
            </label>
            <select
              value={selectedStateId}
              onChange={(e) => {
                setSelectedStateId(e.target.value);
                setSelectedDistrictId('all');
              }}
              className="w-full text-xs font-medium border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All India (National Aggregation)</option>
              {GEOGRAPHY.states.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* District / Cluster */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              District / Cluster
            </label>
            <select
              value={selectedDistrictId}
              onChange={(e) => setSelectedDistrictId(e.target.value)}
              disabled={selectedStateId === 'all'}
              className="w-full text-xs font-medium border border-slate-300 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50"
            >
              <option value="all">
                {selectedStateId === 'all' ? 'All Districts' : 'All in ' + currentState?.name}
              </option>
              {availableDistricts.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.demandLevel})
                </option>
              ))}
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-navy-800">Most Demanded Skills (Index 0-100)</h3>
                <DataSourceBadge sourceId="skillpulse_analysis" />
              </div>
              <p className="text-xs text-slate-500">Frequency extracted from job vacancy requirements & NOS profiles</p>
            </div>
            <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-md self-start sm:self-auto">
              Top Ranked
            </span>
          </div>
          <SkillDemandChart data={filteredSkills} />
        </div>

        {/* Chart 2: Demand Over Time */}
        <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-navy-800">Industry Hiring Trajectory</h3>
                <DataSourceBadge sourceId="ncs_portal" />
              </div>
              <p className="text-xs text-slate-500">Quarterly growth trajectory across major Indian sectors</p>
            </div>
            <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-md self-start sm:self-auto">
              Quarterly Trend
            </span>
          </div>
          <IndustryChart data={filteredSkills} />
        </div>
      </div>

      {/* Emerging Skills Spotlight */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-navy-800">High-Velocity Emerging Competencies</h2>
              <DataSourceBadge sourceId="skillpulse_analysis" />
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Skills experiencing exponential requisition increases over consecutive quarters.
            </p>
          </div>
          <span className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
            Updated Quarterly
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EMERGING_SKILLS.map((skill, index) => (
            <div
              key={index}
              className="card-subtle p-5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between hover:border-cyan-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-cyan-600 uppercase tracking-wider">
                    {skill.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {skill.growth}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-navy-800">{skill.name}</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Demand Index: <strong className="text-navy-800">{skill.demandScore}/100</strong>
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Impact: {skill.impact}</span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Monitored Skills Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-navy-800">All Indexed Competencies ({filteredSkills.length})</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Normalized competency score profiles matched to industry requisitions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
