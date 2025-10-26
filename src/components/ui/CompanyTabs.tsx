// src/components/CompanyTabs.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Company {
  company: string;
  role: string;
  date: string;
  highlights: string[];
}

interface CompanyTabsProps {
  companies: Company[];
  selectedTab: number;
  onTabSelect: (index: number) => void;
}

const calculateDateDifference = (company: typeof experiences.experiences[0]) => {
  const { startDate, endDate } = company;
  
  // Calculate difference in milliseconds
  const diffTime = endDate.getTime() - startDate.getTime();
  
  // Convert to days, months, years
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30.44); // Average days in a month
  const years = Math.floor(months / 12);
  
  // Calculate remaining months and days
  const remainingMonths = months % 12;
  const remainingDays = Math.floor(days % 30.44);
  
  // Build output string
  let output = '';
  
  if (years > 0) {
    output += `${years} year${years > 1 ? 's' : ''}`;
    if (remainingMonths > 0) output += ` ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
  } else if (months > 0) {
    output += `${months} month${months > 1 ? 's' : ''}`;
    if (remainingDays > 0) output += ` ${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
  } else {
    output += `${days} day${days > 1 ? 's' : ''}`;
  }
  
  return output;
};

// Usage example:


const CompanyTabs: React.FC<CompanyTabsProps> = ({ 
  companies, 
  selectedTab, 
  onTabSelect 
}) => {
  return (
    <div className="relative flex flex-col md:flex-row">
      {/* Vertical line for tabs */}
      <div className="relative h-fit">
        {/* Background line */}
        <div className="absolute left-0 w-[2px] h-full bg-slate-700/50" />
        
        {/* Animated highlight line */}
        <motion.div
          className="absolute left-0 w-[2px] bg-[#64ffda] hidden md:block"
          initial={{ height: `${100 / companies.length}%` }}
          animate={{
            y: `${selectedTab * 100}%`,
            height: `${100 / companies.length}%`
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        />

        {/* Company tabs */}
        <div className="flex flex-row md:flex-col overflow-scroll md:overflow-auto">
          {companies.map((company, index) => (
            <button
              key={company.company}
              className={`relative px-5 py-4 text-left min-w-max md:min-w-[240px] hover:bg-slate-700/20 transition-colors
                ${selectedTab === index ? 'bg-slate-800/50 text-[#64ffda]' : 'text-slate-400'}`}
              onClick={() => onTabSelect(index)}
            >
              <span className={`font-mono text-base ${selectedTab === index ? 'font-medium' : ''}`}>
                {company.company}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="md:ml-8 flex-1">
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mb-2 mt-7 md:mt-0">
            <h3 className="font-calibre text-[15px] md:text-2xl text-slate-300">
              {companies[selectedTab].role}{' '}
              <span className="text-[#64ffda]">@ {companies[selectedTab].company}</span>
            </h3>
            <div className='flex gap-2 mt-2 flex-col md:flex-row'>
            <p className="font-mono text-sm text-slate-400 ">
              {companies[selectedTab].date}
            </p>
            <p className='text-slate-400 hidden md:block text-sm'>|</p>
            <p className="font-mono text-sm text-slate-400">
               {calculateDateDifference(companies[selectedTab])} of experience
            </p>
            </div>
            
          </div>

          <ul className="space-y-4 mt-4">
            {companies[selectedTab].highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[#64ffda] mt-1.5 text-[12px]">▹</span>
                <span className="font-calibre text-slate-400 text-lg text-[15px]">{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyTabs;