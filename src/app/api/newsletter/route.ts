import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email } = await request.json()
  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }
  // TODO: integrate with your email provider (Mailchimp, ConvertKit, etc.)
  return NextResponse.json({ success: true })
}
