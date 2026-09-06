'use client';

import React from 'react';
import StatCard from '../StatCard';
import { CheckCircle2, Target, Flame, Layers } from 'lucide-react';

export default function PracticeStats({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Questions Completed"
        value={(stats.questionsCompleted || 14).toString()}
        change="+3 this week"
        icon={CheckCircle2}
        description="Verified problem submissions meeting complexity benchmarks."
        sourceLabel="SkillPulse Practice Tracker"
      />
      <StatCard
        title="Evaluation Accuracy"
        value={(stats.accuracyRate || 78) + '%'}
        change="First Attempt"
        icon={Target}
        description="Proportion of test case suites passed on initial runs."
        sourceLabel="Algorithmic Metrics"
      />
      <StatCard
        title="Current Practice Streak"
        value={(stats.currentStreakDays || 5) + ' Days'}
        change="Active Streak"
        icon={Flame}
        description="Consecutive daily problem-solving activity on the platform."
        sourceLabel="Daily Consistency"
      />
      <StatCard
        title="Competency Categories"
        value={(stats.skillsPracticed?.length || 4).toString()}
        change="DSA, SQL, JS, ML"
        icon={Layers}
        description="Distinct skill domains covered in active practice sessions."
        sourceLabel="SkillPulse Taxonomy"
      />
    </div>
  );
}
