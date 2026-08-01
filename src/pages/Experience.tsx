import { useEffect, useState } from 'react'
import {Briefcase, Calendar, MapPin, Building, Code, Target, TrendingUp, ChevronDown, ChevronUp} from 'lucide-react'

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: "Web Development Member & Hackathon Organizer",
      company: "Binary Club, VIT Chennai",
      duration: "Sep 2025 - Present",
      location: "Chennai, Tamil Nadu, India",
      type: "Club Experience",
      description: "Developing production-grade web applications and organizing technical events for the student community.",
      responsibilities: [
        "Worked as a Web Development Member at Binary Club, VIT Chennai's official tech community, building and deploying responsive websites using HTML, CSS, JavaScript, and React.js.",
        "Conducted the Rush-A-Thon hackathon as an Organizing Committee Member, coordinating logistics for 100+ participants.",
        "Judged 15+ competing teams, evaluating innovation, technical implementation, and presentation quality.",
        "Collaborated with a 5-member web development team, following structured Git workflows to keep projects on schedule."
      ],
      technologies: ["React.js", "HTML/CSS", "JavaScript", "Git", "Leadership"],
      outcomes: [
        "Kept projects on schedule with structured workflows.",
        "Coordinated 100+ participant hackathon logistics.",
        "Built and deployed responsive club websites."
      ]
    },
    {
      title: "Data Analysis Intern",
      company: "Zelar Soft Private Limited",
      duration: "Feb 2026 - Jul 2026",
      location: "Hyderabad, Telangana, India - Remote",
      type: "Internship",
      description: "Analyzing enterprise datasets and generating actionable business insights.",
      responsibilities: [
        "Analyzed enterprise-scale inventory datasets using SQL and Excel to identify trends and support data-driven business decisions.",
        "Developed and optimized SQL queries involving joins, aggregations, grouping, filtering, and subqueries.",
        "Performed Exploratory Data Analysis (EDA) to uncover patterns and generate actionable business insights.",
        "Applied ETL concepts and data processing workflows to clean and consolidate relational data."
      ],
      technologies: ["SQL", "Excel", "EDA", "ETL", "Data Processing"],
      outcomes: [
        "Uncovered patterns and generated actionable insights.",
        "Cleaned and consolidated relational data.",
        "Supported data-driven business decisions."
      ]
    },
    {
      title: "Python Full Stack Developer Intern",
      company: "Pragadas Technologies",
      duration: "Dec 2025 - Jan 2026",
      location: "Remote",
      type: "Internship",
      description: "Building end-to-end full stack solutions with FastAPI and React, focusing on performance and security.",
      responsibilities: [
        "Built and maintained 5+ RESTful backend APIs using Python (FastAPI), integrating with PostgreSQL and reducing API response time by 30%.",
        "Engineered React-based frontend interfaces supporting 3 core application workflows.",
        "Implemented JWT-based authentication and role-based session management for 100+ user accounts.",
        "Contributed to CI/CD deployment pipelines, improving release cycle efficiency."
      ],
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "JWT", "CI/CD"],
      outcomes: [
        "Reduced API response time by 30%.",
        "Secured access for 100+ user accounts.",
        "Improved release cycle efficiency."
      ]
    },
    {
      title: "Assistant Squad Lead",
      company: "GAOTek Inc.",
      duration: "Aug 2025 - Dec 2025",
      location: "Remote",
      type: "Internship",
      description: "Leading a content publishing team and driving accuracy in product listings.",
      responsibilities: [
        "Managed and published content for 65+ product pages on WordPress, maintaining a 98% accuracy rate.",
        "Promoted to Assistant Squad Lead within 60 days, overseeing a team of 6 interns.",
        "Coordinated daily task pipelines, achieving a 95% on-time delivery rate.",
        "Awarded Best Intern of the Month for leadership and delivery excellence."
      ],
      technologies: ["WordPress", "Leadership", "Team Management", "Agile"],
      outcomes: [
        "Maintained 98% accuracy across 65+ product pages.",
        "Achieved 95% on-time delivery rate.",
        "Awarded Best Intern of the Month."
      ]
    },
    {
      title: "QA Engineer",
      company: "Pragadas Technologies",
      duration: "May 2025 - Jun 2025",
      location: "Hyderabad, Telangana, India",
      type: "Internship",
      description: "Executing comprehensive QA testing and enterprise workflows customization.",
      responsibilities: [
        "Designed and executed 30+ manual and automated test cases, improving regression coverage by 25% over 3 sprint cycles.",
        "Built RESTful API integrations between internal systems and 2 third-party platforms using OAuth 1.0 and Token-Based Authentication.",
        "Customized 4+ enterprise ERP modules using JavaScript-based scripting, streamlining inventory and order management workflows."
      ],
      technologies: ["QA Testing", "REST APIs", "OAuth 1.0", "JavaScript"],
      outcomes: [
        "Improved regression coverage by 25%.",
        "Streamlined inventory and order management.",
        "Integrated internal systems with third-party platforms."
      ]
    }
  ]



  const skills_developed = [
    { skill: "Enterprise Software", level: 85 },
    { skill: "Team Collaboration", level: 90 },
    { skill: "Professional Communication", level: 85 },
    { skill: "Software Integration", level: 80 },
    { skill: "Problem Solving", level: 90 },
    { skill: "Learning Agility", level: 95 }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-purple-300">Professional journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Experience & Growth
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional experience and future aspirations in software development
          </p>
        </div>

        {/* Main Experience List */}
        <div className="space-y-4 mb-16">
          {experiences.map((exp, expIndex) => {
            const isExpanded = expandedIndex === expIndex;
            return (
              <div 
                key={expIndex} 
                className={`bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl border ${isExpanded ? 'border-purple-400/40 shadow-lg shadow-purple-500/10' : 'border-gray-700/50 hover:border-purple-400/30'} backdrop-blur-sm overflow-hidden transition-all duration-300 cursor-pointer`}
                onClick={() => setExpandedIndex(isExpanded ? null : expIndex)}
              >
                {/* Header / Summary */}
                <div className="p-6 md:p-8 flex items-center justify-between">
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <div className="hidden md:flex p-3 bg-purple-500/20 rounded-xl border border-purple-400/30">
                      <Briefcase className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-purple-300 font-medium mb-2">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="hidden sm:flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {isExpanded ? (
                      <ChevronUp className="text-purple-400" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={24} />
                    )}
                  </div>
                </div>

                {/* Expanded Content */}
                <div 
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="border-t border-gray-700/50 pt-6">
                    <p className="text-gray-300 leading-relaxed mb-8">{exp.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="bg-gray-800/40 rounded-xl p-6 border border-gray-700/30">
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                          <Code className="mr-2 text-cyan-400" size={20} />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((responsibility, index) => (
                            <li key={index} className="flex items-start space-x-3 text-gray-300 text-sm">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-800/40 rounded-xl p-6 border border-gray-700/30">
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                          <TrendingUp className="mr-2 text-green-400" size={20} />
                          Key Outcomes
                        </h4>
                        <ul className="space-y-3 mb-6">
                          {exp.outcomes.map((outcome, index) => (
                            <li key={index} className="flex items-start space-x-3 text-gray-300 text-sm">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>

                        <h5 className="text-sm font-semibold text-white mb-3">Technologies</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, index) => (
                            <span key={index} className="px-2.5 py-1 bg-purple-500/10 text-purple-300 rounded-lg text-xs border border-purple-400/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Developed */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 reveal">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills Developed
            </span>
          </h3>
          <div className="card-3d reveal glass-depth rounded-2xl p-8 border border-gray-700/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills_developed.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-300 font-medium text-lg">{skill.skill}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}

export default Experience
