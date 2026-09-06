'use client';

import React, { useState } from 'react';
import ExpertiseBadge from './ExpertiseBadge';
import {
  X,
  Star,
  Briefcase,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  MessageSquare,
  Sparkles,
  Award
} from 'lucide-react';

export default function ExpertProfile({ expert, onClose }) {
  const [selectedFormat, setSelectedFormat] = useState('Career Guidance');
  const [preferredTime, setPreferredTime] = useState('Weekend Session');
  const [note, setNote] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  if (!expert) return null;

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    setRequestSubmitted(true);
    setTimeout(() => {
      setRequestSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4">
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${expert.avatarColor} text-white font-extrabold flex items-center justify-center text-xl shadow-lg shrink-0`}
            >
              {expert.avatarInitials}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">{expert.name}</h2>
                <span className="text-xs text-cyan-300 font-semibold bg-cyan-950/80 border border-cyan-800 px-2 py-0.5 rounded-full">
                  {expert.primaryDomain}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium mt-0.5">
                {expert.role} • {expert.yearsExperience}+ Years Exp
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {expert.companyContext}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Full Bio */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Professional Biography
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {expert.fullBio}
            </p>
          </div>

          {/* Competencies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Areas of Specialization
            </h4>
            <div className="flex flex-wrap gap-2">
              {expert.expertise.map((item, idx) => (
                <ExpertiseBadge key={idx} label={item} size="sm" variant="primary" />
              ))}
            </div>
          </div>

          {/* Availability & Types */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 font-medium block text-[10px] uppercase">
                General Availability
              </span>
              <span className="font-bold text-slate-800 mt-0.5 block">
                {expert.availability}
              </span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block text-[10px] uppercase">
                Supported Formats
              </span>
              <span className="font-bold text-slate-800 mt-0.5 block">
                {expert.consultationTypes.join(', ')}
              </span>
            </div>
          </div>

          {/* Consultation Simulation Form */}
          <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-navy-800">
                <Sparkles className="w-4 h-4 text-primary-600" />
                <span>Request 1-on-1 Guidance Session (Simulation)</span>
              </div>
              <span className="text-[10px] font-semibold text-primary-700 bg-primary-100/70 px-2 py-0.5 rounded">
                Planned Feature
              </span>
            </div>

            <p className="text-[11px] text-slate-600 leading-relaxed">
              SkillPulse does not process payments. This form simulates submitting a guidance inquiry 
              to match your detected skill gap priorities.
            </p>

            <form onSubmit={handleSubmitRequest} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Select Session Format
                  </label>
                  <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {expert.consultationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="Weekend Session">Weekend Session (Sat/Sun)</option>
                    <option value="Weekday Evening">Weekday Evening (7 - 9 PM)</option>
                    <option value="Async Written Q&A">Async Written Q&A</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Topic / Target Skill Gap Note
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Seeking advice on transitioning into Data Analytics and mastering advanced SQL..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-500 font-medium">
                  Free educational pilot simulation
                </span>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold transition-all shadow-md shadow-primary-600/20 flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>

            {requestSubmitted && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-semibold flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Inquiry simulated successfully! Your mentoring request is queued in the SkillPulse demo sandbox.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
