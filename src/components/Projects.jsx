// src/components/Projects.jsx
import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

const Projects = ({ darkMode }) => {
  return (
    <section id="projects" className={`py-16 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A collection of my work showcasing full-stack development skills and problem-solving abilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} darkMode={darkMode} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 rounded-lg font-medium border ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}
          >
            View All Projects on GitHub
            <ChevronRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;