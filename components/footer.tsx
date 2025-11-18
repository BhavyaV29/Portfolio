export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Bhavya Vashisht — Backend, Systems & ML Engineer
        </p>
      </div>
    </footer>
  )
}
