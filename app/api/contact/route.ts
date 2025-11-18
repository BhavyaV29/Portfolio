import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const formId = process.env.FORMSPREE_FORM_ID?.split('/').pop() || process.env.FORMSPREE_FORM_ID
    const url = `https://formspree.io/f/${formId}`

    console.log('[v0] Sending to Formspree:', url)

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })

    console.log('[v0] Formspree response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.log('[v0] Formspree error:', errorText)
      throw new Error(`Formspree returned status ${response.status}`)
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
