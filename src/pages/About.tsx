import { useEffect } from 'react'
import {User, Heart, Target, Lightbulb, MapPin, Calendar, Award, Star, Zap} from 'lucide-react'

const useReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const About = () => {
  useReveal()

  const achievements = [
    {
      title: "Best Intern of the Month",
      org: "GAOTek Inc.",
      desc: "Awarded for delivering 100% sprint accuracy, proactive leadership, and sustainable quality improvements within the first month.",
      icon: Award,
      color: "from-yellow-500/20 to-orange-500/20",
      border: "border-yellow-400/30",
      text: "text-yellow-400"
    },
    {
      title: "Constant Academic Excellence",
      org: "VIT Chennai",
      desc: "Maintained strong GPA with distinction in Algorithms, OOP, and applied engineering coursework throughout Year 1.",
      icon: Star,
      color: "from-purple-500/20 to-blue-500/20",
      border: "border-purple-400/30",
      text: "text-purple-400"
    },
    {
      title: "Hackathon Organiser & Judge",
      org: "Rush-A-Thon, Binary Club",
      desc: "Coordinated 30+ student teams across problem statement design, onboarding and multi-round evaluation.",
      icon: Zap,
      color: "from-cyan-500/20 to-teal-500/20",
      border: "border-cyan-400/30",
      text: "text-cyan-400"
    }
  ]

  const interests = [
    "Full Stack Engineering", "Machine Learning & AI", "Data Analytics",
    "Open Source Contribution", "Competitive Programming", "Technical Writing",
    "Hackathons & Innovation Challenges"
  ]

  const cards = [
    {
      title: "Personal Story", icon: User, border: "hover:border-purple-400/30", iconBg: "bg-purple-500/20", iconBorder: "border-purple-400/30", iconColor: "text-purple-400",
      content: "I'm Sri Rama Pavan Akshay Achanta, a results-driven B.Tech CSE student at VIT Chennai (2024–2028) with 1+ year of hands-on experience in full stack development, Oracle NetSuite ERP, and software quality assurance. My journey has led me to deliver production-grade web applications and manage 60+ product listings end-to-end."
    },
    {
      title: "What Drives Me", icon: Heart, border: "hover:border-cyan-400/30", iconBg: "bg-cyan-500/20", iconBorder: "border-cyan-400/30", iconColor: "text-cyan-400",
      content: "I'm driven by the potential of data and scalable systems to create real-world impact. Whether it's automating ERP workflows with SuiteScript, engineering responsive websites using React, or identifying critical defects through rigorous QA testing, I find joy in building robust and efficient solutions."
    },
    {
      title: "Goals & Aspirations", icon: Target, border: "hover:border-blue-400/30", iconBg: "bg-blue-500/20", iconBorder: "border-blue-400/30", iconColor: "text-blue-400",
      content: "My goal is to become a versatile tech leader who can bridge the gap between AI-driven insights and enterprise-level applications. I am actively expanding my expertise in machine learning, data analytics, and scalable backend systems to build products that solve complex business problems."
    },
    {
      title: "Philosophy", icon: Lightbulb, border: "hover:border-yellow-400/30", iconBg: "bg-yellow-500/20", iconBorder: "border-yellow-400/30", iconColor: "text-yellow-400",
      content: "I believe in continuous learning and hands-on experience. Every project is an opportunity to grow, every challenge is a chance to innovate, and every collaboration is a step towards building something meaningful that makes a real difference."
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-animate absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="orb-animate-alt absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6 glow-border">
            <span className="text-sm font-medium text-purple-300">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the person behind the code — my journey, passions, and aspirations
          </p>
        </div>

        {/* Story Cards with 3D */}
        <div className="perspective grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <div key={i} className={`card-3d reveal delay-${(i + 1) * 100} group glass-depth rounded-2xl p-8 border border-gray-700/30 ${card.border} transition-all duration-300 hover:shadow-2xl`}>
                <div className="flex items-center mb-6">
                  <div className={`p-3 ${card.iconBg} rounded-xl border ${card.iconBorder} mr-4`}>
                    <Icon className={card.iconColor} size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{card.content}</p>
              </div>
            )
          })}
        </div>

        {/* Personal Info  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card-3d reveal-left glass-depth rounded-2xl p-8 border border-gray-700/30 hover:border-green-400/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-500/20 rounded-xl border border-green-400/30 mr-4">
                <MapPin className="text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Location</h3>
            </div>
            <p className="text-gray-300 text-lg">Hyderabad, Telangana, India</p>
            <p className="text-gray-400 mt-2">Available for remote opportunities worldwide</p>
          </div>

          <div className="card-3d reveal-right glass-depth rounded-2xl p-8 border border-gray-700/30 hover:border-orange-400/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-500/20 rounded-xl border border-orange-400/30 mr-4">
                <Calendar className="text-orange-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Current Focus</h3>
            </div>
            <p className="text-gray-300 text-lg">B.Tech Computer Science</p>
            <p className="text-gray-400 mt-2">VIT University, Chennai — 2024–2028</p>
          </div>
        </div>

        {/* 🏆 Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 reveal">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">🏆 Achievements</span>
          </h3>
          <div className="perspective grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((a, i) => {
              const Icon = a.icon
              return (
                <div key={i} className={`card-3d reveal delay-${(i + 1) * 200} glass-depth rounded-2xl p-8 border ${a.border} hover:shadow-2xl transition-all duration-300 text-center`}>
                  <div className={`inline-flex p-4 bg-gradient-to-r ${a.color} rounded-2xl mb-4 star-pulse`}>
                    <Icon className={a.text} size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{a.title}</h4>
                  <p className={`text-sm font-medium ${a.text} mb-3`}>{a.org}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Languages */}
        <div className="reveal glass-depth rounded-2xl p-8 border border-gray-700/30 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Languages I Speak</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { flag: '🇬🇧', lang: 'English', level: 'Professional Proficiency', w: 'w-full', color: 'from-purple-500 to-purple-400', border: 'border-purple-400/20', text: 'text-purple-300' },
              { flag: '🏛️', lang: 'Telugu', level: 'Native', w: 'w-full', color: 'from-blue-500 to-blue-400', border: 'border-blue-400/20', text: 'text-blue-300' },
              { flag: '🇮🇳', lang: 'Hindi', level: 'Conversational', w: 'w-[65%]', color: 'from-cyan-500 to-cyan-400', border: 'border-cyan-400/20', text: 'text-cyan-300' },
            ].map((l, i) => (
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

        {/* 💡 Interests */}
        <div className="reveal bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-400/20 glow-border">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Interests & Passions</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((item, i) => (
              <span key={i} className={`badge-3d px-4 py-2 glass-depth text-gray-300 rounded-full text-sm border border-gray-600/30 hover:border-purple-400/40 hover:text-purple-300 transition-all duration-300 delay-${i * 50}`}>
                ✦ {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
