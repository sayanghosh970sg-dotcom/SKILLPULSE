import React from 'react';
import { Check, X, AlertCircle } from 'lucide-react';

export default function SkillGapCard({ skill, status = 'matched' }) {
  const isMatched = status === 'matched';

  return (
    <div
      className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
        isMatched
          ? 'bg-emerald-50/50 border-emerald-200'
          : 'bg-rose-50/40 border-rose-200'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
            isMatched
              ? 'bg-emerald-600 text-white'
              : 'bg-rose-600 text-white'
          }`}
        >
          {isMatched ? <Check className="w-4 h-4 stroke-[3]" /> : <X className="w-4 h-4 stroke-[3]" />}
        </div>
        <div>
          <span className="text-xs font-bold text-navy-800 block">
            {skill.name}
          </span>
          <span className="text-[11px] text-slate-500">
            Priority: <span className="font-semibold text-slate-700">{skill.priority || 'Standard'}</span>
          </span>
        </div>
      </div>

      <div>
        <span
          className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
            isMatched
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-rose-100 text-rose-800'
          }`}
        >
          {isMatched ? 'Covered' : 'Gap to Learn'}
        </span>
      </div>
    </div>
  );
}
