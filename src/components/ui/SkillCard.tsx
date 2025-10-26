// src/components/SkillsSection/types.ts
export interface Skill {
  icon: string;
  title: string;
  description: string;
  tools: string[];
}

// src/components/SkillsSection/SkillCard.tsx
import React from 'react';
// src/config/skills.ts


interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="relative p-6 rounded-lg border border-slate-700 bg-slate-900/50 hover:border-[#64ffda] transition-colors group">
      <div className="flex items-start gap-4">
        <img 
          src={skill.icon} 
          alt={skill.title} 
          className="w-6 h-6 mt-1 opacity-70 group-hover:opacity-100 transition-opacity"
        />
        <div className="space-y-2">
          <h3 className="font-calibre text-lg text-slate-200 font-medium">
            {skill.title}
          </h3>
          <p className="font-mono text-xs text-slate-400">
            ({skill.tools.join(', ')})
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;