import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Globe } from 'lucide-react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

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


  const experience = [
    {
      company: t.experience.exp1.company,
      position: t.experience.exp1.position,
      period: t.experience.exp1.period,
      description: t.experience.exp1.desc
    },
    {
      company: t.experience.exp2.company,
      position: t.experience.exp2.position,
      period: t.experience.exp2.period,
      description: t.experience.exp2.desc
    },
    {
      company: t.experience.exp3.company,
      position: t.experience.exp3.position,
      period: t.experience.exp3.period,
      description: t.experience.exp3.desc
    }
  ];

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


      {/* Experience Section */}
      <section id={language === 'es' ? 'experiencia' : 'experience'} className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
            {t.experience.title}
          </h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
                
                <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm ml-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-400">{exp.position}</h3>
                      <h4 className="text-lg text-white/80">{exp.company}</h4>
                    </div>
                    <span className="text-gray-400 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-white/70 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id={language === 'es' ? 'contacto' : 'contact'} className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          
          <p className="text-xl text-white/70 mb-12 leading-relaxed">
            {t.contact.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:tu-email@ejemplo.com"
              className="flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-gray-500 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              <Mail size={20} />
              <span>{t.contact.email}</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/tu-perfil"
              className="flex items-center justify-center space-x-3 px-8 py-4 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="text-white/40 text-sm">
            <p>© 2024 - Ingeniero IA. {t.contact.footer}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;