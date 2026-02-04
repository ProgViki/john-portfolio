// src/components/Skills.jsx
import React from 'react';
import { Code, ChevronRight } from 'lucide-react';
import { skills, portfolioData } from '../data/portfolioData';

const Skills = ({ darkMode }) => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Technologies I've worked with and am currently learning
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCategory 
              key={category} 
              category={category} 
              skills={skillList} 
              darkMode={darkMode} 
            />
          ))}
        </div>
        
        <LearningSection darkMode={darkMode} learning={portfolioData.learning} />
      </div>
    </section>
  );
};

const SkillCategory = ({ category, skills, darkMode }) => {
  return (
    <div className={`rounded-xl p-6 border ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-white'}`}>
      <div className="flex items-center mb-6">
        <div className={`w-10 h-10 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} flex items-center justify-center mr-3`}>
          <Code className={darkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />
        </div>
        <h3 className="text-xl font-bold">{category}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <ChevronRight size={16} className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={darkMode ? 'text-gray-200' : 'text-gray-700'}>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const LearningSection = ({ darkMode, learning }) => {
  return (
    <div className={`mt-12 rounded-xl p-8 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-50 to-purple-50'}`}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">Currently Learning</h3>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
            Expanding my skills with modern technologies and best practices
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
          {learning.map((tech, index) => (
            <span key={index} className={`px-4 py-2 rounded-full font-medium ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;