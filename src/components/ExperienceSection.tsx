// src/components/ExperienceSection.tsx
import React, { useState, useMemo } from 'react';
import CompanyTabs from './ui/CompanyTabs';
import { experiences } from '@/config';

const ExperienceSection: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const calculateTotalExperience = useMemo(() => {
    let totalMonths = 0;
    
    experiences.experiences.forEach(({ startDate, endDate }) => {
      const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                    (endDate.getMonth() - startDate.getMonth());
      const days = endDate.getDate() - startDate.getDate();
      
      // Add the full months
      totalMonths += months;
      
      // Adjust for partial months based on days
      if (days > 15) totalMonths += 1;
    });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return `${years ? `${years} year${years > 1 ? 's' : ''}` : ''} ${months ? `${months} month${months > 1 ? 's' : ''}` : ''}`.trim();
  }, []);

  return (
  <section className="min-h-screen pt-8 pb-16 px-10 bg-transparent flex flex-col justify-center items-center" id="experience">
      <h2 className="text-center text-4xl font-bold text-white mb-8">{experiences.sectionName}</h2>
      <div className="w-full max-w-4xl mx-auto">
        <p className="font-mono text-slate-400 text-sm mb-8 text-center">
          Total Experience: {calculateTotalExperience}
        </p>
        <CompanyTabs
          companies={experiences.experiences}
          selectedTab={selectedCompany}
          onTabSelect={setSelectedCompany}
        />
      </div>
    </section>
  );
};

export default ExperienceSection;