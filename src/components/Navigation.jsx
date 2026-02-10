// src/components/Navigation.jsx
import React, { useState } from 'react';
import { Code, Menu, X, Home, FolderKanban, Wrench, Mail } from 'lucide-react';


const developerInfo = {
  name: "JohnOnye Onyekwere",
}

const Navigation = ({  darkMode, toggleDarkMode, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: <Home size={18} /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Wrench size={18} /> },
    { id: 'learning', label: 'Learning', icon: <Code size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> }
  ];

 
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      darkMode ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'
    } border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
              <Code className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <span className="text-lg font-bold">{developerInfo.name.split(' ')[0]}</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-all hover:scale-105"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
            <button 
              onClick={toggleDarkMode}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-100' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 rounded-xl p-4 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all ${
                    darkMode 
                      ? 'hover:bg-gray-700' 
                      : 'hover:bg-gray-200'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
              <button 
                onClick={toggleDarkMode}
                className={`px-4 py-3 rounded-lg font-medium mt-2 ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {darkMode ? '☀️ Switch to Light Mode' : '🌙 Switch to Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;