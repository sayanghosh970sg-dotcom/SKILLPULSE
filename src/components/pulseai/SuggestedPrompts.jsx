'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

const SUGGESTIONS = [
  'What skills do I need for Google Frontend?',
  'How do I close my React & System Design gaps?',
  'Recommend free courses for Cloud & DevOps',
  'Find an AI/ML mentor for career guidance',
  'What official data sources power SkillPulse?'
];

export default function SuggestedPrompts({ onSelectPrompt }) {
  return (
    <div className="p-3 border-t border-slate-100 bg-slate-50/70">
      <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 mb-2">
        <Sparkles className="w-3 h-3 text-cyan-500" />
        <span>Suggested Queries:</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {SUGGESTIONS.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onSelectPrompt(item)}
            className="text-left text-[11px] px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-primary-400 hover:text-primary-700 hover:bg-primary-50/50 transition-colors shadow-2xs"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
