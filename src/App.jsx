

import { Route, Router } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { Element } from 'react-scroll'

function App() {


  return (
    <div className="pt-14 bg-[#0f1629] px-4 sm:px-6 lg:px-8">
      <NavBar />

      {/* <Router>
        <Route path='/' element={<Hero />} />
        <Route path='/skills' element={<Skills />} />
      </Router> */}

      <Element id='hero' name="hero">
        <Hero />
        <About />
      </Element>

      <Element id='skills' name="skills"><Skills /></Element>
      <Element id='education' name="education"><Education /></Element>
      <Element id='projects' name="projects"><Projects /></Element>
      <Element id='contact' name="contact"><Contact /></Element>

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
