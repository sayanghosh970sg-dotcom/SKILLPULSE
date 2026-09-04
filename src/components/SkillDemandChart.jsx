'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

export default function SkillDemandChart({ data }) {
  const colors = ['#2563EB', '#3B82F6', '#60A5FA', '#06B6D4', '#0891B2', '#14B8A6'];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-navy-900 text-white p-2.5 rounded-lg text-xs shadow-lg border border-slate-700">
          <p className="font-bold">{label}</p>
          <p className="text-cyan-400 mt-0.5">Demand Index: {payload[0].value}/100</p>
          {payload[0].payload.growth && (
            <p className="text-emerald-400">Growth: {payload[0].payload.growth}</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 20, left: 40, bottom: 5 }}
        >
          <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748b' }} />
          <YAxis
            type="category"
            dataKey="skill"
            tick={{ fontSize: 11, fill: '#1e293b', fontWeight: 500 }}
            width={90}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="demand" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
