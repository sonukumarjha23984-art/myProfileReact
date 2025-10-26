// src/components/Navbar.tsx
import { LANDING_SECTION_DATA, SOCIAL_ICONS } from '@/config';
import React from 'react';

const ConnectIcons: React.FC = () => {
  const { socialLinks } = LANDING_SECTION_DATA;

  return (
    <div className="hidden md:flex fixed flex-col space-y-4 bottom-0 left-[50px] items-center justify-center">
      <a
        href={socialLinks.github.url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 hover:translate-y-[-2px] transition-transform"
      >
        <svg className="w-6 h-6 text-slate-400 hover:text-[#22ea4b]" viewBox="0 0 24 24" fill="currentColor">
          <path d={SOCIAL_ICONS.github} />
        </svg>
      </a>
      <a
        href={socialLinks.linkedin.url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 hover:translate-y-[-2px] transition-transform"
      >
        <svg className="w-6 h-6 text-slate-400 hover:text-[#22ea4b]" viewBox="0 0 24 24" fill="currentColor">
          <path d={SOCIAL_ICONS.linkedin} />
        </svg>
      </a>
      <a
        href={`mailto:${socialLinks.email.address}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 hover:translate-y-[-2px] transition-transform"
      >
        <svg className="w-6 h-6 text-slate-400 hover:text-[#22ea4b]" viewBox="0 0 24 24" fill="currentColor">
          <path d={SOCIAL_ICONS.email} />
        </svg>
      </a>
      <div className='h-[100px] bg-white w-[0.5px]'></div>
    </div>
  );
};

export default ConnectIcons;