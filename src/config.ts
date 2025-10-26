// constants.ts
export const SOCIAL_ICONS = {
    github: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    email: "M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"
};

export const skillCategories = [
        {
            icon: "⚛️",
            title: "Frontend Development",
            description: "React.js, TypeScript, JavaScript, HTML5, CSS3, Redux, Material-UI"
        },
        {
            icon: "☕",
            title: "Backend Development",
            description: "Java 17, Spring Boot, Spring Cloud, Hibernate, JPA, Microservices"
        },
        {
            icon: "🏗️",
            title: "Architecture & Tools",
            description: "RESTful APIs, WebSocket, Docker, Kubernetes, Jenkins, Git, Azure"
        },
        {
            icon: "🛢️",
            title: "Databases & Caching",
            description: "Oracle, MySQL, MongoDB, Redis"
        },
        {
            icon: "📨",
            title: "Messaging & Integration",
            description: "RabbitMQ, Apache Kafka, Event-driven Architecture"
        },
        {
            icon: "☁️",
            title: "Cloud & DevOps",
            description: "Azure (AKS, App Service, Functions), CI/CD, Infrastructure as Code"
        },
        {
            icon: "🏦",
            title: "Domain Expertise",
            description: "Digital Banking, Payment Systems, Loan Origination, Financial Services"
        },
        {
            icon: "🧪",
            title: "Testing & Quality",
            description: "JUnit, Mockito, Jest, React Testing Library, SonarQube"
        }
];

export const LANDING_SECTION_DATA = {
    greeting: {
        preTitle: "Hi, my name is",
        name: "Sonu Kumar Jha",
        fullname: "Sonu Kumar Jha",
        title: "Full Stack Developer",
        emoji: {
            symbol: "🚀",
            ariaLabel: "rocket"
        }
    },
    description: "Full Stack Developer with 7+ years of experience building enterprise-grade applications in the Banking and Financial Services domain. Expert in both backend (Java, Spring Boot, Microservices) and frontend (React.js, TypeScript) development. Strong track record of architecting scalable solutions and leading development teams. Specialized in creating high-performance financial applications using modern tech stack and cloud architecture. Proven success in delivering secure, responsive web applications and mentoring teams.",
    socialLinks: {
        github: {
            url: "https://github.com/sonurepos",
            ariaLabel: "GitHub Profile"
        },
        linkedin: {
            url: "https://www.linkedin.com/in/jha-sonu",
            ariaLabel: "LinkedIn Profile"
        },
        email: {
            address: "jhasonu15jan94@gmail.com",
            ariaLabel: "Email Contact"
        }
    }
};


export const navItems = { 
    iconLogo:"SJ", // Initials of Sonu Jha
    navItems: [
    { number: '01.', text: 'About' },
    { number: '02.', text: 'Skill' },
    { number: '03.', text: 'Experience' },
    { number: '04.', text: 'Work' },
    { number: '05.', text: 'Recognition' },
    { number: '06.', text: 'Contact' },
  ]
};


export const ABOUT_SECTION_DATA = {
    sectionNumber: "01",
    title: "About Me",
    imagePath: "spiderman.png",
    imageAlt: "Profile",
    paragraphs: [
        "I'm a Full Stack Developer with 7+ years of experience in architecting and developing enterprise-grade applications. My expertise combines strong backend development with Java, Spring Boot, and Microservices, alongside modern frontend development using React.js, TypeScript, and related technologies.",
        "Currently, at <a href='https://www.bajajfinserv.in/' class='text-[#64ffda] hover:underline'>Bajaj Finance</a>, I lead the development of critical financial systems, building scalable solutions that process millions of transactions daily. I specialize in creating high-performance, secure applications in the banking and financial services domain, with a focus on both backend infrastructure and responsive frontend interfaces."
    ]
};

