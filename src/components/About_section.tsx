// src/components/AboutSection.tsx
import { ABOUT_SECTION_DATA } from '@/config';
import React from 'react';

const AboutSection: React.FC = () => {
  return (
  <section id="about" className="min-h-screen pt-8 pb-16 px-4 bg-transparent flex flex-col justify-center items-center">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        {ABOUT_SECTION_DATA.title}
      </h2>
      <div className="w-full max-w-3xl mx-auto mb-6">
        <div className="bg-[#10151e] rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center md:items-center border border-[#1e293b]/40">
          {/* Left column with image */}
          <div className="relative group w-full max-w-[220px] flex-shrink-0 flex justify-center">
            <div className="relative rounded-xl overflow-hidden bg-[#64ffda] bg-opacity-10">
              <img
                src={`${import.meta.env.BASE_URL}${ABOUT_SECTION_DATA.imagePath}`}
                alt={ABOUT_SECTION_DATA.imageAlt}
                className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#64ffda] opacity-10 hover:opacity-0 transition-opacity duration-300 rounded-xl"></div>
              <div className="absolute inset-0 border-2 border-[#64ffda] rounded-xl translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
            </div>
          </div>
          {/* Right column with text content */}
          <div className="space-y-6 w-full text-center md:text-left flex flex-col justify-center">
            <p className="font-calibre text-lg text-slate-200 leading-relaxed">
              {ABOUT_SECTION_DATA.paragraphs[0]}
            </p>
            <p 
              className="font-calibre text-lg text-slate-400 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: ABOUT_SECTION_DATA.paragraphs[1] }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;