'use client';

import React from 'react';

export default function ExpertiseBadge({ label, size = 'sm', variant = 'default' }) {
  const getStyle = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-50 text-primary-700 border-primary-200';
      case 'cyan':
        return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'purple':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'emerald':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200/80';
    }
  };

  const sizeClass = size === 'xs' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-2.5 py-1';

  return (
    <span
      className={`inline-flex items-center font-medium rounded-lg border transition-colors ${getStyle()} ${sizeClass}`}
    >
      {label}
    </span>
  );
}
