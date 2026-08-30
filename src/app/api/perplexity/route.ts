import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const key = process.env.PERPLEXITY_API_KEY
  if (!key) return NextResponse.json({ error: 'PERPLEXITY_API_KEY manquante' }, { status: 500 })

  const body = await req.json()

  const res = await fetch('https://api.perplexity.ai/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'sonar',
      max_tokens: 1000,
      messages: body.messages,
    }),
  })

  const data = await res.json()
  return NextResponse.json(data)
}
