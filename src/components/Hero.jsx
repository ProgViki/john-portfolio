// src/components/Hero.jsx
import React from 'react';
import { GraduationCap, MapPin, Calendar, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

const Hero = ({ darkMode, scrollToSection }) => {
  return (
    <section id="hero" className="pt-20 pb-12 md:pt-28 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg">
              <Calendar size={16} className="mr-2" />
              <span className="text-sm font-medium">{developerInfo.tagline}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I'm <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">{developerInfo.name}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-600 dark:text-gray-300">
              {developerInfo.title}
            </h2>
            
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300 max-w-3xl">
              {developerInfo.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
              >
                <Mail size={18} className="mr-2" />
                Get In Touch
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border transition-all ${
                  darkMode 
                    ? 'border-gray-700 hover:bg-gray-800' 
                    : 'border-gray-300 hover:bg-gray-100'
                }`}
              >
                View My Projects
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center">
                <GraduationCap size={20} className="text-blue-500 mr-2" />
                <span className="font-medium">{developerInfo.status}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-blue-500 mr-2" />
                <span className="font-medium">{developerInfo.location}</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <a href={developerInfo.github} target="_blank" rel="noopener noreferrer" 
                className={`p-3 rounded-full transition-all hover:scale-110 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}>
                <Github size={20} />
              </a>
              <a href={developerInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all hover:scale-110 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}>
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${developerInfo.email}`}
                className={`p-3 rounded-full transition-all hover:scale-110 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                }`}>
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:w-2/5">
            <div className={`relative rounded-2xl overflow-hidden p-1 ${
              darkMode 
                ? 'bg-gradient-to-br from-blue-900/30 to-teal-900/30' 
                : 'bg-gradient-to-br from-blue-100 to-teal-100'
            }`}>
              <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6`}>
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                    JS
                  </div>
                  <h3 className="text-xl font-bold">Learning Journey</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">From Basics to React</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">HTML & CSS</span>
                    <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
                      Strong
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">JavaScript</span>
                    <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium">
                      Intermediate
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">React.js</span>
                    <span className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-sm font-medium">
                      Learning
                    </span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700 dark:border-gray-600">
                  <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
                    "Building this portfolio with React & Tailwind CSS"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;