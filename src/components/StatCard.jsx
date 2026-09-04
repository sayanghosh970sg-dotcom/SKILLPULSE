import React from 'react';

export default function StatCard({ title, value, change, icon: Icon, description, trend = 'neutral' }) {
  const getTrendBadge = () => {
    if (!change) return null;
    const isPositive = change.startsWith('+');
    return (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${
          isPositive
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            : 'bg-rose-50 text-rose-700 border border-rose-200'
        }`}
      >
        {change}
      </span>
    );
  };

  return (
    <div className="card-subtle p-5 bg-white border border-slate-200 rounded-xl relative overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </span>
        {Icon && (
          <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight text-navy-800">
          {value}
        </span>
        {getTrendBadge()}
      </div>
      {description && (
        <p className="mt-1.5 text-xs text-slate-500 line-clamp-2">
          {description}
        </p>
      )}
    </div>
  );
}
