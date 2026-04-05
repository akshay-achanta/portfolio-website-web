import { useEffect } from 'react'
import {Briefcase, Calendar, MapPin, Building, Code, Target, TrendingUp} from 'lucide-react'

const Experience = () => {
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
      title: "Web Development Member",
      company: "Binary Club — VIT Chennai",
      duration: "Sep 2025 - Present",
      location: "Chennai, TN",
      type: "Club Member",
      description: "Engineered and shipped production-grade web applications while mentoring students in technical events.",
      responsibilities: [
        "Engineered and shipped 2+ responsive club websites using React.js and HTML/CSS",
        "Consolidated content workflows into a single deployment pipeline",
        "Served as developer, organiser, and judge across 3+ technical events and hackathons",
        "Directly mentored 20+ student participants on project evaluation criteria"
      ],
      technologies: ["React.js", "HTML/CSS", "JavaScript", "Responsive Design", "CI/CD Deployment", "Team Collaboration"],
      outcomes: [
        "Reduced manual update time via streamlined pipelines",
        "Successfully delivered interactive web platforms for club events",
        "Contributed to the technical growth of the student community"
      ]
    },
    {
      title: "Assistant Squad Lead",
      company: "GAOTek Inc.",
      duration: "Aug 2025 - Dec 2025",
      location: "Remote",
      type: "Internship",
      description: "Led cross-functional teams in product listing and digital marketing outreach.",
      responsibilities: [
        "Owned end-to-end publishing of 60-70 product listings on WordPress",
        "Achieved 100% on-time sprint delivery across all 5-month engagement cycles",
        "Directed a cross-functional team of 5+ within 6 weeks of promotion",
        "Spearheaded cold-email outreach campaigns via Pantheon.io, ensuring a 15%+ increase in engagement"
      ],
      technologies: ["WordPress", "Pantheon.io", "Team Leadership", "Agile/Sprints", "Digital Marketing", "Content QA"],
      outcomes: [
        "Improved review-to-publish turnaround by standardising QA checklists",
        "Demonstrated rapid growth and leadership capabilities",
        "Measurably increased prospect engagement for the ISP team"
      ]
    },
    {
      title: "NetSuite Developer & QA Intern",
      company: "Pragdas Technologies PVT LTD",
      duration: "May 2025 - Jun 2025",
      location: "Hyderabad, Telangana",
      type: "Internship",
      description: "Focused on enterprise ERP customizations and comprehensive software testing.",
      responsibilities: [
        "Executed 100+ test cases across 2 live web applications",
        "Developed SuiteScript 2.0 customizations automating 3 core ERP workflows",
        "Authored comprehensive application flow documentation adopted by cross-functional teams",
        "Identified and documented 15+ critical defects reducing post-deployment bugs by 30%"
      ],
      technologies: ["Oracle NetSuite", "SuiteScript 2.0", "ERP Automation", "Test Case Design", "Bug Triage", "REST APIs"],
      outcomes: [
        "Cut manual data-entry time by approximately 40% per cycle",
        "Improved system reliability through proactive defect identification",
        "Standardized onboarding via comprehensive documentation"
      ]
    }
  ]

  const futureGoals = [
    {
      title: "Full-Stack Developer",
      description: "Master both frontend and backend technologies to build complete web applications",
      icon: Code,
      timeline: "2025-2026",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "AI Integration Specialist",
      description: "Combine web development skills with artificial intelligence to create intelligent applications",
      icon: Target,
      timeline: "2026-2027",
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Tech Leadership",
      description: "Lead development teams and contribute to technical decision-making in innovative projects",
      icon: TrendingUp,
      timeline: "2027-2028",
      color: "from-green-500 to-emerald-500"
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
        <div className="space-y-16 mb-16">
          {experiences.map((exp, expIndex) => (
            <div key={expIndex} className={`card-3d reveal delay-${expIndex * 100} bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-400/20 backdrop-blur-sm`}>
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-purple-500/20 rounded-xl border border-purple-400/30 float-3d">
                    <Briefcase className="text-purple-400 icon-neon" size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-xl text-purple-300 font-medium mb-4">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building size={16} />
                        <span>{exp.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">{exp.description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/30 hover:border-cyan-400/20 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Code className="mr-2 text-cyan-400 icon-neon" size={20} />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/30 hover:border-green-400/20 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <TrendingUp className="mr-2 text-green-400 icon-neon" size={20} />
                    Key Outcomes
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {exp.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  <h5 className="text-lg font-semibold text-white mb-3">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-lg text-sm border border-purple-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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

        {/* Future Goals */}
        <div id="goals" className="mb-16 reveal">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Career Aspirations
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureGoals.map((goal, index) => {
              const IconComponent = goal.icon
              return (
                <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${goal.color} bg-opacity-20 rounded-xl border border-gray-600/30 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <div className="inline-block px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/30 mb-3">
                      {goal.timeline}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{goal.title}</h4>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-center">{goal.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Opportunities</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm actively seeking internships, collaborative projects, and opportunities to apply my skills 
              in real-world scenarios. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              >
                View Portfolio
              </button>
              <button className="px-8 py-4 bg-gray-700/50 backdrop-blur-sm border border-gray-600/30 text-gray-200 rounded-xl font-semibold hover:bg-gray-600/50 hover:border-gray-500/50 transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
