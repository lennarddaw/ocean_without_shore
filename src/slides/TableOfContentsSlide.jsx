import Slide from '../components/Slide'

const sections = [
  { num: '01', title: 'Der Künstler: Bill Viola' },
  { num: '02', title: 'Kunsthistorischer Kontext' },
  { num: '03', title: 'Das Werk — Daten & Ort' },
  { num: '04', title: 'Werkbeschreibung' },
  { num: '05', title: 'Technischer Aufbau' },
  { num: '06', title: 'Formale Analyse' },
  { num: '07', title: 'Thematische Analyse' },
  { num: '08', title: 'Interpretation' },
  { num: '09', title: 'Vergleichswerke' },
  { num: '10', title: 'Fazit & Diskussion' },
]

export default function TableOfContentsSlide() {
  return (
    <Slide>
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-12">Gliederung</h2>

        <div className="space-y-0">
          {sections.map((s, i) => (
            <div key={i} className="flex items-baseline gap-8 py-4 border-b border-white/5 last:border-0">
              <span className="text-viola-gold/50 text-xl font-mono w-10 shrink-0">{s.num}</span>
              <span className="text-viola-light text-3xl font-light">{s.title}</span>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  )
}
