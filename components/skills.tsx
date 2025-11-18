export default function Skills() {
  const skillsData = [
    {
      category: 'Languages',
      items: ['Go', 'Python', 'C', 'SQL']
    },
    {
      category: 'Tools & Frameworks',
      items: ['PostgreSQL', 'SQLC', 'Goose', 'JWT', 'bcrypt', 'Docker', 'Git', 'VS Code']
    },
    {
      category: 'Domains',
      items: ['Backend Development', 'Systems Programming', 'Machine Learning']
    }
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
              <div className="flex flex-col gap-3">
                {section.items.map((skill) => (
                  <div key={skill} className="text-foreground">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
