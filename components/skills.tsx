export default function Skills() {
  const skillsData = [
    {
      category: 'Languages',
      items: ['Go', 'Python', 'C', 'SQL'],
    },
    {
      category: 'Backend & Data',
      items: ['REST APIs', 'PostgreSQL', 'Redis', 'MongoDB', 'SQLC', 'Goose', 'FastAPI', 'JWT', 'bcrypt'],
    },
    {
      category: 'Infra & Tools',
      items: ['Docker', 'Kubernetes', 'Linux', 'Git'],
    },
  ]

  return (
    <section id="skills" className="py-24 border-b border-border px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-balance">Skills</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {skillsData.map((section) => (
            <div key={section.category}>
              <h3 className="text-lg font-semibold mb-6 text-muted-foreground uppercase tracking-wide">
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {section.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 bg-secondary/50 text-secondary-foreground rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
