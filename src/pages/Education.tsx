import { useEffect } from 'react'
import {GraduationCap, Award, Calendar, MapPin, BookOpen, Star, Brain} from 'lucide-react'

const Education = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const educationData = [
    {
      degree: "B.Tech — Computer Science & Engineering",
      institution: "Vellore Institute of Technology (VIT Chennai)",
      duration: "2024 – 2028",
      location: "Chennai, TN",
      status: "Current",
      cgpa: "In Progress",
      note: "Expected Graduation: May 2028",
      highlights: [
        "Pursuing B.Tech in CSE with focus on algorithms, data science, and software engineering",
        "Active participation in technical events and hackathons via Binary Club",
        "Maintained strong GPA with distinction in Algorithms and OOP",
        "Focus on modern web technologies and scalable system design"
      ],
      subjects: ["Data Structures & Algorithms", "Object Oriented Programming", "Database Management Systems", "Computer Networks", "Software Engineering", "Data Science & ML"],
      icon: GraduationCap,
      color: "purple"
    },
    {
      degree: "Higher Secondary — Mathematics, Physics & Chemistry (MPC)",
      institution: "Sri Chaitanya Junior College",
      duration: "2022 – 2024",
      location: "Hyderabad, Telangana",
      status: "Completed",
      cgpa: "93%",
      note: "Top 10% of MPC stream cohort",
      highlights: [
        "Scored 93% — Top 10% of cohort in MPC stream",
        "Excellent performance in Mathematics and Physics",
        "Strong foundation in analytical thinking and problem solving",
        "Developed deep interest in computer science and engineering"
      ],
      subjects: ["Mathematics", "Physics", "Chemistry", "English"],
      icon: BookOpen,
      color: "cyan"
    },
    {
      degree: "Secondary Education — CBSE (Grade 10)",
      institution: "Narayana High School",
      duration: "2021 – 2022",
      location: "Hyderabad, Telangana",
      status: "Completed",
      cgpa: "9.5 CGPA",
      note: "School merit distinction",
      highlights: [
        "Achieved 9.5 CGPA — school merit distinction",
        "Outstanding academic performance in core subjects",
        "Strong foundation in Mathematics and Science",
        "Active participation in school leadership activities"
      ],
      subjects: ["Mathematics", "Science", "English", "Social Studies"],
      icon: Award,
      color: "blue"
    }
  ]

  const coursework = [
    { name: "Analysis of Algorithms", icon: "⚡" },
    { name: "Database Management Systems (DBMS)", icon: "🗄️" },
    { name: "Object-Oriented Programming (OOP)", icon: "🔷" },
    { name: "Computer Networks & Protocols", icon: "🌐" },
    { name: "Data Science & Machine Learning", icon: "🤖" },
    { name: "Software Engineering & SDLC", icon: "🔧" },
  ]

  const colorMap: Record<string, { border: string; bg: string; text: string; gradient: string }> = {
    purple: { border: 'border-purple-400/30', bg: 'bg-purple-500/20', text: 'text-purple-400', gradient: 'from-purple-500/10 to-purple-600/10' },
    cyan:   { border: 'border-cyan-400/30',   bg: 'bg-cyan-500/20',   text: 'text-cyan-400',   gradient: 'from-cyan-500/10 to-cyan-600/10' },
    blue:   { border: 'border-blue-400/30',   bg: 'bg-blue-500/20',   text: 'text-blue-400',   gradient: 'from-blue-500/10 to-blue-600/10' },
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-animate absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="orb-animate-alt absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6 glow-border">
            <span className="text-sm font-medium text-purple-300">Academic journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Education & Learning</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My educational background and continuous learning journey in computer science
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-10 mb-16">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon
            const c = colorMap[edu.color]
            return (
              <div key={index} className={`reveal delay-${(index + 1) * 100} relative`}>
                {index < educationData.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-24 timeline-line rounded-full"></div>
                )}
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-12 h-12 ${c.bg} rounded-full border ${c.border} flex items-center justify-center float-3d`}>
                    <IconComponent className={c.text} size={24} />
                  </div>
                  <div className="flex-1">
                    <div className={`card-3d glass-depth rounded-2xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300`}>
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="mb-4 lg:mb-0">
                          <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                          <p className={`text-lg font-medium ${c.text} mb-1`}>{edu.institution}</p>
                          <p className="text-xs text-gray-500 mb-2 italic">{edu.note}</p>
                          <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                            <div className="flex items-center space-x-1"><Calendar size={14} /><span>{edu.duration}</span></div>
                            <div className="flex items-center space-x-1"><MapPin size={14} /><span>{edu.location}</span></div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`inline-block px-4 py-2 ${c.bg} rounded-full border ${c.border} mb-2`}>
                            <span className={`text-sm font-medium ${c.text}`}>{edu.status}</span>
                          </div>
                          <div className="text-2xl font-bold text-white">{edu.cgpa}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                          <ul className="space-y-2">
                            {edu.highlights.map((h, i) => (
                              <li key={i} className="flex items-start space-x-2 text-gray-300 text-sm">
                                <div className={`w-1.5 h-1.5 ${c.bg} rounded-full mt-2 flex-shrink-0 border ${c.border}`}></div>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Key Subjects</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.subjects.map((s, i) => (
                              <span key={i} className={`badge-3d px-3 py-1 bg-gradient-to-r ${c.gradient} ${c.text} rounded-lg text-xs border ${c.border}`}>{s}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Relevant Coursework */}
        <div className="mb-16 reveal">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">📚 Relevant Coursework</span>
          </h3>
          <div className="perspective grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursework.map((course, i) => (
              <div key={i} className={`card-3d glass-depth rounded-xl p-5 border border-gray-700/30 hover:border-purple-400/30 transition-all duration-300 flex items-center space-x-4 delay-${i * 100}`}>
                <span className="text-2xl">{course.icon}</span>
                <span className="text-gray-300 font-medium">{course.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="perspective grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "Academic Excellence", desc: "Consistent high performance across all educational levels", icon: Star, color: "from-yellow-500 to-orange-500" },
            { title: "Problem Solving", desc: "Strong analytical thinking via DSA and competitive programming", icon: Brain, color: "from-purple-500 to-pink-500" },
            { title: "Continuous Learning", desc: "Self-studying ML, Data Science, and Cloud Technologies", icon: GraduationCap, color: "from-cyan-500 to-blue-500" },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className={`card-3d reveal delay-${(i + 1) * 200} glass-depth rounded-2xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 text-center`}>
                <div className="flex justify-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${item.color} rounded-xl border border-gray-600/30 star-pulse`}>
                    <Icon className="text-white" size={32} />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Current Learning */}
        <div className="reveal bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-400/20 glow-border">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Currently Learning</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Advanced Algorithms", emoji: "⚡" },
              { label: "Machine Learning", emoji: "🤖" },
              { label: "Full-Stack Development", emoji: "🌐" },
              { label: "Cloud Computing", emoji: "☁️" },
            ].map((item, i) => (
              <div key={i} className={`card-3d glass-depth rounded-xl p-4 border border-gray-700/30 text-center delay-${i * 100}`}>
                <div className="text-2xl mb-2">{item.emoji}</div>
                <span className="text-gray-300 font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
