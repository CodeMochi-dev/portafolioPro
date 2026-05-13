"use client"

import { motion } from 'framer-motion'
import { Briefcase, FolderGit2, Code2, Users } from 'lucide-react'
import { profile } from '@/lib/data'
import Image from 'next/image'

const stats = [
  { icon: Briefcase, label: 'Años de experiencia', value: profile.yearsExperience },
  { icon: FolderGit2, label: 'Proyectos completados', value: profile.projectsCompleted },
  { icon: Code2, label: 'Tecnologías dominadas', value: profile.technologiesMastered },
  { icon: Users, label: 'Colaboraciones', value: 5 },
]

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
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
            <span className="gradient-text">Sobre Mí</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conoce más sobre mi trayectoria, mis objetivos y lo que me diferencia como desarrolladora.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-secondary/30 rounded-2xl" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden glass p-2">
                <Image
                  src={profile.profileImage}
                  alt={profile.name}
                  width={400}
                  height={500}
                  className="rounded-xl w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-xl" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 px-4 py-3 rounded-xl glass glow-primary"
              >
                <p className="text-2xl font-bold text-primary">{profile.yearsExperience}+</p>
                <p className="text-xs text-muted-foreground">Año en desarrollo</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              ¡Hola! Soy <span className="text-primary">{profile.shortName}</span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {profile.bio}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {profile.objective}
            </p>

            {/* What I do cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl glass">
                <h4 className="font-semibold text-secondary mb-2">¿Qué hago?</h4>
                <p className="text-sm text-muted-foreground">
                  Desarrollo aplicaciones web modernas con Vue.js, React y JavaScript
                </p>
              </div>
              <div className="p-4 rounded-xl glass">
                <h4 className="font-semibold text-accent mb-2">¿Qué me diferencia?</h4>
                <p className="text-sm text-muted-foreground">
                  Atención al detalle, análisis profundo y trabajo bajo presión
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="p-6 rounded-2xl glass text-center group hover:glow-primary transition-all"
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <motion.p
                  className="text-3xl font-bold mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.value}+
                </motion.p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
