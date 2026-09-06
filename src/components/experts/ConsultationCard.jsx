'use client';

import React from 'react';
import {
  Compass,
  FileText,
  Code2,
  HelpCircle,
  MessageSquare,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function ConsultationCard({ format, onSelectFormat, isSelected = false }) {
  const getIcon = (name) => {
    switch (name) {
      case 'Compass':
        return Compass;
      case 'FileText':
        return FileText;
      case 'Code2':
        return Code2;
      case 'HelpCircle':
        return HelpCircle;
      case 'MessageSquare':
      default:
        return MessageSquare;
    }
  };

  const IconComponent = getIcon(format.iconName);

  return (
    <div
      onClick={() => onSelectFormat && onSelectFormat(format.title)}
      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
        isSelected
          ? 'bg-primary-50/80 border-primary-500 ring-2 ring-primary-500/20 shadow-sm'
          : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="w-8 h-8 rounded-xl bg-navy-800 text-white flex items-center justify-center">
            <IconComponent className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{format.duration}</span>
          </span>
        </div>

        <h4 className="text-xs font-bold text-navy-800">{format.title}</h4>
        <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
          {format.description}
        </p>
      </div>

      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-primary-600 font-semibold">
        <span>Filter Experts</span>
        <ArrowRight className="w-3 h-3" />
      </div>
    </div>
  );
}
