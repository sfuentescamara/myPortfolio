import { Brain, Code, Database, Microchip } from 'lucide-react';

const About = ({ language, data }) => {
  return (
    <section id={language === 'es' ? 'sobre-mi' : 'about'} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
          {data.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              {data.p1}
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              {data.p2}
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              {data.p3}
            </p>

            <div className="grid grid-cols-1 gap-6 mt-8">
              {/* <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                            <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                            <div className="text-white/70">{data.projects}</div>
                            </div> */}
              <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-gray-400 mb-2">5+</div>
                <div className="text-white/70">{data.years}</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{data.card1.title}</h3>
              <p className="text-white/70">{data.card1.desc}</p>
            </div>

            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{data.card2.title}</h3>
              <p className="text-white/70">{data.card2.desc}</p>
            </div>

            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
              <Database className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{data.card3.title}</h3>
              <p className="text-white/70">{data.card3.desc}</p>
            </div>

            <div className="p-6 bg-white/5 rounded-lg backdrop-blur-sm">
              <Microchip className="w-12 h-12 text-blue-400 mb-4" />
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