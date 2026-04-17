import {ExternalLink, Github, Building, Globe, CheckCircle, Layers, Monitor} from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: "AI-Driven Daily Tracker (isaw)",
      description: "A productivity app delivering AI-based insights into daily habits using FastAPI and React.",
      tech: ["React", "FastAPI", "PostgreSQL", "Recharts"],
      category: "Full Stack AI Project",
      status: "Completed",
      icon: Globe,
      gradient: "from-purple-500 to-cyan-500",
      github: "https://github.com/akshay-achanta/isaw",
      live: "https://poetic-reflection-production.up.railway.app"
    },
    {
      title: "SeaSphere",
      description: "Modular collaborative workspace with real-time dashboards and team widgets.",
      tech: ["React", "Supabase", "Vite"],
      category: "Full Stack SaaS App",
      status: "Completed",
      icon: Layers,
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/akshay-achanta/SeaSphere",
      live: "https://sea-sphere.vercel.app"
    },
    {
      title: "vSkillIU Website Design",
      description: "Conversion-optimized landing page for an online learning platform with modern UI/UX.",
      tech: ["React.js", "Tailwind CSS", "UI/UX Design"],
      category: "Frontend Design Project",
      status: "Completed",
      icon: Monitor,
      gradient: "from-green-500 to-teal-500",
      github: "https://github.com/akshay-achanta/v0-vskilliu-website-design"
    },
    {
      title: "Project JYSWMS",
      description: "WMS automation via Oracle NetSuite and SuiteScript 2.0 to reduce workflow exceptions.",
      tech: ["NetSuite", "SuiteScript 2.0", "REST APIs"],
      category: "Enterprise ERP Project",
      status: "Completed",
      icon: Building,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Project Bailey Crances",
      description: "End-to-End QA testing and defect tracking for complex application modules.",
      tech: ["Jira", "Regression Testing", "Functional Testing"],
      category: "Quality Assurance Project",
      status: "Completed",
      icon: CheckCircle,
      gradient: "from-green-500 to-teal-500"
    }
  ]

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
            <span className="text-sm font-medium text-purple-300">My work & impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Portfolio & Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my experience in full-stack development, ERP automation, and QA testing
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-xl border border-gray-600/30`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="flex space-x-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Completed' ? 'bg-green-500/20 text-green-300 border border-green-400/30' :
                      project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' :
                      'bg-gray-500/20 text-gray-300 border border-gray-400/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{project.title}</h3>
                  <p className="text-sm text-purple-300 mb-3">{project.category}</p>
                  <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-xs border border-gray-600/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>


                <div className="flex space-x-3 mt-auto">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 rounded-lg transition-colors border border-gray-600/30 text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-colors border border-purple-400/30 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Future Vision Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            <h3 className="text-2xl font-bold text-white mb-4">Focusing on AI & Data</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm currently focused on integrating advanced machine learning models with 
              enterprise workflows. Exploring new ways to leverage AI for data-driven decision making.
            </p>
            <div className="flex justify-center">
              <div className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30">
                <span className="text-purple-300 font-medium">🚀 Exploring OpenAI & Gemini API integrations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
