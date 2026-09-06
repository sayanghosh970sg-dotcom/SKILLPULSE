'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import CourseFilters from '../../components/courses/CourseFilters';
import CourseList from '../../components/courses/CourseList';
import RecommendedCourses from '../../components/courses/RecommendedCourses';
import PremiumCourseBanner from '../../components/courses/PremiumCourseBanner';
import DataSourceBadge from '../../components/DataSourceBadge';
import { COURSES_DATA } from '../../data/coursesData';
import {
  GraduationCap,
  Sparkles,
  Search,
  BookOpen,
  ShieldCheck,
  Filter,
  CheckCircle2,
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedPrice, setSelectedPrice] = useState('All Types');
  const [selectedProvider, setSelectedProvider] = useState('All Providers');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((c) => {
      const matchesCategory =
        selectedCategory === 'All Categories' || c.category === selectedCategory;
      const matchesLevel =
        selectedLevel === 'All Levels' || c.level === selectedLevel;
      const matchesPrice =
        selectedPrice === 'All Types' ||
        (selectedPrice === 'Free' && c.isFree) ||
        (selectedPrice === 'Paid' && !c.isFree);
      const matchesProvider =
        selectedProvider === 'All Providers' ||
        c.provider.toLowerCase().includes(selectedProvider.toLowerCase());
      const matchesDuration =
        selectedDuration === 'all' || c.durationType === selectedDuration;
      const matchesSearch =
        !searchQuery.trim() ||
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return (
        matchesCategory &&
        matchesLevel &&
        matchesPrice &&
        matchesProvider &&
        matchesDuration &&
        matchesSearch
      );
    });
  }, [
    selectedCategory,
    selectedLevel,
    selectedPrice,
    selectedProvider,
    selectedDuration,
    searchQuery
  ]);

  const handleResetFilters = () => {
    setSelectedCategory('All Categories');
    setSelectedLevel('All Levels');
    setSelectedPrice('All Types');
    setSelectedProvider('All Providers');
    setSelectedDuration('all');
    setSearchQuery('');
  };

  const handleSelectSkillFromRecommendation = (skill) => {
    setSearchQuery(skill);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* 1. PAGE HEADER */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-600" />
            <span>Curated Learning Directory</span>
          </div>
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
            Skill-Gap Aligned Resources
          </span>
        </div>

        <h1 className="text-3xl font-extrabold text-navy-800 tracking-tight">
          Learning Resources & Course Directory
        </h1>

        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Discover external university, open-source, and industry courses mapped to bridge the specific 
          skill deficits diagnosed in your SkillPulse profile.
        </p>

        {/* Data Trust Notice */}
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-navy-800">External Educational Index Notice: </strong>
            All listed offerings are external learning resources curated from open academic repositories, 
            government initiatives (e.g. NPTEL/SWAYAM), and reputable platforms. SkillPulse does not claim 
            commercial partnerships or proprietary ownership of third-party course materials.
          </div>
        </div>
      </div>

      {/* 2. RECOMMENDED FOR YOU (CONNECTED TO SKILL GAP ANALYZER) */}
      <RecommendedCourses onSelectSkill={handleSelectSkillFromRecommendation} />

      {/* 3. INTERACTIVE FILTERS */}
      <CourseFilters
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedLevel={selectedLevel}
        onSelectLevel={setSelectedLevel}
        selectedPrice={selectedPrice}
        onSelectPrice={setSelectedPrice}
        selectedProvider={selectedProvider}
        onSelectProvider={setSelectedProvider}
        selectedDuration={selectedDuration}
        onSelectDuration={setSelectedDuration}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onResetFilters={handleResetFilters}
      />

      {/* 4. COURSE CATALOG LIST */}
      <CourseList
        courses={filteredCourses}
        totalCount={COURSES_DATA.length}
      />

      {/* 5. FUTURE MONETIZATION & PREMIUM BANNER */}
      <PremiumCourseBanner />
    </div>
  );
}
