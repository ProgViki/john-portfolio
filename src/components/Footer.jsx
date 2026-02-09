// src/components/Footer.jsx
import React from 'react';
import { Heart, Coffee, Code } from 'lucide-react';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className={`p-2 rounded-lg mr-3 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
              <Code size={20} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
            </div>
            <div>
              <p className="font-bold">John Onye</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Aspiring Frontend Developer</p>
            </div>
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <p className={`flex items-center justify-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Made with <Heart size={14} className="mx-1 text-red-500 fill-red-500" /> and <Coffee size={14} className="mx-1 text-amber-600" />
            </p>
          </div>
          
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            &copy; {currentYear} John Onye. Built with React & Tailwind CSS.
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-gray-700 dark:border-gray-600">
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Currently learning React.js to enhance my frontend development skills.
            This portfolio itself is built with React as a learning project!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;