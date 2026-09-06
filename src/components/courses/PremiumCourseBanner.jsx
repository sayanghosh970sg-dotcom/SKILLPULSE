'use client';

import React, { useState } from 'react';
import { PREMIUM_PLANS_COMPARISON } from '../../data/coursesData';
import {
  Crown,
  Check,
  Clock,
  Sparkles,
  Bell,
  CheckCircle2,
  ShieldCheck,
  Lock
} from 'lucide-react';

export default function PremiumCourseBanner() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNotify = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const { free, premium } = PREMIUM_PLANS_COMPARISON;

  return (
    <div className="card-subtle p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 space-y-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold mb-2">
            <Crown className="w-3.5 h-3.5 text-purple-600" />
            <span>Future Roadmap: Premium Learning Tracks</span>
          </div>
          <h3 className="text-xl font-extrabold text-navy-800 tracking-tight">
            SkillPulse Learning Tiers Comparison
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Transparent breakdown of current free open-access tools and planned structured premium cohorts.
          </p>
        </div>

        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 self-start sm:self-auto">
          <Clock className="w-3.5 h-3.5" /> Planned Feature (Coming Soon)
        </span>
      </div>

      {/* Plans Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Free Plan Card */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Community Tier
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              100% Free
            </span>
          </div>

          <h4 className="text-lg font-bold text-navy-800">{free.name}</h4>
          <p className="text-xs text-slate-500">
            Full access to market telemetry, individual gap diagnostics, and curated open educational links.
          </p>

          <ul className="space-y-2.5 pt-2 text-xs text-slate-700">
            {free.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Premium Plan Card */}
        <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-200 space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Guided Cohorts
            </span>
            <span className="text-xs font-bold text-purple-800 bg-purple-100 border border-purple-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Lock className="w-3 h-3" /> Planned
            </span>
          </div>

          <h4 className="text-lg font-bold text-navy-800">{premium.name}</h4>
          <p className="text-xs text-slate-600">
            Deep structured learning tracks with proctored skill validation and corporate interview preparation.
          </p>

          <ul className="space-y-2.5 pt-2 text-xs text-slate-800">
            {premium.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Notification Waitlist */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-bold text-navy-800 flex items-center justify-center sm:justify-start gap-1.5">
            <Bell className="w-3.5 h-3.5 text-primary-600" />
            <span>Interested in Structured Cohorts?</span>
          </span>
          <p className="text-xs text-slate-500">
            No payments enabled today. Join our notification list for early access announcements.
          </p>
        </div>

        <form onSubmit={handleNotify} className="flex gap-2 w-full sm:w-auto">
          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white min-w-[200px]"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-navy-800 hover:bg-primary-600 text-white text-xs font-semibold transition-colors shrink-0"
          >
            Notify Me
          </button>
        </form>
      </div>

      {subscribed && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Thank you! We have added you to our notification list for upcoming cohort programs.</span>
        </div>
      )}
    </div>
  );
}
