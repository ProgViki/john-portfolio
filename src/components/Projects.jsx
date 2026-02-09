// src/components/Projects.jsx
import React from 'react';
import { ExternalLink, Github, Code, Zap, Smartphone } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = ({ darkMode }) => {
  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'intermediate': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'advanced': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <section id="projects" className={`py-16 ${darkMode ? 'bg-gray-900/30' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
            <Code size={16} className="mr-2" />
            <span className="text-sm font-medium">Hands-on Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I've Built</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Practical applications of my HTML, CSS, and JavaScript skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${
                darkMode 
                  ? 'border-gray-700 bg-gray-800/50 hover:border-blue-500/30' 
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty} Level
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {project.tech.includes('HTML') && <span className="text-xs font-medium px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 rounded">HTML</span>}
                    {project.tech.includes('CSS') && <span className="text-xs font-medium px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded">CSS</span>}
                    {project.tech.includes('JavaScript') && <span className="text-xs font-medium px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded">JS</span>}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Zap size={16} className="mr-2 text-blue-500" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode 
                          ? 'bg-gray-700 text-blue-300' 
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-6 border-t border-gray-700 dark:border-gray-600">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center font-medium hover:text-blue-500 transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    View Code
                  </a>
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center font-medium hover:text-blue-500 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className={`inline-flex items-center px-6 py-3 rounded-lg border ${
            darkMode 
              ? 'border-gray-700 hover:bg-gray-800' 
              : 'border-gray-300 hover:bg-gray-100'
          } transition-colors`}>
            <Smartphone size={18} className="mr-2" />
            <span>All projects are fully responsive and mobile-friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;