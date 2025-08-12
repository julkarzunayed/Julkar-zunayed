

import { Route, Router } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {


  return (
    <div className="pt-14 bg-[#0f1629]">
      <NavBar />

      {/* <Router>
        <Route path='/' element={<Hero />} />
        <Route path='/skills' element={<Skills />} />
      </Router> */}
      <section id="hero">
        <Hero />
        <About />
      </section>

      <section id="skills"><Skills /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>

      {/* <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact /> */}
    </div>
  )
}

export default App
