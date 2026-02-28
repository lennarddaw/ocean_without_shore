import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function ThemeLiminalitySlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-4 sm:mb-6">Thematische Analyse</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-viola-light mb-2">Der Schwellenraum</h3>
        <p className="text-viola-muted text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8">Liminalität (lat. <em>limen</em> = Schwelle)</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <ImagePlaceholder src="/images/ocean-still-1.jpg" label="Moment der Schwellenüberschreitung" aspect="aspect-[3/4]" />
          </div>

          <div className="space-y-3 sm:space-y-5">
            <h4 className="text-viola-gold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4">Die Wasserwand als Grenze</h4>
            {[
              { label: 'Physisch', desc: 'Reale Wasserwand' },
              { label: 'Technologisch', desc: 'Analog ↔ Digital' },
              { label: 'Ontologisch', desc: 'Sein ↔ Nichtsein' },
              { label: 'Temporal', desc: 'Tote ↔ Lebende' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 sm:gap-6 items-baseline py-2 border-b border-white/5">
                <span className="text-viola-water text-base sm:text-lg md:text-xl font-medium shrink-0 w-28 sm:w-36">{item.label}</span>
                <span className="text-viola-light text-base sm:text-lg md:text-xl">{item.desc}</span>
              </div>
            ))}

            <h4 className="text-viola-gold text-lg sm:text-xl md:text-2xl mt-4 sm:mt-6 mb-2 sm:mb-3">Wasser in Weltkulturen</h4>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-viola-light text-base sm:text-lg md:text-xl pl-4 sm:pl-5 border-l-2 border-viola-water/40">Taufe — Tod & Wiedergeburt</p>
              <p className="text-viola-light text-base sm:text-lg md:text-xl pl-4 sm:pl-5 border-l-2 border-viola-water/40">Styx — Grenzfluss zur Unterwelt</p>
              <p className="text-viola-light text-base sm:text-lg md:text-xl pl-4 sm:pl-5 border-l-2 border-viola-water/40">Fruchtwasser — Ursprung des Lebens</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
