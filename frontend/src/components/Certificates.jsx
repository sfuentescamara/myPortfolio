import { ExternalLink } from "lucide-react";

const Certificates = ({ language, certificates }) => {
  return (
    <section id={language === 'es' ? 'certificados' : 'certificates'} className="py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
          {certificates.title}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(certificates.list).map(([key, cert]) => (
            <div
              key={key}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-400">{cert.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {cert.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {cert.desc}
                </p>
              </div>
              <a
                href={cert.url}
                className="mt-auto inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                link <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
