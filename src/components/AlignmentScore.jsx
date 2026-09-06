import React from 'react';
import DataSourceBadge from './DataSourceBadge';

export default function AlignmentScore({
  score = 0,
  size = 'lg',
  subtitle = 'Industry Alignment',
  sourceId = 'skillpulse_analysis',
  methodologyNote = 'Calculated by SkillPulse'
}) {
  const getScoreColor = () => {
    if (score >= 80) return { ring: 'text-emerald-500', bg: 'bg-emerald-50', text: 'text-emerald-700', label: 'High Alignment' };
    if (score >= 60) return { ring: 'text-amber-500', bg: 'bg-amber-50', text: 'text-amber-700', label: 'Moderate Alignment' };
    return { ring: 'text-rose-500', bg: 'bg-rose-50', text: 'text-rose-700', label: 'Significant Gap' };
  };

  const colors = getScoreColor();

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
      <div className="relative flex items-center justify-center">
        <svg className="w-32 h-32 transform -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="54"
            stroke="currentColor"
            strokeWidth="10"
            className="text-slate-100"
            fill="transparent"
          />
          <circle
            cx="64"
            cy="64"
            r="54"
            stroke="currentColor"
            strokeWidth="10"
            strokeDasharray={339.29}
            strokeDashoffset={339.29 - (339.29 * score) / 100}
            strokeLinecap="round"
            className={`${colors.ring} transition-all duration-1000 ease-out`}
            fill="transparent"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-3xl font-extrabold text-navy-800">{score}%</span>
          <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Score</span>
        </div>
      </div>
      
      <div className="mt-3">
        <h4 className="text-sm font-bold text-navy-800">{subtitle}</h4>
        <span className={`inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
          {colors.label}
        </span>
      </div>

      <div className="mt-3 pt-2.5 border-t border-slate-100 w-full flex flex-col items-center gap-1 text-center">
        <span className="text-[10px] text-slate-500 font-medium">
          {methodologyNote}
        </span>
        <DataSourceBadge
          sourceId={sourceId}
          showFreshness={false}
          className="justify-center"
        />
      </div>
    </div>
  );
}
