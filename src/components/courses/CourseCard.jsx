'use client';

import React from 'react';
import {
  ExternalLink,
  Clock,
  Star,
  BookOpen,
  Award,
  Layers,
  Sparkles,
  CheckCircle2,
  Globe
} from 'lucide-react';

export default function CourseCard({ course }) {
  const getLevelBadge = (level) => {
    switch (level) {
      case 'Beginner':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Intermediate':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Advanced':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="card-subtle p-5 rounded-2xl bg-white border border-slate-200 hover:border-primary-300 transition-all flex flex-col justify-between space-y-4 group">
      <div>
        {/* Top Header: Provider & Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium truncate">
            <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{course.provider}</span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span
              className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                course.isFree
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-amber-50 text-amber-800 border-amber-200'
              }`}
            >
              {course.priceLabel}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-navy-800 group-hover:text-primary-600 transition-colors line-clamp-2 leading-snug">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
          {course.shortDescription}
        </p>

        {/* Meta Stats: Rating, Duration, Level */}
        <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100 font-medium">
          <div className="flex items-center gap-1 text-amber-600 font-bold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{course.rating}</span>
            <span className="text-[10px] text-slate-400 font-normal">
              ({course.reviewsCount.toLocaleString()})
            </span>
          </div>

          <div className="flex items-center gap-1 text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[11px]">{course.duration}</span>
          </div>

          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${getLevelBadge(
              course.level
            )}`}
          >
            {course.level}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-3">
          {course.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Footer: Skill & Action Button */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs text-primary-700 font-semibold bg-primary-50 px-2.5 py-1 rounded-lg">
          <Layers className="w-3 h-3 text-primary-600" />
          <span className="truncate max-w-[120px]">{course.skill}</span>
        </div>

        <a
          href={course.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-navy-800 text-white text-xs font-semibold hover:bg-primary-600 transition-colors shadow-2xs"
        >
          <span>View Resource</span>
          <ExternalLink className="w-3 h-3 text-slate-300" />
        </a>
      </div>
    </div>
  );
}
