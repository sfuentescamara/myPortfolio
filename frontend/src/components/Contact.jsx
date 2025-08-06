import { Linkedin, Mail } from 'lucide-react';

const Contact = ({ data, language, contact }) => {
  return (
    <section id={language === 'es' ? 'contacto' : 'contact'} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
          {contact.title}
        </h2>

        <p className="text-xl text-white/70 mb-12 leading-relaxed">
          {contact.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href={`mailto:${data.email}`}
            className="flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-gray-500 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            <Mail size={20} />
            <span>{contact.email}</span>
          </a>

          <a
            href={data.linkedin}
            className="flex items-center justify-center space-x-3 px-8 py-4 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
