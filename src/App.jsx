import About from './components/About'
import Achievements from './components/Achievements'
import BackgroundLayer from './components/BackgroundLayer'
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
import { ThemeProvider } from './context/ThemeContext'

function AppContent() {
  return (
    <div className="theme-transition relative z-10 min-h-screen">
      <BackgroundLayer />
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
