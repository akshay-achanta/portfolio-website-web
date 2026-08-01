import { useState } from 'react'
import { Code, Brain, Globe, Database, Palette, Users, Server, Wrench, ChevronDown, ChevronUp, BarChart2 } from 'lucide-react'

const Skills = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      accent: "from-yellow-500/20 to-orange-500/20",
      border: "border-yellow-500/30",
      iconColor: "text-yellow-400",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "SQL", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 95 },
        { name: "Java", level: 75 },
        { name: "C / C++", level: 70 },
      ]
    },
    {
      title: "Frontend",
      icon: Palette,
      accent: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
      iconColor: "text-cyan-400",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Vite", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 80 },
      ]
    },
    {
      title: "Backend",
      icon: Server,
      accent: "from-green-500/20 to-teal-500/20",
      border: "border-green-500/30",
      iconColor: "text-green-400",
      skills: [
        { name: "FastAPI", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "JWT Auth", level: 85 },
        { name: "OAuth 1.0/2.0", level: 80 },
      ]
    },
    {
      title: "Databases",
      icon: Database,
      accent: "from-blue-500/20 to-indigo-500/20",
      border: "border-blue-500/30",
      iconColor: "text-blue-400",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "Supabase", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
      ]
    },
    {
      title: "Data Analysis & BI",
      icon: BarChart2,
      accent: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
      iconColor: "text-orange-400",
      skills: [
        { name: "Exploratory Data Analysis (EDA)", level: 85 },
        { name: "ETL", level: 80 },
        { name: "Business Intelligence", level: 85 },
        { name: "Excel", level: 90 },
      ]
    },
    {
      title: "AI / ML & Data Science",
      icon: Brain,
      accent: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      iconColor: "text-purple-400",
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-learn", level: 75 },
        { name: "Matplotlib", level: 75 },
        { name: "SQL Analytics", level: 85 },
        { name: "Machine Learning", level: 75 },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Globe,
      accent: "from-gray-500/20 to-slate-500/20",
      border: "border-gray-500/30",
      iconColor: "text-gray-300",
      skills: [
        { name: "Git / GitHub", level: 85 },
        { name: "Vercel", level: 85 },
        { name: "Railway", level: 85 },
        { name: "Netlify", level: 80 },
        { name: "Linux CLI", level: 80 },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      accent: "from-rose-500/20 to-pink-500/20",
      border: "border-rose-500/30",
      iconColor: "text-rose-400",
      skills: [
        { name: "Postman", level: 85 },
        { name: "WordPress", level: 90 },
        { name: "Figma", level: 80 },
        { name: "Jira", level: 85 },
        { name: "Notion", level: 85 },
      ]
    },
  ]

  const getLevelLabel = (level: number) => {
    if (level >= 90) return { label: "Proficient", dot: "bg-emerald-400", text: "text-emerald-400", badge: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300" }
    if (level >= 80) return { label: "Familiar", dot: "bg-yellow-400", text: "text-yellow-400", badge: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300" }
    return { label: "Learning", dot: "bg-blue-400", text: "text-blue-400", badge: "bg-blue-500/10 border-blue-500/30 text-blue-300" }
  }

  const coreCS = ["Data Structures", "Algorithms", "OOP", "System Design", "DBMS", "Computer Networks", "Software Engineering"]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-purple-300">My expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A breakdown of the tools, languages, and frameworks I work with
          </p>
        </div>

        {/* Core CS pill bar */}
        <div className="mb-10 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-6 border border-purple-400/20">
          <h3 className="text-base font-semibold text-purple-300 mb-4 text-center tracking-wide uppercase">Core CS Foundations</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {coreCS.map((s) => (
              <span key={s} className="px-3 py-1.5 bg-gray-800/60 text-gray-300 rounded-lg text-sm border border-gray-600/30 hover:border-purple-400/40 hover:text-purple-300 transition-all duration-200">
                💻 {s}
              </span>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end gap-4 mb-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>Proficient</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>Familiar</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400 inline-block"></span>Learning</span>
        </div>

        {/* Accordion Categories */}
        <div className="space-y-3 mb-14">
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon
            const isOpen = expandedIndex === idx
            return (
              <div
                key={idx}
                className={`rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-300 cursor-pointer ${
                  isOpen
                    ? `bg-gradient-to-r ${category.accent} ${category.border} shadow-lg`
                    : 'bg-gray-800/60 border-gray-700/50 hover:border-gray-600/70'
                }`}
                onClick={() => setExpandedIndex(isOpen ? null : idx)}
              >
                {/* Row header */}
                <div className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-xl bg-gray-800/80 border border-gray-700/50`}>
                      <IconComponent className={`${category.iconColor}`} size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{category.title}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{category.skills.length} skills</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Preview chips (collapsed) */}
                    {!isOpen && (
                      <div className="hidden sm:flex gap-1.5">
                        {category.skills.slice(0, 3).map((s) => (
                          <span key={s.name} className="text-xs px-2 py-0.5 bg-gray-700/60 text-gray-400 rounded-md border border-gray-600/30">
                            {s.name}
                          </span>
                        ))}
                        {category.skills.length > 3 && (
                          <span className="text-xs px-2 py-0.5 bg-gray-700/60 text-gray-500 rounded-md border border-gray-600/30">
                            +{category.skills.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                    {isOpen
                      ? <ChevronUp className={category.iconColor} size={20} />
                      : <ChevronDown className="text-gray-500" size={20} />
                    }
                  </div>
                </div>

                {/* Expanded skill badges */}
                <div className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="border-t border-gray-700/40 pt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const meta = getLevelLabel(skill.level)
                      return (
                        <div key={skill.name} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm ${meta.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${meta.dot} flex-shrink-0`}></span>
                          <span className="font-medium text-gray-100">{skill.name}</span>
                          <span className="text-[10px] uppercase tracking-wider opacity-70">{meta.label}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Skills
