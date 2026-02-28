import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'
import VideoEmbed from '../components/VideoEmbed'

export default function VisualProcessSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-4 sm:mb-6">Werkbeschreibung</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-viola-light mb-6 sm:mb-8">Der visuelle Ablauf</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <VideoEmbed videoId="eTakwOpWqG4" label="Ocean Without a Shore — Clip" />
          </div>

          <div className="space-y-3 sm:space-y-5">
            <div className="flex gap-3 sm:gap-4 items-start">
              <span className="text-viola-muted/40 text-lg sm:text-xl font-mono shrink-0">01</span>
              <div>
                <h4 className="text-viola-muted text-lg sm:text-xl font-medium">Dunkelheit</h4>
                <p className="text-viola-light/60 text-base sm:text-lg">Silhouette taucht auf — S/W, körnig, geisterhaft</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 items-start">
              <span className="text-viola-muted/40 text-lg sm:text-xl font-mono shrink-0">02</span>
              <div>
                <h4 className="text-viola-muted text-lg sm:text-xl font-medium">Annäherung</h4>
                <p className="text-viola-light/60 text-base sm:text-lg">Langsame Bewegung — monochrom, überlebensgroß</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 items-start">
              <span className="text-viola-gold text-lg sm:text-xl font-mono shrink-0">03</span>
              <div>
                <h4 className="text-viola-gold text-lg sm:text-xl font-medium">Schwellenüberschreitung</h4>
                <p className="text-viola-light/80 text-base sm:text-lg">Wasserwand durchbrochen — S/W → Vollfarbe HD</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4 items-start">
              <span className="text-viola-water text-lg sm:text-xl font-mono shrink-0">04</span>
              <div>
                <h4 className="text-viola-water text-lg sm:text-xl font-medium">Rückkehr</h4>
                <p className="text-viola-light/60 text-base sm:text-lg">Farbe → Monochrom — verblasst in Dunkelheit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          <ImagePlaceholder src="/images/ocean-still-2.jpg" label="Phase 1 — S/W Silhouette" aspect="aspect-[3/4]" />
          <ImagePlaceholder src="/images/ocean-still-1.jpg" label="Phase 2 — Annäherung" aspect="aspect-[3/4]" />
          <ImagePlaceholder src="/images/ocean-phase-c.jpg" label="Phase 3 — Durchquerung" aspect="aspect-[3/4]" />
          <ImagePlaceholder src="/images/ocean-phase-d.jpg" label="Phase 4 — Rückkehr" aspect="aspect-[3/4]" />
        </div>
      </div>
    </Slide>
  )
}
