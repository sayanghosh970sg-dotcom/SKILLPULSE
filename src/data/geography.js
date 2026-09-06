// India-wide Geographic Hierarchy (Country -> State -> District)
export const GEOGRAPHY = {
  country: {
    id: 'india',
    name: 'India',
    code: 'IN',
    totalStates: 36,
    nationalStats: {
      itisCount: '14,950+',
      sourceIti: 'Ministry of Skill Development & Entrepreneurship (MSDE)',
      pmkvyTrained: '1.42 Cr+',
      sourcePmkvy: 'Skill India Digital Hub (SIDH) / MSDE',
      ncsVacancies: '18.4 Lakh+',
      sourceNcs: 'National Career Service (NCS)',
      vocationalParticipation: '5.8%',
      sourcePlfs: 'Periodic Labour Force Survey (MoSPI)'
    }
  },
  states: [
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      capital: 'Mumbai',
      openVacancies: 18450,
      trainingCenters: 486,
      topIndustries: ['BFSI & Fintech', 'IT & Software', 'Automotive & EV', 'Pharmaceuticals'],
      overallGap: 'Moderate',
      districts: [
        {
          id: 'pune',
          name: 'Pune',
          demandLevel: 'Very High',
          topIndustry: 'IT & Automotive',
          cloudDemand: 'High',
          availableTraining: 'Medium',
          gapScore: 'High Gap',
          openJobs: 5400,
          trainingCenters: 78,
          focusSkills: ['Cloud Computing', 'Embedded Systems', 'Fullstack JS', 'Data Analytics']
        },
        {
          id: 'mumbai',
          name: 'Mumbai',
          demandLevel: 'Critical',
          topIndustry: 'BFSI & Fintech',
          cloudDemand: 'High',
          availableTraining: 'High',
          gapScore: 'Low Gap',
          openJobs: 6800,
          trainingCenters: 114,
          focusSkills: ['Financial Modeling', 'Data Analytics', 'Cybersecurity', 'Python']
        },
        {
          id: 'nagpur',
          name: 'Nagpur',
          demandLevel: 'High',
          topIndustry: 'Logistics & Tech Hub',
          cloudDemand: 'Medium',
          availableTraining: 'Low',
          gapScore: 'High Gap',
          openJobs: 1950,
          trainingCenters: 36,
          focusSkills: ['Supply Chain Analytics', 'Python', 'Cloud Basics']
        },
        {
          id: 'nashik',
          name: 'Nashik',
          demandLevel: 'Medium',
          topIndustry: 'Automotive & Manufacturing',
          cloudDemand: 'Medium',
          availableTraining: 'Medium',
          gapScore: 'Medium Gap',
          openJobs: 1350,
          trainingCenters: 28,
          focusSkills: ['PLC Automation', 'CAD/CAM', 'Industrial IoT']
        },
        {
          id: 'aurangabad',
          name: 'Chhatrapati Sambhajinagar (Aurangabad)',
          demandLevel: 'Medium',
          topIndustry: 'Auto Ancillaries & Pharma',
          cloudDemand: 'Medium',
          availableTraining: 'Low',
          gapScore: 'High Gap',
          openJobs: 1100,
          trainingCenters: 22,
          focusSkills: ['Pharma Quality Control', 'Robotics', 'Data Entry & Analysis']
        },
        {
          id: 'thane',
          name: 'Thane',
          demandLevel: 'High',
          topIndustry: 'IT Services & Healthcare',
          cloudDemand: 'High',
          availableTraining: 'Medium',
          gapScore: 'Medium Gap',
          openJobs: 2600,
          trainingCenters: 52,
          focusSkills: ['Healthcare IT', 'Web Development', 'QA Testing']
        },
        {
          id: 'kolhapur',
          name: 'Kolhapur',
          demandLevel: 'Emerging',
          topIndustry: 'Foundry & Agri-Tech',
          cloudDemand: 'Low',
          availableTraining: 'Low',
          gapScore: 'Medium Gap',
          openJobs: 780,
          trainingCenters: 18,
          focusSkills: ['Agri-Analytics', 'Digital Marketing', 'Python']
        }
      ]
    },
    {
      id: 'karnataka',
      name: 'Karnataka',
      capital: 'Bengaluru',
      openVacancies: 22800,
      trainingCenters: 420,
      topIndustries: ['IT & Deep Tech', 'Aerospace & Defense', 'Biotech', 'Electronics System Design'],
      overallGap: 'High (Cloud & AI Talent)',
      districts: [
        {
          id: 'bengaluru-urban',
          name: 'Bengaluru Urban',
          demandLevel: 'Critical',
          topIndustry: 'IT & Deep Tech',
          cloudDemand: 'Very High',
          availableTraining: 'High',
          gapScore: 'Moderate Gap',
          openJobs: 14200,
          trainingCenters: 148,
          focusSkills: ['Generative AI', 'Cloud Native (AWS/GCP)', 'Distributed Systems', 'DevOps']
        },
        {
          id: 'mysuru',
          name: 'Mysuru',
          demandLevel: 'High',
          topIndustry: 'IT & Precision Electronics',
          cloudDemand: 'Medium',
          availableTraining: 'Medium',
          gapScore: 'Medium Gap',
          openJobs: 2400,
          trainingCenters: 42,
          focusSkills: ['Embedded C', 'Python', 'Web Development', 'Quality Engineering']
        },
        {
          id: 'dharwad-hubballi',
          name: 'Dharwad (Hubballi-Dharwad)',
          demandLevel: 'Medium',
          topIndustry: 'Manufacturing & Emerging Tech',
          cloudDemand: 'Medium',
          availableTraining: 'Low',
          gapScore: 'High Gap',
          openJobs: 1650,
          trainingCenters: 31,
          focusSkills: ['Industrial Robotics', 'CAD/CAM', 'Data Analytics']
        },
        {
          id: 'mangaluru',
          name: 'Dakshina Kannada (Mangaluru)',
          demandLevel: 'Medium',
          topIndustry: 'Fintech & Maritime Trade',
          cloudDemand: 'Medium',
          availableTraining: 'Medium',
          gapScore: 'Medium Gap',
          openJobs: 1800,
          trainingCenters: 35,
          focusSkills: ['Financial Software', 'Logistics Tech', 'Fullstack JS']
        }
      ]
    },
    {
      id: 'west-bengal',
      name: 'West Bengal',
      capital: 'Kolkata',
      openVacancies: 11200,
      trainingCenters: 310,
      topIndustries: ['IT/ITeS', 'Leather & Textiles', 'Steel & Metallurgy', 'FMCG & Logistics'],
      overallGap: 'Moderate',
      districts: [
        {
          id: 'kolkata',
          name: 'Kolkata',
          demandLevel: 'High',
          topIndustry: 'IT/ITeS & BFSI',
          cloudDemand: 'High',
          availableTraining: 'High',
          gapScore: 'Low Gap',
          openJobs: 5600,
          trainingCenters: 84,
          focusSkills: ['Data Analytics', 'Fullstack Web Development', 'Core Java', 'Accounting Tech']
        },
        {
          id: 'north-24-parganas',
          name: 'North 24 Parganas (Salt Lake / Rajarhat)',
          demandLevel: 'Very High',
          topIndustry: 'IT Services & Fintech Hub',
          cloudDemand: 'High',
          availableTraining: 'Medium',
          gapScore: 'Moderate Gap',
          openJobs: 3400,
          trainingCenters: 58,
          focusSkills: ['Cloud Infrastructure', 'React/Node', 'Data Engineering', 'QA Testing']
        },
        {
          id: 'paschim-bardhaman',
          name: 'Paschim Bardhaman (Asansol-Durgapur)',
          demandLevel: 'Medium',
          topIndustry: 'Steel, Power & Heavy Engineering',
          cloudDemand: 'Low',
          availableTraining: 'Medium',
          gapScore: 'Medium Gap',
          openJobs: 1200,
          trainingCenters: 32,
          focusSkills: ['Plant Automation', 'Mechanical Maintenance', 'Safety Engineering']
        },
        {
          id: 'howrah',
          name: 'Howrah',
          demandLevel: 'Medium',
          topIndustry: 'Light Engineering & Foundry',
          cloudDemand: 'Low',
          availableTraining: 'Low',
          gapScore: 'High Gap',
          openJobs: 1000,
          trainingCenters: 26,
          focusSkills: ['CNC Machining', 'Welding Inspection', 'Industrial Electrical']
        }
      ]
    },
    {
      id: 'telangana',
      name: 'Telangana',
      capital: 'Hyderabad',
      openVacancies: 19600,
      trainingCenters: 375,
      topIndustries: ['IT & Enterprise Software', 'Pharma & Life Sciences', 'Aerospace', 'Data Centers'],
      overallGap: 'Moderate to High',
      districts: [
        {
          id: 'hyderabad',
          name: 'Hyderabad',
          demandLevel: 'Critical',
          topIndustry: 'IT & Cloud Software',
          cloudDemand: 'Very High',
          availableTraining: 'High',
          gapScore: 'Moderate Gap',
          openJobs: 12800,
          trainingCenters: 130,
          focusSkills: ['Cloud Architecture', 'Python / ML', 'Cybersecurity', 'React']
        },
        {
          id: 'medchal-malkajgiri',
          name: 'Medchal-Malkajgiri',
          demandLevel: 'High',
          topIndustry: 'Pharma Manufacturing & Logistics',
          cloudDemand: 'Medium',
          availableTraining: 'Medium',
          gapScore: 'Medium Gap',
          openJobs: 3200,
          trainingCenters: 48,
          focusSkills: ['Pharma QC / QA', 'Biotech Analytics', 'Automation Systems']
        },
        {
          id: 'rangareddy',
          name: 'Rangareddy',
          demandLevel: 'Very High',
          topIndustry: 'Hardware, Aerospace & Tech Parks',
          cloudDemand: 'High',
          availableTraining: 'Medium',
          gapScore: 'High Gap',
          openJobs: 3600,
          trainingCenters: 52,
          focusSkills: ['Avionics Systems', 'Cloud Networks', 'Data Center Ops']
        }
      ]
    },
    {
      id: 'tamil-nadu',
      name: 'Tamil Nadu',
      capital: 'Chennai',
      openVacancies: 17900,
      trainingCenters: 512,
      topIndustries: ['Automotive & EV', 'SaaS & Enterprise IT', 'Textiles', 'Renewable Energy'],
      overallGap: 'Low to Moderate',
      districts: [
        {
          id: 'chennai',
          name: 'Chennai',
          demandLevel: 'Critical',
          topIndustry: 'SaaS, Automotive & Fintech',
          cloudDemand: 'High',
          availableTraining: 'High',
          gapScore: 'Low Gap',
          openJobs: 8900,
          trainingCenters: 122,
          focusSkills: ['SaaS Engineering', 'Automotive Embedded', 'Cloud & Data', 'Cybersecurity']
        },
        {
          id: 'coimbatore',
          name: 'Coimbatore',
          demandLevel: 'High',
          topIndustry: 'Textile Machinery & Pumps / IT',
          cloudDemand: 'Medium',
          availableTraining: 'High',
          gapScore: 'Low Gap',
          openJobs: 3100,
          trainingCenters: 64,
          focusSkills: ['PLC Automation', 'Python & Data', 'Precision Tooling']
        },
        {
          id: 'kancheepuram',
          name: 'Kancheepuram (Sriperumbudur Hub)',
          demandLevel: 'High',
          topIndustry: 'Electronics Manufacturing & Auto',
          cloudDemand: 'Medium',
          availableTraining: 'Medium',
          gapScore: 'Medium Gap',
          openJobs: 2800,
          trainingCenters: 42,
          focusSkills: ['SMT Line Operation', 'EV Powertrain Diagnostics', 'Mechatronics']
        }
      ]
    },
    {
      id: 'delhi-ncr',
      name: 'Delhi NCR (National Capital Region)',
      capital: 'New Delhi',
      openVacancies: 21500,
      trainingCenters: 430,
      topIndustries: ['E-commerce & Consumer Tech', 'Fintech', 'Consulting & Analytics', 'Telecom'],
      overallGap: 'Moderate',
      districts: [
        {
          id: 'new-delhi',
          name: 'New Delhi & Central',
          demandLevel: 'High',
          topIndustry: 'Consulting, Media & Tech Policy',
          cloudDemand: 'High',
          availableTraining: 'High',
          gapScore: 'Low Gap',
          openJobs: 6200,
          trainingCenters: 76,
          focusSkills: ['Business Intelligence', 'Data Storytelling', 'Product Management']
        },
        {
          id: 'gurugram',
          name: 'Gurugram (Haryana NCR)',
          demandLevel: 'Critical',
          topIndustry: 'Fintech & Tech Unicorns',
          cloudDemand: 'Very High',
          availableTraining: 'High',
          gapScore: 'Moderate Gap',
          openJobs: 8800,
          trainingCenters: 98,
          focusSkills: ['Golang', 'Kubernetes', 'Cloud Security', 'React/Node']
        },
        {
          id: 'noida',
          name: 'Gautam Buddha Nagar / Noida (UP NCR)',
          demandLevel: 'Very High',
          topIndustry: 'Mobile Hardware & IT Parks',
          cloudDemand: 'High',
          availableTraining: 'Medium',
          gapScore: 'Medium Gap',
          openJobs: 6500,
          trainingCenters: 82,
          focusSkills: ['Electronics Testing', 'Cloud Ops', 'Fullstack JS']
        }
      ]
    },
    {
      id: 'gujarat',
      name: 'Gujarat',
      capital: 'Gandhinagar',
      openVacancies: 13800,
      trainingCenters: 395,
      topIndustries: ['Petrochemicals & Chemicals', 'Pharma', 'GIFT City / Fintech', 'Solar & Green Energy'],
      overallGap: 'Moderate',
      districts: [
        {
          id: 'ahmedabad',
          name: 'Ahmedabad',
          demandLevel: 'High',
          topIndustry: 'Fintech, Pharma & Textiles',
          cloudDemand: 'High',
          availableTraining: 'High',
          gapScore: 'Low Gap',
          openJobs: 6100,
          trainingCenters: 90,
          focusSkills: ['Financial Analytics', 'ERP Management', 'Data Analysis']
        },
        {
          id: 'gandhinagar',
          name: 'Gandhinagar (GIFT City)',
          demandLevel: 'Very High',
          topIndustry: 'International Banking & IT Hub',
          cloudDemand: 'High',
          availableTraining: 'Medium',
          gapScore: 'Medium Gap',
          openJobs: 3200,
          trainingCenters: 44,
          focusSkills: ['Algorithmic Trading', 'Cloud Compliance', 'Cybersecurity']
        },
        {
          id: 'vadodara',
          name: 'Vadodara',
          demandLevel: 'Medium',
          topIndustry: 'Chemicals & Heavy Power Equipment',
          cloudDemand: 'Low',
          availableTraining: 'Medium',
          gapScore: 'Medium Gap',
          openJobs: 2400,
          trainingCenters: 52,
          focusSkills: ['Chemical Plant Automation', 'Electrical Grid Tech']
        }
      ]
    }
  ]
};

export function getDistricts(stateId = null) {
  if (!stateId || stateId === 'all') {
    return GEOGRAPHY.states.flatMap(s =>
      s.districts.map(d => ({ ...d, stateName: s.name, stateId: s.id }))
    );
  }
  const state = GEOGRAPHY.states.find(s => s.id === stateId.toLowerCase());
  if (!state) return [];
  return state.districts.map(d => ({ ...d, stateName: state.name, stateId: state.id }));
}

export function getGeographyEntity(type, id) {
  if (type === 'country') return GEOGRAPHY.country;
  if (type === 'state') return GEOGRAPHY.states.find(s => s.id === id.toLowerCase()) || null;
  if (type === 'district') {
    for (const s of GEOGRAPHY.states) {
      const dist = s.districts.find(d => d.id === id.toLowerCase());
      if (dist) return { ...dist, stateName: s.name, stateId: s.id };
    }
  }
  return null;
}
