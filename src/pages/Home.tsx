import { useEffect, useRef, useState } from 'react'
import {ChevronDown, Download, Mail, Github, Linkedin, Briefcase, Award, Instagram} from 'lucide-react'

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  
  // Typewriter Effect
  const roles = ["Full Stack Developer", "Data Analyst", "AI & Data Science Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      setDisplayedText(prev => isDeleting 
        ? fullText.substring(0, prev.length - 1)
        : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed]);

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])


  // 3D tilt on hero photo
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * -20
    el.style.transform = `rotateX(${y}deg) rotateY(${x}deg) scale(1.03)`
  }
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden hero-bg-animate" ref={heroRef}>
      {/* 3D Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb-animate absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="orb-animate-alt absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="orb-animate absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        {/* Grid lines for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

          {/* Left Side */}
          <div className="space-y-8">
            <div className="reveal space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm glow-border">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-purple-300">Open to opportunities</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Sri Rama Pavan
                </span>
                <br />
                <span className="shimmer-text text-4xl md:text-6xl font-bold">
                  Akshay Achanta
                </span>
              </h1>
            </div>

            <div className="reveal delay-200 h-10">
              <span className="text-2xl md:text-3xl font-semibold text-purple-400 cursor-blink">
                {displayedText}
              </span>
            </div>

            <p className="reveal delay-300 text-lg text-gray-300 leading-relaxed max-w-2xl">
              B.Tech CSE student at VIT Chennai building <strong className="text-purple-300">AI-powered tools</strong> and scalable web applications.
            </p>

            {/* Achievement Badge */}
            <div className="reveal delay-400">
              <div className="inline-flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-400/30 badge-3d">
                <Award className="text-yellow-400 star-pulse" size={20} />
                <span className="text-yellow-300 text-sm font-medium">Best Intern of the Month — GAOTek Inc.</span>
              </div>
            </div>

            <div className="reveal delay-500 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Briefcase size={18} />
                  <span>View My Projects</span>
                </span>
              </button>
              <a
                href="https://drive.google.com/file/d/1MGSttXu9Qo8bRK1QERK8bsbPZKiUDScR/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 glass-depth text-gray-200 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 border border-gray-700/50"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="reveal delay-600 flex space-x-4 pt-2">
              <a
                href="https://github.com/akshay-achanta"
                target="_blank" rel="noopener noreferrer"
                className="p-3 glass-depth rounded-xl hover:scale-110 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                <Github className="w-5 h-5 text-gray-300 hover:text-purple-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/sri-rama-pavan-akshay-achanta-8276aa320"
                target="_blank" rel="noopener noreferrer"
                className="p-3 glass-depth rounded-xl hover:scale-110 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-cyan-300" />
              </a>
              <a
                href="https://www.instagram.com/vskillu"
                target="_blank" rel="noopener noreferrer"
                className="p-3 glass-depth rounded-xl hover:scale-110 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-gray-300 hover:text-pink-400" />
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="p-3 glass-depth rounded-xl hover:scale-110 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-gray-300 hover:text-blue-300" />
              </button>
            </div>
          </div>

          {/* Right Side - 3D Photo */}
          <div className="flex justify-center lg:justify-end reveal-right">
            <div className="perspective">
              <div
                className="card-3d relative w-80 h-96 cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transition: 'transform 0.3s ease' }}
              >
                {/* Glow rings */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-sm glow-border"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <img
                    src="https://i.postimg.cc/65XfWz15/Whats-App-Image-2025-02-25-at-09-30-17-de32e56a.jpg"
                    alt="Sri Rama Pavan Akshay Achanta"
                    className="w-full h-full object-cover relative z-10 rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full glass-depth hover:border-purple-400/50 transition-all duration-300"
          >
            <ChevronDown size={24} className="text-gray-400 hover:text-purple-400" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
