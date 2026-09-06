'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import StatCard from '../../components/StatCard';
import ProgressBar from '../../components/ProgressBar';
import DataSourceBadge from '../../components/DataSourceBadge';
import { GEOGRAPHY } from '../../data/geography';
import {
  Building,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Layers,
  Search,
  Globe,
  Filter,
  ArrowRight,
  Info
} from 'lucide-react';

export default function GovernmentDashboardPage() {
  const [selectedStateId, setSelectedStateId] = useState('all');
  const [selectedDistrictId, setSelectedDistrictId] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Selected state object if a specific state is chosen
  const currentState = selectedStateId !== 'all' 
    ? GEOGRAPHY.states.find(s => s.id === selectedStateId) 
    : null;

  // Active district list based on state selection
  const availableDistricts = currentState ? currentState.districts : [];

  // All districts across all states for national view or search
  const allDistricts = GEOGRAPHY.states.flatMap(s => 
    s.districts.map(d => ({ ...d, stateName: s.name, stateId: s.id }))
  );

  // Filtered districts list based on state, district, and search query
  const displayedDistricts = (selectedStateId === 'all' ? allDistricts : availableDistricts).filter(d => {
    const matchesDistrict = selectedDistrictId === 'all' || d.id === selectedDistrictId;
    const matchesSearch = !searchQuery.trim() || 
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.topIndustry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (d.stateName && d.stateName.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDistrict && matchesSearch;
  });

  const [activeDistrictDetail, setActiveDistrictDetail] = useState(
    currentState ? currentState.districts[0] : allDistricts[0]
  );

  // Handle state change
  const handleStateChange = (stateId) => {
    setSelectedStateId(stateId);
    setSelectedDistrictId('all');
    if (stateId !== 'all') {
      const stateObj = GEOGRAPHY.states.find(s => s.id === stateId);
      if (stateObj && stateObj.districts.length > 0) {
        setActiveDistrictDetail(stateObj.districts[0]);
      }
    } else {
      setActiveDistrictDetail(allDistricts[0]);
    }
  };

  const getGapBadge = (gap) => {
    if (gap.includes('High')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200">
          <AlertTriangle className="w-3 h-3" /> {gap}
        </span>
      );
    }
    if (gap.includes('Moderate') || gap.includes('Medium')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
          <TrendingUp className="w-3 h-3" /> {gap}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
        <CheckCircle2 className="w-3 h-3" /> {gap}
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* 1. HEADER */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold">
            <Building className="w-3.5 h-3.5 text-purple-600" />
            <span>National Skill Mission & Regional Policy Telemetry</span>
          </div>
          <DataSourceBadge sourceId="msde_iti" />
        </div>

        <h1 className="text-3xl font-extrabold text-navy-800 tracking-tight">
          Regional Skill Intelligence & Policy Matrix
        </h1>
        <p className="text-sm text-slate-500 max-w-3xl leading-relaxed">
          State and district-level skill demand versus training infrastructure across India. 
          Identify talent supply bottlenecks, track ITI distributions, and optimize public-private skilling allocations.
        </p>
      </div>

      {/* 2. GEOGRAPHIC FILTER CONTROLS */}
      <div className="card-subtle p-5 bg-white border border-slate-200 rounded-2xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-navy-800">
              Geographic Scope & Filtering
            </span>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Coverage: <span className="text-primary-700 font-bold">All India (36 States & UTs)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* State Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Select State / Region
            </label>
            <select
              value={selectedStateId}
              onChange={(e) => handleStateChange(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 text-slate-700 font-medium"
            >
              <option value="all">All India (National Overview)</option>
              {GEOGRAPHY.states.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.districts.length} Monitored Districts)
                </option>
              ))}
            </select>
          </div>

          {/* District Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Select District / Cluster
            </label>
            <select
              value={selectedDistrictId}
              onChange={(e) => {
                setSelectedDistrictId(e.target.value);
                if (e.target.value !== 'all') {
                  const d = (currentState ? currentState.districts : allDistricts).find(item => item.id === e.target.value);
                  if (d) setActiveDistrictDetail(d);
                }
              }}
              disabled={selectedStateId === 'all'}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 text-slate-700 font-medium disabled:opacity-50"
            >
              <option value="all">
                {selectedStateId === 'all' ? 'Select a State first' : 'All Districts in ' + currentState?.name}
              </option>
              {availableDistricts.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.demandLevel} Demand)
                </option>
              ))}
            </select>
          </div>

          {/* District Search */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Quick Search Hub or Industry
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Pune, Bengaluru, IT, Automotive..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 text-slate-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. NATIONAL / STATE HIGH-LEVEL STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {selectedStateId === 'all' ? (
          <>
            <StatCard
              title="Operational ITIs (Census)"
              value="14,950+"
              change="Official MSDE/DGT"
              icon={GraduationCap}
              description="Registered Industrial Training Institutes across Indian states."
              sourceId="msde_iti"
            />
            <StatCard
              title="PMKVY Trained Candidates"
              value="1.42 Cr+"
              change="Pan-India Certified"
              icon={CheckCircle2}
              description="Short-term vocational certifications completed under PMKVY."
              sourceId="msde_pmkvy"
            />
            <StatCard
              title="National Career Vacancies"
              value="18.4L+"
              change="NCS Live Demand"
              icon={Briefcase}
              description="Active employer openings mobilized on National Career Service."
              sourceId="ncs_portal"
            />
            <StatCard
              title="Youth Vocational Ratio"
              value="5.8%"
              change="MoSPI Benchmark"
              icon={TrendingUp}
              description="Proportion of youth (15-29) holding formal vocational training."
              sourceId="plfs_mospi"
            />
          </>
        ) : (
          <>
            <StatCard
              title="State Capital & Lead Hub"
              value={currentState?.capital || 'Capital'}
              icon={MapPin}
              description={'Major economic and administrative hub for ' + currentState?.name}
              sourceId="msde_iti"
            />
            <StatCard
              title="Tracked Vacancy Demand"
              value={(currentState?.openVacancies || 12000).toLocaleString() + '+'}
              change="NCS & State Portal"
              icon={Briefcase}
              description={'Active openings aggregated across key districts of ' + currentState?.name}
              sourceId="ncs_portal"
            />
            <StatCard
              title="Registered Training Centers"
              value={(currentState?.trainingCenters || 250).toString()}
              change="ITI & VTP Network"
              icon={GraduationCap}
              description="Accredited vocational institutes, polytechnics, and skill centers."
              sourceId="msde_iti"
            />
            <StatCard
              title="Overall Talent Gap"
              value={currentState?.overallGap || 'Moderate'}
              change="SkillPulse Index"
              icon={Layers}
              description="State-level aggregate comparison between hiring requisitions and trainee outputs."
              sourceId="skillpulse_analysis"
            />
          </>
        )}
      </div>

      {/* 4. DISTRICT MATRIX & DETAILED AUDIT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* District Selector Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-navy-800">
              {selectedStateId === 'all' 
                ? 'Monitored Industrial Clusters Across India (' + displayedDistricts.length + ')' 
                : currentState?.name + ' District Intelligence (' + displayedDistricts.length + ')'}
            </h2>
            <span className="text-xs text-slate-400">Click a hub to view profile</span>
          </div>

          <div className="space-y-3">
            {displayedDistricts.map((d) => {
              const isSelected = activeDistrictDetail?.id === d.id;
              return (
                <div
                  key={d.id}
                  onClick={() => setActiveDistrictDetail(d)}
                  className={`card-subtle p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-purple-50/70 border-purple-300 ring-2 ring-purple-500/20'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-navy-800">{d.name}</span>
                        {d.stateName && (
                          <span className="text-[10px] font-semibold text-slate-500 px-2 py-0.5 bg-slate-100 rounded">
                            {d.stateName}
                          </span>
                        )}
                        <span className="text-[10px] font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 rounded">
                          {d.topIndustry}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-500">
                        <span>Jobs: <strong className="text-navy-800">{d.openJobs}</strong></span>
                        <span>•</span>
                        <span>Training Centers: <strong className="text-navy-800">{d.trainingCenters}</strong></span>
                      </div>
                    </div>

                    <div className="text-right">
                      {getGapBadge(d.gapScore)}
                      <span className="block text-[10px] text-slate-400 mt-1">
                        Demand: {d.demandLevel}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}

            {displayedDistricts.length === 0 && (
              <div className="p-8 text-center bg-white rounded-xl border border-slate-200">
                <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm font-semibold text-navy-800">No clusters match your criteria</p>
                <p className="text-xs text-slate-500 mt-1">Try resetting the state filter or search terms.</p>
              </div>
            )}
          </div>
        </div>

        {/* District Detail Card & Recommendations */}
        <div className="lg:col-span-5 space-y-6">
          {activeDistrictDetail && (
            <div className="card-subtle p-6 bg-white border border-slate-200 rounded-2xl space-y-6 sticky top-24">
              <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-navy-800">
                      {activeDistrictDetail.name}
                    </h3>
                    {activeDistrictDetail.stateName && (
                      <span className="text-xs text-purple-700 font-semibold px-2 py-0.5 bg-purple-50 rounded">
                        {activeDistrictDetail.stateName}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Lead Sector: {activeDistrictDetail.topIndustry}
                  </p>
                </div>
                {getGapBadge(activeDistrictDetail.gapScore)}
              </div>

              {/* Demand vs Training Bar */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-600">Active Industry Demand</span>
                    <span className="text-primary-700 font-bold">{activeDistrictDetail.openJobs} Open Roles</span>
                  </div>
                  <ProgressBar
                    progress={Math.min(100, Math.round((activeDistrictDetail.openJobs / 7000) * 100))}
                    colorClass="bg-primary-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-600">Vocational Training Capacity</span>
                    <span className="text-emerald-700 font-bold">{activeDistrictDetail.trainingCenters} Verified Centers</span>
                  </div>
                  <ProgressBar
                    progress={Math.min(100, Math.round((activeDistrictDetail.trainingCenters / 120) * 100))}
                    colorClass="bg-emerald-500"
                  />
                </div>
              </div>

              {/* Core Skill Deficits in this District */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Highest Deficit Competencies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeDistrictDetail.focusSkills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actionable Policy Recommendation */}
              <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-100 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-purple-900">
                  <Building className="w-4 h-4 text-purple-600" />
                  <span>Recommended Mission Action</span>
                </div>
                <p className="text-xs text-purple-800 leading-relaxed">
                  Establish industry-sponsored Centers of Excellence (CoE) for{' '}
                  <strong className="font-semibold">{activeDistrictDetail.focusSkills[0]}</strong> in collaboration with regional employer clusters. Expand PMKVY short-term batches to reduce the talent deficit.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span>Provenance: NCS & MSDE Census</span>
                <Link href="/data-sources" className="text-primary-600 hover:underline">
                  Methodology →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
