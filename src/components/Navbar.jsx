'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Skill Intelligence', href: '/skill-intelligence' },
    { name: 'Skill Gap Analyzer', href: '/skill-gap-analyzer' },
    { name: 'Practice', href: '/practice' },
    { name: 'Courses', href: '/courses' },
    { name: 'Experts', href: '/experts' },
    { name: 'Career Roadmap', href: '/career-roadmap' },
    { name: 'Training & Curriculum', href: '/training-curriculum' },
    { name: 'Government', href: '/government' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform">
              <Activity className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-navy-800">
                Skill<span className="text-primary-600">Pulse</span>
              </span>
              <span className="hidden sm:block text-[10px] text-slate-500 -mt-1 font-medium tracking-wide">
                Industry-to-Skill Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                    isActive
                      ? 'text-primary-600 bg-primary-50 font-bold'
                      : 'text-slate-600 hover:text-navy-800 hover:bg-slate-100'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/dashboard"
              className="text-xs font-semibold text-slate-700 hover:text-primary-600 px-3 py-2 rounded-lg transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/skill-gap-analyzer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 shadow-sm shadow-primary-600/30 transition-all hover:gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-xl">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-primary-50 text-primary-600 font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Sign In
            </Link>
            <Link
              href="/skill-gap-analyzer"
              onClick={() => setMobileOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-sm"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
