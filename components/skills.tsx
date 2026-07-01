import { Code2, Database, Wrench } from 'lucide-react'

const groups = [
  {
    name: 'languages/',
    icon: Code2,
    items: ['Go', 'Python', 'C', 'SQL', 'Bash'],
  },
  {
    name: 'backend-data/',
    icon: Database,
    items: ['REST APIs', 'PostgreSQL', 'Redis', 'MongoDB', 'SQLC', 'JWT / Auth'],
  },
  {
    name: 'infra-tools/',
    icon: Wrench,
    items: ['Docker', 'Kubernetes', 'Linux', 'Git', 'CI/CD', 'LLM tooling'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-b border-border px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-primary mb-2">$ ls skills/</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((group) => {
            const Icon = group.icon
            return (
              <div
                key={group.name}
                className="card-glow rounded-lg border border-border bg-card/50 p-6"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-primary font-medium">{group.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-secondary/40 px-3 py-1 text-sm text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
