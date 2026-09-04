import React from 'react';
import Link from 'next/link';
import { Activity, ShieldCheck, Mail, Globe, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white">
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Skill<span className="text-cyan-400">Pulse</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Where Industry Demand Meets Skill Development. Bridging the gap between dynamic market needs and job-ready education.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Government & Industry Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/skill-intelligence" className="hover:text-cyan-400 transition-colors">Skill Intelligence</Link></li>
              <li><Link href="/skill-gap-analyzer" className="hover:text-cyan-400 transition-colors">Skill Gap Analyzer</Link></li>
              <li><Link href="/career-roadmap" className="hover:text-cyan-400 transition-colors">Career Roadmaps</Link></li>
              <li><Link href="/training-curriculum" className="hover:text-cyan-400 transition-colors">Curriculum Simulator</Link></li>
              <li><Link href="/government" className="hover:text-cyan-400 transition-colors">Regional Insights (Maharashtra)</Link></li>
            </ul>
          </div>

          {/* Stakeholders */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Solutions For
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/skill-gap-analyzer" className="hover:text-cyan-400 transition-colors">Students & Aspirants</Link></li>
              <li><Link href="/training-curriculum" className="hover:text-cyan-400 transition-colors">Training Institutes & Universities</Link></li>
              <li><Link href="/employer" className="hover:text-cyan-400 transition-colors">Corporate Employers & Recruiters</Link></li>
              <li><Link href="/government" className="hover:text-cyan-400 transition-colors">Skill Development Ministries</Link></li>
            </ul>
          </div>

          {/* Mission & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Initiative
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Empowering vocational bodies, NSDC, and state skill missions with real-time labor telemetry.
            </p>
            <div className="space-y-1 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary-400" />
                <span>Mumbai / Pune Innovation Corridor</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>India-Wide Skills Mapping</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} SkillPulse Platform. All rights reserved.</p>
          <p className="flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Open Skill Data</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
