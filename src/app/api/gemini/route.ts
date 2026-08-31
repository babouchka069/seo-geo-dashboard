import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenAI } from '@google/genai'

export async function POST(req: NextRequest) {
  const key = process.env.GEMINI_API_KEY
  if (!key) return NextResponse.json({ error: 'GEMINI_API_KEY manquante' }, { status: 500 })

  const body = await req.json()
  const prompt = body.messages?.map((m: { role: string; content: string }) => m.content).join('\n')

  const ai = new GoogleGenAI({ apiKey: key })
  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash',
    contents: prompt,
  })

  return NextResponse.json({ text: response.text })
}
