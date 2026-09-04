import React from 'react';

export default function ProgressBar({ value = 0, max = 100, label, showValue = true, color = 'primary', size = 'md' }) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  const colorClasses = {
    primary: 'bg-primary-600',
    cyan: 'bg-cyan-500',
    success: 'bg-emerald-600',
    warning: 'bg-amber-500',
    danger: 'bg-rose-600'
  };

  const heightClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4'
  };

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1 text-xs">
          {label && <span className="font-medium text-slate-700">{label}</span>}
          {showValue && <span className="font-semibold text-slate-600">{percentage}%</span>}
        </div>
      )}
      <div className={`w-full bg-slate-100 rounded-full overflow-hidden ${heightClasses[size]}`}>
        <div
          className={`${colorClasses[color] || colorClasses.primary} transition-all duration-500 rounded-full h-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
