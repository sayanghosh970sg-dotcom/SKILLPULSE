'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DATA_SOURCES, calculateFreshness, formatDate } from '../../data/dataSources';
import {
  Database,
  ShieldCheck,
  Cpu,
  Info,
  ExternalLink,
  Calendar,
  RefreshCw,
  FileText,
  CheckCircle,
  AlertTriangle,
  Layers,
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';

export default function DataSourcesPage() {
  const [activeFilter, setActiveFilter] = useState('all'); // all, official, derived, demo
  const [searchQuery, setSearchQuery] = useState('');

  const sourcesList = Object.values(DATA_SOURCES);

  const filteredSources = sourcesList.filter(s => {
    const matchesType = activeFilter === 'all' || s.dataType === activeFilter;
    const matchesQuery = !searchQuery.trim() || 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.dataset.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesQuery;
  });

  const getBadgeForType = (type) => {
    switch (type) {
      case 'official':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" /> Official Government
          </span>
        );
      case 'derived':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Cpu className="w-3.5 h-3.5" /> SkillPulse Derived
          </span>
        );
      case 'demo':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            <Info className="w-3.5 h-3.5" /> Demo Sandbox
          </span>
        );
    }
  };

  const getFreshnessBadge = (dateStr) => {
    const freshness = calculateFreshness(dateStr);
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium ${freshness.bgClass} ${freshness.textClass}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${freshness.dotClass}`} />
        {freshness.label}
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* 1. HEADER */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold">
            <Database className="w-3.5 h-3.5" />
            <span>Transparency & Provenance Registry</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Data Sources & Intelligence Methodology
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            SkillPulse strictly distinguishes between official government datasets, 
            internally calculated diagnostic metrics, and illustrative sandbox models. 
            We never fabricate statistics or present mock figures as real-world benchmarks.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>GODL Compliant Datasets</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Transparent Algorithmic Scoring</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4 text-primary-400" />
              <span>Dynamic Freshness Tracking</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. METHODOLOGY & SCORING PILLARS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card-subtle p-6 bg-white border border-slate-200 rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-navy-800">1. Official External Data</h3>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Sourced directly from statutory government portals including MSDE (DGT), 
            Skill India Digital Hub (SIDH), National Career Service (NCS), and MoSPI (PLFS). 
            Governed by Government Open Data Licenses.
          </p>
        </div>

        <div className="card-subtle p-6 bg-white border border-slate-200 rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <Cpu className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-navy-800">2. SkillPulse Derived Metrics</h3>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Calculated diagnostic indicators including the Skill Readiness Score, Curriculum 
            Alignment Index, and Competency Gap Urgency. Clearly labeled with diagnostic caveats, 
            not official employability guarantees.
          </p>
        </div>

        <div className="card-subtle p-6 bg-white border border-slate-200 rounded-2xl">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
            <Info className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-navy-800">3. Demo Sandboxes</h3>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            Exploratory environments like the Curriculum What-If Simulator and Employer Requisition 
            Sandbox. Built for institutional experimentation and clearly designated as simulation environments.
          </p>
        </div>
      </div>

      {/* 3. SEARCH & FILTER CONTROLS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {[
            { id: 'all', label: 'All Sources' },
            { id: 'official', label: 'Official Gov' },
            { id: 'derived', label: 'SkillPulse Derived' },
            { id: 'demo', label: 'Demo Sandbox' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === tab.id
                  ? 'bg-navy-800 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search datasets or authorities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
          />
        </div>
      </div>

      {/* 4. SOURCES REGISTRY GRID */}
      <div className="space-y-4">
        {filteredSources.map((source) => (
          <div
            key={source.id}
            className="card-subtle p-6 bg-white border border-slate-200 rounded-2xl hover:border-primary-300 transition-all space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-navy-800">{source.name}</h3>
                  {getBadgeForType(source.dataType)}
                  {source.lastUpdated && getFreshnessBadge(source.lastUpdated)}
                </div>
                <p className="text-xs text-slate-500 font-medium">{source.organization}</p>
              </div>

              {source.url && source.url.startsWith('http') && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition-colors self-start sm:self-auto"
                >
                  <span>Verify Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 font-medium block text-[10px] uppercase">Dataset</span>
                <span className="font-semibold text-slate-800 mt-0.5 block">{source.dataset}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 font-medium block text-[10px] uppercase">Coverage</span>
                <span className="font-semibold text-slate-800 mt-0.5 block">{source.coverage}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 font-medium block text-[10px] uppercase">Update Cadence</span>
                <span className="font-semibold text-slate-800 mt-0.5 block">{source.frequency}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 font-medium block text-[10px] uppercase">Last Updated</span>
                <span className="font-semibold text-slate-800 mt-0.5 block">
                  {formatDate(source.lastUpdated)}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {source.description}
            </p>

            {source.methodology && (
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <Cpu className="w-3.5 h-3.5 text-blue-600" />
                  <span>Calculation Methodology</span>
                </div>
                <p className="leading-relaxed">{source.methodology}</p>
              </div>
            )}
          </div>
        ))}

        {filteredSources.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-navy-800">No matching data sources found</p>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search query or filter.</p>
          </div>
        )}
      </div>

      {/* 5. CAVEATS & USAGE GUIDELINES */}
      <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 space-y-2">
        <div className="flex items-center gap-2 font-bold text-sm">
          <AlertTriangle className="w-4 h-4 text-amber-700" />
          <span>Diagnostic Caveats & Educational Intent</span>
        </div>
        <p className="text-xs leading-relaxed text-amber-800">
          The alignment scores, gap assessments, and milestone roadmaps generated on SkillPulse 
          serve strictly as educational diagnostics and developmental roadmaps. They do not constitute 
          formal certifications, employment guarantees, or statutory endorsements from any government ministry. 
          Candidates and institutions should consult authorized Sector Skill Councils (SSCs) and the 
          National Council for Vocational Education and Training (NCVET) for statutory qualification packages.
        </p>
      </div>
    </div>
  );
}
