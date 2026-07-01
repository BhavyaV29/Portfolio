export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-3">
        <div className="flex gap-4 justify-center text-sm">
          <a
            href="https://github.com/BhavyaV29"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span className="text-muted-foreground">·</span>
          <a
            href="https://www.linkedin.com/in/bhavya-vashisht-993079258"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-muted-foreground">·</span>
          <a
            href="mailto:bhavyavashisht119@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-muted-foreground text-sm">
          © {currentYear} Bhavya Vashisht — Backend &amp; Systems Engineer
        </p>
      </div>
    </footer>
  )
}
