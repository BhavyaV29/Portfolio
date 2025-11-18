'use client'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="tracking-tight text-balance font-medium text-6xl opacity-95">
          BHAVYA VASHISHT
        </h1>
        <p className="text-2xl md:text-3xl font-light text-muted-foreground text-balance">
          Backend, Systems & Machine Learning Engineer
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
          I build scalable backend services, CLI tools, AI agents, and ML systems.
        </p>
        <div className="flex gap-4 justify-center pt-8 flex-wrap">
          <a
            href="/resume.pdf"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/BhavyaV29"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border rounded-lg hover:bg-muted/30 transition-colors font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bhavya-vashisht-993079258"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border rounded-lg hover:bg-muted/30 transition-colors font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
