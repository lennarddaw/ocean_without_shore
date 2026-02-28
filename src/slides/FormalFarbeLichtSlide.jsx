import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function FormalFarbeLichtSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-2">Formale Analyse</h2>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-light text-viola-light mb-6 sm:mb-8 md:mb-10">03 — Farbe & Licht</h3>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <ImagePlaceholder src="/images/ocean-still-2.jpg" label="S/W-Phase — körnig, geisterhaft" aspect="aspect-[4/5]" />
          <ImagePlaceholder src="/images/ocean-phase-d.jpg" label="Farbphase — volle HD-Farbigkeit" aspect="aspect-[4/5]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-3">
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Dualismus S/W vs. Farbe — alte analoge Überwachungskamera (25 Jahre alt) für S/W; moderne HD-Kamera für Farbe</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Spiegel-Prismen-System — verschmilzt beide Kamerabilder zu einem einzigen Bild, entwickelt mit der James-Cameron-Gruppe</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Chiaroscuro — extremes Helldunkel wie bei Caravaggio, Figuren koaleszieren aus absoluter Dunkelheit ins Licht</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Symbolik — Farblosigkeit = Zustand der Toten; Farbexplosion beim Durchbruch = Epiphanie, Offenbarung des Lebens</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Viola: &bdquo;I work with pure light&ldquo; — das Medium ist im Kern Lichtkunst, nicht Video</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Nasseffekte — durchnässte Haut und Kleidung brechen das Licht anders, verstärken die sinnliche Präsenz</p>
            </div>
        </div>
      </div>
    </Slide>
  )
}
