'use client';

import React from 'react';
import CourseCard from './CourseCard';
import { BookOpen, AlertTriangle } from 'lucide-react';

export default function CourseList({ courses, totalCount }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-navy-800 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-primary-600" />
          <span>Curated Learning Resources ({courses.length})</span>
        </h2>
        <span className="text-xs text-slate-400">
          Showing {courses.length} of {totalCount} indexed offerings
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {courses.length === 0 && (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-2">
          <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto" />
          <h4 className="text-sm font-bold text-navy-800">No matching learning resources found</h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search criteria, clearing the domain category filter, or exploring all providers.
          </p>
        </div>
      )}
    </div>
  );
}
