'use client';

import React, { useState } from 'react';
import DataSourceBadge from '../../components/DataSourceBadge';
import { Building2, Plus, Check, Briefcase, MapPin, Layers, Sparkles } from 'lucide-react';

export default function EmployerPage() {
  const [roleTitle, setRoleTitle] = useState('Data Analyst');
  const [experience, setExperience] = useState('0-2 years');
  const [location, setLocation] = useState('Bengaluru / Pune');
  const [selectedSkills, setSelectedSkills] = useState(['Python', 'SQL', 'Excel', 'Power BI', 'Statistics']);
  const [newSkill, setNewSkill] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleAddSkill = () => {
    if (!newSkill.trim()) return;
    if (!selectedSkills.includes(newSkill.trim())) {
      setSelectedSkills([...selectedSkills, newSkill.trim()]);
    }
    setNewSkill('');
  };

  const handleRemoveSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Employer Talent Specification</span>
          </div>
          <DataSourceBadge sourceId="demo_curriculum" />
        </div>
        <h1 className="text-3xl font-extrabold text-navy-800 tracking-tight">
          Industry Skill Requirement Profile
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
          Define job roles, required skill competencies, and hiring standards to signal training institutes and candidate pipelines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Column (6 cols) */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmitProfile} className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 space-y-5">
            <h3 className="text-base font-bold text-navy-800 pb-2 border-b border-slate-100">
              Define New Role Requisition
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Target Job Role Title
              </label>
              <input
                type="text"
                value={roleTitle}
                onChange={(e) => setRoleTitle(e.target.value)}
                placeholder="e.g. Data Analyst, Cloud Architect..."
                className="w-full text-xs border border-slate-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Experience Tier
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="0-2 years">0-2 years (Entry Level / Freshers)</option>
                  <option value="2-5 years">2-5 years (Mid Level)</option>
                  <option value="5+ years">5+ years (Senior Specialist)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Primary Location / District
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Pune, Mumbai, Remote..."
                  className="w-full text-xs border border-slate-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Required Competencies
              </label>
              <div className="flex flex-wrap gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl mb-3">
                {selectedSkills.map((sk, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-navy-800"
                  >
                    <span>{sk}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(sk)}
                      className="text-slate-400 hover:text-rose-600"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add another required skill..."
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                  className="flex-1 text-xs border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="px-3 py-2 bg-slate-800 text-white rounded-lg text-xs font-semibold hover:bg-slate-900 flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add</span>
                </button>
              </div>
            </div>

            {savedSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2 font-semibold">
                <Check className="w-4 h-4" />
                <span>Industry Skill Profile saved and broadcasted to telemetry database!</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Publish & Save Requirement Profile</span>
            </button>
          </form>
        </div>

        {/* Preview Summary Column (5 cols) */}
        <div className="lg:col-span-5">
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Live Profile Card
            </span>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-navy-800">{roleTitle}</h4>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                  {experience}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {location}
                </span>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-bold text-slate-600 block mb-1.5">
                  Extracted Competencies ({selectedSkills.length})
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSkills.map((sk, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-primary-700"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              This requirement profile directly feeds into the <strong>Skill Gap Analyzer</strong> and <strong>Curriculum Alignment</strong> engines, updating real-time benchmark weights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
