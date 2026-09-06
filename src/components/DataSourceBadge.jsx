'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DATA_SOURCES, calculateFreshness, formatDate } from '../data/dataSources';
import { Database, ExternalLink, Info, X, ShieldCheck, Cpu, RefreshCw, Calendar, Globe } from 'lucide-react';

export default function DataSourceBadge({
  sourceId = 'msde_iti',
  customSource = null,
  showFreshness = true,
  className = '',
  size = 'sm'
}) {
  const [isOpen, setIsOpen] = useState(false);

  const source = customSource || DATA_SOURCES[sourceId] || DATA_SOURCES.msde_iti;
  const freshness = calculateFreshness(source.lastUpdated);

  const getDataTypeBadge = (type) => {
    switch (type) {
      case 'official':
        return {
          label: 'Official Government Data',
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          icon: ShieldCheck
        };
      case 'derived':
        return {
          label: 'Calculated by SkillPulse',
          bg: 'bg-blue-50 text-blue-800 border-blue-200',
          icon: Cpu
        };
      case 'demo':
      default:
        return {
          label: 'Demo / Sandbox Metric',
          bg: 'bg-amber-50 text-amber-800 border-amber-200',
          icon: Info
        };
    }
  };

  const typeConfig = getDataTypeBadge(source.dataType);
  const TypeIcon = typeConfig.icon;

  return (
    <>
      <div className={`inline-flex items-center gap-1.5 ${className}`}>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100/90 hover:bg-slate-200/80 text-slate-600 border border-slate-200/80 transition-all cursor-pointer group"
          title="Click to view official data provenance, freshness & methodology"
        >
          <Database className="w-3 h-3 text-slate-400 group-hover:text-primary-600 transition-colors" />
          <span className="truncate max-w-[140px] sm:max-w-none">
            {source.name.length > 28 ? source.name.substring(0, 26) + '...' : source.name}
          </span>
          <Info className="w-3 h-3 text-slate-400" />
        </button>

        {showFreshness && source.lastUpdated && (
          <span
            className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-semibold ${freshness.bg} ${freshness.color} border ${freshness.border}`}
            title={`Updated ${formatDate(source.lastUpdated)} (${freshness.daysAgo !== null ? freshness.daysAgo + ' days ago' : ''})`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${freshness.dotColor} animate-pulse`} />
            <span>{freshness.label}</span>
          </span>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/60 backdrop-blur-xs">
          <div
            className="card-subtle w-full max-w-lg bg-white rounded-2xl p-6 border border-slate-200 shadow-2xl relative animate-in fade-in duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-800">
                    Data Source & Provenance Details
                  </h3>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Transparent India-Wide Labor Telemetry
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 space-y-3.5 text-xs">
              <div className={`p-2.5 rounded-xl border flex items-center gap-2 font-semibold ${typeConfig.bg}`}>
                <TypeIcon className="w-4 h-4 shrink-0" />
                <span>Classification: {typeConfig.label}</span>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Authority / Source
                </span>
                <p className="font-bold text-navy-800 text-sm">{source.name}</p>
                {source.organization && (
                  <p className="text-slate-600 text-xs mt-0.5">{source.organization}</p>
                )}
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  Dataset / Survey Series
                </span>
                <p className="text-slate-800 font-medium">{source.dataset}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block">Last Updated</span>
                  <span className="font-semibold text-slate-800 font-mono">
                    {formatDate(source.lastUpdated)}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block">Freshness Status</span>
                  <span className={`inline-flex items-center gap-1 font-bold ${freshness.color}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${freshness.dotColor}`} />
                    {freshness.label} ({freshness.daysAgo !== null ? `${freshness.daysAgo} days ago` : 'N/A'})
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block">Update Cadence</span>
                  <span className="text-slate-700 font-medium">{source.frequency || 'Periodic'}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block">Geographic Coverage</span>
                  <span className="text-slate-700 font-medium">{source.coverage || 'India (National)'}</span>
                </div>
              </div>

              {source.methodology ? (
                <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-slate-700 text-[11px] leading-relaxed">
                  <strong className="text-blue-900 block mb-0.5">Methodology & Derivation:</strong>
                  {source.methodology}
                </div>
              ) : (
                source.description && (
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {source.description}
                  </p>
                )
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/data-sources"
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1"
              >
                <span>View Full Methodology Directory</span>
                <span className="font-mono">→</span>
              </Link>

              {source.url && source.url.startsWith('http') ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                >
                  <span>Official Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
