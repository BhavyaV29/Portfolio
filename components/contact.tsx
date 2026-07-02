'use client'

import { useState } from 'react'
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react'

const CONTACT_EMAIL = 'bhavyavashisht119@gmail.com'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Opens the visitor's mail client with everything pre-filled. No backend, so it
  // can never silently fail the way the old /api/contact (Formspree) route did.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Portfolio message from ${formData.name || 'someone'}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const inputClass =
    'w-full px-4 py-3 bg-input/60 text-foreground placeholder-muted-foreground rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-shadow'

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-primary mb-2 text-center">$ ./contact.sh</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-center">Contact</h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Open to backend &amp; applied-AI roles and interesting collaborations. The
          fastest way to reach me is email.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="card-glow flex items-center gap-4 rounded-lg border border-border bg-card/50 p-5"
            >
              <span className="grid place-items-center h-11 w-11 rounded-md bg-primary/15 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">email</p>
                <p className="text-foreground">{CONTACT_EMAIL}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-lg border border-border bg-card/50 p-5">
              <span className="grid place-items-center h-11 w-11 rounded-md bg-primary/15 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">location</p>
                <p className="text-foreground">Delhi NCR, India</p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/BhavyaV29"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="card-glow grid place-items-center h-12 flex-1 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhavya-vashisht-993079258"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="card-glow grid place-items-center h-12 flex-1 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-card/50">
            <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/45" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
              <span className="ml-2 text-xs text-muted-foreground">~/contact — new message</span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 p-6">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={inputClass}
                required
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:brightness-90 transition-all font-medium"
              >
                <Send className="h-4 w-4" />
                {submitted ? 'opening your mail app…' : '$ send'}
              </button>
              <p className="text-xs text-muted-foreground/70 text-center">
                Opens your email app with the message ready to send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
