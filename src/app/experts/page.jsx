'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import ExpertCard from '../../components/experts/ExpertCard';
import ExpertFilters from '../../components/experts/ExpertFilters';
import ExpertProfile from '../../components/experts/ExpertProfile';
import ConsultationCard from '../../components/experts/ConsultationCard';
import RecommendedExperts from '../../components/experts/RecommendedExperts';
import DataSourceBadge from '../../components/DataSourceBadge';
import {
  EXPERTS_DATA,
  CONSULTATION_FORMATS
} from '../../data/expertsData';
import {
  Users,
  Sparkles,
  ShieldCheck,
  Search,
  CheckCircle2,
  UserPlus,
  Send,
  X,
  AlertTriangle,
  ArrowRight,
  Briefcase
} from 'lucide-react';

export default function ExpertsPage() {
  const [selectedDomain, setSelectedDomain] = useState('All Domains');
  const [selectedConsultation, setSelectedConsultation] = useState('All Consultations');
  const [selectedExperience, setSelectedExperience] = useState('All Experience');
  const [searchQuery, setSearchQuery] = useState('');

  // Active profile modal
  const [activeExpert, setActiveExpert] = useState(null);

  // Become an Expert modal state
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyForm, setApplyForm] = useState({
    name: '',
    email: '',
    currentRole: '',
    company: '',
    domain: 'Software Engineering',
    years: '5+',
    linkedinUrl: '',
    note: ''
  });
  const [applySubmitted, setApplySubmitted] = useState(false);

  // Filtered experts
  const filteredExperts = useMemo(() => {
    return EXPERTS_DATA.filter((exp) => {
      const matchesDomain =
        selectedDomain === 'All Domains' || exp.primaryDomain === selectedDomain;
      const matchesConsultation =
        selectedConsultation === 'All Consultations' ||
        exp.consultationTypes.includes(selectedConsultation);
      const matchesExperience =
        selectedExperience === 'All Experience' ||
        exp.experienceTier === selectedExperience;
      const matchesSearch =
        !searchQuery.trim() ||
        exp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.companyContext.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.expertise.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesDomain && matchesConsultation && matchesExperience && matchesSearch;
    });
  }, [selectedDomain, selectedConsultation, selectedExperience, searchQuery]);

  const handleResetFilters = () => {
    setSelectedDomain('All Domains');
    setSelectedConsultation('All Consultations');
    setSelectedExperience('All Experience');
    setSearchQuery('');
  };

  const handleSelectFormatFilter = (formatTitle) => {
    setSelectedConsultation(formatTitle);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplySubmitted(true);
    setTimeout(() => {
      setApplySubmitted(false);
      setShowApplyModal(false);
      setApplyForm({
        name: '',
        email: '',
        currentRole: '',
        company: '',
        domain: 'Software Engineering',
        years: '5+',
        linkedinUrl: '',
        note: ''
      });
    }, 3500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* 1. HEADER */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold">
              <Users className="w-3.5 h-3.5 text-primary-600" />
              <span>Industry Mentorship & Insights</span>
            </div>
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
              Illustrative Mentor Directory
            </span>
          </div>

          {/* Become an Expert CTA button */}
          <button
            type="button"
            onClick={() => setShowApplyModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-800 hover:bg-primary-600 text-white text-xs font-bold transition-all shadow-sm"
          >
            <UserPlus className="w-4 h-4" />
            <span>Become an Expert</span>
          </button>
        </div>

        <h1 className="text-3xl font-extrabold text-navy-800 tracking-tight">
          Industry Experts & Practical Career Guidance
        </h1>

        <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
          Connect with experienced technical leads, data specialists, and engineering managers 
          for personalized skill guidance, portfolio reviews, and realistic interview simulations.
        </p>

        {/* Data Trust & Compliance Disclaimer */}
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-navy-800">Mentorship Directory Simulation Notice: </strong>
            Profiles listed in this MVP directory represent illustrative mentor templates created to showcase 
            1-on-1 guidance workflows. SkillPulse does not claim official commercial representation, contractual 
            endorsements, or exclusive corporate partnerships.
          </div>
        </div>
      </div>

      {/* 2. CONSULTATION FORMATS CAROUSEL / ROW */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-navy-800">
            Available Consultation Formats
          </h2>
          <span className="text-xs text-slate-400 font-medium">Click format to filter</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {CONSULTATION_FORMATS.map((fmt) => (
            <ConsultationCard
              key={fmt.id}
              format={fmt}
              isSelected={selectedConsultation === fmt.title}
              onSelectFormat={handleSelectFormatFilter}
            />
          ))}
        </div>
      </div>

      {/* 3. RECOMMENDED EXPERTS (MAPPED TO SKILL GAP ROLES) */}
      <RecommendedExperts onSelectExpert={(exp) => setActiveExpert(exp)} />

      {/* 4. FILTERS MATRIX */}
      <ExpertFilters
        selectedDomain={selectedDomain}
        onSelectDomain={setSelectedDomain}
        selectedConsultation={selectedConsultation}
        onSelectConsultation={setSelectedConsultation}
        selectedExperience={selectedExperience}
        onSelectExperience={setSelectedExperience}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onResetFilters={handleResetFilters}
      />

      {/* 5. EXPERTS DIRECTORY GRID */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-navy-800">
            Available Industry Mentors ({filteredExperts.length})
          </h2>
          <span className="text-xs text-slate-400">
            Showing verified profiles
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperts.map((expert) => (
            <ExpertCard
              key={expert.id}
              expert={expert}
              onOpenProfile={(exp) => setActiveExpert(exp)}
            />
          ))}
        </div>

        {filteredExperts.length === 0 && (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-2">
            <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto" />
            <h4 className="text-sm font-bold text-navy-800">No mentors match your filter</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your domain selection, consultation type, or clearing the search query.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-2 text-xs font-semibold text-primary-600 hover:underline inline-block"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* 6. BECOME AN EXPERT CALLOUT BANNER */}
      <div className="card-subtle p-8 rounded-3xl bg-gradient-to-r from-navy-900 to-navy-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold">
            <UserPlus className="w-3.5 h-3.5" />
            <span>Contribute as an Industry Mentor</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">
            Are You an Experienced Industry Professional?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Help train the next generation of engineers, analysts, and designers. Share your real-world insights, 
            evaluate candidate portfolios, and help bridge the industry-to-skill gap.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowApplyModal(true)}
          className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold text-xs transition-all shadow-md shrink-0 flex items-center gap-2"
        >
          <UserPlus className="w-4 h-4" />
          <span>Apply to Mentor</span>
        </button>
      </div>

      {/* 7. EXPERT PROFILE MODAL */}
      {activeExpert && (
        <ExpertProfile
          expert={activeExpert}
          onClose={() => setActiveExpert(null)}
        />
      )}

      {/* 8. BECOME AN EXPERT APPLICATION MODAL */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-xs animate-in fade-in overflow-y-auto">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
            <div className="bg-navy-900 text-white p-6 relative">
              <button
                type="button"
                onClick={() => setShowApplyModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-2">
                <UserPlus className="w-3.5 h-3.5" />
                <span>Mentor Application</span>
              </div>
              <h3 className="text-xl font-bold">Join the SkillPulse Expert Network</h3>
              <p className="text-xs text-slate-300 mt-1">
                Contribute your practical expertise to guide learners closing vocational skill gaps.
              </p>
            </div>

            <form onSubmit={handleApplySubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sayan Banerjee"
                    value={applyForm.name}
                    onChange={(e) => setApplyForm({ ...applyForm, name: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sayan@example.com"
                    value={applyForm.email}
                    onChange={(e) => setApplyForm({ ...applyForm, email: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Job Role
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lead Software Engineer"
                    value={applyForm.currentRole}
                    onChange={(e) => setApplyForm({ ...applyForm, currentRole: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tech Corp / Freelance"
                    value={applyForm.company}
                    onChange={(e) => setApplyForm({ ...applyForm, company: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Domain
                  </label>
                  <select
                    value={applyForm.domain}
                    onChange={(e) => setApplyForm({ ...applyForm, domain: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="AI / ML">AI / ML</option>
                    <option value="Cloud Engineering">Cloud Engineering</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Product Management">Product Management</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Years of Experience
                  </label>
                  <select
                    value={applyForm.years}
                    onChange={(e) => setApplyForm({ ...applyForm, years: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="6-10 Years">6-10 Years</option>
                    <option value="10+ Years">10+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={applyForm.linkedinUrl}
                  onChange={(e) => setApplyForm({ ...applyForm, linkedinUrl: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Zero commercial commitment • Educational network
                </span>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white text-xs font-bold transition-all shadow-md shadow-primary-600/20 flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Profile</span>
                </button>
              </div>

              {applySubmitted && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-semibold flex items-center gap-2 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Thank you for applying! Your mentor submission has been recorded in the SkillPulse demo network.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
