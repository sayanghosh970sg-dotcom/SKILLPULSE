'use client';

import React, { useState } from 'react';
import DataSourceBadge from '../../components/DataSourceBadge';
import { JOB_ROLES } from '../../data/mockData';
import {
  Compass,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Award,
  BookMarked
} from 'lucide-react';

export default function CareerRoadmapPage() {
  const [selectedRoleId, setSelectedRoleId] = useState('data-analyst');
  const [completedSteps, setCompletedSteps] = useState([1, 2]);

  const currentRole = JOB_ROLES.find(r => r.id === selectedRoleId) || JOB_ROLES[0];
  const roadmapSteps = currentRole.recommendedPath || [];

  const toggleStep = (stepNumber) => {
    if (completedSteps.includes(stepNumber)) {
      setCompletedSteps(completedSteps.filter(s => s !== stepNumber));
    } else {
      setCompletedSteps([...completedSteps, stepNumber]);
    }
  };

  const progressPercentage = roadmapSteps.length > 0
    ? Math.round((completedSteps.length / roadmapSteps.length) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-primary-600" />
            <span>Milestone-Driven Learning Engine</span>
          </div>
          <DataSourceBadge sourceId="skillpulse_gap_engine" />
        </div>
        <h1 className="text-3xl font-extrabold text-navy-800 tracking-tight">
          Career Roadmaps
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
          Follow structured, industry-vetted step-by-step career milestones with estimated hours and practical capstone projects.
        </p>
      </div>

      {/* Role Picker Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-200">
        {JOB_ROLES.map((role) => {
          const isActive = role.id === selectedRoleId;
          return (
            <button
              key={role.id}
              onClick={() => {
                setSelectedRoleId(role.id);
                setCompletedSteps([1]);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-navy-800 text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {role.title}
            </button>
          );
        })}
      </div>

      {/* Roadmap Overview Banner */}
      <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
            Target Career Path
          </span>
          <h2 className="text-2xl font-extrabold text-navy-800">
            Become a {currentRole.title}
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            {currentRole.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2">
            <span className="font-semibold text-slate-700 font-mono">
              Market Compensation: {currentRole.salaryRange}
            </span>
            <span>•</span>
            <span>{roadmapSteps.length} Key Milestones</span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold">100% Industry Aligned</span>
          </div>
        </div>

        <div className="md:col-span-4 p-5 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
          <span className="text-xs font-semibold text-slate-500 block">
            Your Track Progress
          </span>
          <span className="text-3xl font-extrabold text-navy-800">
            {progressPercentage}%
          </span>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-500 block">
            {completedSteps.length} of {roadmapSteps.length} Milestones Checked
          </span>
        </div>
      </div>

      {/* Step by Step Timeline */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-navy-800">
          Step-by-Step Curriculum Timeline
        </h3>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-8">
          {roadmapSteps.map((stepItem, index) => {
            const isCompleted = completedSteps.includes(stepItem.step);

            return (
              <div key={index} className="relative group">
                {/* Timeline Dot Marker */}
                <div
                  onClick={() => toggleStep(stepItem.step)}
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
                    isCompleted
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'bg-white border-slate-300 text-slate-500 hover:border-primary-500'
                  }`}
                  title={isCompleted ? 'Click to unmark' : 'Click to mark complete'}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                  ) : (
                    <span className="text-xs font-bold">{stepItem.step}</span>
                  )}
                </div>

                {/* Milestone Card */}
                <div className={`card-subtle p-5 rounded-2xl border transition-all ${
                  isCompleted ? 'bg-emerald-50/20 border-emerald-200' : 'bg-white border-slate-200'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary-600 uppercase tracking-wide">
                        Step {stepItem.step}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {stepItem.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{stepItem.time}</span>
                      </div>
                      <button
                        onClick={() => toggleStep(stepItem.step)}
                        className={`text-xs font-semibold px-3 py-1 rounded-lg transition-colors ${
                          isCompleted
                            ? 'text-emerald-700 bg-emerald-100 hover:bg-emerald-200'
                            : 'text-slate-700 bg-slate-100 hover:bg-slate-200'
                        }`}
                      >
                        {isCompleted ? 'Completed ✓' : 'Mark Done'}
                      </button>
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-navy-800">
                    {stepItem.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Structured exercises, essential documentation reading, and targeted practice sprints to establish competency.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
