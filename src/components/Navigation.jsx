// src/components/Navigation.jsx
import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, darkMode, toggleDarkMode, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = ['home', 'projects', 'skills', 'contact'];

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Terminal className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className="text-xl font-bold">DevPortfolio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize font-medium transition-colors ${
                  activeSection === section 
                    ? (darkMode ? 'text-blue-400' : 'text-blue-600') 
                    : (darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600')
                }`}
              >
                {section}
              </button>
            ))}
            <button 
              onClick={toggleDarkMode}
              className={`px-4 py-2 rounded-lg font-medium ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg p-4`}>
            <div className="flex flex-col space-y-4">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`capitalize font-medium text-left py-2 px-4 rounded ${
                    activeSection === section 
                      ? (darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600') 
                      : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200')
                  }`}
                >
                  {section}
                </button>
              ))}
              <button 
                onClick={toggleDarkMode}
                className={`px-4 py-2 rounded-lg font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;