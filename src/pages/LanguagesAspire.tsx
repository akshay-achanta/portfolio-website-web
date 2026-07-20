import { useEffect } from 'react'
import { Code, Target, TrendingUp } from 'lucide-react'

const LanguagesAspire = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const futureGoals = [
    {
      title: "Full-Stack Developer",
      description: "Mastering frontend and backend to build complete, scalable applications.",
      icon: Code,
      timeline: "2025-2026",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "AI Integration Specialist",
      description: "Combining web development with AI to create intelligent, data-driven apps.",
      icon: Target,
      timeline: "2026-2027",
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Tech Leadership",
      description: "Leading development teams and driving technical innovation in global projects.",
      icon: TrendingUp,
      timeline: "2027-2028",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const languages = [
    { flag: '🇬🇧', lang: 'English', level: 'Professional Proficiency', w: 'w-full', color: 'from-purple-500 to-purple-400', border: 'border-purple-400/20', text: 'text-purple-300' },
    { flag: '🏛️', lang: 'Telugu', level: 'Native', w: 'w-full', color: 'from-blue-500 to-blue-400', border: 'border-blue-400/20', text: 'text-blue-300' },
    { flag: '🇮🇳', lang: 'Hindi', level: 'Conversational', w: 'w-[65%]', color: 'from-cyan-500 to-cyan-400', border: 'border-cyan-400/20', text: 'text-cyan-300' },
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-animate absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="orb-animate-alt absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6 glow-border">
            <span className="text-sm font-medium text-purple-300">Languages & Goals</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Languages & Aspirations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The languages I speak and where I'm headed in my career
          </p>
        </div>

        {/* Languages I Speak */}
        <div className="reveal glass-depth rounded-2xl p-8 border border-gray-700/30 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">🗣️ Languages I Speak</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((l, i) => (
              <div key={i} className={`card-3d text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border ${l.border} hover:border-opacity-50 transition-all duration-300`}>
                <div className="text-4xl mb-3">{l.flag}</div>
                <h4 className={`text-xl font-semibold ${l.text} mb-2`}>{l.lang}</h4>
                <p className="text-gray-400 mb-3">{l.level}</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className={`bg-gradient-to-r ${l.color} h-2 rounded-full ${l.w}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Aspirations */}
        <div className="reveal mb-8">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              🚀 Career Aspirations
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureGoals.map((goal, index) => {
              const IconComponent = goal.icon
              return (
                <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 text-center">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${goal.color} bg-opacity-20 rounded-xl border border-gray-600/30 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/30 mb-3">
                    {goal.timeline}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{goal.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{goal.description}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default LanguagesAspire