export const skilleducation = {
    sectionNumber: "02.",
    sectionName: "Skills & Education",
    education: {
        schools: [
            {
                name: "Bengal College of Engineering and Technology",
                degree: "B.Tech in Computer Science and Engineering",
                date: "July 2012 - July 2016",
                cgpa: "7.2",
                location: "Bengal, India",
                highlights: "Computer Science and Engineering"
            }
        ]
    },
    skillCategories: [
        {
            icon: "💻",
            title: "Programming",
            description: "Java 17, SQL, JavaScript, TypeScript, HTML, CSS"
        },
        {
            icon: "�",
            title: "Frameworks",
            description: "Spring Boot, Spring Cloud, Hibernate, JPA, React.js, Kafka"
        },
        {
            icon: "🏗️",
            title: "Architecture & Tools",
            description: "Microservices, REST APIs, Event-driven Systems, Docker, Kubernetes, Jenkins, Git, Azure"
        },
        {
            icon: "🛢️",
            title: "Databases & Caching",
            description: "Oracle, MySQL, MongoDB, Redis"
        },
        {
            icon: "📨",
            title: "Messaging & Search",
            description: "RabbitMQ, Kafka, Elasticsearch"
        },
        {
            icon: "☁️",
            title: "Cloud Platforms",
            description: "AWS (S3, SQS, ECS, DynamoDB, RDS, CloudWatch, CloudFormation, Lambda, EC2)"
        },
        {
            icon: "🏦",
            title: "Domain Expertise",
            description: "Payments (UPI, Wallet, Bill Pay), Cards (Debit/Credit), Loan Origination, Digital Banking Systems"
        },
        {
            icon: "🧪",
            title: "Testing & Monitoring",
            description: "JUnit, Mockito, Log4J, Splunk, Prometheus"
        }
    ]
};

export const experiences = {
    sectionNumber: "03.",
    sectionName: "Where I've Worked",
    experiences: [
        {
            company: "Bajaj Finance Limited",
            link: "https://www.bajajfinserv.in/",
            role: "Full Stack Lead Developer",
            date: "Dec 2022 - Present",
            startDate: new Date('2022-12-01'),
            endDate: new Date(),
            highlights: [
                "Leading full-stack development of enterprise financial systems processing 50,000+ loans monthly",
                "Built modern React.js frontend with TypeScript, improving loan officer productivity by 40%",
                "Developed microservices backend using Java Spring Boot for loan processing and digital wallet systems",
                "Created responsive UI components and RESTful APIs serving 10M+ users with 99.8% success rate",
                "Implemented real-time data synchronization between frontend and backend using WebSocket",
                "Optimized API response times from 500ms to 200ms using Spring WebFlux and Redis caching",
                "Led development of React-based admin dashboard for fraud detection, reducing fraud by 30%",
                "Mentored team in both frontend (React.js) and backend (Java) best practices"
            ]
        },
        {
            company: "Intellect Design Arena",
            link: "https://www.intellectdesign.com/",
            role: "Senior Technical Architect",
            date: "Jul 2019 - Nov 2022",
            startDate: new Date('2019-07-01'),
            endDate: new Date('2022-11-30'),
            highlights: [
                "Led architecture and development of core banking systems for multiple major banks",
                "Managed team of 8 developers delivering card management system handling 2M+ active cards",
                "Designed microservices architecture improving system scalability by 300%",
                "Established development standards and CI/CD pipelines reducing deployment time by 60%",
                "Implemented secure payment gateway with 99.99% uptime for RTGS/NEFT transactions",
                "Architected high-performance caching solutions improving response times by 60%",
                "Mentored team in test-driven development achieving 90%+ code coverage"
            ]
        },
        {
            company: "Aximo Infotech",
            link: "https://www.aximoinfotech.com/",
            role: "Senior Software Engineer",
            date: "May 2015 - Jun 2019",
            startDate: new Date('2015-05-01'),
            endDate: new Date('2019-06-30'),
            highlights: [
                "Led development of healthcare systems serving millions of users across multiple states",
                "Architected and implemented scalable microservices using Spring Boot and AWS",
                "Managed team of 5 developers, improving delivery efficiency by 40%",
                "Designed high-availability solutions with 99.9% uptime for critical healthcare services",
                "Implemented secure API gateway and authentication system for sensitive healthcare data"
            ]
        }
    ]
};

