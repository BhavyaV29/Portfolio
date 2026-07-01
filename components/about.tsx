export default function About() {
  const facts = [
    { k: 'focus', v: 'Backend & systems' },
    { k: 'exploring', v: 'Applied AI · LLM tooling' },
    { k: 'location', v: 'Delhi NCR, India' },
    { k: 'open_to', v: 'Backend & applied-AI roles' },
  ]

  return (
    <section id="about" className="py-28 border-b border-border px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-primary mb-2">$ cat about.md</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">About</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a backend &amp; systems engineer who likes building things that run
              reliably — REST APIs, command-line tools, and the data layers behind
              them. Most of my work is in <span className="text-primary">Go</span> and{' '}
              <span className="text-primary">Python</span>, backed by PostgreSQL,
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
          <div className="h-fit rounded-lg border border-border bg-card/50 p-5 text-sm">
            <p className="mb-3 text-xs text-muted-foreground">// quick facts</p>
            {facts.map((f) => (
              <div key={f.k} className="py-1">
                <span className="text-primary">{f.k}</span>
                <span className="text-muted-foreground"> = </span>
                <span className="text-foreground">&quot;{f.v}&quot;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
