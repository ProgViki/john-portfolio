// src/components/LearningJourney.jsx
import React from 'react';
import { Target, BookOpen, TrendingUp, Rocket, Award } from 'lucide-react';
import { learningPath, goals } from '../data/portfolioData';

const LearningJourney = ({ darkMode }) => {
  return (
    <section id="learning" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
            <BookOpen size={16} className="mr-2" />
            <span className="text-sm font-medium">Growth Mindset</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Learning Journey</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Continuously expanding my skillset and knowledge base
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center mb-6">
              <TrendingUp size={24} className="text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold">Current Learning Path</h3>
            </div>
            
            <div className="space-y-6">
              {learningPath.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.skill}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'In Progress' 
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                        : item.status === 'Next'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div 
                      className={`h-full rounded-full ${
                        item.status === 'In Progress' 
                          ? 'bg-gradient-to-r from-blue-500 to-teal-500'
                          : item.status === 'Next'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                          : 'bg-gradient-to-r from-gray-400 to-gray-500'
                      }`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center mb-6">
              <Target size={24} className="text-teal-500 mr-3" />
              <h3 className="text-2xl font-bold">My Goals</h3>
            </div>
            
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <div 
                  key={index}
                  className="flex items-start"
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                    darkMode ? 'bg-teal-900/30' : 'bg-teal-100'
                  }`}>
                    <Award size={16} className="text-teal-500" />
                  </div>
                  <div>
                    <p className="font-medium">{goal}</p>
                    <div className="flex items-center mt-1">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-1 h-1 rounded-full ${i < 3 ? 'bg-teal-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                          ></div>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                        {index < 2 ? 'In progress' : 'Upcoming'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`rounded-2xl p-8 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-50 to-teal-50'}`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <Rocket size={24} className="text-blue-500 mr-3" />
                <h3 className="text-2xl font-bold">Why I'm a Great Intern Candidate</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                  <span><strong>Strong fundamentals:</strong> Deep understanding of core web technologies</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                  <span><strong>Fast learner:</strong> Proven ability to pick up new concepts quickly</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  <span><strong>Problem solver:</strong> Enjoy debugging and finding creative solutions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-teal-500 mr-3"></div>
                  <span><strong>Team player:</strong> Excited to collaborate and learn from experienced developers</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 text-center">
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="text-4xl mb-4">📈</div>
                <h4 className="font-bold text-lg mb-2">Growth Potential</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  I bring enthusiasm, dedication, and a solid foundation ready to be shaped by professional experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;