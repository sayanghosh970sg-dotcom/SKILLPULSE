'use client';

import React from 'react';
import ExpertiseBadge from './ExpertiseBadge';
import {
  Star,
  Clock,
  Briefcase,
  Building,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export default function ExpertCard({ expert, onOpenProfile }) {
  return (
    <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary-300 transition-all flex flex-col justify-between space-y-5 group">
      <div>
        {/* Top Header: Avatar, Name, Rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3.5">
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${expert.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-md shrink-0`}
            >
              {expert.avatarInitials}
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-bold text-navy-800 group-hover:text-primary-600 transition-colors">
                  {expert.name}
                </h3>
                <span title="Verified Mentor Profile" className="inline-flex">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-700 mt-0.5">
                {expert.role}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {expert.companyContext}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200/80 text-amber-800 text-xs font-bold shrink-0">
            <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
            <span>{expert.rating}</span>
            <span className="text-[10px] text-amber-600 font-normal">
              ({expert.sessionsCount})
            </span>
          </div>
        </div>

        {/* Short Bio */}
        <p className="text-xs text-slate-600 mt-3 line-clamp-3 leading-relaxed">
          {expert.shortBio}
        </p>

        {/* Areas of Expertise */}
        <div className="mt-4 space-y-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            Specialized Competencies
          </span>
          <div className="flex flex-wrap gap-1.5">
            {expert.expertise.slice(0, 3).map((item, idx) => (
              <ExpertiseBadge key={idx} label={item} size="xs" />
            ))}
            {expert.expertise.length > 3 && (
              <span className="text-[10px] font-semibold text-slate-500 px-1.5 py-0.5 bg-slate-100 rounded">
                +{expert.expertise.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Availability & Consultation Badges */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-1.5 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded-lg w-fit text-[11px] font-medium border border-emerald-200/60">
            <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{expert.availability}</span>
          </div>

          <div className="flex flex-wrap gap-1 mt-1">
            {expert.consultationTypes.map((type, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer: Experience & View Profile CTA */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
        <span className="text-xs text-slate-500 font-medium">
          <strong>{expert.yearsExperience}+ Years</strong> in Industry
        </span>

        <button
          type="button"
          onClick={() => onOpenProfile(expert)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy-800 hover:bg-primary-600 text-white text-xs font-semibold transition-colors shadow-2xs"
        >
          <span>View Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
