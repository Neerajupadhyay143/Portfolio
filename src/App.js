import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import About from "./components/About.jsx"
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {

  return (
    <>

      <div className=' bg-black h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0'>
        {/* header */}
        <Header />

        <section id="hero" className='snap-start'>
          <Hero />
        </section>

        <section id="about" className='snap-center'>
          <About />
        </section>

        <section id="experience" className='snap-center'>
          <WorkExperience />
        </section>

        <section id="skills" className='snap-start'>
          <Skills />
        </section>

        <section id="projects" className='snap-start'>
          <Projects />
        </section>
        <section id="contact" className='snap-start'>
          <Contact />
        </section>
      </div >




    </>
  );
}

export default App;
