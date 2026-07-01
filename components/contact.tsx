'use client'

import { useState } from 'react'
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 bg-input/60 text-foreground placeholder-muted-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-shadow'

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-primary mb-3 text-center">// contact</p>
        <h2 className="text-4xl font-bold mb-4 text-balance text-center">Let's build something</h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Open to backend &amp; applied-AI roles and interesting collaborations. The
          fastest way to reach me is email.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <a
              href="mailto:bhavyavashisht119@gmail.com"
              className="card-glow flex items-center gap-4 rounded-xl border border-border bg-card/40 p-5"
            >
              <span className="grid place-items-center h-11 w-11 rounded-lg bg-primary/15 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Email</p>
                <p className="text-foreground">bhavyavashisht119@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-border bg-card/40 p-5">
              <span className="grid place-items-center h-11 w-11 rounded-lg bg-primary/15 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">Location</p>
                <p className="text-foreground">Delhi NCR, India</p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/BhavyaV29"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="card-glow grid place-items-center h-12 flex-1 rounded-xl border border-border bg-card/40 text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhavya-vashisht-993079258"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="card-glow grid place-items-center h-12 flex-1 rounded-xl border border-border bg-card/40 text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-border bg-card/40 p-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              required
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              required
              disabled={loading}
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={inputClass}
              required
              disabled={loading}
            />
            {error && <p className="text-destructive text-sm">{error}</p>}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:brightness-110 transition-all font-medium disabled:opacity-50"
              disabled={loading}
            >
              <Send className="h-4 w-4" />
              {loading ? 'Sending...' : submitted ? 'Message sent!' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
