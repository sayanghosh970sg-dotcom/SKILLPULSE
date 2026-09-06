'use client';

import React from 'react';
import { PRACTICE_COMPANIES } from '../../data/practiceData';
import { Building2, Check, Sparkles } from 'lucide-react';

export default function CompanySelector({ selectedCompany, onSelectCompany }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-wider text-navy-800 flex items-center gap-1.5">
          <Building2 className="w-3.5 h-3.5 text-primary-600" />
          <span>1. Select Target Company Alignment</span>
        </label>
        <span className="text-[11px] text-slate-500 font-medium">
          {selectedCompany === 'all' ? 'Showing all patterns' : 'Filtered for ' + selectedCompany.toUpperCase()}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {/* All Companies Option */}
        <button
          type="button"
          onClick={() => onSelectCompany('all')}
          className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
            selectedCompany === 'all'
              ? 'bg-primary-50/80 border-primary-500 ring-2 ring-primary-500/20 shadow-sm'
              : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center justify-between w-full mb-1">
            <span className="w-6 h-6 rounded-lg bg-navy-800 text-white flex items-center justify-center text-[10px] font-bold">
              ALL
            </span>
            {selectedCompany === 'all' && (
              <Check className="w-3.5 h-3.5 text-primary-600" />
            )}
          </div>
          <div>
            <span className="text-xs font-bold text-navy-800 block truncate">All Companies</span>
            <span className="text-[10px] text-slate-400 block truncate">Universal</span>
          </div>
        </button>

        {/* Company Cards */}
        {PRACTICE_COMPANIES.map((comp) => {
          const isSelected = selectedCompany === comp.id;
          return (
            <button
              key={comp.id}
              type="button"
              onClick={() => onSelectCompany(comp.id)}
              className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-primary-50/80 border-primary-500 ring-2 ring-primary-500/20 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <span className={`w-6 h-6 rounded-lg bg-gradient-to-br ${comp.color} text-white flex items-center justify-center text-[10px] font-bold shadow-2xs`}>
                  {comp.initials}
                </span>
                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-primary-600" />
                )}
              </div>
              <div>
                <span className="text-xs font-bold text-navy-800 block truncate">{comp.name}</span>
                <span className="text-[10px] text-slate-400 block truncate">{comp.tier.split(' ')[0]}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
