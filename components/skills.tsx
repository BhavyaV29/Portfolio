import { Code2, Database, Wrench } from 'lucide-react'

export default function Skills() {
  const groups = [
    { icon: Code2, category: 'Languages', items: ['Go', 'Python', 'C', 'SQL'] },
    {
      icon: Database,
      category: 'Backend & Data',
      items: ['REST APIs', 'PostgreSQL', 'Redis', 'MongoDB', 'SQLC', 'Goose', 'FastAPI', 'JWT', 'bcrypt'],
    },
    { icon: Wrench, category: 'Infra & Tools', items: ['Docker', 'Kubernetes', 'Linux', 'Git'] },
  ]

  return (
    <section id="skills" className="py-28 border-b border-border px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-primary mb-3">// skills</p>
        <h2 className="text-4xl font-bold mb-12 text-balance">Tools I work with</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div
              key={group.category}
              className="card-glow rounded-xl border border-border bg-card/40 p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary/15 text-primary">
                  <group.icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-md border border-border bg-secondary/40 text-secondary-foreground hover:border-primary/50 hover:text-foreground transition-colors"
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
