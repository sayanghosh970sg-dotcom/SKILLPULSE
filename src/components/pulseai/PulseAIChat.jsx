'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Send,
  X,
  Minimize2,
  Maximize2,
  Trash2,
  Sparkles,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import ChatMessage from './ChatMessage';
import SuggestedPrompts from './SuggestedPrompts';
import QuickActions from './QuickActions';
import TypingIndicator from './TypingIndicator';

const INITIAL_MESSAGE = {
  role: 'assistant',
  content: `### 👋 Hi, I'm PulseAI!
Your intelligent career and skill advisory co-pilot on **SkillPulse**.

I can help you:
- **Diagnose skill gaps** for your target engineering or analytics role
- **Prepare for technical rounds** at Google, Microsoft, TCS, Amazon & more via [/practice](/practice)
- **Discover accredited courses** to close your skill deficits via [/courses](/courses)
- **Connect with verified mentors** for 1-on-1 portfolio & interview guidance via [/experts](/experts)

How can I help you today?`,
  timestamp: 'Just now',
};

export default function PulseAIChat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [errorNotice, setErrorNotice] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen, isMinimized]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSend = async (textToSend) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    setErrorNotice(null);
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMessage = {
      role: 'user',
      content: text,
      timestamp: now,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
          context: {
            platform: 'SkillPulse India',
            route: typeof window !== 'undefined' ? window.location.pathname : '/',
          },
        }),
      });

      const data = await response.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: data.reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);

        if (data.configured === false) {
          setErrorNotice('Demo Mode: Add OPENAI_API_KEY to .env.local for full OpenAI responses.');
        }
      } else {
        throw new Error(data.error || 'Failed to receive reply from PulseAI.');
      }
    } catch (err) {
      console.error('PulseAI error:', err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I encountered a network issue communicating with the AI service. Please ensure your connection is active and try again.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    if (window.confirm('Clear your PulseAI conversation?')) {
      setMessages([INITIAL_MESSAGE]);
      setErrorNotice(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-200 shadow-2xl border border-slate-300/80 bg-white flex flex-col ${
        isMinimized
          ? 'bottom-6 right-6 w-80 h-14 rounded-2xl overflow-hidden'
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[410px] max-w-[calc(100vw-2rem)] h-[620px] max-h-[calc(100vh-5rem)] rounded-2xl overflow-hidden'
      }`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-primary-900 text-white px-4 py-3 flex items-center justify-between select-none shadow-md">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-primary-500 flex items-center justify-center text-navy-950 font-bold shadow-sm">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm tracking-tight text-white">PulseAI</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Online & Ready" />
            </div>
            <p className="text-[10px] text-cyan-200/80 font-medium -mt-0.5">
              Skill & Career Intelligence
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {!isMinimized && (
            <button
              onClick={handleClear}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Clear Conversation"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Notice banner if in demo mode */}
          {errorNotice && (
            <div className="bg-amber-50 border-b border-amber-200 px-3 py-1.5 text-[11px] text-amber-800 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
              <span className="truncate">{errorNotice}</span>
            </div>
          )}

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto px-4 py-3 bg-slate-50/60 space-y-1">
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} />
            ))}
            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts (shown when <= 2 messages) */}
          {messages.length <= 2 && (
            <SuggestedPrompts onSelectPrompt={(p) => handleSend(p)} />
          )}

          {/* Quick Deep-Links */}
          <QuickActions />

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex items-end gap-2 bg-slate-100/90 rounded-xl p-1.5 border border-slate-200 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-100 transition-all">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask PulseAI about skills, practice, courses, mentors..."
                rows={1}
                className="flex-1 bg-transparent text-xs text-slate-800 placeholder-slate-400 resize-none px-2 py-1 outline-none max-h-24 min-h-[32px]"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className="w-8 h-8 rounded-lg bg-primary-600 hover:bg-primary-700 disabled:opacity-40 disabled:hover:bg-primary-600 text-white flex items-center justify-center transition-colors flex-shrink-0 shadow-sm"
                title="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-1 px-1 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-cyan-500" />
                Grounded in SkillPulse Verified Intelligence
              </span>
              <span>Enter to send</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
