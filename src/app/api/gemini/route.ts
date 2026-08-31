import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const key = process.env.GEMINI_API_KEY
  if (!key) return NextResponse.json({ error: 'GEMINI_API_KEY manquante' }, { status: 500 })

  const body = await req.json()
  const prompt = body.messages?.map((m: { role: string; content: string }) => m.content).join('\n')

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${key}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      }),
    }
  )

  const data = await res.json()
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? JSON.stringify(data)
  return NextResponse.json({ text })
}
