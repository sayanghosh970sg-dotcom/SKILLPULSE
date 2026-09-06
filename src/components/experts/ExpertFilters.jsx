'use client';

import React from 'react';
import {
  EXPERT_DOMAINS,
  CONSULTATION_TYPES,
  EXPERIENCE_TIERS
} from '../../data/expertsData';
import { Filter, Search, RotateCcw } from 'lucide-react';

export default function ExpertFilters({
  selectedDomain,
  onSelectDomain,
  selectedConsultation,
  onSelectConsultation,
  selectedExperience,
  onSelectExperience,
  searchQuery,
  onSearchChange,
  onResetFilters
}) {
  return (
    <div className="card-subtle p-5 rounded-2xl bg-white border border-slate-200 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-primary-600" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-navy-800">
            Mentor & Domain Filter Matrix
          </h3>
        </div>

        <button
          type="button"
          onClick={onResetFilters}
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-primary-600 transition-colors self-start sm:self-auto"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Filters</span>
        </button>
      </div>

      {/* Domain Category Pills */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
          Engineering & Functional Domain
        </label>
        <div className="flex flex-wrap gap-1.5">
          {EXPERT_DOMAINS.map((domain) => {
            const isSelected = selectedDomain === domain;
            return (
              <button
                key={domain}
                type="button"
                onClick={() => onSelectDomain(domain)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-navy-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {domain}
              </button>
            );
          })}
        </div>
      </div>

      {/* Secondary Filters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
        {/* Search */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
            Search Mentor or Skill
          </label>
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Ananya, Python, Cloud..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 text-slate-700"
            />
          </div>
        </div>

        {/* Consultation Type */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
            Consultation Type
          </label>
          <select
            value={selectedConsultation}
            onChange={(e) => onSelectConsultation(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 text-slate-700 font-medium"
          >
            {CONSULTATION_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Tier */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
            Experience Level
          </label>
          <select
            value={selectedExperience}
            onChange={(e) => onSelectExperience(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 text-slate-700 font-medium"
          >
            {EXPERIENCE_TIERS.map((tier) => (
              <option key={tier} value={tier}>
                {tier}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
