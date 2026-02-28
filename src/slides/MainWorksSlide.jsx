import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

const works = [
  { year: '1977', title: 'The Reflecting Pool', desc: 'Zeit als Material' },
  { year: '1992', title: 'Nantes Triptych', desc: 'Geburt / Unterwasser / Tod' },
  { year: '1996', title: 'The Crossing', desc: 'Feuer & Wasser', img: '/images/crossing-1.jpg' },
  { year: '2000', title: 'Quintet of the Astonished', desc: 'Extreme Zeitlupe' },
  { year: '2007', title: 'Ocean Without a Shore', desc: 'Wasserwand — Schwelle', highlight: true, img: '/images/ocean-still-1.jpg' },
  { year: '2014', title: 'Martyrs', desc: "St. Paul's Cathedral" },
]

export default function MainWorksSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-8">Ausgewählte Hauptwerke</h2>

        <div className="grid grid-cols-3 gap-5">
          {works.map((w, i) => (
            <div
              key={i}
              className={`rounded-lg overflow-hidden border ${
                w.highlight ? 'border-viola-gold/30 bg-viola-gold/5' : 'border-white/5 bg-viola-surface/50'
              }`}
            >
              <ImagePlaceholder src={w.img} label={w.title} aspect="aspect-[16/10]" className="rounded-none" />
              <div className="p-4">
                <span className={`text-lg font-mono ${w.highlight ? 'text-viola-gold' : 'text-viola-muted/60'}`}>{w.year}</span>
                <h4 className={`text-xl font-medium mt-1 ${w.highlight ? 'text-viola-gold' : 'text-viola-light'}`}>{w.title}</h4>
                <p className="text-viola-muted text-lg mt-1">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  )
}
