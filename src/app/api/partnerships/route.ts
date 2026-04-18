import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, brand, email, type, message } = body

  if (!name || !brand || !email || !type || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // TODO: send to your email or CRM (Resend, SendGrid, etc.)
  // For now, log and return success
  console.log('Partnership inquiry:', { name, brand, email, type })

  return NextResponse.json({ success: true })
}
