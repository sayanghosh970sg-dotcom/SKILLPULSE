'use client';

import React, { useState } from 'react';
import { Bot, Sparkles, MessageSquare } from 'lucide-react';
import PulseAIChat from './PulseAIChat';

export default function PulseAIFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Launcher Button (visible when chat closed) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 group">
          {/* Tooltip hint on hover */}
          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 text-white text-xs whitespace-nowrap shadow-lg animate-fade-in pointer-events-none">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>Chat with <strong>PulseAI</strong></span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-primary-600 via-primary-700 to-cyan-600 text-white font-semibold text-xs shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/35 hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20"
            aria-label="Open PulseAI Career Assistant"
          >
            {/* Glowing ring animation */}
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary-500 to-cyan-400 opacity-60 blur-xs group-hover:opacity-100 transition duration-300 animate-pulse"></span>

            <span className="relative flex items-center justify-center w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs">
              <Bot className="w-4 h-4 text-white" />
            </span>

            <span className="relative font-bold tracking-tight pr-1">PulseAI</span>

            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
          </button>
        </div>
      )}

      {/* Floating Chat Modal */}
      <PulseAIChat isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
