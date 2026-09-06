'use client';

import React from 'react';
import { Bot } from 'lucide-react';

export default function TypingIndicator() {
  return (
    <div className="flex items-start gap-2.5 my-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-cyan-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
        <Bot className="w-4 h-4" />
      </div>
      <div className="bg-slate-100 border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-2.5 text-xs text-slate-600 flex items-center gap-2">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-600 animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-bounce"></span>
        </div>
        <span className="font-medium text-slate-500 text-[11px]">PulseAI is thinking...</span>
      </div>
    </div>
  );
}
