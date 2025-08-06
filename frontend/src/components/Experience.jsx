
const Experience = ({ language, experience }) => {
  return (
    <section id={language === 'es' ? 'experiencia' : 'experience'} className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
          {experience.title}
        </h2>

        <div className="space-y-8">
          {Object.entries(experience.list).map(([key, exp]) => (
            <div key={key} className="relative pl-8 pb-8">
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

                {exp.desc.map((desc, index) => (
                  <p key={index} className="text-white/70 leading-relaxed">{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
