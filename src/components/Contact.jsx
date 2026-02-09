// src/components/Contact.jsx
import React, { useState } from 'react';
import { Send, FileText, Phone, MapPin, CheckCircle } from 'lucide-react';
import { developerInfo } from '../data/portfolioData';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className={`py-16 ${darkMode ? 'bg-gray-900/30' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
            <Send size={16} className="mr-2" />
            <span className="text-sm font-medium">Let's Connect</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            I'm actively seeking internship opportunities and would love to hear about how I can contribute to your team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Your Name *
                          </label>
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-3 rounded-lg border ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                                : 'bg-white border-gray-300 focus:border-blue-500'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                            placeholder="John Smith"
                          />
                        </div>
                        
                        <div>
                          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Your Email *
                          </label>
                          <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-3 rounded-lg border ${
                              darkMode 
                                ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                                : 'bg-white border-gray-300 focus:border-blue-500'
                            } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Company (Optional)
                        </label>
                        <input 
                          type="text" 
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                              : 'bg-white border-gray-300 focus:border-blue-500'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                          placeholder="Tech Company Inc."
                        />
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Message *
                        </label>
                        <textarea 
                          rows="5"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg border ${
                            darkMode 
                              ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                              : 'bg-white border-gray-300 focus:border-blue-500'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                          placeholder="Hello Jordan, I'd like to discuss an internship opportunity..."
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className={`rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                    <Send size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">{developerInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-teal-900/30' : 'bg-teal-100'}`}>
                    <MapPin size={20} className="text-teal-500" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600 dark:text-gray-300">{developerInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg mr-4 ${darkMode ? 'bg-purple-900/30' : 'bg-purple-100'}`}>
                    <Phone size={20} className="text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium">Available For</p>
                    <p className="text-gray-600 dark:text-gray-300">Summer 2024 Internship</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`rounded-2xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center mb-6">
                <FileText size={20} className="text-blue-500 mr-3" />
                <h3 className="text-xl font-bold">Quick Actions</h3>
              </div>
              
              <div className="space-y-4">
                <a 
                  href={developerInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    darkMode 
                      ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' 
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  Download Resume
                </a>
                
                <a 
                  href={developerInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  View GitHub Profile
                </a>
                
                <a 
                  href={`mailto:${developerInfo.email}?subject=Internship Opportunity`}
                  className={`block w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    darkMode 
                      ? 'bg-teal-900/30 text-teal-400 hover:bg-teal-900/50' 
                      : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                  }`}
                >
                  Email Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;