import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

const data = [
  { label: 'Titel', value: 'Ocean Without a Shore' },
  { label: 'Jahr', value: '2007' },
  { label: 'Medium', value: 'Dreikanal-HD-Video & Klanginstallation' },
  { label: 'Dauer', value: '~90 Min. Endlosschleife' },
  { label: 'Technik', value: '2x 65" + 1x 103" Plasma, 6 Lautsprecher' },
  { label: 'Performer', value: '24 Personen' },
  { label: 'Ort', value: '52. Biennale, Oratorio di San Gallo' },
  { label: 'Auflage', value: '3 (Melbourne, Philadelphia, Seoul)' },
]

export default function WorkDataSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-6">Das Werk</h2>
        <h3 className="text-5xl font-light text-viola-light mb-10">Werkdaten</h3>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <ImagePlaceholder src="/images/ocean-installation-ngv2.jpg" label="Installationsansicht" aspect="aspect-[4/3]" />
          </div>

          <div className="space-y-0">
            {data.map((d, i) => (
              <div key={i} className="flex gap-6 py-3 border-b border-white/5">
                <span className="text-viola-gold text-lg uppercase tracking-wider shrink-0 w-28">{d.label}</span>
                <span className="text-viola-light text-xl">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  )
}
