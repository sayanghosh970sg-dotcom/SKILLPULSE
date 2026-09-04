'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

export default function IndustryChart({ data }) {
  const chartData = [
    { month: 'Q1', IT: 72, Finance: 60, Healthcare: 54, Manufacturing: 48 },
    { month: 'Q2', IT: 78, Finance: 63, Healthcare: 58, Manufacturing: 51 },
    { month: 'Q3', IT: 84, Finance: 69, Healthcare: 62, Manufacturing: 55 },
    { month: 'Q4', IT: 92, Finance: 76, Healthcare: 68, Manufacturing: 59 },
  ];

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="colorIT" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#2563EB" stopOpacity={0.0}/>
            </linearGradient>
            <linearGradient id="colorFin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} />
          <YAxis tick={{ fontSize: 11, fill: '#64748b' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
          />
          <Area type="monotone" dataKey="IT" stroke="#2563EB" strokeWidth={2} fillOpacity={1} fill="url(#colorIT)" />
          <Area type="monotone" dataKey="Finance" stroke="#06B6D4" strokeWidth={2} fillOpacity={1} fill="url(#colorFin)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
