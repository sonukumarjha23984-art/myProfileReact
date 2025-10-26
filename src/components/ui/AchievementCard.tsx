const AchievementCard = ({ title, subtitle,link="" }) => (
  <div className="group cursor-pointer mb-6" onClick={()=>link && window.open(link, '_blank').focus()} >
    <div className="flex items-start gap-2 transform transition-transform duration-300 group-hover:translate-x-2">
      <span className="text-gray-400 group-hover:text-[#64ffda]">▹</span>
      <div>
        <h3 className="text-gray-200 font-medium group-hover:text-[#64ffda]">{title} {link ? "🔗":""}</h3>
        <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default AchievementCard;