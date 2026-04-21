import { NextResponse } from 'next/server'

const FORM_ID = '9350758'

export async function POST(request: Request) {
  const apiKey = process.env.KIT_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 })
  }

  const { email } = await request.json()
  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const res = await fetch(`https://api.kit.com/v4/forms/${FORM_ID}/subscribers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ email_address: email.trim() }),
  })

  if (!res.ok) {
    console.error('[Kit] Newsletter subscribe failed:', res.status)
    return NextResponse.json({ error: 'Could not subscribe. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
