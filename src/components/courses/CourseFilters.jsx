'use client';

import React from 'react';
import {
  COURSE_CATEGORIES,
  COURSE_LEVELS,
  COURSE_PRICE_FILTERS,
  COURSE_PROVIDERS,
  COURSE_DURATIONS
} from '../../data/coursesData';
import { Filter, Search, RotateCcw } from 'lucide-react';

export default function CourseFilters({
  selectedCategory,
  onSelectCategory,
  selectedLevel,
  onSelectLevel,
  selectedPrice,
  onSelectPrice,
  selectedProvider,
  onSelectProvider,
  selectedDuration,
  onSelectDuration,
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
            Learning Resource Filter Matrix
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-primary-600 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Filters</span>
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div>
        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
          Domain Category
        </label>
        <div className="flex flex-wrap gap-1.5">
          {COURSE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-navy-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dropdown Filters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
        {/* Search */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
            Search Keyword
          </label>
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search SQL, Python, React..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 text-slate-700"
            />
          </div>
        </div>

        {/* Level */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
            Difficulty Level
          </label>
          <select
            value={selectedLevel}
            onChange={(e) => onSelectLevel(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 text-slate-700"
          >
            {COURSE_LEVELS.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        </div>

        {/* Free / Paid */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
            Cost & Access
          </label>
          <select
            value={selectedPrice}
            onChange={(e) => onSelectPrice(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 text-slate-700"
          >
            {COURSE_PRICE_FILTERS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* Provider */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
            External Provider
          </label>
          <select
            value={selectedProvider}
            onChange={(e) => onSelectProvider(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 text-slate-700"
          >
            {COURSE_PROVIDERS.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-600 mb-1">
            Commitment Window
          </label>
          <select
            value={selectedDuration}
            onChange={(e) => onSelectDuration(e.target.value)}
            className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 text-slate-700"
          >
            {COURSE_DURATIONS.map((dur) => (
              <option key={dur.id} value={dur.id}>
                {dur.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
