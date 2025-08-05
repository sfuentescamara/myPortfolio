import { Github, ExternalLink } from 'lucide-react';


const Projects = ({ language, projects }) => {
  return (
    <section id={language === 'es' ? 'proyectos' : 'projects'} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-gray-400 bg-clip-text text-transparent">
          {projects.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(projects.list).map(([key, project]) => (
            <div key={project} className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-gray-500/20 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  {project.code ? (
                    <a href={project.github} className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
                      <Github size={16} />
                      <span className="text-sm">{projects.code}</span>
                    </a>
                  ) : (
                    <a className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
                      <Github size={16} />
                      <span className="text-sm">Coming soon</span>
                    </a>
                  )}
                  {project.demo ? (
                    <a href={project.demo} className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
                      <ExternalLink size={16} />
                      <span className="text-sm">{projects.demo}</span>
                    </a>
                  ) : (
                    <a className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
                      <ExternalLink size={16} />
                      <span className="text-sm">Coming soon</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;