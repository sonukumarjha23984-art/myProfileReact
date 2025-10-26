const skillsData = [
  {
    category: "Backend",
    skills: [
      { icon: "☕", name: "Java 17", percent: 95 },
      { icon: "🌿", name: "Spring Boot", percent: 90 },
      { icon: "☁️", name: "Microservices", percent: 90 },
      { icon: "⚡", name: "Spring Cloud", percent: 85 },
      { icon: "🧩", name: "Hibernate / JPA", percent: 85 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { icon: "⚛️", name: "React.js", percent: 85 },
      { icon: "TS", name: "TypeScript", percent: 80 },
      { icon: "JS", name: "JavaScript", percent: 80 },
      { icon: "🌐", name: "HTML / CSS", percent: 85 },
      { icon: "📦", name: "Redux / Material UI", percent: 70 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { icon: "☁️", name: "AWS (S3, ECS, RDS, Lambda)", percent: 80 },
      { icon: "🐳", name: "Docker", percent: 75 },
      { icon: "☸️", name: "Kubernetes", percent: 70 },
      { icon: "🔁", name: "CI/CD (Jenkins, GitHub Actions)", percent: 75 },
      { icon: "🧰", name: "Git / GitLab / Azure DevOps", percent: 80 },
    ],
  },
  {
    category: "Database & Messaging",
    skills: [
      { icon: "🛢️", name: "MySQL / Oracle", percent: 80 },
      { icon: "🍃", name: "MongoDB", percent: 85 },
      { icon: "🚀", name: "Redis", percent: 80 },
      { icon: "🧵", name: "Kafka / RabbitMQ", percent: 85 },
      { icon: "🔍", name: "Elasticsearch", percent: 70 },
    ],
  },
  {
    category: "Testing & Monitoring",
    skills: [
      { icon: "🧪", name: "JUnit / Mockito", percent: 85 },
      { icon: "🧩", name: "SonarQube", percent: 75 },
      { icon: "📊", name: "Splunk / Prometheus", percent: 70 },
      { icon: "🪵", name: "Log4J", percent: 70 },
    ],
  },
  {
    category: "Domain Expertise",
    skills: [
      { icon: "🏦", name: "Banking & Payments (UPI, Wallet, Bill Pay)", percent: 95 },
      { icon: "💳", name: "Cards (Credit/Debit)", percent: 90 },
      { icon: "📄", name: "Loan Origination Systems", percent: 90 },
      { icon: "💰", name: "Digital Wallet & Fintech Systems", percent: 90 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skill" className="min-h-screen pt-8 pb-1 px-4 bg-transparent">
      <h2 className="text-center text-4xl font-bold text-white mb-12">My Skills</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((cat) => (
          <div key={cat.category} className="bg-[#10151e] rounded-2xl border border-[#23272f] p-8 shadow-lg">
            <h3 className="text-white font-bold text-2xl mb-6">{cat.category}</h3>
            <div className="space-y-6">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-white font-medium text-lg">
                      <span className="text-xl">{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-gray-400 font-semibold text-sm">{skill.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#23272f] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#00caf9] to-[#22ea4b]"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
