import { Workflow, Server, Bot, Rss, Cpu, ShieldCheck, Github, Globe, ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Project = {
  icon: LucideIcon
  title: string
  repo: string
  subtitle: string
  description: string
  tech: string[]
  url: string | null
  demo?: string
  featured?: boolean
}

export default function Projects() {
  const projects: Project[] = [
    {
      icon: ShieldCheck,
      title: 'Deputy',
      repo: '~/deputy-agent',
      subtitle: 'On-Device AI Agent · Python',
      featured: true,
      description:
        'A private, on-device AI agent that works your own files and runs tasks — and asks before it acts. A bounded ReAct loop with constrained decoding lifts end-to-end task success 29% → 88% on qwen2.5:3b (schema-valid steps 71% → 100%), with tools via MCP, on-device RAG (sqlite-vec + Ollama embeddings), and a trust surface — approval gates on writes, an append-only audit log, and local-first routing with opt-in cloud.',
      tech: ['Python', 'Ollama', 'MCP', 'sqlite-vec', 'RAG', 'FastAPI'],
      url: 'https://github.com/BhavyaV29/deputy-agent',
      demo: 'https://deputy-web-demo.onrender.com',
    },
    {
      icon: Workflow,
      title: 'JobOps Pipeline',
      repo: '~/job-hunter-pipeline',
      subtitle: 'Job Sourcing + Outreach · Python',
      featured: true,
      description:
        'A daily job-ops pipeline (~8.6k LOC): parallel async fetch across 15+ job boards and ATS APIs, fresher/geo/salary filters, tiered scoring, and optional LLM JD enrichment into a bidirectional Google Sheets tracker — then contact lookup with cold-mail and referral drafts for review (never auto-sends).',
      tech: ['Python', 'asyncio', 'httpx', 'LLM APIs', 'Google Sheets API', 'Playwright'],
      url: 'https://github.com/BhavyaV29/job-hunter-pipeline',
      demo: 'https://job-hunter-pipeline.onrender.com',
    },
    {
      icon: Server,
      title: 'Chirpy',
      repo: '~/chirpy',
      subtitle: 'Backend REST API · Go',
      featured: true,
      description:
        'A production-style microblogging API in Go: JWT auth with refresh-token rotation, Argon2id-hashed passwords, a type-safe SQLC data layer over PostgreSQL, Goose migrations, and a Polka webhook for premium upgrades.',
      tech: ['Go', 'PostgreSQL', 'SQLC', 'JWT', 'Argon2id', 'Webhooks'],
      url: 'https://github.com/BhavyaV29/chirpy',
    },
    {
      icon: Bot,
      title: 'CLI-Agent',
      repo: '~/cli-agent',
      subtitle: 'AI Coding Agent · Python',
      description:
        'A Python CLI agent that reads, patches, and runs code autonomously using Gemini function-calling in a plan–act–observe loop, capped at five iterations per task.',
      tech: ['Python', 'Gemini API', 'Function Calling', 'Agent Loop'],
      url: 'https://github.com/BhavyaV29/CLI-Agent',
    },
    {
      icon: Rss,
      title: 'Gator',
      repo: '~/gator',
      subtitle: 'CLI RSS Aggregator · Go',
      description:
        'A terminal RSS aggregator with per-user feeds and a long-running worker that fetches the least-recently-updated feed on a ticker. PostgreSQL storage with a type-safe SQLC layer and Goose migrations.',
      tech: ['Go', 'PostgreSQL', 'SQLC', 'Goose'],
      url: 'https://github.com/BhavyaV29/Gator',
    },
    {
      icon: Cpu,
      title: 'Smart Food Waste Management',
      repo: '~/smart-food-waste',
      subtitle: 'Applied ML · Raspberry Pi',
      description:
        'A Raspberry Pi system that identifies users and estimates food waste using a load cell, dual cameras, HOG face recognition, and a YOLOv11 food-detection model.',
      tech: ['Python', 'YOLOv11', 'OpenCV', 'Raspberry Pi'],
      url: null,
    },
  ]

  return (
    <section id="projects" className="py-28 border-b border-border px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-primary mb-2">$ ls projects/</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`card-glow flex flex-col overflow-hidden rounded-lg border bg-card/50 ${
                project.featured ? 'border-primary/40' : 'border-border'
              }`}
            >
              {/* terminal title bar */}
              <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/45" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
                <span className="ml-2 text-xs text-muted-foreground">{project.repo}</span>
                {project.featured && (
                  <span className="ml-auto text-xs text-primary">★ featured</span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary">
                    <project.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>

                <p className="leading-relaxed text-muted-foreground">
                  <span className="text-primary/70">&#47;&#47; </span>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-foreground/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
                    >
                      <Globe className="h-4 w-4" /> $ open demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
                    >
                      <Github className="h-4 w-4" /> $ git clone
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                      # academic project
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
