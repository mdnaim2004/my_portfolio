import About from './components/About'
import Achievements from './components/Achievements'
import BackgroundEffects from './components/BackgroundEffects'
import CinematicBackground from './components/CinematicBackground'
import Contact from './components/Contact'
import EducationTimeline from './components/EducationTimeline'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Research from './components/Research'
import Skills from './components/Skills'
import TechStack from './components/TechStack'

function App() {
  return (
    <div className="relative min-h-screen z-10">
      <CinematicBackground />
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Research />
        <Achievements />
        <EducationTimeline />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
