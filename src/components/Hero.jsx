// src/components/Hero.jsx
import React from 'react';
import { Briefcase, Mail, Github, Linkedin, ChevronRight, Terminal, Code, Star, BookOpen } from 'lucide-react';
import { portfolioData, codeHighlights } from '../data/portfolioData';

const Hero = ({ darkMode, scrollToSection }) => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <Briefcase size={16} className="mr-2" />
              <span className="text-sm font-medium">{portfolioData.tagline}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{portfolioData.name}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {portfolioData.title}
            </h2>
            
            <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {portfolioData.bio}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transition-all"
              >
                <Mail size={18} className="mr-2" />
                Contact Me
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`inline-flex items-center px-6 py-3 rounded-lg font-medium border ${
                  darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'
                } transition-colors`}
              >
                View Projects
                <ChevronRight size={18} className="ml-2" />
              </button>
            </div>
            
            <div className="flex space-x-6 mt-10">
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                <Github size={20} />
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${portfolioData.email}`} className={`p-3 rounded-full ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/5">
            <CodeHighlightsCard darkMode={darkMode} />
          </div>
        </div>
      </div>
    </section>
  );
};

const CodeHighlightsCard = ({ darkMode }) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden p-1 ${darkMode ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}>
      <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Code className="text-white" size={24} />
            </div>
            <div className="ml-4">
              <h3 className="font-bold">Code Highlights</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Recent Projects</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {codeHighlights.map((project, index) => (
              <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{project.name}</span>
                  {project.featured && <Star size={16} className="text-yellow-500 fill-yellow-500" />}
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.tech}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700 flex justify-between">
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Currently Learning</p>
              <p className="font-medium">TypeScript & Next.js</p>
            </div>
            <BookOpen size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;