'use client';

import React from 'react';
import { PRACTICE_COMPANIES } from '../../data/practiceData';
import { Code2, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export default function PracticeCard({ question, onSelect, isCompleted = false, isSelected = false }) {
  const getDifficultyBadge = (diff) => {
    switch (diff) {
      case 'Easy':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Medium':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Hard':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div
      onClick={() => onSelect(question)}
      className={`card-subtle p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
        isSelected
          ? 'bg-primary-50/70 border-primary-400 ring-2 ring-primary-500/20 shadow-sm'
          : 'bg-white border-slate-200 hover:border-primary-300 hover:shadow-md'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${getDifficultyBadge(question.difficulty)}`}>
            {question.difficulty}
          </span>
          <div className="flex items-center gap-1.5">
            {isCompleted && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="w-3 h-3" /> Solved
              </span>
            )}
            <span className="text-[10px] font-mono text-slate-400">
              {question.skillCategory}
            </span>
          </div>
        </div>

        <h3 className="text-sm font-bold text-navy-800 group-hover:text-primary-600 transition-colors">
          {question.title}
        </h3>

        <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
          {question.description}
        </p>
      </div>

      <div className="space-y-3 pt-2 border-t border-slate-100">
        {/* Concepts Chips */}
        <div className="flex flex-wrap gap-1">
          {question.conceptsTested.slice(0, 3).map((concept, idx) => (
            <span
              key={idx}
              className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600"
            >
              {concept}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <Layers className="w-3 h-3 text-slate-400" />
            <span className="truncate max-w-[150px]">{question.relatedSkill}</span>
          </div>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600 hover:text-primary-700">
            Practice <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
