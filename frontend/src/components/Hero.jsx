import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ data, language, hero, scrollToSection }) => {
  return (
    <section id={language === 'es' ? 'inicio' : 'home'} className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 flex items-center justify-center space-x-6">
          {/* img */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-gray-500 to-blue-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden">
              <img
                src={data.img}
                alt="Mi Foto"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* name */}
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-gray-500 via-gray-400 to-blue-500 bg-clip-text text-transparent">
              {data.name}
            </span>
          </h1>
        </div>

        {/* titles */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-gray-400 to-gray-400 bg-clip-text text-transparent">
            {hero.title1}
          </span>
          <br />
          <span className="text-3xl md:text-5xl text-white/90">
            {hero.title2}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed">
          {hero.subtitle}
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection(language === 'es' ? 'proyectos' : 'projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-gray-500 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            {hero.cta1}
          </button>
          <button
            onClick={() => scrollToSection(language === 'es' ? 'contacto' : 'contact')}
            className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            {hero.cta2}
          </button>
        </div>

        {/* social links */}
        <div className="flex justify-center space-x-6">
          <a href={data.github} className="text-white/60 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href={data.linkedin} className="text-white/60 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${data.email}`} className="text-white/60 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
