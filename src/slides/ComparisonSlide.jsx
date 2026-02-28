import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function ComparisonSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-8">Vergleichswerke</h2>

        <div className="grid grid-cols-2 gap-10">
          {/* Viola */}
          <div>
            <h3 className="text-viola-gold text-2xl mb-6">Violas Œuvre</h3>
            <div className="space-y-4">
              {[
                { title: 'The Crossing (1996)', desc: 'Feuer & Wasser — Ego-Auflösung', src: '/images/crossing-1.jpg' },
                { title: 'Nantes Triptych (1992)', desc: 'Geburt / Unterwasser / Tod' },
                { title: "Tristan's Ascension (2005)", desc: 'Wasserfall — Vorläufer', src: '/images/crossing-2.jpg' },
              ].map((w, i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-white/5 bg-viola-surface/50">
                  <ImagePlaceholder src={w.src} label={w.title} aspect="aspect-[16/9]" className="rounded-none" />
                  <div className="p-4">
                    <h4 className="text-viola-light text-xl font-medium">{w.title}</h4>
                    <p className="text-viola-muted text-lg">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kunstgeschichte */}
          <div>
            <h3 className="text-viola-gold text-2xl mb-6">Kunstgeschichte</h3>
            <div className="space-y-4">
              {[
                { title: 'Caravaggio — Berufung des Matthäus', desc: 'Tenebrismus — Licht aus Dunkelheit', src: '/images/caravaggio-calling.jpg' },
                { title: 'C. D. Friedrich — Mönch am Meer', desc: '„Ozean ohne Ufer" — das Unendliche', src: '/images/friedrich-monk.jpg' },
                { title: 'Mark Rothko — Farbfeldmalerei', desc: 'Kontemplation — Transzendenz' },
              ].map((w, i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-white/5 bg-viola-surface/50">
                  <ImagePlaceholder src={w.src} label={w.title} aspect="aspect-[16/9]" className="rounded-none" />
                  <div className="p-4">
                    <h4 className="text-viola-light text-xl font-medium">{w.title}</h4>
                    <p className="text-viola-muted text-lg">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
