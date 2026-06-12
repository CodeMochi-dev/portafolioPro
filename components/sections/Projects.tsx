'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { projects, type Project } from '@/lib/data'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'

const categories = ['Todos', 'Frontend', 'Backend', 'Full Stack', 'UI/UX'] as const

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos')
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const featuredProjects = projects.filter(p => p.featured)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section id="projects" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selección de proyectos destacados en desarrollo de software.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Proyectos Destacados</h3>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {featuredProjects.map((project) => (
                  <div key={project.id} className="flex-[0_0_100%] min-w-0 px-2">
                    <FeaturedProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:bg-primary/20 transition-colors z-10"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:bg-primary/20 transition-colors z-10"
              aria-label="Siguiente proyecto"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground glow-primary'
                  : 'glass hover:bg-card'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Repos Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/CodeMochi-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass hover:bg-primary/20 transition-all font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Github size={20} />
            Ver todos los repositorios
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="group grid md:grid-cols-2 gap-8 p-6 lg:p-8 rounded-[2rem] glass border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
      <div className={`relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${
            project.status === 'Terminado' ? 'bg-green-500/20 text-green-400' :
            project.status === 'En desarrollo' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-blue-500/20 text-blue-400'
          }`}>
            {project.status}
          </span>
          <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
            {project.category}
          </span>
        </div>
        <h4 className="text-3xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">{project.title}</h4>
        {project.slogan && (
          <p className="text-primary font-medium mb-2 text-sm">{project.slogan}</p>
        )}
        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 text-[11px] uppercase tracking-wider font-semibold rounded-full border border-primary/20 bg-primary/10 text-primary">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ExternalLink size={16} />
            Demo
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium hover:bg-card transition-colors"
          >
            <Github size={16} />
            Código
          </a>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col rounded-[1.5rem] bg-card/40 backdrop-blur-md border border-white/5 hover:border-white/20 overflow-hidden hover:glow-primary transition-all duration-500 shadow-lg hover:shadow-xl"
    >
      {/* Image / Gradient */}
      <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary text-primary-foreground"
            whileHover={{ scale: 1.1 }}
            aria-label="Ver demo"
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass"
            whileHover={{ scale: 1.1 }}
            aria-label="Ver código"
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-bold text-xl tracking-tight group-hover:text-secondary transition-colors">
            {project.title}
          </h4>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            project.status === 'Terminado' ? 'bg-green-500/20 text-green-400' :
            project.status === 'En desarrollo' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-blue-500/20 text-blue-400'
          }`}>
            {project.status}
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full border border-secondary/20 bg-secondary/10 text-secondary">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full border border-muted bg-muted/20 text-muted-foreground">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
