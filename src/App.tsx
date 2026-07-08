import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  MonitorSmartphone,
  Phone,
  Server,
  Sparkles,
  Sun,
  User,
  Wrench,
  X,
} from 'lucide-react';
import { RESUME_DATA } from './constants';

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  highlights?: string[];
  demoUrl?: string;
}

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const HERO_STATS = [
  { value: '2.5+', label: 'Years' },
  { value: `${RESUME_DATA.projects.length}+`, label: 'Projects' },
  { value: '7', label: 'Skill Areas' },
];

const STACK_HIGHLIGHTS = [
  'React.js',
  'TypeScript',
  'Node.js',
  'NestJS',
  'MongoDB',
  'MySQL',
  'Stripe',
  'Firebase',
];

const SKILL_ICONS = [
  Code2,
  MonitorSmartphone,
  Server,
  Database,
  Cloud,
  Wrench,
  Sparkles,
];

const SectionHeading = ({
  eyebrow,
  description,
  icon: Icon,
  centered = false,
}: {
  eyebrow: string;
  description?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  centered?: boolean;
}) => (
  <div className={`mb-12 ${centered ? 'mx-auto max-w-3xl text-center' : ''}`}>
    <div
      className={`mb-4 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}
    >
      <div className='flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft text-accent'>
        <Icon size={20} />
      </div>
      <span className='text-3xl font-bold uppercase tracking-widest text-accent'>
        {eyebrow}
      </span>
    </div>
    {description && (
      <p className='mt-5 max-w-2xl text-lg leading-relaxed text-muted'>
        {description}
      </p>
    )}
  </div>
);

const Navbar = ({
  isDark,
  onToggleDark,
}: {
  isDark: boolean;
  onToggleDark: () => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className='fixed left-0 right-0 top-0 z-50 px-4 py-4'>
      <div
        className={`mx-auto max-w-7xl rounded-lg border px-4 py-3 transition-all duration-300 ${
          isScrolled
            ? 'border-line bg-paper/95 shadow-sm backdrop-blur-md'
            : 'border-transparent bg-paper/70 backdrop-blur'
        }`}
      >
        <div className='flex items-center justify-between'>
          <a href='#' className='flex items-center gap-3'>
            <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-ink font-display text-sm font-bold text-paper'>
              PK
            </span>
            <span className='hidden font-display text-lg font-bold tracking-tight text-ink sm:block'>
              Priyanshi Kalsariya
            </span>
          </a>

          <div className='hidden items-center gap-7 md:flex'>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-sm font-medium text-muted transition-colors hover:text-accent'
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className='hidden items-center gap-3 md:flex'>
            <button
              onClick={onToggleDark}
              className='flex items-center justify-center rounded-lg border border-line p-2 text-ink transition-all hover:bg-surface-muted'
              aria-label='Toggle dark mode'
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href={RESUME_DATA.resumeUrl}
              className='flex items-center gap-2 rounded-lg border border-line bg-surface-muted px-4 py-2 text-sm font-bold text-ink transition-all hover:bg-accent-soft'
            >
              <Download size={16} />
              CV
            </a>
            <a
              href='#contact'
              className='flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-bold text-paper transition-all hover:bg-accent'
            >
              Hire Me
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className='flex items-center gap-2 md:hidden'>
            <button
              onClick={onToggleDark}
              className='rounded-lg border border-line p-2 text-ink'
              aria-label='Toggle dark mode'
            >
              {isDark ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <button
              className='rounded-lg border border-line p-2 text-ink'
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label='Toggle navigation menu'
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className='mt-4 border-t border-line pt-4 md:hidden'
            >
              <div className='grid gap-2'>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='rounded-lg px-3 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-surface-muted'
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={RESUME_DATA.resumeUrl}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='mt-2 flex items-center gap-2 rounded-lg bg-accent px-3 py-3 font-bold text-paper'
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

const ProfileWorkbench = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.15, duration: 0.55 }}
    className='relative'
  >
    <div className='absolute -inset-4 -z-10 rounded-lg border border-line bg-paper/50' />
    <div className='overflow-hidden rounded-lg border border-line bg-surface shadow-[0_24px_70px_rgba(32,35,31,0.12)]'>
      <div className='flex items-center justify-between border-b border-line bg-paper px-5 py-4'>
        <div className='flex items-center gap-2'>
          <span className='h-3 w-3 rounded-full bg-coral' />
          <span className='h-3 w-3 rounded-full bg-honey' />
          <span className='h-3 w-3 rounded-full bg-accent' />
        </div>
        <span className='text-xs font-bold uppercase tracking-widest text-muted'>
          Portfolio Workbench
        </span>
      </div>

      <div className='grid lg:grid-cols-[0.82fr_1.18fr]'>
        <div className='border-b border-line p-6 lg:border-b-0 lg:border-r'>
          <div className='flex aspect-square max-h-52 min-h-48 flex-col justify-between rounded-lg bg-ink p-6 text-paper'>
            <div className='flex items-center justify-between'>
              <span className='text-xs font-bold uppercase tracking-widest text-paper/60'>
                Developer
              </span>
              <Code2 size={22} className='text-coral' />
            </div>
            <div>
              <div className='font-display text-6xl font-bold tracking-tight'>
                PK
              </div>
              <div className='mt-2 text-sm font-medium text-paper/70'>
                Full Stack Web Developer
              </div>
            </div>
          </div>
        </div>

        <div className='p-6'>
          <div className='rounded-lg bg-ink p-5 font-mono text-sm text-paper'>
            <div className='mb-4 flex items-center justify-between border-b border-paper/10 pb-3'>
              <span className='text-paper/50'>stack.config.ts</span>
              <span className='text-accent-soft'>live</span>
            </div>
            <div className='space-y-3'>
              <p>
                <span className='text-coral'>const</span>{' '}
                <span className='text-accent-soft'>developer</span> = "
                {RESUME_DATA.name}";
              </p>
              <p>
                <span className='text-coral'>focus</span>: scalable frontend +
                backend systems;
              </p>
              <p>
                <span className='text-coral'>ships</span>: APIs, dashboards,
                auth, payments;
              </p>
              <p>
                <span className='text-coral'>tools</span>: React, TypeScript,
                Node, SQL;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6'
    >
      <div
        className='absolute inset-0 bg-ink/45 backdrop-blur-sm'
        onClick={onClose}
      />
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 20 }}
        className='relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-line bg-paper shadow-2xl'
      >
        <button
          onClick={onClose}
          className='absolute right-5 top-5 z-10 rounded-lg bg-surface-muted p-2 text-muted transition-colors hover:bg-accent-soft hover:text-ink'
          aria-label='Close project details'
        >
          <X size={20} />
        </button>

        <div className='border-b border-line bg-surface-muted px-8 py-7 md:px-10'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-lg bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent'>
            <Code2 size={14} />
            Case Study
          </div>
          <h3 className='pr-12 text-3xl font-display font-bold tracking-tight text-ink md:text-4xl'>
            {project.title}
          </h3>
        </div>

        <div className='p-8 md:p-10'>
          <div className='mb-8 flex flex-wrap gap-2'>
            {project.tech.map((tech) => (
              <span
                key={tech}
                className='rounded-lg border border-line bg-surface px-3 py-1 text-xs font-bold uppercase tracking-widest text-muted'
              >
                {tech}
              </span>
            ))}
          </div>

          <p className='mb-8 text-lg leading-relaxed text-muted'>
            {project.longDescription || project.description}
          </p>

          {project.highlights && (
            <ul className='space-y-3'>
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className='flex items-start gap-3 leading-relaxed text-ink-soft'
                >
                  <CheckCircle2
                    className='mt-1 shrink-0 text-accent'
                    size={17}
                  />
                  {item}
                </li>
              ))}
            </ul>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-10 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-paper transition-all hover:bg-accent-strong'
            >
              Live Demo <ExternalLink size={18} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const isDarkMode = savedMode ? JSON.parse(savedMode) : prefersDark;
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className='min-h-screen selection:bg-accent-soft selection:text-ink'>
      <Navbar isDark={isDark} onToggleDark={toggleDarkMode} />

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <section className='relative overflow-hidden bg-canvas pt-32 pb-16 md:pt-40 md:pb-20'>
        <div className='absolute inset-0 section-texture opacity-80' />
        <div className='relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr]'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='mb-6 inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-accent-soft px-3 py-2 text-xs font-bold uppercase tracking-widest text-accent'>
              <CheckCircle2 size={15} />
              Available for New Opportunities
            </div>
            <h1 className='max-w-4xl text-5xl font-display font-bold tracking-tight text-ink sm:text-6xl'>
              Full-stack developer for polished, scalable product experiences.
            </h1>
            <p className='mt-7 max-w-2xl text-xl leading-relaxed text-muted'>
              I'm{' '}
              <span className='font-semibold text-ink'>{RESUME_DATA.name}</span>
              , a {RESUME_DATA.role} building production web apps across React,
              TypeScript, Node.js, APIs, databases, and cloud workflows.
            </p>

            <div className='mt-9 flex flex-wrap gap-4'>
              <a
                href='#projects'
                className='flex items-center gap-2 rounded-lg bg-ink px-7 py-4 font-bold text-paper transition-all hover:bg-accent'
              >
                View My Work
                <ChevronRight size={20} />
              </a>
              <a
                href={RESUME_DATA.resumeUrl}
                className='flex items-center gap-2 rounded-lg border border-line bg-paper px-7 py-4 font-bold text-ink transition-all hover:bg-surface-muted'
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            <div className='mt-10 grid max-w-xl grid-cols-3 border-y border-line bg-paper/60'>
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className='px-4 py-5 first:pl-2'>
                  <div className='font-display text-3xl font-bold text-ink'>
                    {stat.value}
                  </div>
                  <div className='mt-1 text-xs font-bold uppercase tracking-widest text-subtle'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <ProfileWorkbench />
        </div>

        <div className='relative mx-auto mt-12 max-w-7xl px-6'>
          <div className='flex flex-wrap items-center gap-3 border-t border-line pt-6'>
            <span className='mr-2 text-xs font-bold uppercase tracking-widest text-subtle'>
              Core Stack
            </span>
            {STACK_HIGHLIGHTS.map((item) => (
              <span
                key={item}
                className='rounded-lg border border-line bg-paper px-3 py-2 text-sm font-semibold text-ink-soft'
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id='about' className='bg-paper py-24'>
        <div className='mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]'>
          <div>
            <SectionHeading
              eyebrow='About'
              description={RESUME_DATA.objective}
              icon={User}
            />
          </div>

          <div className='space-y-4'>
            {[
              { icon: Mail, label: 'Email', value: RESUME_DATA.email },
              { icon: Phone, label: 'Phone', value: RESUME_DATA.phone },
              { icon: MapPin, label: 'Location', value: RESUME_DATA.location },
            ].map(({ icon: Icon, label, value }) => (
              <a
                key={label}
                href={label === 'Email' ? `mailto:${RESUME_DATA.email}` : '#'}
                className='flex items-center justify-between rounded-lg border border-line bg-surface p-5 transition-all hover:border-accent/40 hover:shadow-sm'
              >
                <div className='flex items-center gap-4'>
                  <div className='flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent'>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className='text-xs font-bold uppercase tracking-widest text-subtle'>
                      {label}
                    </div>
                    <div className='mt-1 font-medium text-ink-soft'>
                      {value}
                    </div>
                  </div>
                </div>
                {label === 'Email' && <ArrowUpRight size={18} />}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id='skills' className='bg-canvas py-24'>
        <div className='mx-auto max-w-7xl px-6'>
          <SectionHeading
            eyebrow='Skills'
            description='A practical mix of frontend, backend, database, deployment, service integration, and AI-assisted development tools.'
            icon={Cpu}
          />

          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {Object.entries(RESUME_DATA.skills).map(
              ([category, skills], index) => {
                const Icon = SKILL_ICONS[index] || Code2;
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className='rounded-lg border border-line bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40'
                  >
                    <div className='mb-6 flex items-center justify-between'>
                      <h3 className='font-display text-xl font-bold text-ink'>
                        {category}
                      </h3>
                      <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent'>
                        <Icon size={20} />
                      </div>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className='rounded-lg border border-line bg-surface-muted px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-accent/50 hover:text-accent'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section id='experience' className='bg-paper py-24'>
        <div className='mx-auto max-w-7xl px-6'>
          <SectionHeading
            eyebrow='Experience'
            description='A timeline of hands-on full-stack work, real client requirements, platform maintenance, and feature delivery.'
            icon={Briefcase}
          />

          <div className='space-y-6'>
            {RESUME_DATA.experience.map((exp, index) => (
              <motion.article
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='grid gap-5 lg:grid-cols-[250px_1fr]'
              >
                <div className='lg:pt-6'>
                  <span className='inline-flex rounded-lg border border-line bg-surface px-4 py-2 text-sm font-bold uppercase tracking-widest text-accent'>
                    {exp.period}
                  </span>
                </div>

                <div className='rounded-lg border border-line bg-surface p-6 shadow-sm'>
                  <div className='flex flex-col justify-between gap-4 border-b border-line pb-6 md:flex-row md:items-start'>
                    <div>
                      <h3 className='font-display text-2xl font-bold text-ink'>
                        {exp.role}
                      </h3>
                      <p className='mt-1 text-lg font-medium text-muted'>
                        {exp.company}
                      </p>
                    </div>
                    <span className='rounded-lg bg-coral-soft px-3 py-1 text-xs font-bold uppercase tracking-widest text-coral'>
                      0{index + 1}
                    </span>
                  </div>

                  <div className='mt-6 flex flex-wrap gap-2'>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='rounded-lg border border-line bg-surface-muted px-2.5 py-1.5 font-mono text-xs text-muted'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className='mt-6 grid gap-3'>
                    {exp.highlights.map((item) => (
                      <li
                        key={item}
                        className='flex items-start gap-3 leading-relaxed text-muted'
                      >
                        <CheckCircle2
                          className='mt-1 shrink-0 text-accent'
                          size={17}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.keyProjects.length > 0 && (
                    <div className='mt-7 border-t border-line pt-6'>
                      {exp.keyProjects.map((project) => (
                        <div key={project.title}>
                          <div className='mb-3 text-xs font-bold uppercase tracking-widest text-accent'>
                            Key Project
                          </div>
                          <h4 className='font-display text-xl font-bold text-ink'>
                            {project.title}
                          </h4>
                          <p className='mt-1 text-sm text-subtle'>
                            {project.subtitle}
                          </p>
                          <ul className='mt-4 grid gap-2'>
                            {project.highlights.map((item) => (
                              <li
                                key={item}
                                className='flex items-start gap-3 text-sm leading-relaxed text-muted'
                              >
                                <ChevronRight
                                  className='mt-0.5 shrink-0 text-coral'
                                  size={15}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id='projects' className='bg-canvas py-24'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-start'>
            <SectionHeading
              eyebrow='Projects'
              description='A selection of my recent work, ranging from full-stack platforms to specialized tools and extensions.'
              icon={Code2}
            />
            <a
              href={RESUME_DATA.github}
              target='_blank'
              rel='noopener noreferrer'
              className='mb-1 inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-5 py-3 font-bold text-ink transition-all hover:border-accent/40 hover:text-accent'
            >
              GitHub
              <ExternalLink size={18} />
            </a>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            {RESUME_DATA.projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                tabIndex={0}
                role='button'
                onClick={() => setSelectedProject(project as Project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedProject(project as Project);
                  }
                }}
                className={`group cursor-pointer rounded-lg border border-line bg-surface p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/40`}
              >
                <div className={`grid gap-8`}>
                  <div>
                    <div className='mb-6 flex items-center justify-between'>
                      <span className='rounded-lg bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent'>
                        0{index + 1}
                      </span>
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          onClick={(event) => event.stopPropagation()}
                          className='text-subtle transition-colors hover:text-accent'
                          aria-label={`Open live demo for ${project.title}`}
                        >
                          <ArrowUpRight size={20} />
                        </a>
                      ) : (
                        <ArrowUpRight className='text-subtle transition-colors group-hover:text-accent' />
                      )}
                    </div>
                    <h3 className='font-display text-3xl font-bold tracking-tight text-ink transition-colors group-hover:text-accent'>
                      {project.title}
                    </h3>
                    <p className='mt-4 leading-relaxed text-muted'>
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className='flex flex-wrap gap-2'>
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className='rounded-lg border border-line bg-surface-muted px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-muted'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className='mt-7'>
                      <div className='inline-flex items-center gap-2 text-sm font-bold text-accent'>
                        View Details
                        <ChevronRight
                          size={16}
                          className='transition-transform group-hover:translate-x-1'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-paper py-14'>
        <div className='mx-auto max-w-7xl px-6'>
          <SectionHeading
            eyebrow='Education'
            description='Formal education that supports the technical foundation.'
            icon={GraduationCap}
          />

          <div className='rounded-lg border border-line bg-surface p-7'>
            {RESUME_DATA.education.map((edu) => (
              <div key={edu.degree}>
                <span className='mb-4 block text-xs font-bold uppercase tracking-widest text-accent'>
                  {edu.period}
                </span>
                <h3 className='font-display text-2xl font-bold text-ink'>
                  {edu.degree}
                </h3>
                <p className='mt-3 text-muted'>{edu.institution}</p>
                <p className='mt-1 text-sm text-subtle'>{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-paper pt-4 pb-14'>
        <div className='mx-auto max-w-7xl px-6'>
          <SectionHeading eyebrow='Additional Info' icon={Sparkles} />

          <div className='grid gap-6 sm:grid-cols-2'>
            <div className='rounded-lg border border-line bg-surface p-7'>
              <div className='mb-5 flex items-center gap-3'>
                <Languages className='text-accent' size={22} />
                <h3 className='font-display text-xl font-bold text-ink'>
                  Languages
                </h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {RESUME_DATA.additional.languages.map((language) => (
                  <span
                    key={language}
                    className='rounded-lg border border-line bg-surface-muted px-3 py-2 text-sm font-medium text-ink-soft'
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>

            <div className='rounded-lg border border-line bg-surface p-7'>
              <div className='mb-5 flex items-center gap-3'>
                <Sparkles className='text-coral' size={22} />
                <h3 className='font-display text-xl font-bold text-ink'>
                  Interests
                </h3>
              </div>
              <div className='flex flex-wrap gap-2'>
                {RESUME_DATA.additional.interests.map((interest) => (
                  <span
                    key={interest}
                    className='rounded-lg border border-line bg-surface-muted px-3 py-2 text-sm font-medium text-ink-soft'
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='contact' className='bg-canvas py-24'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='grid gap-8 rounded-lg border border-line bg-ink p-8 text-paper md:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-12'>
            <div>
              <div className='mb-5 inline-flex items-center gap-2 rounded-lg bg-paper/10 px-3 py-2 text-xs font-bold uppercase tracking-widest text-accent-soft'>
                <Mail size={15} />
                Contact
              </div>
              <h2 className='max-w-3xl text-4xl font-display font-bold tracking-tight md:text-6xl'>
                Let's build something useful, elegant, and dependable.
              </h2>
              <p className='mt-6 max-w-2xl text-lg leading-relaxed text-paper/70'>
                I am currently looking for new opportunities and open to
                conversations about full-stack development roles.
              </p>
            </div>

            <div className='flex flex-col justify-end gap-4'>
              <a
                href={`mailto:${RESUME_DATA.email}`}
                className='flex items-center justify-between rounded-lg bg-paper px-5 py-4 font-bold text-ink transition-all hover:bg-accent-soft'
              >
                <span className='flex items-center gap-3'>
                  <Mail size={20} />
                  Send an Email
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href={RESUME_DATA.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-between rounded-lg border border-paper/15 px-5 py-4 font-bold text-paper transition-all hover:border-accent-soft hover:text-accent-soft'
              >
                <span className='flex items-center gap-3'>
                  <Linkedin size={20} />
                  LinkedIn
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a
                href={RESUME_DATA.github}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-between rounded-lg border border-paper/15 px-5 py-4 font-bold text-paper transition-all hover:border-accent-soft hover:text-accent-soft'
              >
                <span className='flex items-center gap-3'>
                  <Github size={20} />
                  GitHub
                </span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className='border-t border-line bg-paper py-10'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left'>
          <div className='flex items-center gap-3'>
            <span className='flex h-10 w-10 items-center justify-center rounded-lg bg-ink font-display text-sm font-bold text-paper'>
              PK
            </span>
            <span className='font-display text-lg font-bold text-ink'>
              {RESUME_DATA.name}
            </span>
          </div>

          <div className='text-sm font-medium text-subtle'>
            &copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights
            reserved.
          </div>

          <div className='flex items-center gap-5'>
            <a
              href={RESUME_DATA.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-subtle transition-colors hover:text-accent'
              aria-label='GitHub'
            >
              <Github size={20} />
            </a>
            <a
              href={RESUME_DATA.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-subtle transition-colors hover:text-accent'
              aria-label='LinkedIn'
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className='text-subtle transition-colors hover:text-accent'
              aria-label='Email'
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
