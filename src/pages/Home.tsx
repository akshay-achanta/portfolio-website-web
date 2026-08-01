import { useEffect, useRef, useState } from 'react'
import {ChevronDown, Download, Mail, Github, Linkedin, Briefcase, Award, Instagram} from 'lucide-react'

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  
  // Typewriter Effect
  const roles = ["Full Stack Developer", "Data Analyst", "AI & ML Enthusiast"];
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
    <div className="min-h-[100svh] flex flex-col justify-center py-32 px-4 sm:px-6 lg:px-8 relative" ref={heroRef}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url('/hero-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/75 to-transparent"></div>
        {/* Additional overlay for small screens to ensure text readability */}
        <div className="absolute inset-0 bg-gray-950/60 lg:hidden"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full pt-20">
        <div className="max-w-3xl space-y-8">
          <div className="reveal space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full border border-purple-400/40 backdrop-blur-md glow-border">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-white shadow-sm">Open to opportunities</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-xl">
              <span className="text-white">
                Sri Rama Pavan
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-cyan-200 to-blue-300 bg-clip-text text-transparent shimmer-text font-extrabold">
                Akshay Achanta
              </span>
            </h1>
          </div>

          <div className="reveal delay-200 h-10">
            <span className="text-2xl md:text-3xl font-semibold text-cyan-300 drop-shadow-lg cursor-blink">
              {displayedText}
            </span>
          </div>

          <p className="reveal delay-300 text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl drop-shadow-md font-medium">
            B.Tech CSE student at VIT Chennai building <strong className="text-cyan-300">AI-powered tools</strong> and scalable web applications.
          </p>

          {/* Achievement Badges */}
          <div className="reveal delay-400 flex flex-wrap gap-4">
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-400/40 backdrop-blur-md badge-3d">
              <Award className="text-yellow-400 star-pulse drop-shadow-md" size={20} />
              <span className="text-yellow-100 text-sm font-semibold drop-shadow-sm">Best Intern of the Month — GAOTek Inc.</span>
            </div>
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/40 backdrop-blur-md badge-3d">
              <Briefcase className="text-cyan-400 star-pulse drop-shadow-md" size={20} />
              <span className="text-cyan-100 text-sm font-semibold drop-shadow-sm">Data Analysis Intern — Zelar Soft</span>
            </div>
          </div>

          <div className="reveal delay-500 flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center space-x-2">
                <Briefcase size={18} />
                <span>View My Projects</span>
              </span>
            </button>
            <a
              href="https://drive.google.com/file/d/1nVl-SRWIyyyfijtHGiSTp8JVkb90Vga4/view?usp="
              target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900/50 backdrop-blur-md text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 border border-gray-600/50 hover:bg-gray-800/60"
            >
              <Download size={20} />
              <span>View Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="reveal delay-600 flex space-x-6 pt-6">
            <a
              href="https://github.com/akshay-achanta"
              target="_blank" rel="noopener noreferrer"
              className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-full border border-gray-700/50 group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] backdrop-blur-sm">
                <Github className="w-6 h-6 text-gray-300 group-hover:text-purple-300" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/sri-rama-pavan-akshay-achanta-8276aa320"
              target="_blank" rel="noopener noreferrer"
              className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-full border border-gray-700/50 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] backdrop-blur-sm">
                <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-cyan-300" />
              </div>
            </a>
            <a
              href="https://www.instagram.com/vskillu"
              target="_blank" rel="noopener noreferrer"
              className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-full border border-gray-700/50 group-hover:border-pink-500/50 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] backdrop-blur-sm">
                <Instagram className="w-6 h-6 text-gray-300 group-hover:text-pink-400" />
              </div>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-full border border-gray-700/50 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] backdrop-blur-sm">
                <Mail className="w-6 h-6 text-gray-300 group-hover:text-blue-300" />
              </div>
            </button>
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
