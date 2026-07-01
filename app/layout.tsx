import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const title = 'Bhavya Vashisht — Backend & Systems Engineer'
const description =
  'Backend & systems engineer building APIs, CLIs, and developer tooling in Go and Python, backed by PostgreSQL, Redis, and MongoDB.'

export const metadata: Metadata = {
  metadataBase: new URL('https://bhavyaportfolio.site'),
  title,
  description,
  keywords: [
    'Bhavya Vashisht',
    'Backend Engineer',
    'Systems Engineer',
    'Software Engineer',
    'Go',
    'Golang',
    'Python',
    'PostgreSQL',
    'Redis',
    'REST APIs',
  ],
  authors: [{ name: 'Bhavya Vashisht', url: 'https://github.com/BhavyaV29' }],
  creator: 'Bhavya Vashisht',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://bhavyaportfolio.site',
    siteName: 'Bhavya Vashisht',
    title,
    description:
      'I build APIs, CLIs, and developer tooling in Go and Python. See my projects and get in touch.',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
