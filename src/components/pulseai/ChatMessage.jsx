'use client';

import React from 'react';
import Link from 'next/link';
import { Bot, User, ShieldCheck } from 'lucide-react';

// Format plain text / markdown snippets gracefully
function FormattedContent({ text }) {
  if (!text) return null;

  const lines = text.split('\n');

  return (
    <div className="space-y-1.5 text-xs leading-relaxed text-slate-800">
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        // Header 3
        if (trimmed.startsWith('### ')) {
          return (
            <h4 key={idx} className="font-bold text-navy-900 text-[13px] pt-1 pb-0.5">
              {trimmed.replace('### ', '')}
            </h4>
          );
        }

        // Header 4
        if (trimmed.startsWith('#### ')) {
          return (
            <h5 key={idx} className="font-bold text-navy-800 text-xs pt-1">
              {trimmed.replace('#### ', '')}
            </h5>
          );
        }

        // Bullet point
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const content = trimmed.substring(2);
          return (
            <div key={idx} className="flex items-start gap-1.5 pl-1">
              <span className="text-primary-600 font-bold text-sm leading-none mt-0.5">•</span>
              <span className="flex-1">{renderInlineLinksAndBold(content)}</span>
            </div>
          );
        }

        // Numbered list
        const numMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-1.5 pl-1">
              <span className="text-cyan-600 font-bold text-[11px] min-w-[14px]">{numMatch[1]}.</span>
              <span className="flex-1">{renderInlineLinksAndBold(numMatch[2])}</span>
            </div>
          );
        }

        // Empty line
        if (trimmed === '') {
          return <div key={idx} className="h-1" />;
        }

        return <p key={idx}>{renderInlineLinksAndBold(trimmed)}</p>;
      })}
    </div>
  );
}

// Simple parser for bold **text** and markdown links [text](url)
function renderInlineLinksAndBold(str) {
  if (!str) return '';

  // Match links [text](url) or bold **text**
  const regex = /(\[([^\]]+)\]\(([^\)]+)\))|(\*\*([^*]+)\*\*)/g;
  const parts = [];
  let lastIdx = 0;
  let match;

  while ((match = regex.exec(str)) !== null) {
    if (match.index > lastIdx) {
      parts.push(str.substring(lastIdx, match.index));
    }

    if (match[1]) {
      // Markdown link
      const label = match[2];
      const url = match[3];
      parts.push(
        <Link
          key={match.index}
          href={url}
          className="text-primary-600 hover:text-primary-800 font-semibold underline underline-offset-2"
        >
          {label}
        </Link>
      );
    } else if (match[4]) {
      // Bold text
      parts.push(
        <strong key={match.index} className="font-semibold text-slate-900">
          {match[5]}
        </strong>
      );
    }

    lastIdx = regex.lastIndex;
  }

  if (lastIdx < str.length) {
    parts.push(str.substring(lastIdx));
  }

  return parts.length > 0 ? parts : str;
}

export default function ChatMessage({ message }) {
  const isAssistant = message.role === 'assistant';

  if (!isAssistant) {
    return (
      <div className="flex items-end justify-end gap-2 my-2.5 pl-8">
        <div className="bg-gradient-to-r from-primary-600 to-navy-800 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-xs shadow-sm max-w-[85%] leading-relaxed">
          <p className="whitespace-pre-wrap">{message.content}</p>
          <div className="text-[10px] text-primary-200 mt-1 text-right font-mono">
            {message.timestamp || 'Just now'}
          </div>
        </div>
        <div className="w-7 h-7 rounded-lg bg-navy-800 text-cyan-300 flex items-center justify-center flex-shrink-0 mb-0.5">
          <User className="w-3.5 h-3.5" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2.5 my-3 pr-4">
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-600 to-cyan-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
        <Bot className="w-4 h-4" />
      </div>
      <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[90%] flex-1">
        <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-100">
          <span className="font-bold text-navy-900 text-xs flex items-center gap-1.5">
            PulseAI
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-cyan-50 text-cyan-700 border border-cyan-200/60">
              <ShieldCheck className="w-2.5 h-2.5" /> Verified
            </span>
          </span>
          <span className="text-[10px] text-slate-400 font-mono">
            {message.timestamp || 'Just now'}
          </span>
        </div>
        <FormattedContent text={message.content} />
      </div>
    </div>
  );
}
