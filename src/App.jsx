// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);

  // Scroll handler for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
      <Navigation 
        activeSection={activeSection} 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
      />
      
      <Hero 
        darkMode={darkMode} 
        scrollToSection={scrollToSection}
      />
      
      <Projects darkMode={darkMode} />
      
      <Skills darkMode={darkMode} />
      
      <Contact darkMode={darkMode} />
      
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;