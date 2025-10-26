import React from 'react';

const CSSShowcase: React.FC = () => {
  return (
    <section className="min-h-[50vh] flex flex-col justify-center px-6 bg-[#0a192f] py-20">
      <div className="space-y-8">
        <div>
        
          <h2 className="text-[22px] md:text-3xl font-semibold text-[#00caf9]">
                    ⚡   Fun Side Projects
                  </h2>
          <p className="font-calibre text-[18px] md:text-[20px] text-slate-300  mt-4">
            When I'm not coding for work, I love exploring creative CSS challenges and animations. 
            Here's my ongoing journey of the #100DaysCSS challenge – a mix of fun, learning, and pure CSS magic!
          </p>
        </div>

        <div className="relative w-full overflow-hidden  hidden md:block">
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0a192f] to-transparent z-10" />
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0a192f] to-transparent z-10" />
          
          <iframe 
            src="https://sairamreddy2211.github.io/100dayscss/?isShow=true"
            className="w-full h-[412px] rounded-lg border border-slate-700"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#22ea4b #0a192f'
            }}
          />
        </div>

        <div className="flex justify-end">
          <a 
            href="https://sairamreddy2211.github.io/100dayscss/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded px-6 py-3 font-mono text-sm text-[#22ea4b] border border-[#22ea4b] hover:bg-[#22ea4b] hover:bg-opacity-10 transition-all duration-300"
          >
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default CSSShowcase;