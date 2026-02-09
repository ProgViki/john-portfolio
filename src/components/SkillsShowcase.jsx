// src/components/SkillsShowcase.jsx
import React from 'react';
import { CheckCircle, Star, TrendingUp } from 'lucide-react';
import { coreSkills } from '../data/portfolioData';

const SkillsShowcase = ({ darkMode }) => {
  const getSkillColor = (level) => {
    switch(level.toLowerCase()) {
      case 'advanced': return 'from-green-500 to-emerald-500';
      case 'intermediate': return 'from-blue-500 to-cyan-500';
      case 'beginner': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'HTML': return '📄';
      case 'CSS': return '🎨';
      case 'JS': return '⚡';
      case 'React': return '⚛️';
      case 'Git': return '📚';
      case 'Responsive': return '📱';
      default: return '💻';
    }
  };

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
            <Star size={16} className="mr-2" />
            <span className="text-sm font-medium">Core Competencies</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Technical Skills</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Focused on mastering the fundamentals before diving into advanced frameworks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreSkills.map((skill, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 border transition-all duration-300 hover:scale-[1.02] ${
                darkMode 
                  ? 'border-gray-700 bg-gray-800/50 hover:bg-gray-800' 
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{getIcon(skill.icon)}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getSkillColor(skill.level)} text-white`}>
                  {skill.level}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{skill.description}</p>
              
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <CheckCircle size={14} className="mr-2 text-green-500" />
                <span>Project experience</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`rounded-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-50 to-teal-50'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <TrendingUp size={24} className="text-blue-500 mr-3" />
                <h3 className="text-2xl font-bold">Learning Philosophy</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I believe in building strong foundations. By mastering HTML, CSS, and vanilla JavaScript first, 
                I'm preparing myself to understand and work effectively with modern frameworks like React.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                  <span>Focus on clean, semantic HTML for accessibility</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mr-3"></div>
                  <span>Master CSS fundamentals before CSS-in-JS solutions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  <span>Understand JavaScript deeply before framework abstractions</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <div className={`p-6 rounded-xl text-center ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="font-bold text-lg mb-2">Ready to Learn</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Eager to apply my foundational skills in a professional environment and learn from experienced developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;