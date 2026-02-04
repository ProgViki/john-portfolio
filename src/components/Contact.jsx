// src/components/Contact.jsx
import React from 'react';
import { Mail, Github, Linkedin, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = ({ darkMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Message sent! (This is a demo)');
  };

  return (
    <section id="contact" className={`py-16 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm actively looking for internship opportunities and would love to hear from you!
            </p>
          </div>
          
          <div className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ContactInfo darkMode={darkMode} />
                <ContactForm darkMode={darkMode} handleSubmit={handleSubmit} />
              </div>
              
              <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <Users size={20} className="mr-3 text-blue-500" />
                    <span className="font-medium">Available for Summer 2024 Internships</span>
                  </div>
                  <a 
                    href={portfolioData.resumeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`px-6 py-3 rounded-lg font-medium border ${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ darkMode }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
      <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        I'm excited about opportunities to contribute to innovative projects and grow as a developer. 
        Feel free to reach out for internship positions or collaborative projects.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-center">
          <Mail size={20} className={`mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <div>
            <p className="font-medium">Email</p>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{portfolioData.email}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Github size={20} className={`mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <div>
            <p className="font-medium">GitHub</p>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>github.com/alexchen</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Linkedin size={20} className={`mr-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <div>
            <p className="font-medium">LinkedIn</p>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>linkedin.com/in/alexchen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = ({ darkMode, handleSubmit }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Quick Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Your Name
          </label>
          <input 
            type="text" 
            required
            className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            placeholder="John Smith"
          />
        </div>
        
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Your Email
          </label>
          <input 
            type="email" 
            required
            className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Message
          </label>
          <textarea 
            rows="4"
            required
            className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`}
            placeholder="Hello, I'd like to discuss an internship opportunity..."
          ></textarea>
        </div>
        
        <button 
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;