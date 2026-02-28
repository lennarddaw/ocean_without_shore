import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function TechnicalSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-6">Technischer Aufbau</h2>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-4xl font-light text-viola-light mb-6">Duales Kamerasystem</h3>
            <ImagePlaceholder label="Spiegel-Prisma-System (Diagramm)" aspect="aspect-[16/10]" />

            <div className="mt-6 space-y-4">
              <div className="p-5 rounded-lg border border-white/5 bg-viola-surface/50">
                <h4 className="text-viola-muted text-lg mb-1">Analoge S/W-Kamera</h4>
                <p className="text-viola-light/60 text-xl">Körnig, 25 Jahre alt → Immaterialität</p>
              </div>
              <div className="p-5 rounded-lg border border-viola-gold/20 bg-viola-gold/5">
                <h4 className="text-viola-gold text-lg mb-1">Moderne HD-Farbkamera</h4>
                <p className="text-viola-light/70 text-xl">Gestochen scharf → Materialität</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-light text-viola-light mb-6">Die Wasserwand</h3>
            <ImagePlaceholder src="/images/ocean-still-1.jpg" label="Wasserwand — Durchquerung" aspect="aspect-[16/10]" />

            <div className="mt-6 space-y-4">
              <div className="pl-5 border-l-2 border-viola-water/40">
                <p className="text-viola-light text-xl">3m × 2,4m — reale Wasserwand</p>
              </div>
              <div className="pl-5 border-l-2 border-viola-water/40">
                <p className="text-viola-light text-xl">Lasergeschnittene Kante — nahezu unsichtbar</p>
              </div>
              <div className="pl-5 border-l-2 border-viola-water/40">
                <p className="text-viola-light text-xl">Kein digitaler Effekt!</p>
              </div>
              <div className="pl-5 border-l-2 border-viola-water/40">
                <p className="text-viola-light/60 text-xl">6 Lautsprecher · 90 Min. Schleife</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
