'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import CompanySelector from '../../components/practice/CompanySelector';
import RoleSelector from '../../components/practice/RoleSelector';
import DifficultySelector from '../../components/practice/DifficultySelector';
import PracticeCard from '../../components/practice/PracticeCard';
import QuestionCard from '../../components/practice/QuestionCard';
import PracticeStats from '../../components/practice/PracticeStats';
import SkillPerformance from '../../components/practice/SkillPerformance';
import PracticeProgress from '../../components/practice/PracticeProgress';
import DataSourceBadge from '../../components/DataSourceBadge';
import {
  PRACTICE_COMPANIES,
  PRACTICE_ROLES,
  PRACTICE_QUESTIONS,
  INITIAL_USER_PRACTICE_STATS
} from '../../data/practiceData';
import {
  Code2,
  Filter,
  Search,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Flame,
  LayoutGrid,
  Maximize2
} from 'lucide-react';

export default function PracticePage() {
  // Filter States
  const [selectedCompany, setSelectedCompany] = useState('all');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Practice State
  const [activeQuestionId, setActiveQuestionId] = useState('q1');
  const [completedQuestionIds, setCompletedQuestionIds] = useState(['q4', 'q7']);
  const [userStats, setUserStats] = useState(INITIAL_USER_PRACTICE_STATS);
  const [activeTab, setActiveTab] = useState('solver'); // 'solver' or 'catalog'

  // Filtered Questions list
  const filteredQuestions = useMemo(() => {
    return PRACTICE_QUESTIONS.filter((q) => {
      const matchesCompany =
        selectedCompany === 'all' || q.companies.includes(selectedCompany);
      const matchesRole =
        selectedRole === 'all' || q.roles.includes(selectedRole);
      const matchesDifficulty =
        selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
      const matchesSearch =
        !searchQuery.trim() ||
        q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.relatedSkill.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.conceptsTested.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCompany && matchesRole && matchesDifficulty && matchesSearch;
    });
  }, [selectedCompany, selectedRole, selectedDifficulty, searchQuery]);

  // Currently active question object
  const activeQuestion = useMemo(() => {
    return (
      PRACTICE_QUESTIONS.find((q) => q.id === activeQuestionId) ||
      filteredQuestions[0] ||
      PRACTICE_QUESTIONS[0]
    );
  }, [activeQuestionId, filteredQuestions]);

  // Handle problem selection
  const handleSelectQuestion = (q) => {
    setActiveQuestionId(q.id);
    setActiveTab('solver');
  };

  // Handle solving a problem
  const handleSolveSuccess = (qid) => {
    if (!completedQuestionIds.includes(qid)) {
      const updated = [...completedQuestionIds, qid];
      setCompletedQuestionIds(updated);
      setUserStats((prev) => ({
        ...prev,
        questionsCompleted: prev.questionsCompleted + 1,
        accuracyRate: Math.min(95, prev.accuracyRate + 1)
      }));
    }
  };

  // Handle next question
  const handleNextQuestion = () => {
    const currentIndex = filteredQuestions.findIndex((q) => q.id === activeQuestion.id);
    if (currentIndex >= 0 && currentIndex < filteredQuestions.length - 1) {
      setActiveQuestionId(filteredQuestions[currentIndex + 1].id);
    } else if (filteredQuestions.length > 0) {
      setActiveQuestionId(filteredQuestions[0].id);
    }
  };

  // Handle skill gap direct practice shortcut
  const handleFocusSkill = (category) => {
    if (category === 'SQL') {
      setSelectedRole('data-analyst');
      setActiveQuestionId('q2');
    } else {
      setSelectedRole('software-engineer');
      setActiveQuestionId('q1');
    }
    setActiveTab('solver');
  };

  // Handle select recommended practice
  const handleSelectRecommended = (qid) => {
    setActiveQuestionId(qid);
    setActiveTab('solver');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* 1. PAGE HEADER & CAVEAT */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold">
            <Code2 className="w-3.5 h-3.5 text-primary-600" />
            <span>Company/Role-Aligned Practice</span>
          </div>
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
            Educational Diagnostic Sandbox
          </span>
        </div>

        <h1 className="text-3xl font-extrabold text-navy-800 tracking-tight">
          Company & Role Problem Solving Practice
        </h1>

        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Practice coding, algorithmic logic, and SQL challenges aligned with specific employer hiring profiles. 
          Bridging your detected skill gaps through structured, role-specific technical problem solving.
        </p>

        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Transparency Notice:</strong> Based on publicly available role requirements and common industry interview patterns. 
            SkillPulse does NOT use or claim proprietary internal interview questions.
          </p>
        </div>
      </div>

      {/* 2. PRACTICE STATS OVERVIEW */}
      <PracticeStats stats={userStats} />

      {/* 3. MULTI-TIER PRACTICE SELECTOR MATRIX */}
      <div className="card-subtle p-6 bg-white border border-slate-200 rounded-2xl space-y-6 shadow-sm">
        {/* Step 1: Select Company */}
        <CompanySelector
          selectedCompany={selectedCompany}
          onSelectCompany={setSelectedCompany}
        />

        {/* Step 2: Select Role */}
        <RoleSelector
          selectedRole={selectedRole}
          onSelectRole={setSelectedRole}
        />

        {/* Step 3: Select Difficulty */}
        <DifficultySelector
          selectedDifficulty={selectedDifficulty}
          onSelectDifficulty={setSelectedDifficulty}
        />
      </div>

      {/* 4. PROGRESS & RECOMMENDED PRACTICE BANNER */}
      <PracticeProgress
        totalAvailable={PRACTICE_QUESTIONS.length}
        completedCount={completedQuestionIds.length}
        recommendedPractice={userStats.recommendedPractice}
        onSelectRecommended={handleSelectRecommended}
      />

      {/* 5. INTERACTIVE WORKSPACE: CATALOG VS SOLVER */}
      <div className="space-y-6">
        {/* Navigation & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('solver')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'solver'
                  ? 'bg-navy-800 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Interactive Workspace</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('catalog')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'catalog'
                  ? 'bg-navy-800 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Problem Catalog ({filteredQuestions.length})</span>
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search problem title or concept..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            />
          </div>
        </div>

        {/* Tab 1: Interactive Workspace */}
        {activeTab === 'solver' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Problem List Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-navy-800">
                  Matching Questions ({filteredQuestions.length})
                </span>
                <span className="text-[11px] text-slate-400">Click to load</span>
              </div>

              <div className="space-y-3 max-h-[780px] overflow-y-auto pr-1">
                {filteredQuestions.map((q) => (
                  <PracticeCard
                    key={q.id}
                    question={q}
                    isSelected={activeQuestion?.id === q.id}
                    isCompleted={completedQuestionIds.includes(q.id)}
                    onSelect={handleSelectQuestion}
                  />
                ))}

                {filteredQuestions.length === 0 && (
                  <div className="p-8 text-center bg-white rounded-2xl border border-slate-200">
                    <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                    <h4 className="text-xs font-bold text-navy-800">No problems match filter</h4>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Try resetting company, role, or difficulty filters.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCompany('all');
                        setSelectedRole('all');
                        setSelectedDifficulty('all');
                        setSearchQuery('');
                      }}
                      className="mt-3 text-xs font-semibold text-primary-600 hover:underline"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Active Problem Workspace (8 cols) */}
            <div className="lg:col-span-8">
              <QuestionCard
                question={activeQuestion}
                onSolveSuccess={handleSolveSuccess}
                onNextQuestion={handleNextQuestion}
              />
            </div>
          </div>
        )}

        {/* Tab 2: Full Problem Catalog Grid */}
        {activeTab === 'catalog' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-navy-800">
                All Filtered Practice Challenges ({filteredQuestions.length})
              </h3>
              <span className="text-xs text-slate-500">
                {completedQuestionIds.length} Solved so far
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredQuestions.map((q) => (
                <PracticeCard
                  key={q.id}
                  question={q}
                  isSelected={activeQuestion?.id === q.id}
                  isCompleted={completedQuestionIds.includes(q.id)}
                  onSelect={handleSelectQuestion}
                />
              ))}
            </div>

            {filteredQuestions.length === 0 && (
              <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
                <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <h4 className="text-sm font-bold text-navy-800">No questions found</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Try adjusting your company, role, or difficulty options.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 6. SKILL PERFORMANCE & WEAK SKILL INTEGRATION */}
      <SkillPerformance
        skillsPracticed={userStats.skillsPracticed}
        weakSkillAreas={userStats.weakSkillAreas}
        onFocusSkill={handleFocusSkill}
      />
    </div>
  );
}
