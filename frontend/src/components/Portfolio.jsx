import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const Portfolio = ( {data} ) => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const t = data[language];


  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Language Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Globe size={16} />
                <span className="text-sm font-medium">{language === 'es' ? 'EN' : 'ES'}</span>
              </button>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {Object.entries(t.nav).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(section)}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-white/80'
                  }`}
                >
                  {t.navLabels[section] || t.navLabels[key]}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button & Language */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center space-x-1 px-2 py-1 rounded bg-white/10"
              >
                <Globe size={14} />
                <span className="text-xs">{language === 'es' ? 'EN' : 'ES'}</span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {Object.entries(t.nav).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {t.navLabels[section] || t.navLabels[key]}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

     <Hero data={data} language={language} hero={t.hero} scrollToSection={scrollToSection} />
     <About language={language} data={t.about} />
     <Skills language={language} title={t.skills.title} skills={data.skills_data} isVisible={isVisible} />
     <Projects language={language} projects={t.projects} />
     <Experience language={language} experience={t.experience} />
     <Contact data={data} language={language} contact={t.contact} />


      {/* Contact Section */}
    </div>
  );
};

export default Portfolio;