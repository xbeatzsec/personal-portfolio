import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import './styles/global.css';

const App = () => {
  useEffect(() => {
    // Efeito de glitch aleatório
    const glitchElements = document.querySelectorAll('.glitch-text');
    const glitchInterval = setInterval(() => {
      const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
      randomElement.classList.add('glitch');
      setTimeout(() => {
        randomElement.classList.remove('glitch');
      }, 1000);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App; 