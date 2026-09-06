'use client';

import React from 'react';
import { PRACTICE_ROLES } from '../../data/practiceData';
import { Briefcase, Check } from 'lucide-react';

export default function RoleSelector({ selectedRole, onSelectRole }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-wider text-navy-800 flex items-center gap-1.5">
          <Briefcase className="w-3.5 h-3.5 text-cyan-600" />
          <span>2. Select Target Role</span>
        </label>
        <span className="text-[11px] text-slate-500 font-medium">
          {selectedRole === 'all' ? 'All Roles' : PRACTICE_ROLES.find(r => r.id === selectedRole)?.name}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
        {/* All Roles */}
        <button
          type="button"
          onClick={() => onSelectRole('all')}
          className={`px-3 py-2.5 rounded-xl border text-left transition-all ${
            selectedRole === 'all'
              ? 'bg-cyan-50/80 border-cyan-500 text-cyan-900 font-bold ring-2 ring-cyan-500/20'
              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
          }`}
        >
          <span className="text-xs font-semibold block truncate">All Roles</span>
          <span className="text-[10px] text-slate-400 block truncate">Broad Coverage</span>
        </button>

        {PRACTICE_ROLES.map((role) => {
          const isSelected = selectedRole === role.id;
          return (
            <button
              key={role.id}
              type="button"
              onClick={() => onSelectRole(role.id)}
              className={`px-3 py-2.5 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-cyan-50/80 border-cyan-500 text-cyan-900 font-bold ring-2 ring-cyan-500/20'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className="text-xs font-semibold block truncate">{role.name}</span>
              <span className="text-[10px] text-slate-400 block truncate">{role.primarySkills[0]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
