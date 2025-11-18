export default function Projects() {
  const projects = [
    {
      title: 'Chirpy',
      subtitle: 'Deployed Backend API',
      description: 'A production-style Go backend for a microblogging platform with JWT authentication, PostgreSQL, SQLC, Goose migrations, and structured middleware.',
      tech: ['Go', 'PostgreSQL', 'SQLC', 'JWT'],
      links: [
        { label: 'GitHub', url: 'https://github.com/BhavyaV29/chirpy' }
      ]
    },
    {
      title: 'Gator',
      subtitle: 'Go CLI Tool',
      description: 'A command-line RSS/Atom feed aggregator with user management and feed following. Uses PostgreSQL for persistent storage.',
      tech: ['Go', 'PostgreSQL', 'SQLC'],
      links: [
        { label: 'GitHub', url: 'https://github.com/BhavyaV29/Gator' }
      ]
    },
    {
      title: 'AI Agent CLI',
      subtitle: 'Python CLI Tool',
      description: 'A Python-based AI agent that analyzes, modifies, and executes Python code using a plan–act–observe loop and Gemini API.',
      tech: ['Python', 'Gemini API'],
      links: [
        { label: 'GitHub', url: 'https://github.com/BhavyaV29/CLI-Agent' }
      ]
    },
    {
      title: 'Smart Food Waste Management System',
      subtitle: 'ML System',
      description: 'Raspberry Pi–based ML system using a load cell, dual cameras, HOG face recognition, and a YOLOv11 food detection model to identify users and estimate food waste.',
      tech: ['Raspberry Pi', 'Python', 'YOLOv11', 'HOG'],
      links: [
        
      ]
    }
  ]

  return (
    <section id="projects" className="py-24 border-b border-border px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-balance">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-lg hover:border-foreground/30 transition-all group"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-secondary/50 text-secondary-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
