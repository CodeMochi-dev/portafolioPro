'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import { education } from '@/lib/data'

const iconMap = {
  degree: GraduationCap,
  bootcamp: BookOpen,
  certification: Award,
}

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            <span className="gradient-text">Educación</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi formación académica y profesional en desarrollo de software.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {education.map((item, index) => {
            const Icon = iconMap[item.type]
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary z-10" />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="p-6 rounded-2xl glass hover:glow-primary transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-primary/20">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-secondary font-medium mb-3">{item.institution}</p>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                    <span className={`inline-block mt-4 px-3 py-1 text-xs rounded-full ${
                      item.type === 'bootcamp' ? 'bg-secondary/20 text-secondary' :
                      item.type === 'degree' ? 'bg-primary/20 text-primary' :
                      'bg-accent/20 text-accent'
                    }`}>
                      {item.type === 'bootcamp' ? 'Bootcamp' :
                       item.type === 'degree' ? 'Título' : 'Certificación'}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
