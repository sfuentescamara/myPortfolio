
const Skills = ({ language, title, skills, isVisible }) => {
  return (
    <section id={language === 'es' ? 'habilidades' : 'skills'} className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
          {title}
        </h2>

        <div className="space-y-12">
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center space-x-3 border-b border-white/20 pb-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-semibold text-blue-400">
                  {category.category}
                </h3>
              </div>

              {/* Skills in this category */}
              <div className="grid md:grid-cols-2 gap-6 pl-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white/90">{skill.name}</span>
                      <span className="text-blue-400 font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-gray-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isVisible[language === 'es' ? 'habilidades' : 'skills'] ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
