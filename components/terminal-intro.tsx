'use client'

import { useEffect, useState } from 'react'

type Line = { cmd: string; out?: string }

const LINES: Line[] = [
  { cmd: 'whoami', out: 'Bhavya Vashisht' },
  { cmd: 'cat role.txt', out: 'Backend & Systems Engineer' },
  { cmd: 'echo $STACK', out: 'Go · Python · PostgreSQL · Redis · Docker' },
  { cmd: 'ls focus/', out: 'apis/   clis/   developer-tooling/   applied-ai/' },
]

const PROMPT = 'visitor@bhavya:~$'

export default function TerminalIntro() {
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    if (visible >= LINES.length) return
    const t = setTimeout(() => setVisible((v) => v + 1), visible === 0 ? 300 : 620)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <div className="mx-auto w-full max-w-xl overflow-hidden rounded-lg border border-border bg-card/70 text-left shadow-2xl shadow-black/40 backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-muted-foreground/70" />
        <span className="h-3 w-3 rounded-full bg-muted-foreground/45" />
        <span className="h-3 w-3 rounded-full bg-muted-foreground/25" />
        <span className="ml-2 text-xs text-muted-foreground">bash — bhavya@portfolio</span>
      </div>
      <div className="space-y-1.5 p-5 text-sm leading-relaxed">
        {LINES.slice(0, visible).map((line, i) => (
          <div key={i}>
            <div>
              <span className="text-primary">{PROMPT}</span>{' '}
              <span className="text-foreground">{line.cmd}</span>
            </div>
            {line.out && <div className="text-muted-foreground">{line.out}</div>}
          </div>
        ))}
        <div>
          <span className="text-primary">{PROMPT}</span>{' '}
          <span className="cursor-blink text-primary">▋</span>
        </div>
      </div>
    </div>
  )
}
