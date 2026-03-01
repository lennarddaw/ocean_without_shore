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
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-4 sm:mb-6">Das Werk</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-viola-light mb-6 sm:mb-8 md:mb-10">Werkdaten</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <img
              src="/images/ocean-installation-ngv2.jpg"
              alt="Installationsansicht"
              className="w-full rounded-lg"
            />
          </div>

          <div className="space-y-0">
            {data.map((d, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-1 sm:gap-6 py-2 sm:py-3 border-b border-black/8">
                <span className="text-viola-gold text-sm sm:text-lg uppercase tracking-wider shrink-0 sm:w-28">{d.label}</span>
                <span className="text-viola-light text-base sm:text-lg md:text-xl">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  )
}
