const Skills = ({ language, title, skills, isVisible }) => {
  return (
    <section id={language === 'es' ? 'habilidades' : 'skills'} className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <span className="text-blue-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-gray-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: isVisible[language === 'es' ? 'habilidades' : 'skills'] ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;