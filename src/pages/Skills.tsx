import { useEffect } from 'react'
import {Code, Brain, Globe, Database, Palette, Users} from 'lucide-react'

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Frontend & Backend",
      icon: Code,
      skills: [
        { name: "React.js", level: 90, color: "from-cyan-400 to-blue-500" },
        { name: "FastAPI", level: 85, color: "from-green-400 to-teal-500" },
        { name: "JavaScript (ES6+)", level: 85, color: "from-yellow-400 to-orange-500" },
        { name: "HTML5 & CSS3", level: 95, color: "from-orange-500 to-red-500" },
        { name: "REST APIs", level: 85, color: "from-blue-500 to-indigo-500" },
        { name: "Java", level: 75, color: "from-red-500 to-orange-600" },
        { name: "Responsive Design", level: 90, color: "from-purple-400 to-pink-500" }
      ]
    },
    {
      title: "Database & ERP",
      icon: Database,
      skills: [
        { name: "SQL & PostgreSQL", level: 85, color: "from-blue-600 to-indigo-600" },
        { name: "Oracle NetSuite", level: 80, color: "from-orange-600 to-red-600" },
        { name: "SuiteScript 2.0", level: 80, color: "from-orange-400 to-yellow-500" },
        { name: "ERP Automation", level: 85, color: "from-red-400 to-rose-500" },
        { name: "WordPress", level: 90, color: "from-blue-400 to-cyan-400" }
      ]
    },
    {
      title: "AI / ML & Data",
      icon: Brain,
      skills: [
        { name: "Python", level: 90, color: "from-yellow-500 to-green-500" },
        { name: "Machine Learning", level: 80, color: "from-purple-500 to-indigo-500" },
        { name: "Data Analysis", level: 85, color: "from-cyan-500 to-blue-500" },
        { name: "Pandas & NumPy", level: 85, color: "from-teal-500 to-green-500" },
        { name: "Scikit-learn", level: 75, color: "from-orange-500 to-red-500" }
      ]
    },
    {
      title: "Testing & DevTools",
      icon: Globe,
      skills: [
        { name: "Test Case Design", level: 90, color: "from-green-500 to-emerald-500" },
        { name: "Regression Testing", level: 85, color: "from-teal-500 to-cyan-500" },
        { name: "Git / GitHub", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "Postman & Jira", level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "Agile/Scrum", level: 90, color: "from-indigo-500 to-purple-500" }
      ]
    }
  ]

  const softSkills = [
    { name: "Technical Leadership", icon: Users, description: "Experienced in leading cross-functional teams and mentoring students." },
    { name: "Problem Solving", icon: Brain, description: "Strong foundation in DSA, OOP, and system design." },
    { name: "Continuous Learning", icon: Brain, description: "Passionate about staying updated with latest AI and web technologies." },
    { name: "Collaboration", icon: Palette, description: "Effective communicator in English, Telugu, and Hindi." }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-purple-300">My expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical abilities and areas of expertise
          </p>
        </div>

        {/* Core CS Concepts - Moved to Top */}
        <div className="mb-16 text-center reveal">
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-400/20 glow-border">
            <h3 className="text-2xl font-bold text-white mb-6 font-display">Core CS & Programming</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Data Structures", "Algorithms", "OOP", "System Design", "Python", "Java", "SQL", "C", "C++"].map((skill) => (
                <span key={skill} className="badge-3d px-4 py-2 glass-depth text-gray-300 rounded-xl text-sm border border-gray-600/30 hover:border-purple-400/40 hover:text-purple-300 transition-all duration-300">
                  <span className="mr-2 text-purple-400">💻</span>{skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Skills - Badges Instead of Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div key={categoryIndex} className={`card-3d reveal delay-${categoryIndex * 100} glass-depth rounded-2xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300`}>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-400/30 mr-4 float-3d">
                    <IconComponent className="text-purple-400 icon-neon" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    let levelIcon = "🔵"
                    let levelText = "Learning"
                    let badgeColor = "border-blue-500/30 text-blue-300 bg-blue-500/5"
                    
                    if (skill.level >= 90) {
                      levelIcon = "🟢"
                      levelText = "Proficient"
                      badgeColor = "border-emerald-500/30 text-emerald-300 bg-emerald-500/5"
                    } else if (skill.level >= 80) {
                      levelIcon = "🟡"
                      levelText = "Familiar"
                      badgeColor = "border-yellow-500/30 text-yellow-300 bg-yellow-500/5"
                    }

                    return (
                      <div key={skillIndex} className={`badge-3d flex items-center space-x-2 px-3 py-1.5 rounded-lg border ${badgeColor} transition-transform`}>
                        <span className="font-semibold text-gray-100">{skill.name}</span>
                        <span className="text-[10px] uppercase tracking-wider opacity-80 flex items-center gap-1">
                           {levelIcon} {levelText}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Soft Skills */}
        <div className="mb-16 reveal">
          <h3 className="text-3xl font-bold text-center mb-12 font-display">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Collaborative DNA
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div key={index} className="group card-3d glass-depth rounded-2xl p-6 border border-gray-700/30 hover:border-purple-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl border border-purple-400/30 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-purple-400" size={24} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3 font-display">{skill.name}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
