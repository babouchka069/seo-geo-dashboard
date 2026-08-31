import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const key = process.env.GEMINI_API_KEY
    if (!key) return NextResponse.json({ error: 'GEMINI_API_KEY manquante' }, { status: 500 })

    const body = await req.json()
    const prompt = body.messages?.map((m: { role: string; content: string }) => m.content).join('\n')

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`
    
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      }),
    })

    const data = await res.json()
    if (!res.ok) return NextResponse.json({ error: JSON.stringify(data) }, { status: res.status })
    
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? 'Pas de réponse'
    return NextResponse.json({ text })
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 })
  }
}
