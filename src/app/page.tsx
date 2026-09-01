'use client'
import { useState } from 'react'

const SITES = {
  ludi: {
    name: 'Ludi — Drainage',
    url: 'ludi-lartetlamatiere.fr',
    queries: ['drainage lymphatique Cannes-la-Bocca', 'drainage Renata França Cannes', 'massage drainant post-opératoire Cannes'],
    audit: {
      score: 90,
      auditDate: '31 août 2026',
      scope: 'Réanalyse live après déploiement · 12 pages publiques · grille fixe sur 100 points · performance non incluse',
      items: [
        { label: 'Indexabilité & robots', ok: true, points: 10, max: 10, detail: 'HTTPS, robots.txt et pages accessibles' },
        { label: 'Sitemap', ok: true, points: 10, max: 10, detail: '12 pages sur 12 listées dans le sitemap' },
        { label: 'URL canoniques', ok: true, points: 10, max: 10, detail: 'Canonical présent sur les 12 pages auditées' },
        { label: 'Titres & meta descriptions', ok: true, points: 10, max: 10, detail: 'Présents sur les 12 pages auditées' },
        { label: 'Titres H1', ok: false, points: 7, max: 10, detail: 'Cabinet sans H1 · accueil peu descriptif' },
        { label: 'Données structurées JSON-LD', ok: true, points: 15, max: 15, detail: 'Schémas valides · horaires harmonisés de 8 h à 20 h' },
        { label: 'Open Graph & partage social', ok: true, points: 10, max: 10, detail: 'Aperçus Open Graph et Twitter complets · image 1200 × 630' },
        { label: 'Textes alternatifs des images', ok: true, points: 5, max: 5, detail: '13 images sur 13 avec attribut alt' },
        { label: 'Photos & finition du contenu', ok: false, points: 3, max: 10, detail: '12 emplacements PHOTO conservés à ta demande' },
        { label: 'Visibilité IA / GEO', ok: true, points: 10, max: 10, detail: 'llms.txt, FAQ, articles et sitemap cohérents' },
      ],
      priorities: [
        'Ajouter un H1 descriptif sur la page Cabinet',
        "Renforcer le H1 de l'accueil autour du drainage lymphatique à Cannes",
        'Remplacer les 12 emplacements PHOTO quand les visuels définitifs seront prêts',
        'Mesurer et améliorer les Core Web Vitals',
        'Auditer la fiche Google Business Profile et la visibilité locale',
      ],
    },
    cal: [
      { date: '31 août 2026', title: 'Corrections SEO techniques déployées', type: 'planned', kind: 'Terminé' },
      { date: 'Sept. 2026', title: 'Améliorer les titres H1', type: 'soon', kind: 'Contenu' },
      { date: 'À planifier', title: 'Ajouter les photos définitives', type: 'idea', kind: 'Média' },
      { date: 'Oct. 2026', title: 'Audit Google Business Profile', type: 'idea', kind: 'Référencement local' },
    ],
  },
  thomas_cannes: {
    name: 'Thomas — Cannes',
    url: 'porebski-thomas-osteopathe.fr',
    queries: ['ostéopathe Cannes-la-Bocca', 'ostéopathe sport Cannes', 'ostéopathe nourrisson Cannes'],
    audit: {
      score: 99,
      auditDate: '1er septembre 2026',
      scope: 'Audit live de 58 pages publiques · grille fixe sur 100 points · performance non incluse',
      items: [
        { label: 'Indexabilité & robots', ok: true, points: 10, max: 10, detail: 'HTTPS, robots.txt et 58 pages accessibles' },
        { label: 'Sitemap', ok: true, points: 10, max: 10, detail: '58 URLs listées et auditées' },
        { label: 'URL canoniques', ok: true, points: 10, max: 10, detail: '58 pages sur 58 avec canonical correct' },
        { label: 'Titres & meta descriptions', ok: true, points: 10, max: 10, detail: 'Présents sur les 58 pages auditées' },
        { label: 'Titres H1', ok: true, points: 10, max: 10, detail: 'Un H1 unique sur les 58 pages' },
        { label: 'Données structurées JSON-LD', ok: true, points: 15, max: 15, detail: 'MedicalBusiness Cannes et Fréjus valides · horaires 8 h–20 h 30' },
        { label: 'Open Graph & partage social', ok: false, points: 9, max: 10, detail: '57 pages sur 58 complètes · og:image manque sur /ressources/reflux-bebe' },
        { label: 'Textes alternatifs des images', ok: true, points: 5, max: 5, detail: 'Aucun attribut alt manquant sur les 58 pages' },
        { label: 'Référencement local Cannes', ok: true, points: 10, max: 10, detail: 'Page dédiée, adresse, coordonnées, horaires et lien Doctolib cohérents' },
        { label: 'Visibilité IA / GEO', ok: true, points: 10, max: 10, detail: 'llms.txt, FAQ, articles et entités locales présents' },
      ],
      priorities: ['Ajouter og:image sur /ressources/reflux-bebe', 'Mesurer Lighthouse séparément', 'Auditer Google Business Profile Cannes', 'Suivre l’indexation de /osteopathe-cannes-la-bocca'],
    },
    cal: [
      { date: 'Immédiat', title: 'Compléter og:image sur reflux bébé', type: 'urgent', kind: 'Technique' },
      { date: 'Sept. 2026', title: 'Audit Google Business Profile Cannes', type: 'soon', kind: 'Référencement local' },
      { date: 'Sept. 2026', title: 'Mesure Lighthouse mobile', type: 'planned', kind: 'Performance' },
      { date: 'Oct. 2026', title: 'Contrôle indexation page locale Cannes', type: 'idea', kind: 'SEO local' },
    ],
  },
  thomas_frejus: {
    name: 'Thomas — Fréjus',
    url: 'porebski-thomas-osteopathe.fr',
    queries: ['ostéopathe Fréjus', 'ostéopathe sport Fréjus', 'ostéopathe bébé Fréjus'],
    audit: {
      score: 99,
      auditDate: '1er septembre 2026',
      scope: 'Audit live de 58 pages publiques · grille fixe sur 100 points · performance non incluse',
      items: [
        { label: 'Indexabilité & robots', ok: true, points: 10, max: 10, detail: 'HTTPS, robots.txt et 58 pages accessibles' },
        { label: 'Sitemap', ok: true, points: 10, max: 10, detail: '58 URLs listées et auditées' },
        { label: 'URL canoniques', ok: true, points: 10, max: 10, detail: '58 pages sur 58 avec canonical correct' },
        { label: 'Titres & meta descriptions', ok: true, points: 10, max: 10, detail: 'Présents sur les 58 pages auditées' },
        { label: 'Titres H1', ok: true, points: 10, max: 10, detail: 'Un H1 unique sur les 58 pages' },
        { label: 'Données structurées JSON-LD', ok: true, points: 15, max: 15, detail: 'MedicalBusiness Cannes et Fréjus valides · horaires 8 h–20 h 30' },
        { label: 'Open Graph & partage social', ok: false, points: 9, max: 10, detail: '57 pages sur 58 complètes · og:image manque sur /ressources/reflux-bebe' },
        { label: 'Textes alternatifs des images', ok: true, points: 5, max: 5, detail: 'Aucun attribut alt manquant sur les 58 pages' },
        { label: 'Référencement local Fréjus', ok: true, points: 10, max: 10, detail: 'Page dédiée, adresse, coordonnées, horaires et lien Doctolib cohérents' },
        { label: 'Visibilité IA / GEO', ok: true, points: 10, max: 10, detail: 'llms.txt, FAQ, articles et entités locales présents' },
      ],
      priorities: ['Ajouter og:image sur /ressources/reflux-bebe', 'Mesurer Lighthouse séparément', 'Auditer Google Business Profile Fréjus', 'Suivre l’indexation de /osteopathe-frejus'],
    },
    cal: [
      { date: 'Immédiat', title: 'Compléter og:image sur reflux bébé', type: 'urgent', kind: 'Technique' },
      { date: 'Sept. 2026', title: 'Audit Google Business Profile Fréjus', type: 'soon', kind: 'Référencement local' },
      { date: 'Sept. 2026', title: 'Mesure Lighthouse mobile', type: 'planned', kind: 'Performance' },
      { date: 'Oct. 2026', title: 'Contrôle indexation page locale Fréjus', type: 'idea', kind: 'SEO local' },
    ],
  },
}
const IA_ENGINES = [
  { id: 'chatgpt', label: 'ChatGPT', color: '#10a37f' },
  { id: 'gemini', label: 'Gemini', color: '#4285f4' },
  { id: 'perplexity', label: 'Perplexity', color: '#5436da' },
  { id: 'claude', label: 'Claude', color: '#d97706' },
]

