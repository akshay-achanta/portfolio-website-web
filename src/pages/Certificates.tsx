import { useEffect } from 'react'
import { Award, Shield, ExternalLink, Calendar, Fingerprint, Database, Globe, TrendingUp } from 'lucide-react'

const Certificates = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const certifications = [
    {
      title: "AWS Solutions Architecture Job Simulation",
      issuer: "Forage",
      date: "Jul 2025",
      credentialId: "Qj4iP5bdwjKgyj6Ku",
      skills: ["Amazon Web Services (AWS)", "Cloud Computing", "Solution Architecture", "Infrastructure Design"],
      icon: Shield,
      color: "from-orange-500 to-yellow-500",
      border: "border-orange-400/30",
      text: "text-orange-400",
      bg: "bg-orange-500/10"
    },
    {
      title: "Training in Web Uploading",
      issuer: "GAOTek Inc.",
      date: "Dec 2025",
      credentialId: "GAO-RAMA-PAVAN-AKSHAY-ACHANTA-SRI-20250825-BRY",
      skills: ["Web Management", "Content Operations", "CMS Uploading", "QA Operations"],
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      border: "border-blue-400/30",
      text: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      title: "Training in Digital Marketing",
      issuer: "GAOTek Inc.",
      date: "Dec 2025",
      credentialId: "GAO-RAMA-PAVAN-AKSHAY-ACHANTA-SRI-20250825-BRY",
      skills: ["SEO Strategy", "Social Media Marketing", "Email Outreach", "Content Marketing"],
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      border: "border-purple-400/30",
      text: "text-purple-400",
      bg: "bg-purple-500/10"
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-animate absolute top-1/3 right-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="orb-animate-alt absolute bottom-1/3 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-400/30 backdrop-blur-sm mb-6 glow-border">
            <span className="text-sm font-medium text-orange-300">Verified Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Licenses & Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications and digital credentials validating technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => {
            const Icon = cert.icon
            return (
              <div key={i} className={`card-3d reveal delay-${(i + 1) * 100} glass-depth rounded-2xl p-8 border ${cert.border} hover:shadow-2xl transition-all duration-300`}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 ${cert.bg} rounded-xl border ${cert.border} float-3d`}>
                    <Icon className={cert.text} size={32} />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Issued</span>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                <p className={`text-lg font-medium ${cert.text} mb-6`}>{cert.issuer}</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Fingerprint size={16} className="mr-2 text-gray-500" />
                    <span className="font-mono">{cert.credentialId}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, j) => (
                      <span key={j} className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded-lg text-xs border border-gray-700/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-700/30">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Database size={16} className="mr-2 text-orange-400" />
                    Verified On-Chain
                  </div>
                  <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors group">
                    <ExternalLink size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Impactful footer for the page */}
        <div className="mt-20 text-center reveal">
          <p className="text-gray-500 italic">"Continuous learning is the minimum requirement for success in any field."</p>
        </div>
      </div>
    </div>
  )
}

export default Certificates
