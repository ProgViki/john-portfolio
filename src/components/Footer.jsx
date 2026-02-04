// src/components/Footer.jsx
import React from 'react';
import { Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Terminal className={`h-6 w-6 mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className="font-bold">{portfolioData.name}</span>
            <span className={`mx-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>•</span>
            <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{portfolioData.title}</span>
          </div>
          
          <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
            &copy; {new Date().getFullYear()} Portfolio. Built with React & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;