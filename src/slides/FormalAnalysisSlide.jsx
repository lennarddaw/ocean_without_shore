import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function FormalAnalysisSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-8">Formale Analyse</h2>

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-2">
            <ImagePlaceholder src="/images/ocean-san-gallo.jpg" label="Triptychon in San Gallo" aspect="aspect-[3/4]" />
          </div>

          <div className="col-span-3 space-y-6">
            <div>
              <h4 className="text-viola-gold text-2xl mb-3">Komposition</h4>
              <p className="text-viola-light text-xl">Triptychon-Struktur · Zentralachse · Frontalität</p>
            </div>
            <div>
              <h4 className="text-viola-gold text-2xl mb-3">Farbe & Licht</h4>
              <p className="text-viola-light text-xl">Monochrom ↔ Polychrom — Chiaroscuro</p>
              <p className="text-viola-light/60 text-xl mt-1">S/W = Tod · Farbe = Leben</p>
            </div>
            <div>
              <h4 className="text-viola-gold text-2xl mb-3">Bewegung & Zeit</h4>
              <p className="text-viola-light text-xl">Extreme Zeitlupe (300 fps) — zyklisch</p>
              <p className="text-viola-light/60 text-xl mt-1">Violas Medium ist die Zeit selbst</p>
            </div>
            <div>
              <h4 className="text-viola-gold text-2xl mb-3">Klang</h4>
              <p className="text-viola-light text-xl">Wasserrauschen ↔ Stille — immersiv</p>
            </div>

            <div className="flex gap-8 pt-4 border-t border-white/5">
              <span className="text-viola-muted text-xl italic">„Rembrandt des Videozeitalters"</span>
              <span className="text-viola-muted text-xl italic">„Hi-Tech-Caravaggio"</span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
