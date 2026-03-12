/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Code2, 
  Briefcase, 
  User, 
  Cpu, 
  GraduationCap,
  Menu,
  X,
  Download
} from 'lucide-react';
import { RESUME_DATA } from './constants';

import { AIChat } from './components/AIChat';

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-display font-bold tracking-tight text-white">{children}</h2>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter text-white">
          PK<span className="text-indigo-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={RESUME_DATA.resumeUrl} 
            className="flex items-center gap-2 px-5 py-2 bg-zinc-800 text-white text-sm font-bold rounded-full hover:bg-zinc-700 transition-all border border-white/10"
          >
            <Download size={16} />
            CV
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-indigo-500 hover:text-white transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-white/5 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-300"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={RESUME_DATA.resumeUrl}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 text-lg font-medium text-indigo-400"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-3xl bg-zinc-900 rounded-[2rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto border border-white/10"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-full transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
              <Code2 size={24} />
            </div>
            <h3 className="text-3xl font-display font-bold tracking-tight text-white">{project.title}</h3>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map(t => (
              <span key={t} className="text-xs font-bold tracking-widest uppercase px-3 py-1 bg-zinc-800 rounded-full text-zinc-400 border border-white/5">
                {t}
              </span>
            ))}
          </div>

          <div className="space-y-6 mb-10">
            <p className="text-lg text-zinc-400 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-500 transition-all flex items-center gap-2"
              >
                Live Demo <ExternalLink size={18} />
              </a>
            )}
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-4 bg-zinc-800 text-white font-bold rounded-2xl hover:bg-zinc-700 transition-all flex items-center gap-2 border border-white/5"
              >
                View Code <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-indigo-500/20">
                Available for New Opportunities
              </span>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-[0.9] text-white">
                Building <span className="text-indigo-500">scalable</span> digital experiences.
              </h1>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl text-balance">
                I'm <span className="font-semibold text-white">{RESUME_DATA.name}</span>, a {RESUME_DATA.role} dedicated to crafting high-performance, user-centric web applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-indigo-500 hover:text-white transition-all flex items-center gap-2 group"
                >
                  View My Work
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={RESUME_DATA.resumeUrl}
                  className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-all flex items-center gap-2 border border-white/5"
                >
                  Download CV
                  <Download size={20} />
                </a>
                <div className="flex items-center gap-4 px-4">
                  <a href={RESUME_DATA.github} target="_blank" className="p-3 text-zinc-500 hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                  <a href={RESUME_DATA.linkedin} target="_blank" className="p-3 text-zinc-500 hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-row-2 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle icon={User}>About Me</SectionTitle>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                {RESUME_DATA.objective}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5">
                  <div className="text-3xl font-display font-bold text-indigo-500 mb-1">2+</div>
                  <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="p-6 bg-zinc-900 rounded-2xl border border-white/5">
                  <div className="text-3xl font-display font-bold text-indigo-500 mb-1">10+</div>
                  <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Projects Completed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl border border-white/5">
                  <Mail className="text-indigo-500" size={20} />
                  <span className="text-zinc-300">{RESUME_DATA.email}</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl border border-white/5">
                  <Phone className="text-indigo-500" size={20} />
                  <span className="text-zinc-300">{RESUME_DATA.phone}</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-zinc-900 rounded-xl border border-white/5">
                  <MapPin className="text-indigo-500" size={20} />
                  <span className="text-zinc-300">{RESUME_DATA.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle icon={Cpu}>Technical Arsenal</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(RESUME_DATA.skills).map(([category, skills], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-zinc-900 rounded-3xl border border-white/5 shadow-sm hover:border-indigo-500/30 transition-all"
              >
                <h3 className="text-xl font-display font-bold mb-6 capitalize text-white">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-zinc-800 text-zinc-300 text-sm font-medium rounded-xl border border-white/5 hover:border-indigo-500/50 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle icon={Briefcase}>Professional Journey</SectionTitle>
          <div className="space-y-12">
            {RESUME_DATA.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-[200px_1fr] gap-12">
                  <div className="mb-4 md:mb-0">
                    <span className="text-sm font-bold text-indigo-500 tracking-wider uppercase">{exp.period}</span>
                  </div>
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute -left-10 top-2 bottom-0 w-px bg-zinc-800 hidden md:block" />
                    <div className="absolute -left-[43px] top-1.5 w-2 h-2 rounded-full bg-indigo-500 hidden md:block shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                    
                    <h3 className="text-2xl font-display font-bold mb-1 text-white">{exp.role}</h3>
                    <div className="text-lg text-zinc-500 font-medium mb-6">{exp.company}</div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="text-xs font-mono bg-zinc-900 px-2 py-1 rounded text-zinc-400 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-4">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                          <ChevronRight className="text-indigo-500 shrink-0 mt-1" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <SectionTitle icon={Code2}>Featured Projects</SectionTitle>
              <p className="text-zinc-400 max-w-xl">
                A selection of my recent work, ranging from full-stack platforms to specialized tools and extensions.
              </p>
            </div>
            <a href={RESUME_DATA.github} target="_blank" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
              Explore all on GitHub <ExternalLink size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESUME_DATA.projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project as Project)}
                className="group relative bg-zinc-900/50 rounded-3xl p-8 border border-white/5 hover:border-indigo-500/50 transition-all overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Code2 size={120} />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-zinc-800 rounded-full text-zinc-400 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-bold text-indigo-400 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    View Details <ChevronRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle icon={GraduationCap}>Education</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className="p-8 bg-zinc-900 rounded-3xl border border-white/5">
                <span className="text-xs font-bold text-indigo-500 tracking-widest uppercase mb-4 block">{edu.period}</span>
                <h3 className="text-xl font-display font-bold mb-2 text-white">{edu.degree}</h3>
                <p className="text-zinc-400 mb-1">{edu.institution}</p>
                <p className="text-sm text-zinc-500">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/5">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-[100px]" />
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              Let's build something <br /> <span className="text-indigo-400">extraordinary</span> together.
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href={`mailto:${RESUME_DATA.email}`}
                className="px-10 py-5 bg-white text-black font-bold rounded-2xl hover:bg-indigo-500 hover:text-white transition-all flex items-center gap-3"
              >
                <Mail size={20} />
                Send an Email
              </a>
              <a 
                href={RESUME_DATA.linkedin}
                target="_blank"
                className="px-10 py-5 bg-zinc-800 text-white font-bold rounded-2xl hover:bg-zinc-700 transition-all flex items-center gap-3 border border-white/5"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-display font-bold tracking-tighter text-white">
            PK<span className="text-indigo-500">.</span>
          </div>
          
          <div className="text-sm text-zinc-500 font-medium">
            © {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href={RESUME_DATA.github} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={RESUME_DATA.linkedin} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${RESUME_DATA.email}`} className="text-zinc-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
      <AIChat />
    </div>
  );
}
