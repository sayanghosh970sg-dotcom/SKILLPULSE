'use client';

import React from 'react';
import Link from 'next/link';
import { Code2, BookOpen, Users, Compass, BarChart3 } from 'lucide-react';

const ACTIONS = [
  { name: 'Practice', href: '/practice', icon: Code2, color: 'text-primary-600' },
  { name: 'Courses', href: '/courses', icon: BookOpen, color: 'text-cyan-600' },
  { name: 'Experts', href: '/experts', icon: Users, color: 'text-indigo-600' },
  { name: 'Analyzer', href: '/skill-gap-analyzer', icon: BarChart3, color: 'text-amber-600' },
  { name: 'Roadmap', href: '/career-roadmap', icon: Compass, color: 'text-emerald-600' },
];

export default function QuickActions() {
  return (
    <div className="px-3 py-2 bg-slate-100/80 border-t border-slate-200/80 flex items-center justify-between gap-1 overflow-x-auto text-[11px]">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 flex-shrink-0 pl-1">
        Jump to:
      </span>
      <div className="flex items-center gap-1 flex-nowrap">
        {ACTIONS.map((act) => {
          const Icon = act.icon;
          return (
            <Link
              key={act.name}
              href={act.href}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 font-medium transition-colors shadow-2xs flex-shrink-0"
            >
              <Icon className={`w-3 h-3 ${act.color}`} />
              <span>{act.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
