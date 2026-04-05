import {ExternalLink, Github, Building, Globe, CheckCircle, Database, Layers, Monitor} from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: "SeaSphere",
      description: "A high-performance, modular workspace designed for personal and business collaboration. Features real-time dashboards, social-style updates feed, world clock widget, and a dual-sidebar system.",
      tech: ["React.js 18+", "Supabase (PostgreSQL)", "Vanilla CSS", "FontAwesome", "Vite"],
      category: "Full Stack SaaS App",
      status: "Completed",
      icon: Layers,
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/akshay-achanta/SeaSphere",
      live: "https://sea-sphere.vercel.app",
      highlights: [
        "Personal & Business workspaces with role-based dashboards",
        "Social-style updates feed with Public/Teams/Friends visibility",
        "World Clocks Widget with analog/digital display for remote teams",
        "Dual-sidebar system, dark mode glassmorphism, fully responsive"
      ]
    },
    {
      title: "AI-Driven Daily Tracker (isaw)",
      description: "A production-ready productivity tracking application providing AI-based insights into daily habits and schedules. Features interactive dashboards and comprehensive tracking modules.",
      tech: ["React (Vite)", "Tailwind CSS v4", "FastAPI", "PostgreSQL", "Recharts", "JWT Auth"],
      category: "Full Stack AI Project",
      status: "Completed",
      icon: Globe,
      gradient: "from-purple-500 to-cyan-500",
      github: "https://github.com/akshay-achanta/isaw",
      live: "https://poetic-reflection-production.up.railway.app",
      highlights: [
        "Interactive Dashboard visualizing productivity data with Recharts",
        "AI-Driven rule-based feedback on daily habits and schedules",
        "Secure JWT authentication and Swagger/OpenAPI documentation",
        "Excel export capabilities for full data portability"
      ]
    },
    {
      title: "vSkillIU Website Design",
      description: "Modern, responsive website design for vSkillIU — an online learning and skill development platform. Built with a focus on clean UI/UX, conversion-optimized layouts, and accessibility.",
      tech: ["React.js", "Tailwind CSS", "Responsive Design", "UI/UX"],
      category: "Frontend Design Project",
      status: "Completed",
      icon: Monitor,
      gradient: "from-green-500 to-teal-500",
      github: "https://github.com/akshay-achanta/v0-vskilliu-website-design",
      highlights: [
        "Conversion-optimized landing page with modern hero section",
        "Courses showcase with category-based filtering",
        "Responsive and accessible across all device sizes",
        "Clean component structure for easy extensibility"
      ]
    },
    {
      title: "Project JYSWMS",
      description: "Warehouse Management System automation and integration. Focused on validating complex business scenarios and enterprise workflow automation.",
      tech: ["Oracle NetSuite", "SuiteScript 2.0", "REST APIs", "Integration Testing"],
      category: "Enterprise ERP Project",
      status: "Completed",
      icon: Building,
      gradient: "from-blue-500 to-indigo-500",
      highlights: [
        "Validated 50+ integration scenarios for a large-scale WMS",
        "Developed SuiteScript 2.0 customizations reducing workflow exceptions by 25%",
        "Identified and resolved 10+ high-severity defects pre-launch",
        "Improved system uptime and reliability for warehouse operations"
      ]
    },
    {
      title: "Project Bailey Crances",
      description: "End-to-End QA testing for complex application modules. Implementing rigorous regression and functional testing protocols.",
      tech: ["Jira", "Regression Testing", "Functional Testing", "Defect Tracking"],
      category: "Quality Assurance Project",
      status: "Completed",
      icon: CheckCircle,
      gradient: "from-green-500 to-teal-500",
      highlights: [
        "Executed daily regression and functional testing across 3+ application modules",
        "Logged 20+ defects with structured reproduction steps",
        "Accelerated fix cycles by 35% through detailed documentation",
        "Maintained zero-missed-deadline record across sprint deliverables"
      ]
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and TypeScript. Features dark theme, glassmorphism, and dynamic animations.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      category: "Personal Brand",
      status: "In Progress",
      icon: Database,
      gradient: "from-orange-500 to-red-500"
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
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-purple-300 mb-3">{project.category}</p>
                  <p className="text-gray-300 leading-relaxed mb-4">{project.description}</p>
                </div>

                {project.highlights && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Highlights</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start space-x-2">
                          <CheckCircle size={14} className="mt-1 text-purple-400 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
