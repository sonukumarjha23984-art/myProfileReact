import React from 'react';
import { Trophy, Award, Code } from 'lucide-react';
import AchievementCard from './ui/AchievementCard';
import { achievements } from '@/config';


const AchievementsSection = () => {



  return (
    <section className="max-w-6xl mx-auto px-4 py-20" id='recognition'>
      <div className="flex flex-wrap justify-between gap-8 max-w-6xl mx-auto">

        {/* Coding Profiles */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-[#22ea4b]" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00caf9] to-[#22ea4b] bg-clip-text text-transparent">CODING PROFILES</h2>
          </div>
          {achievements.coding_profiles.map((profile, index) => (
            <AchievementCard key={index} {...profile} />
          ))}
        </div>

        {/* Certifications Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-[#22ea4b]" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00caf9] to-[#22ea4b] bg-clip-text text-transparent">CERTIFICATIONS</h2>
          </div>
          {achievements.certifications.map((cert, index) => (
            <AchievementCard key={index} {...cert} />
          ))}
        </div>

        {/* Achievements Column */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-[#22ea4b]" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00caf9] to-[#22ea4b] bg-clip-text text-transparent">ACHIEVEMENTS</h2>
          </div>
          {achievements.competitions.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>

      
    </section>
  );
};  

export default AchievementsSection;