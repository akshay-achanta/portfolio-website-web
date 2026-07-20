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
      title: "Full Stack Developer & Hackathon Organizer",
      company: "Binary Club, VIT Chennai",
      duration: "Sep 2025 - Present",
      location: "Chennai, India",
      type: "Club Experience",
      description: "Developing production-grade web applications and organizing technical events for the student community.",
      responsibilities: [
        "Developed and deployed 3+ responsive web applications for club events using HTML, CSS, JavaScript, and React.js.",
        "Organized Rush-A-Thon hackathon as an Organizing Committee Member, coordinating logistics for 100+ participants.",
        "Evaluated 15+ competing teams as a Judge, assessing innovation, technical implementation, and presentation quality.",
        "Collaborated with a 5-member web team, reducing project turnaround time by 20% through structured Git workflows."
      ],
      technologies: ["React.js", "HTML/CSS", "JavaScript", "Git", "Leadership"],
      outcomes: [
        "Reduced project turnaround time by 20%.",
        "Successfully coordinated 100+ participant hackathons.",
        "Delivered responsive web apps for events."
      ]
    },
    {
      title: "Python Full Stack Developer",
      company: "Pragadas Technologies",
      duration: "Dec 2025 - Jan 2026",
      location: "Remote",
      type: "Internship",
      description: "Building end-to-end full stack solutions with FastAPI and React, focusing on performance and security.",
      responsibilities: [
        "Built and maintained 5+ RESTful backend APIs using Python (FastAPI), integrating with PostgreSQL and reducing API response time by 30%.",
        "Engineered React-based frontend interfaces connected to backend services, supporting 3 core application workflows.",
        "Implemented JWT-based authentication and role-based session management, securing access for 100+ user accounts.",
        "Participated in 10+ code reviews and contributed to CI/CD deployment pipelines, improving release cycle efficiency."
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
        "Managed and published content for 65+ product pages on WordPress, maintaining 98% accuracy rate across all listings.",
        "Promoted to Assistant Squad Lead within 60 days based on top-tier performance, overseeing a team of 6 interns.",
        "Coordinated daily task pipelines for 6 team members, achieving 95% on-time delivery rate across all assigned projects.",
        "Awarded Best Intern of the Month by GAOTek Inc. for exceptional leadership, initiative, and 95%+ on-time delivery rate."
      ],
      technologies: ["WordPress", "Leadership", "Team Management", "Agile"],
      outcomes: [
        "Maintained 98% accuracy across 65+ product pages.",
        "Achieved 95% on-time delivery rate.",
        "Awarded Best Intern of the Month."
      ]
    },
    {
      title: "NetSuite Developer & QA Engineer",
      company: "Pragadas Technologies",
      duration: "May 2025 - Jun 2025",
      location: "Hyderabad, India",
      type: "Internship",
      description: "Automating enterprise ERP workflows and executing comprehensive QA testing.",
      responsibilities: [
        "Customized 4+ Oracle NetSuite ERP modules using SuiteScript 2.0 (JavaScript), streamlining inventory and order management.",
        "Built RESTful API integrations between NetSuite and 2 third-party platforms using OAuth 1.0 and Token-Based Authentication.",
        "Designed and executed 30+ manual and automated test cases, improving regression coverage by 25% over 3 sprint cycles."
      ],
      technologies: ["Oracle NetSuite", "SuiteScript 2.0", "QA Testing", "REST APIs", "OAuth 1.0"],
      outcomes: [
        "Streamlined inventory and order management.",
        "Integrated ERP with third-party platforms.",
        "Improved regression coverage by 25%."
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




      </div>
    </div>
  )
}

export default Experience
