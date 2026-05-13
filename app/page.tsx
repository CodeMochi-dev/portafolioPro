import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Education from '@/components/sections/Education'
import Experience from '@/components/sections/Experience'
import Services from '@/components/sections/Services'
import Contact from '@/components/sections/Contact'
import FloatingButtons from '@/components/ui/FloatingButtons'
import ScrollProgress from '@/components/ui/ScrollProgress'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Services />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
