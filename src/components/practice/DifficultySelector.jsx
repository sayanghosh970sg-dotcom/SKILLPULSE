'use client';

import React from 'react';
import { PRACTICE_DIFFICULTIES } from '../../data/practiceData';
import { Gauge, Check } from 'lucide-react';

export default function DifficultySelector({ selectedDifficulty, onSelectDifficulty }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold uppercase tracking-wider text-navy-800 flex items-center gap-1.5">
          <Gauge className="w-3.5 h-3.5 text-primary-600" />
          <span>3. Select Difficulty Level</span>
        </label>
        <span className="text-[11px] text-slate-500 font-medium">
          {selectedDifficulty}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {PRACTICE_DIFFICULTIES.map((diff) => {
          const isSelected = selectedDifficulty === diff.id;
          return (
            <button
              key={diff.id}
              type="button"
              onClick={() => onSelectDifficulty(diff.id)}
              className={`px-4 py-2.5 rounded-xl border font-semibold text-xs transition-all flex items-center justify-between ${
                isSelected
                  ? 'bg-navy-800 text-white border-navy-800 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <span>{diff.name}</span>
              {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
