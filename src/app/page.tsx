'use client'
import { useState } from 'react'

const ENGINES = [
  { id: 'claude', label: 'Claude', endpoint: '/api/claude' },
  { id: 'openai', label: 'ChatGPT', endpoint: '/api/openai' },
  { id: 'gemini', label: 'Gemini', endpoint: '/api/gemini' },
  { id: 'perplexity', label: 'Perplexity', endpoint: '/api/perplexity' },
]

const SITES = {
  ludi: {
    name: 'Ludi — Drainage',
    url: 'ludi-lartetlamatiere.fr',
    zone: null,
    queries: [
      'ostéopathe drainage lymphatique Cannes',
      'drainage post-opératoire Cannes-la-Bocca',
    ],
    audit: {
      score: 78,
      items: [
        { label: 'Sitemap', ok: true, detail: '12 URLs' },
        { label: 'llms.txt', ok: true, detail: 'Présent et complet' },
        { label: 'JSON-LD', ok: true, detail: 'LocalBusiness' },
        { label: 'Meta descriptions', ok: false, detail: 'Manquante sur 2 pages' },
        { label: 'Images alt', ok: false, detail: '4 images sans alt' },
        { label: 'Placeholder [NOM ORGANISME]', ok: false, detail: 'Article post-op → remplacer par "Colibri"' },
        { label: 'Redirections', ok: true, detail: 'Propres' },
        { label: 'Mobile', ok: true, detail: 'Responsive OK' },
        { label: 'Performance', ok: true, detail: '92/100 Lighthouse' },
      ],
      priorities: [
        'Remplacer [NOM ORGANISME] → "Colibri"',
        'Ajouter alt sur 4 images',
        'Compléter meta description sur 2 pages',
        'Audit Google Business Profile',
        'Analyse concurrents Cannes-la-Bocca',
      ],
    },
    cal: [
      { date: 'Immédiat', title: 'Remplacer [NOM ORGANISME] par "Colibri"', type: 'urgent', kind: 'Correction' },
      { date: 'Fév 2025', title: 'Article : drains post-opératoires', type: 'soon', kind: 'Article' },
      { date: 'Mars 2025', title: 'FAQ : drainage vs massage classique', type: 'planned', kind: 'FAQ' },
      { date: 'Avr 2025', title: 'Article : drainage et grossesse', type: 'planned', kind: 'Article' },
      { date: 'Mai 2025', title: 'Mise à jour photos cabinet', type: 'idea', kind: 'Média' },
    ],
  },
  thomas_cannes: {
    name: 'Thomas — Cannes-la-Bocca',
    url: 'porebski-thomas-osteopathe.fr',
    zone: 'Cannes-la-Bocca',
    queries: [
      'ostéopathe Cannes-la-Bocca',
      'ostéopathe sport Cannes',
    ],
    audit: {
      score: 71,
      items: [
        { label: 'Sitemap', ok: true, detail: '18 URLs' },
        { label: 'llms.txt', ok: false, detail: 'En cours (Claude Code)' },
        { label: 'JSON-LD', ok: false, detail: '6 blocs à consolider' },
        { label: 'Meta descriptions', ok: true, detail: 'OK' },
        { label: 'Images alt', ok: false, detail: '6 images sans alt' },
        { label: 'Redirections', ok: false, detail: 'Ancienne version indexée avec 301 non résolus' },
        { label: 'Doctolib', ok: true, detail: '?pid=practice-667842 corrigé' },
        { label: 'Horaires', ok: true, detail: '8h–20h30 dans le code' },
        { label: 'Mobile', ok: true, detail: 'Responsive OK' },
        { label: 'Performance', ok: false, detail: '78/100 Lighthouse' },
      ],
      priorities: [
        'Créer et déployer llms.txt',
        'Consolider 6 blocs JSON-LD en 1 schéma',
        'Résoudre 301 ancienne version indexée',
        'Ajouter alt sur 6 images',
        'Audit Google Business Profile Cannes',
      ],
    },
    cal: [
      { date: 'Immédiat', title: 'Créer llms.txt (Claude Code)', type: 'urgent', kind: 'Technique' },
      { date: 'Immédiat', title: 'Consolider 6 blocs JSON-LD', type: 'urgent', kind: 'Technique' },
      { date: 'Fév 2025', title: 'Article : entorse cheville du sportif', type: 'soon', kind: 'Article' },
      { date: 'Mars 2025', title: 'Article : ostéo et préparation marathon', type: 'planned', kind: 'Article' },
      { date: 'Avr 2025', title: 'FAQ : combien de séances pour une lombalgie ?', type: 'idea', kind: 'FAQ' },
    ],
  },
  thomas_frejus: {
    name: 'Thomas — Fréjus',
    url: 'porebski-thomas-osteopathe.fr',
    zone: 'Fréjus',
    queries: [
      'ostéopathe Fréjus',
      'ostéopathe sport côte d\'Azur Fréjus',
    ],
    audit: {
      score: 69,
      items: [
        { label: 'Sitemap', ok: true, detail: '18 URLs' },
        { label: 'llms.txt', ok: false, detail: 'En cours (Claude Code)' },
        { label: 'JSON-LD', ok: false, detail: 'Données Cannes dans schéma Fréjus' },
        { label: 'Meta descriptions', ok: true, detail: 'OK' },
        { label: 'Images alt', ok: false, detail: '4 images sans alt' },
        { label: 'Redirections', ok: false, detail: '301 non résolus ancienne version' },
        { label: 'Horaires', ok: false, detail: 'Horaires Fréjus à confirmer' },
        { label: 'Mobile', ok: true, detail: 'Responsive OK' },
        { label: 'Performance', ok: false, detail: '76/100 Lighthouse' },
      ],
      priorities: [
        'Corriger JSON-LD Fréjus (données Cannes mélangées)',
        'Créer et déployer llms.txt',
        'Confirmer horaires Fréjus dans le code',
        'Ajouter alt sur 4 images',
        'Audit Google Business Profile Fréjus',
      ],
    },
    cal: [
      { date: 'Immédiat', title: 'Corriger JSON-LD Fréjus', type: 'urgent', kind: 'Technique' },
      { date: 'Immédiat', title: 'Créer llms.txt Fréjus', type: 'urgent', kind: 'Technique' },
      { date: 'Fév 2025', title: 'Confirmer horaires Fréjus', type: 'soon', kind: 'Technique' },
      { date: 'Mars 2025', title: 'Article : ostéo sport côte d\'Azur', type: 'planned', kind: 'Article' },
      { date: 'Mai 2025', title: 'Photos cabinet Fréjus', type: 'idea', kind: 'Média' },
    ],
  },
}

