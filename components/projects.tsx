export default function Projects() {
  const projects = [
    {
      title: 'Chirpy',
      subtitle: 'Backend REST API · Go',
      description:
        'A production-style microblogging API in Go: JWT auth with refresh-token rotation, bcrypt-hashed passwords, a type-safe SQLC data layer over PostgreSQL, Goose migrations, and a Polka webhook for premium upgrades.',
      tech: ['Go', 'PostgreSQL', 'SQLC', 'JWT', 'bcrypt', 'Webhooks'],
      links: [{ label: 'GitHub', url: 'https://github.com/BhavyaV29/chirpy' }],
    },
    {
      title: 'CLI-Agent',
      subtitle: 'AI Coding Agent · Python',
      description:
        'A Python CLI agent that reads, patches, and runs code autonomously using Gemini function-calling in a plan–act–observe loop, capped at five iterations per task.',
      tech: ['Python', 'Gemini API', 'Function Calling', 'Agent Loop'],
      links: [{ label: 'GitHub', url: 'https://github.com/BhavyaV29/CLI-Agent' }],
    },
    {
      title: 'Gator',
      subtitle: 'CLI RSS Aggregator · Go',
      description:
        'A terminal RSS aggregator with per-user feeds and a long-running worker that fetches the least-recently-updated feed on a ticker. PostgreSQL storage with a type-safe SQLC layer and Goose migrations.',
      tech: ['Go', 'PostgreSQL', 'SQLC', 'Goose'],
      links: [{ label: 'GitHub', url: 'https://github.com/BhavyaV29/Gator' }],
    },
    {
      title: 'Smart Food Waste Management System',
      subtitle: 'Applied ML · Raspberry Pi',
      description:
        'A Raspberry Pi system that identifies users and estimates food waste using a load cell, dual cameras, HOG face recognition, and a YOLOv11 food-detection model.',
      tech: ['Python', 'YOLOv11', 'OpenCV', 'Raspberry Pi'],
      links: [],
    },
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
                {project.links.length > 0 && (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
