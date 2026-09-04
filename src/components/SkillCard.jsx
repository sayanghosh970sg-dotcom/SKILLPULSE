import React from 'react';
import { Briefcase, Zap, AlertTriangle, ArrowRight } from 'lucide-react';

export default function SkillCard({ skill, onSelect, selected = false }) {
  const getCategoryBadge = (cat) => {
    return (
      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
        {cat}
      </span>
    );
  };

  return (
    <div
      onClick={() => onSelect && onSelect(skill)}
      className={`card-subtle p-4 rounded-xl border cursor-pointer transition-all ${
        selected
          ? 'border-primary-600 bg-primary-50/40 ring-1 ring-primary-600'
          : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h4 className="text-sm font-bold text-navy-800">{skill.skill || skill.name}</h4>
          <span className="text-xs text-slate-500">{skill.industry || skill.category}</span>
        </div>
        {skill.growth && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            {skill.growth}
          </span>
        )}
      </div>

      {skill.demand && (
        <div className="mt-3">
          <div className="flex justify-between text-[11px] text-slate-500 mb-1">
            <span>Demand Index</span>
            <span className="font-semibold text-navy-800">{skill.demand}/100</span>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-primary-600 h-full rounded-full"
              style={{ width: `${skill.demand}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
