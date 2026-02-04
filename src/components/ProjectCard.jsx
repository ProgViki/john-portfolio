// src/components/ProjectCard.jsx
import React from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const ProjectCard = ({ project, darkMode }) => {
  return (
    <div className={`rounded-xl overflow-hidden border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-white'} transition-transform hover:-translate-y-1`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            {project.featured && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <Star size={12} className="mr-1" />
                Featured
              </span>
            )}
          </div>
        </div>
        
        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-700'}`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium"
          >
            <Github size={18} className="mr-2" />
            Code
          </a>
          <a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium"
          >
            <ExternalLink size={18} className="mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;