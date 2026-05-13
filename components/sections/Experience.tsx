'use client'

import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
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
            <span className="gradient-text">Experiencia</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria profesional y los roles que he desempeñado.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 md:p-8 rounded-2xl glass hover:glow-primary transition-all"
            >
              {/* Timeline connector */}
              {index < experience.length - 1 && (
                <div className="absolute left-12 top-full h-8 w-0.5 bg-gradient-to-b from-primary to-transparent" />
              )}

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-secondary font-medium">{item.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        {item.period}
                      </span>
                      <span className={`flex items-center gap-1 text-sm px-2 py-0.5 rounded-full ${
                        item.modality === 'Remoto' ? 'bg-green-500/20 text-green-400' :
                        item.modality === 'Híbrido' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        <MapPin size={14} />
                        {item.modality}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {item.responsibilities.map((responsibility, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full glass">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
