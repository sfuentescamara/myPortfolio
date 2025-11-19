import { Brain, CloudCog, Database, Microchip } from 'lucide-react';

const About = ({ language, data }) => {
  return (
    <section id={language === 'es' ? 'sobre-mi' : 'about'} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
          {data.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {['p1', 'p2', 'p3', 'p4', 'p5'].map((key) => (
              data[key] && (
                <p key={key} className="text-lg text-white/80 leading-relaxed">
                  {data[key]}
                </p>
              )
            ))}
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm text-center">
              <Brain className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{data.card1.title}</h3>
              <p className="text-white/70">{data.card1.desc}</p>
            </div>

            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm text-center">
              <CloudCog className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{data.card2.title}</h3>
              <p className="text-white/70">{data.card2.desc}</p>
            </div>

            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm text-center">
              <Database className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{data.card3.title}</h3>
              <p className="text-white/70">{data.card3.desc}</p>
            </div>

            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm text-center">
              <Microchip className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{data.card4.title}</h3>
              <p className="text-white/70">{data.card4.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
