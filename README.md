# SkillPulse ⚡

> **"Where Industry Demand Meets Skill Development"**

SkillPulse is a modern, professional web platform and Industry-to-Skill Intelligence engine that bridges the gap between dynamic labor market requirements and skill development/training programs.

Built with **Next.js**, **React**, **JavaScript ONLY** (no TypeScript), **Tailwind CSS**, **Recharts**, and an integrated **Express/Next.js API** backend.

---

## 🌟 Core Feature Pipeline

The platform demonstrates this continuous pipeline:
```
INDUSTRY DEMAND
      ↓
REQUIRED SKILLS
      ↓
CURRENT SKILLS / CURRICULUM
      ↓
SKILL GAP IDENTIFICATION
      ↓
ALIGNMENT / READINESS SCORE
      ↓
RECOMMENDED TRAINING ROADMAP
      ↓
JOB READINESS & EMPLOYER MATCHING
```

---

## 🚀 Key Pages & Modules

1. **Home (`/`)**: High-impact SaaS landing page featuring live stats (12,500+ jobs, 850+ skills, 120+ curricula, 78% alignment) and the interactive 4-stage pipeline visualization.
2. **Skill Intelligence (`/skill-intelligence`)**: Filterable market intelligence by industry, location, and timeframe. Includes Recharts bar and area charts for demand trajectories and emerging skills (+48% GenAI, +38% Cloud).
3. **Skill Gap Analyzer (`/skill-gap-analyzer`)**: Interactive diagnostic tool allowing users to select target roles, input current competencies, and get immediate Job Readiness Scores with priority-ranked gaps and milestone learning paths.
4. **Career Roadmap (`/career-roadmap`)**: Milestone-driven curriculum tracker with time estimates, difficulty tags, and checklist tracking.
5. **Training & Curriculum Alignment (`/training-curriculum`)**: Institutional auditing interface featuring an **Interactive Curriculum Simulator** that demonstrates how adding modules increases placement alignment (75% → 82% → 89%).
6. **Government & Regional Dashboard (`/government`)**: District-level analytics for Maharashtra (Mumbai, Pune, Nagpur, Nashik, Chhatrapati Sambhajinagar, Thane, Kolhapur) comparing industry demand against training capacity.
7. **Employer Portal (`/employer`)**: Requisition builder for companies to define required skills and experience levels.
8. **Student Dashboard (`/dashboard`)**: Logged-in view with progress rings, skill-readiness gauges, and saved analysis trackers.

---

## 🛠️ Tech Stack & Constraints

- **Framework**: Next.js 14 (App Router)
- **Language**: Pure JavaScript (`.js` and `.jsx` only, zero TypeScript)
- **Styling**: Tailwind CSS with custom Deep Navy, Primary Blue, and Cyan palette
- **Data Visualization**: Recharts (horizontal bar charts, area charts, custom radial gauges)
- **Icons**: Lucide React
- **Backend APIs**:
  - `GET /api/skills`
  - `GET /api/industries`
  - `GET /api/jobs`
  - `GET /api/skill-demand`
  - `POST /api/skill-gap`
  - `POST /api/curriculum-analysis`
  - `GET /api/roadmap`
- **Database Architecture**: PostgreSQL / Supabase ready (`src/data/schema.sql`)
- **Standalone Server**: `server.js` (Express.js)

---

## 🏃‍♂️ Running the Platform Locally

### Development Mode:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Serve:
```bash
npm run build
npm run start
```

### Standalone Express Backend:
```bash
npm run server
```
Server runs on [http://localhost:5000](http://localhost:5000).
