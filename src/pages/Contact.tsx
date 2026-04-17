import { useEffect, useState } from 'react'
import {Mail, MapPin, Send, Github, Linkedin, ExternalLink, Instagram, CheckCircle, AlertCircle, Loader2} from 'lucide-react'

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sriramapavanakshay@gmail.com",
      href: "mailto:sriramapavanakshay@gmail.com",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad & Chennai",
      href: "#",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/akshay-achanta",
      color: "hover:text-gray-300 hover:border-gray-400/50"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sri-rama-pavan-akshay-achanta-8276aa320",
      color: "hover:text-blue-400 hover:border-blue-400/50"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/vskillu",
      color: "hover:text-pink-400 hover:border-pink-400/50"
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formspree.io/f/mwvaljqg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus('error');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-purple-300">Let's connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        {/* Ready for New Opportunities Banner */}
        <div className="mb-16 reveal">
          <div className="relative overflow-hidden group rounded-3xl p-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-teal-500">
             <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-900/90 backdrop-blur-xl rounded-[22px] px-10 py-8 relative z-10">
                <div className="flex items-center gap-6">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/10 star-pulse">
                      <Send className="text-cyan-400" size={32} />
                   </div>
                   <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-1">Ready for New Opportunities</h3>
                      <p className="text-gray-400">Open to Full-Stack, AI & Data Science roles</p>
                   </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_12px_rgba(74,222,128,0.5)]"></div>
                      <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">Hiring Status: Active</span>
                   </div>
                   <a 
                     href="mailto:sriramapavanakshay@gmail.com"
                     className="px-6 py-3 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                   >
                     Email Me
                   </a>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 card-3d">
              <h3 className="text-2xl font-bold text-white mb-8 font-display">Contact Details</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="group flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className={`p-3 bg-gradient-to-r ${info.color} bg-opacity-20 rounded-xl border border-gray-600/30 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                      <ExternalLink className="text-gray-400 group-hover:text-white transition-colors ml-auto" size={16} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 card-3d">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 hover:shadow-lg hover:scale-110 text-gray-400 ${social.color}`}
                    >
                      <IconComponent size={24} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 card-3d">
            <h3 className="text-2xl font-bold text-white mb-8 font-display">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                       Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <div className="relative">
                  {status === 'success' && (
                    <div className="absolute -top-12 left-0 right-0 py-2 px-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-400 reveal">
                      <CheckCircle size={18} />
                      <span className="text-sm font-medium">Message sent successfully!</span>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="absolute -top-12 left-0 right-0 py-2 px-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-400 reveal">
                      <AlertCircle size={18} />
                      <span className="text-sm font-medium">Oops! Something went wrong.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                    )}
                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
            </form>

            <div className="mt-6 p-4 bg-gray-700/30 rounded-xl border border-gray-600/30">
              <p className="text-gray-400 text-sm text-center">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
            <p className="text-gray-400 mb-4">
              Thank you for visiting my portfolio! Let's create something amazing together.
            </p>
            <div className="flex justify-center items-center space-x-2">
              <span className="text-purple-400">Made with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span className="text-cyan-400">by Sri Rama Pavan Akshay Achanta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
