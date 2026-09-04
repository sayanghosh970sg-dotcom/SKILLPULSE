// PostgreSQL / Supabase Schema Definition for SkillPulse

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Users Table (Students, Trainers, Employers, Govt Officials)
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'student' CHECK (role IN ('student', 'institute', 'employer', 'government')),
    organization VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Industries Table
CREATE TABLE IF NOT EXISTS industries (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    annual_growth VARCHAR(50),
    active_vacancies INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Skills Table
CREATE TABLE IF NOT EXISTS skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE NOT NULL,
    category VARCHAR(100) NOT NULL,
    demand_score INT CHECK (demand_score BETWEEN 0 AND 100),
    growth_rate VARCHAR(50),
    is_emerging BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Job Roles Table
CREATE TABLE IF NOT EXISTS job_roles (
    id VARCHAR(100) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    salary_range VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Job Role Skills Mapping
CREATE TABLE IF NOT EXISTS job_role_skills (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    job_role_id VARCHAR(100) REFERENCES job_roles(id) ON DELETE CASCADE,
    skill_name VARCHAR(100) NOT NULL,
    priority VARCHAR(50) CHECK (priority IN ('High', 'Medium', 'Low')),
    weight INT DEFAULT 10
);

-- 6. User Skill Gap Assessments
CREATE TABLE IF NOT EXISTS skill_gap_assessments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    target_role VARCHAR(100) NOT NULL,
    current_skills JSONB NOT NULL,
    readiness_score INT NOT NULL,
    missing_skills JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Curriculums & Institutional Alignment
CREATE TABLE IF NOT EXISTS curriculums (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    institute_name VARCHAR(255) NOT NULL,
    course_name VARCHAR(255) NOT NULL,
    modules JSONB NOT NULL,
    alignment_score INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. Regional District Skill Demands (Maharashtra & National)
CREATE TABLE IF NOT EXISTS regional_skill_demands (
    id VARCHAR(100) PRIMARY KEY,
    district_name VARCHAR(255) NOT NULL,
    demand_level VARCHAR(50),
    top_industry VARCHAR(255),
    training_capacity VARCHAR(50),
    open_vacancies INT DEFAULT 0,
    gap_severity VARCHAR(50)
);
