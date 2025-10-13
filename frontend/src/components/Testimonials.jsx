import { useState } from 'react';
import { Linkedin, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = ({ language, testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.list.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.list.length - 1 : prev - 1
    );
  };

  return (
    <section id={language === 'es' ? 'recomendaciones' : 'testimonials'} className="py-20 px-4 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
          {testimonials.title}
        </h2>
        <p className="text-center text-white/60 mb-12">{testimonials.subtitle}</p>

        {testimonials.list && testimonials.list.length > 0 ? (
          <div className="relative mb-12">
            {/* Testimonial Card */}
            <div className="bg-white/5 p-8 md:p-12 rounded-lg backdrop-blur-sm border border-white/10 relative min-h-[300px] flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-400/20" />

              <div className="mb-6">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed italic">
                  "{testimonials.list[currentIndex].text}"
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-4">
                  {testimonials.list[currentIndex].image && (
                    <img
                      src={testimonials.list[currentIndex].image}
                      alt={testimonials.list[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-400/30"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-white text-lg">
                      {testimonials.list[currentIndex].name}
                    </p>
                    <p className="text-sm text-white/60">
                      {testimonials.list[currentIndex].position}
                    </p>
                    {testimonials.list[currentIndex].company && (
                      <p className="text-xs text-white/50">
                        {testimonials.list[currentIndex].company}
                      </p>
                    )}
                  </div>
                </div>

                {testimonials.list[currentIndex].linkedin && (
                  <a
                    href={testimonials.list[currentIndex].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            {testimonials.list.length > 1 && (
              <>
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all hover:scale-110 shadow-lg"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all hover:scale-110 shadow-lg"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {testimonials.list.length > 1 && (
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.list.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-blue-400'
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-white/60 mb-6">
              {language === 'es'
                ? 'Mis recomendaciones están disponibles en LinkedIn'
                : 'My recommendations are available on LinkedIn'}
            </p>
          </div>
        )}

        {/* Link to LinkedIn recommendations */}
        <div className="text-center">
          <a
            href={testimonials.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-colors"
          >
            <Linkedin size={20} />
            <span>
              {language === 'es'
                ? 'Ver todas las recomendaciones en LinkedIn'
                : 'View all recommendations on LinkedIn'}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