type SiteKey = keyof typeof SITES
type Tab = 'audit' | 'ia' | 'cal'

export default function Dashboard() {
  const [site, setSite] = useState<SiteKey>('ludi')
  const [tab, setTab] = useState<Tab>('audit')
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState<Record<string, boolean>>({})
  const [history, setHistory] = useState<{ date: string; engine: string; query: string; excerpt: string }[]>([])

  const d = SITES[site]

  async function runQuery(engineId: string, endpoint: string) {
    const q = query || d.queries[0]
    const prompt = `Tu es un expert SEO/GEO. Un utilisateur cherche : "${q}". 
Réponds naturellement (3-4 phrases). Puis indique si le site "${d.url}" (${d.name}) apparaît dans ta réponse, avec quelle position estimée.
Format : [RÉPONSE] ... [ANALYSE : visible oui/non, position estimée, raison]`

    setLoading(l => ({ ...l, [engineId]: true }))
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] }),
      })
      const data = await res.json()
      let text = ''
      if (engineId === 'claude') text = data.content?.[0]?.text ?? JSON.stringify(data)
      else if (engineId === 'gemini') text = data.text ?? JSON.stringify(data)
      else text = data.choices?.[0]?.message?.content ?? JSON.stringify(data)

      setResults(r => ({ ...r, [engineId]: text }))
      setHistory(h => [
        { date: new Date().toLocaleDateString('fr-FR'), engine: engineId, query: q, excerpt: text.slice(0, 80) + '…' },
        ...h.slice(0, 19),
      ])
    } catch (e) {
      setResults(r => ({ ...r, [engineId]: 'Erreur : ' + String(e) }))
    }
    setLoading(l => ({ ...l, [engineId]: false }))
  }

  const typeColor: Record<string, string> = {
    urgent: '#E24B4A', soon: '#EF9F27', planned: '#1D9E75', idea: '#7F77DD',
  }

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: 20, fontWeight: 600 }}>Tableau de bord SEO/GEO</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          {(['ludi', 'thomas_cannes', 'thomas_frejus'] as SiteKey[]).map(s => (
            <button key={s} onClick={() => setSite(s)} style={{
              padding: '5px 12px', borderRadius: 6, border: '1px solid',
              borderColor: site === s ? '#378ADD' : '#ddd',
              background: site === s ? '#E6F1FB' : 'white',
              color: site === s ? '#185FA5' : '#555',
              cursor: 'pointer', fontSize: 13,
            }}>
              {SITES[s].name.replace('Thomas — ', 'Thomas ')}
            </button>
          ))}
        </div>
      </div>

      {/* Nav tabs */}
      <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid #e5e5e5', marginBottom: '1.5rem' }}>
        {(['audit', 'ia', 'cal'] as Tab[]).map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: '8px 20px', border: 'none', background: 'none',
            borderBottom: tab === t ? '2px solid #378ADD' : '2px solid transparent',
            color: tab === t ? '#185FA5' : '#888', cursor: 'pointer', fontSize: 14,
            marginBottom: -1,
          }}>
            {{ audit: 'Audit SEO', ia: 'Suivi IA', cal: 'Calendrier' }[t]}
          </button>
        ))}
      </div>

      {/* AUDIT */}
      {tab === 'audit' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: '1.5rem' }}>
            {[
              { label: 'Score global', value: `${d.audit.score}/100`, color: d.audit.score >= 75 ? '#1D9E75' : d.audit.score >= 65 ? '#EF9F27' : '#E24B4A' },
              { label: 'Points OK', value: `${d.audit.items.filter(i => i.ok).length}/${d.audit.items.length}`, color: '#1D9E75' },
              { label: 'À corriger', value: String(d.audit.items.filter(i => !i.ok).length), color: '#EF9F27' },
            ].map(m => (
              <div key={m.label} style={{ background: '#f3f3f0', borderRadius: 8, padding: '1rem' }}>
                <div style={{ fontSize: 12, color: '#888', marginBottom: 6 }}>{m.label}</div>
                <div style={{ fontSize: 24, fontWeight: 600, color: m.color }}>{m.value}</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1rem 1.25rem', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Points techniques</h2>
            {d.audit.items.map(item => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid #f0f0f0', fontSize: 13 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#444' }}>
                  <span style={{ color: item.ok ? '#1D9E75' : '#EF9F27', fontSize: 16 }}>{item.ok ? '✓' : '!'}</span>
                  {item.label}
                </span>
                <span style={{ color: '#999', fontSize: 12 }}>{item.detail}</span>
              </div>
            ))}
          </div>

          <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1rem 1.25rem' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Corrections prioritaires</h2>
            {d.audit.priorities.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', borderBottom: '1px solid #f0f0f0', fontSize: 13, color: '#555' }}>
                <span style={{ color: '#bbb', minWidth: 20 }}>{i + 1}</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUIVI IA */}
      {tab === 'ia' && (
        <div>
          <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1rem 1.25rem', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Tester la visibilité IA</h2>
            <div style={{ display: 'flex', gap: 8, marginBottom: '1rem' }}>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder={d.queries[0]}
                style={{ flex: 1, padding: '8px 12px', border: '1px solid #ddd', borderRadius: 6, fontSize: 13 }}
              />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '0.5rem' }}>
              {d.queries.map(q => (
                <button key={q} onClick={() => setQuery(q)} style={{
                  padding: '4px 10px', border: '1px solid #ddd', borderRadius: 20,
                  background: 'none', fontSize: 12, color: '#666', cursor: 'pointer',
                }}>
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: '1rem' }}>
            {ENGINES.map(eng => (
              <div key={eng.id} style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{eng.label}</span>
                  <button onClick={() => runQuery(eng.id, eng.endpoint)} disabled={loading[eng.id]} style={{
                    padding: '4px 12px', border: '1px solid #ddd', borderRadius: 6,
                    background: 'none', fontSize: 12, cursor: 'pointer', color: '#378ADD',
                  }}>
                    {loading[eng.id] ? '…' : 'Tester'}
                  </button>
                </div>
                {results[eng.id] ? (
                  <div style={{ fontSize: 12, color: '#555', lineHeight: 1.6, maxHeight: 120, overflow: 'auto' }}>
                    {results[eng.id]}
                  </div>
                ) : (
                  <div style={{ fontSize: 12, color: '#bbb' }}>Pas encore testé</div>
                )}
              </div>
            ))}
          </div>

          {history.length > 0 && (
            <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1rem 1.25rem' }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Historique des tests</h2>
              {history.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '5px 0', borderBottom: '1px solid #f0f0f0', fontSize: 12, color: '#666' }}>
                  <span style={{ minWidth: 80, color: '#bbb' }}>{h.date}</span>
                  <span style={{ minWidth: 80 }}>{h.engine}</span>
                  <span style={{ minWidth: 120, color: '#888' }}>{h.query}</span>
                  <span style={{ flex: 1, color: '#999' }}>{h.excerpt}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* CALENDRIER */}
      {tab === 'cal' && (
        <div>
          <div style={{ display: 'flex', gap: 16, marginBottom: '1rem', flexWrap: 'wrap' }}>
            {Object.entries(typeColor).map(([k, c]) => (
              <span key={k} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#666' }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: c, display: 'inline-block' }} />
                {{ urgent: 'Urgent', soon: 'Bientôt', planned: 'Planifié', idea: 'Idée' }[k]}
              </span>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
            {d.cal.map((item, i) => (
              <div key={i} style={{
                background: 'white', border: '1px solid #e5e5e5', borderRadius: 8,
                padding: '0.75rem 1rem', borderLeft: `3px solid ${typeColor[item.type]}`,
              }}>
                <div style={{ fontSize: 11, color: '#bbb', marginBottom: 4 }}>{item.date}</div>
                <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 3 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: '#999' }}>{item.kind}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
