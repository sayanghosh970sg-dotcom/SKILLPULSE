'use client';

import React, { useState } from 'react';
import StatCard from '../../components/StatCard';
import ProgressBar from '../../components/ProgressBar';
import { MAHARASHTRA_DISTRICTS } from '../../data/mockData';
import {
  Building,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Layers,
  Search
} from 'lucide-react';

export default function GovernmentDashboardPage() {
  const [selectedDistrict, setSelectedDistrict] = useState(MAHARASHTRA_DISTRICTS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDistricts = MAHARASHTRA_DISTRICTS.filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.topIndustry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold mb-2">
          <Building className="w-3.5 h-3.5 text-purple-600" />
          <span>Regional Skill Mission & Policy Telemetry</span>
        </div>
        <h1 className="text-3xl font-extrabold text-navy-800 tracking-tight">
          Government & Institute Regional Intelligence
        </h1>
        <p className="text-sm text-slate-500 mt-1 max-w-2xl">
          District-wise skill demand versus training infrastructure across Maharashtra. Identify talent supply bottlenecks and align state skilling funds.
        </p>
      </div>

      {/* High-Level Regional Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Monitored Districts"
          value="7 Key Hubs"
          icon={MapPin}
          description="Focus on Maharashtra industrial and tech corridors."
        />
        <StatCard
          title="Regional Vacancy Demand"
          value="18,070"
          change="+12% QoQ"
          icon={Briefcase}
          description="Open employment requisitions across monitored hubs."
        />
        <StatCard
          title="Registered Training Centers"
          value="283 Centers"
          icon={GraduationCap}
          description="Government ITIs, polytechnics, and accredited institutes."
        />
        <StatCard
          title="Skill Shortage Severity"
          value="High in 3 Districts"
          change="Urgent"
          icon={AlertTriangle}
          description="Pune, Nagpur and Chhatrapati Sambhajinagar showing supply lags."
        />
      </div>

      {/* Main District Analytics Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: District List & Search (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="card-subtle p-5 rounded-2xl bg-white border border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-navy-800">
                Maharashtra Districts
              </h3>
              <span className="text-xs text-slate-500 font-mono">
                {MAHARASHTRA_DISTRICTS.length} Districts Tracked
              </span>
            </div>

            {/* Search Input */}
            <div className="relative mb-3">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search district or industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* List */}
            <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
              {filteredDistricts.map((district) => {
                const isSelected = selectedDistrict.id === district.id;

                return (
                  <div
                    key={district.id}
                    onClick={() => setSelectedDistrict(district)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-primary-600 bg-primary-50/40 ring-1 ring-primary-600'
                        : 'border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-xs font-bold text-navy-800 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary-600" />
                        <span>{district.name}</span>
                      </h4>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          district.gapScore === 'High Gap'
                            ? 'bg-rose-50 text-rose-700 border border-rose-200'
                            : district.gapScore === 'Medium Gap'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}
                      >
                        {district.gapScore}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-[11px] text-slate-500 mt-2">
                      <span>{district.topIndustry}</span>
                      <span className="font-semibold text-navy-800">{district.openJobs} Vacancies</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Selected District Deep Dive (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="card-subtle p-6 rounded-2xl bg-white border border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Regional Profile Report
                </span>
                <h3 className="text-2xl font-extrabold text-navy-800 flex items-center gap-2 mt-0.5">
                  <span>{selectedDistrict.name} District</span>
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  Demand: {selectedDistrict.demandLevel}
                </span>
              </div>
            </div>

            {/* Demand vs Training Comparison Metric */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-800">
                Industry Demand vs. Available Training Capacity
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <span className="text-xs text-slate-500 block mb-1">Local Industry Demand</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-navy-800">{selectedDistrict.openJobs}</span>
                    <span className="text-xs font-semibold text-primary-600">Open Jobs</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">Lead Sector: {selectedDistrict.topIndustry}</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <span className="text-xs text-slate-500 block mb-1">Vocational Training Centers</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-navy-800">{selectedDistrict.trainingCenters}</span>
                    <span className="text-xs font-semibold text-emerald-600">Active Facilities</span>
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">Capacity: {selectedDistrict.availableTraining}</span>
                </div>
              </div>

              {/* High Demand Focus Skills in this District */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-700 block mb-2">
                  Highest Deficit Competencies in {selectedDistrict.name}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedDistrict.focusSkills.map((sk, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-white border border-slate-200 text-navy-800 shadow-2xs"
                    >
                      ⚠️ {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actionable Government Recommendations */}
            <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2 text-xs text-purple-900">
              <h5 className="font-bold flex items-center gap-1.5 text-purple-900">
                <Building className="w-4 h-4 text-purple-600" />
                <span>Policy Recommendation for {selectedDistrict.name}</span>
              </h5>
              <p className="leading-relaxed text-purple-800">
                {selectedDistrict.gapScore === 'High Gap'
                  ? `Establish fast-track Public-Private Partnership (PPP) training modules for ${selectedDistrict.focusSkills.slice(0, 2).join(' and ')} to satisfy the ${selectedDistrict.openJobs} open vacancies.`
                  : `Maintain regular industry audit cycles and expand internship programs to retain talent in ${selectedDistrict.name}.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