export const projects = {
    sectionNumber: "04.",
    sectionName: "My Projects",
    projects: [
        {
            title: "Bajaj Pay Digital Wallet 🏦",
            description: "Built a comprehensive digital wallet system supporting 10M+ users with 1M+ daily transactions. Achieved 99.8% success rate and 35% faster processing for payments. Implemented secure multi-layer encryption and real-time fraud detection handling INR 500+ crores monthly volume.",
            tech: ["Java", "Spring Boot", "Microservices", "Kafka", "MongoDB", "Redis", "React.js", "AWS"],
            isOpenSource: false
        },
        {
            title: "Loan Origination System �",
            description: "Developed microservices automating loan processing for 50,000+ monthly loans. Built React.js frontend improving productivity by 40%. Reduced approval time from 24 to 4 hours and optimized batch jobs from 8 to 3 hours using Kafka and MongoDB optimization.",
            tech: ["Java", "Spring Boot", "React.js", "TypeScript", "Kafka", "MongoDB", "RabbitMQ", "AWS"],
            isOpenSource: false
        },
        {
            title: "AI-Powered Onboarding System 🤖",
            description: "Integrated AI document processing for PAN and Aadhaar with secure masking and prefill, reducing manual entry by 70%. Enhanced compliance and onboarding speed for field officers with real-time verification.",
            tech: ["Java", "Spring Boot", "AI APIs", "React.js", "MongoDB", "AWS"],
            isOpenSource: false
        },
        {
            title: "Core Banking Card Management 💳",
            description: "Built comprehensive card management system for Canara Bank handling 2M+ active cards. Implemented complete card lifecycle management with real-time processing and PCI-DSS compliance. Created RESTful APIs serving 500K+ mobile banking users.",
            tech: ["Java", "Spring Boot", "Microservices", "Redis", "MongoDB", "AWS"],
            isOpenSource: false
        },
        {
            title: "Digital Payment Gateway ⚡",
            description: "Implemented RTGS/NEFT and remittance APIs with 99.99% uptime. Integrated UPI, wallet systems, and payment providers (Stripe, PayPal) with 99.9% success rate. Enhanced security with Spring Security and OAuth 2.0.",
            tech: ["Java", "Spring Boot", "Spring Security", "Kafka", "MongoDB", "Redis"],
            isOpenSource: false
        },
        {
            title: "Integrated Health Insurance System 🏥",
            description: "Designed and delivered comprehensive health insurance modules for Admin, Registration, Eligibility, and Benefit Issuance. Built scalable REST APIs and microservices enabling faster citizen enrollment and benefit processing.",
            tech: ["Java", "Spring Boot", "Microservices", "AWS", "MySQL", "Redis"],
            isOpenSource: false
        }
    ]
};

export const achievements = {
    coding_profiles: [
        {
            title: "💻 LeetCode",
            subtitle: "300+ Problems Solved | Data Structures & Algorithms",
            link: "https://leetcode.com/u/sonukumarjha23984/"  // Replace with your actual LeetCode profile
        },
        {
            title: "⭐ HackerRank",
            subtitle: "5★ in Problem Solving | Java Gold Badge",
            link: "https://www.hackerrank.com/profile/sonukumarjha2391"  // Replace with your actual HackerRank profile
        }
    ],
    competitions: [
        {
            title: "🏆 Prodigy Award",
            subtitle: "Spring boot innovation at Bajaj FinServ",
            link: "#"
        },
        {
            title: "🌟 Heroes Award",
            subtitle: "Company-wide innovation contest winner",
            link: "#"
        },
        {
            title: "🎯 Kudos Award",
            subtitle: "Recognized for outstanding delivery",
            link: "#"
        }
    ],
    certifications: [
        {
            title: "🏅 Oracle Certified Professional (OCP)",
            subtitle: "Java SE 11 / 17 Developer",
            link: "https://www.oracle.com"
        },
        {
            title: "🌱 Spring Professional Certification",
            subtitle: "VMware (formerly Pivotal)",
            link: "https://www.vmware.com/training/certification.html"
        },
        {
            title: "☁️ AWS Certified Developer",
            subtitle: "Associate",
            link: "https://aws.amazon.com/certification/"
        },
        {
            title: "👨‍💻 Full Stack Development",
            subtitle: "Udemy",
            link: "https://www.udemy.com"
        },
        {
            title: "🌐 Web Development Bootcamp",
            subtitle: "Udemy",
            link: "https://www.udemy.com"
        }
    ]
};

export const CONTACT_SECTION_DATA = {
    sectionNumber: "",
    title: "Contact Me",
    subtitle: "Get In Touch",
    description: "I'm currently available for freelance work or full-time positions. If you have a project that needs some creative work, feel free to contact me.",
    contactInfo: {
        email: "jhasonu15jan94@gmail.com",
        github: "https://github.com/sonukumarjha",
        linkedin: "https://www.linkedin.com/in/sonu-kumar-jha/"
    },
    buttonText: "Send Message"
};
