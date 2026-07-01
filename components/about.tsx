import { MapPin, Server, Sparkles } from 'lucide-react'

export default function About() {
  const facts = [
    { icon: Server, label: 'Focus', value: 'Backend & systems' },
    { icon: Sparkles, label: 'Exploring', value: 'Applied AI · LLM tooling' },
    { icon: MapPin, label: 'Based in', value: 'Delhi NCR, India' },
  ]

  return (
    <section id="about" className="py-28 border-b border-border px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-primary mb-3">// about</p>
        <h2 className="text-4xl font-bold mb-10 text-balance">A bit about me</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a backend &amp; systems engineer who likes building things that run
              reliably — REST APIs, command-line tools, and the data layers behind
              them. Most of my work is in <span className="text-foreground">Go</span> and{' '}
              <span className="text-foreground">Python</span>, backed by PostgreSQL,
              Redis, and MongoDB.
            </p>
            <p>
              I care about correctness under concurrency, clean API design, and code
              that's easy to reason about months later. Lately I've been going deeper
              on applied AI — LLM tooling and agent workflows — and the infrastructure
              that keeps backend services healthy.
            </p>
            <p>
              The projects below are things I've built to learn by doing. Always happy
              to talk backend, Go, or systems work.
            </p>
          </div>
          <div className="space-y-3">
            {facts.map((f) => (
              <div
                key={f.label}
                className="flex items-start gap-3 rounded-xl border border-border bg-card/40 p-4"
              >
                <span className="grid place-items-center h-9 w-9 shrink-0 rounded-lg bg-primary/15 text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {f.label}
                  </p>
                  <p className="text-foreground">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
