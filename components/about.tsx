export default function About() {
  return (
    <section id="about" className="py-24 border-b border-border px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">About</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            I'm a backend &amp; systems engineer who likes building things that run
            reliably — REST APIs, command-line tools, and the data layers behind
            them. Most of my work is in Go and Python, backed by PostgreSQL, Redis,
            and MongoDB.
          </p>
          <p>
            I care about correctness under concurrency, clean API design, and code
            that's easy to reason about months later. Lately I've been going deeper
            on applied AI — LLM tooling and agent workflows — and on the
            infrastructure that keeps backend services healthy.
          </p>
          <p>
            The projects below are things I've built to learn by doing. Always happy
            to talk backend, Go, or systems work.
          </p>
        </div>
      </div>
    </section>
  )
}