type SiteKey = keyof typeof SITES
type Tab = 'audit' | 'ia' | 'cal'
type AuditItem = { label: string; ok: boolean; detail: string; points?: number; max?: number }
type Synthesis = {
  positif: string[]
  negatif: string[]
  actions: { priorite: 'haute' | 'moyenne' | 'basse'; texte: string }[]
  conclusion: string
}

const typeColor: Record<string, string> = { urgent: '#E24B4A', soon: '#EF9F27', planned: '#1D9E75', idea: '#7F77DD' }
const priorityColor: Record<string, string> = { haute: '#fef2f2', moyenne: '#fff7ed', basse: '#fefce8' }
const priorityBorder: Record<string, string> = { haute: '#fecaca', moyenne: '#fed7aa', basse: '#fde68a' }
const priorityLabel: Record<string, string> = { haute: 'Haute', moyenne: 'Moyenne', basse: 'Basse' }

export default function Dashboard() {
  const [site, setSite] = useState<SiteKey>('ludi')
  const [tab, setTab] = useState<Tab>('audit')
  const [query, setQuery] = useState('')
  const [drafts, setDrafts] = useState<Record<string, string>>({})
  const [saved, setSaved] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState<string | null>(null)
  const [synthesis, setSynthesis] = useState<Synthesis | null>(null)
  const [synthesisLoading, setSynthesisLoading] = useState(false)
  const [synthesisError, setSynthesisError] = useState('')
  const [history, setHistory] = useState<{ date: string; engine: string; query: string; excerpt: string }[]>([])

  const d = SITES[site]
  const auditItems = d.audit.items as AuditItem[]
  const hasWeightedScore = auditItems.every(item => item.points !== undefined && item.max !== undefined)
  const auditScore = hasWeightedScore
    ? auditItems.reduce((total, item) => total + (item.points ?? 0), 0)
    : d.audit.score
  const auditDate = 'auditDate' in d.audit ? d.audit.auditDate : null
  const auditScope = 'scope' in d.audit ? d.audit.scope : null
  const activeQuery = query || d.queries[0]
  const savedCount = Object.keys(saved).length
  const canSynthesize = savedCount >= 2

  function resetIA() { setDrafts({}); setSaved({}); setSynthesis(null); setSynthesisError('') }
  function changeSite(s: SiteKey) { setSite(s); setQuery(''); resetIA() }
  function changeQuery(q: string) { setQuery(q); resetIA() }

  function copyQuery(engineId: string) {
    const siteName = site === 'ludi'
      ? 'ludi-lartetlamatiere.fr (Ludiwine Martini, drainage lymphatique Renata Fran\u00e7a, Cannes-la-Bocca)'
      : site === 'thomas_cannes'
      ? 'porebski-thomas-osteopathe.fr cabinet Cannes-la-Bocca (Thomas Porebski, ost\u00e9opathe D.O.)'
      : 'porebski-thomas-osteopathe.fr cabinet Fr\u00e9jus (Thomas Porebski, ost\u00e9opathe D.O.)'
    const prompt = 'Requ\u00eate : "' + activeQuery + '"\n\nSite : ' + siteName + '\n\nDonne ta r\u00e9ponse compl\u00e8te \u00e0 cette requ\u00eate. Puis indique : ce site appara\u00eet-il ? \u00c0 quelle position ? Pourquoi ?'
    navigator.clipboard.writeText(prompt)
    setCopied(engineId)
    setTimeout(() => setCopied(null), 2000)
  }

  function saveResponse(engineId: string) {
    const text = drafts[engineId]?.trim()
    if (!text) return
    setSaved(s => ({ ...s, [engineId]: text }))
    setHistory(h => [{ date: new Date().toLocaleDateString('fr-FR'), engine: engineId, query: activeQuery, excerpt: text.slice(0, 80) + '...' }, ...h.slice(0, 19)])
    setSynthesis(null)
  }

  function resetResponse(engineId: string) {
    setSaved(s => { const n = { ...s }; delete n[engineId]; return n })
    setDrafts(d => { const n = { ...d }; delete n[engineId]; return n })
    setSynthesis(null)
  }

  async function generateSynthesis() {
    if (!canSynthesize) return
    setSynthesisLoading(true); setSynthesisError(''); setSynthesis(null)
    const siteName = site === 'ludi'
      ? 'ludi-lartetlamatiere.fr (Ludiwine Martini, drainage Renata Fran\u00e7a, Cannes-la-Bocca)'
      : site === 'thomas_cannes'
      ? 'porebski-thomas-osteopathe.fr Cannes-la-Bocca (Thomas Porebski, ost\u00e9opathe)'
      : 'porebski-thomas-osteopathe.fr Fr\u00e9jus (Thomas Porebski, ost\u00e9opathe)'
    const lines = Object.entries(saved).map(([ia, rep]) => '## ' + ia + '\n' + rep).join('\n\n')
    const prompt = `Tu es expert SEO et GEO. Analyse ces r\u00e9ponses d'IA pour la requ\u00eate "${activeQuery}" (site : ${siteName}).\n\n${lines}\n\nR\u00e9ponds UNIQUEMENT en JSON valide sans backticks :\n{"positif":["..."],"negatif":["..."],"actions":[{"priorite":"haute","texte":"..."}],"conclusion":"..."}`
    try {
      const res = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })
      const data = await res.json()
      const text = data?.text ?? ''
      setSynthesis(JSON.parse(text.replace(/```json|```/g, '').trim()))
    } catch { setSynthesisError('Erreur lors de la synth\u00e8se. R\u00e9essayez.') }
    setSynthesisLoading(false)
  }
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1rem', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: 8 }}>
        <h1 style={{ fontSize: 20, fontWeight: 600 }}>Tableau de bord SEO/GEO</h1>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {(['ludi', 'thomas_cannes', 'thomas_frejus'] as SiteKey[]).map(s => (
            <button key={s} onClick={() => changeSite(s)} style={{ padding: '5px 12px', borderRadius: 6, border: '1px solid', borderColor: site === s ? '#378ADD' : '#ddd', background: site === s ? '#E6F1FB' : 'white', color: site === s ? '#185FA5' : '#555', cursor: 'pointer', fontSize: 13 }}>
              {SITES[s].name}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', borderBottom: '1px solid #e5e5e5', marginBottom: '1.5rem' }}>
        {(['audit', 'ia', 'cal'] as Tab[]).map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: '8px 20px', border: 'none', background: 'none', borderBottom: tab === t ? '2px solid #378ADD' : '2px solid transparent', color: tab === t ? '#185FA5' : '#888', cursor: 'pointer', fontSize: 14, marginBottom: -1 }}>
            {{ audit: 'Audit SEO', ia: 'Suivi IA', cal: 'Calendrier' }[t]}
          </button>
        ))}
      </div>

      {tab === 'audit' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: '1.5rem' }}>
            {[
              { label: 'Score global', value: auditScore + '/100', color: auditScore >= 75 ? '#1D9E75' : '#EF9F27' },
              { label: 'Critères validés', value: auditItems.filter(i => i.ok).length + '/' + auditItems.length, color: '#1D9E75' },
              { label: 'À améliorer', value: String(auditItems.filter(i => !i.ok).length), color: '#EF9F27' },
            ].map(m => (
              <div key={m.label} style={{ background: '#f3f3f0', borderRadius: 8, padding: '1rem' }}>
                <div style={{ fontSize: 12, color: '#888', marginBottom: 6 }}>{m.label}</div>
                <div style={{ fontSize: 24, fontWeight: 600, color: m.color }}>{m.value}</div>
              </div>
            ))}
          </div>
          {(auditDate || auditScope) && (
            <div style={{ padding: '10px 14px', background: '#EBF4FF', border: '1px solid #BDD7F5', borderRadius: 8, fontSize: 12, color: '#185FA5', marginBottom: '1rem', lineHeight: 1.5 }}>
              <strong>Dernier audit : {auditDate}</strong>{auditScope ? ' · ' + auditScope : ''}
            </div>
          )}
          <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1rem 1.25rem', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Points techniques</h2>
            {auditItems.map(item => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap', padding: '8px 0', borderBottom: '1px solid #f0f0f0', fontSize: 13 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#444', fontWeight: 500 }}>
                  <span style={{ color: item.ok ? '#1D9E75' : '#EF9F27' }}>{item.ok ? '✓' : '!'}</span>
                  {item.label}
                </span>
                <span style={{ color: '#777', fontSize: 12, textAlign: 'right', flex: '1 1 320px' }}>
                  {item.points !== undefined && item.max !== undefined && (
                    <strong style={{ color: item.ok ? '#1D9E75' : '#EF9F27', marginRight: 8 }}>{item.points}/{item.max}</strong>
                  )}
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
          <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1rem 1.25rem' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Corrections prioritaires</h2>
            {d.audit.priorities.map((p: string, i: number) => (
              <div key={i} style={{ display: 'flex', gap: 10, padding: '6px 0', borderBottom: '1px solid #f0f0f0', fontSize: 13, color: '#555' }}>
                <span style={{ color: '#bbb', minWidth: 20 }}>{i + 1}</span><span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'ia' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1rem 1.25rem' }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Requete a tester</h2>
            <input value={query} onChange={e => changeQuery(e.target.value)} placeholder={d.queries[0]} style={{ width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: 6, fontSize: 13, boxSizing: 'border-box' as const, marginBottom: 8 }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {d.queries.map((q: string) => (
                <button key={q} onClick={() => changeQuery(q)} style={{ padding: '4px 12px', border: '1px solid ' + (activeQuery === q ? '#378ADD' : '#ddd'), borderRadius: 20, background: activeQuery === q ? '#E6F1FB' : 'none', fontSize: 12, color: activeQuery === q ? '#185FA5' : '#666', cursor: 'pointer' }}>{q}</button>
              ))}
            </div>
          </div>
          <div style={{ padding: '10px 14px', background: '#EBF4FF', border: '1px solid #BDD7F5', borderRadius: 8, fontSize: 13, color: '#185FA5' }}>
            Copie la question dans l'IA, colle la reponse ici, clique Enregistrer. Des que <strong>2 reponses sont enregistrees</strong>, la synthese s'active.
          </div>
          {IA_ENGINES.map(eng => {
            const isSaved = !!saved[eng.id]
            return (
              <div key={eng.id} style={{ background: 'white', border: '1.5px solid ' + (isSaved ? eng.color : '#e5e5e5'), borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #f0f0f0', background: isSaved ? eng.color + '09' : 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 9, height: 9, borderRadius: '50%', background: isSaved ? eng.color : '#d1d5db', display: 'inline-block' }} />
                    <strong style={{ fontSize: 14 }}>{eng.label}</strong>
                    {isSaved && <span style={{ fontSize: 11, background: eng.color + '18', color: eng.color, padding: '2px 8px', borderRadius: 10, fontWeight: 600 }}>Enregistre</span>}
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button onClick={() => copyQuery(eng.id)} style={{ padding: '4px 12px', border: '1px solid #ddd', borderRadius: 6, background: copied === eng.id ? '#E6F1FB' : 'white', color: copied === eng.id ? '#185FA5' : '#666', fontSize: 12, cursor: 'pointer' }}>
                      {copied === eng.id ? 'Copie !' : 'Copier la question'}
                    </button>
                    {isSaved && <button onClick={() => resetResponse(eng.id)} style={{ padding: '4px 8px', border: '1px solid #fecaca', borderRadius: 6, background: '#fef2f2', color: '#dc2626', fontSize: 12, cursor: 'pointer' }}>X</button>}
                  </div>
                </div>
                <div style={{ padding: 14 }}>
                  {isSaved ? (
                    <div style={{ fontSize: 12, color: '#555', lineHeight: 1.6, background: '#f8fafc', borderRadius: 8, padding: 10, maxHeight: 150, overflowY: 'auto' as const, whiteSpace: 'pre-wrap' as const }}>{saved[eng.id]}</div>
                  ) : (
                    <>
                      <textarea placeholder={'Colle ici la reponse de ' + eng.label + '...'} value={drafts[eng.id] ?? ''} onChange={e => setDrafts(prev => ({ ...prev, [eng.id]: e.target.value }))} style={{ width: '100%', minHeight: 90, padding: '8px 10px', border: '1px solid #eee', borderRadius: 6, fontSize: 12, color: '#555', resize: 'vertical' as const, fontFamily: 'system-ui, sans-serif', boxSizing: 'border-box' as const }} />
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 6 }}>
                        <button onClick={() => saveResponse(eng.id)} disabled={!drafts[eng.id]?.trim()} style={{ padding: '5px 16px', borderRadius: 6, border: 'none', background: drafts[eng.id]?.trim() ? eng.color : '#e2e8f0', color: drafts[eng.id]?.trim() ? 'white' : '#9ca3af', fontSize: 12, fontWeight: 600, cursor: drafts[eng.id]?.trim() ? 'pointer' : 'not-allowed' }}>Enregistrer</button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '8px 0' }}>
            <button onClick={generateSynthesis} disabled={!canSynthesize || synthesisLoading} style={{ padding: '11px 28px', borderRadius: 10, border: 'none', background: canSynthesize ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' : '#e2e8f0', color: canSynthesize ? 'white' : '#9ca3af', fontSize: 14, fontWeight: 700, cursor: canSynthesize ? 'pointer' : 'not-allowed', boxShadow: canSynthesize ? '0 4px 12px rgba(99,102,241,.25)' : 'none' }}>
              {synthesisLoading ? 'Analyse en cours...' : 'Generer la synthese' + (savedCount > 0 ? ' (' + savedCount + '/4 IA)' : '')}
            </button>
            {!canSynthesize && <p style={{ fontSize: 12, color: '#9ca3af', margin: 0 }}>Enregistre au moins 2 reponses pour activer la synthese</p>}
            {synthesisError && <p style={{ fontSize: 13, color: '#dc2626', margin: 0 }}>{synthesisError}</p>}
          </div>
          {synthesis && (
            <div style={{ border: '2px solid #6366f1', borderRadius: 14, overflow: 'hidden', background: 'white' }}>
              <div style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', padding: '12px 20px' }}>
                <h3 style={{ margin: 0, color: 'white', fontSize: 14, fontWeight: 700 }}>Synthese IA — "{activeQuery}"</h3>
              </div>
              <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 18 }}>
                {synthesis.positif.length > 0 && (
                  <div>
                    <p style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 13, color: '#059669' }}>Ce qui va bien</p>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>{synthesis.positif.map((p: string, i: number) => <li key={i} style={{ fontSize: 13, color: '#374151', lineHeight: 1.5, marginBottom: 4 }}>{p}</li>)}</ul>
                  </div>
                )}
                {synthesis.negatif.length > 0 && (
                  <div>
                    <p style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 13, color: '#dc2626' }}>Problemes detectes</p>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>{synthesis.negatif.map((n: string, i: number) => <li key={i} style={{ fontSize: 13, color: '#374151', lineHeight: 1.5, marginBottom: 4 }}>{n}</li>)}</ul>
                  </div>
                )}
                {synthesis.actions.length > 0 && (
                  <div>
                    <p style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 13, color: '#6366f1' }}>Actions prioritaires</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                      {synthesis.actions.map((a: {priorite:string;texte:string}, i: number) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '7px 12px', background: priorityColor[a.priorite] || '#f9fafb', borderRadius: 7, border: '1px solid ' + (priorityBorder[a.priorite] || '#e5e5e5') }}>
                          <span style={{ fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap' as const, paddingTop: 2, color: '#6b7280' }}>{priorityLabel[a.priorite] || a.priorite}</span>
                          <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{a.texte}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {synthesis.conclusion && (
                  <div style={{ padding: '10px 14px', background: '#f5f3ff', borderRadius: 8, border: '1px solid #ddd6fe' }}>
                    <p style={{ margin: 0, fontSize: 13, color: '#4c1d95', lineHeight: 1.6, fontStyle: 'italic' }}>{synthesis.conclusion}</p>
                  </div>
                )}
              </div>
            </div>
          )}
          {history.length > 0 && (
            <div style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: 12, padding: '1rem 1.25rem' }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>Historique</h2>
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

      {tab === 'cal' && (
        <div>
          <div style={{ display: 'flex', gap: 16, marginBottom: '1rem', flexWrap: 'wrap' }}>
            {Object.entries(typeColor).map(([k, c]) => (
              <span key={k} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#666' }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: c, display: 'inline-block' }} />
                {{ urgent: 'Urgent', soon: 'Bientot', planned: 'Planifie', idea: 'Idee' }[k]}
              </span>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
            {d.cal.map((item: {date:string;title:string;type:string;kind:string}, i: number) => (
              <div key={i} style={{ background: 'white', border: '1px solid #e5e5e5', borderRadius: 8, padding: '0.75rem 1rem', borderLeft: '3px solid ' + typeColor[item.type] }}>
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
