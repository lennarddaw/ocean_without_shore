import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function FormalBewegungZeitSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-2">Formale Analyse</h2>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-light text-viola-light mb-6 sm:mb-8 md:mb-10">04 — Bewegung & Zeit</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div>
            <ImagePlaceholder src="/images/ocean-phase-c.jpg" label="Durchquerung der Wasserwand in Zeitlupe" aspect="aspect-[3/4]" />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Extreme Zeitlupe — gefilmt mit bis zu 300 fps (12-fache Verlangsamung), jeder Wassertropfen wird sichtbar</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Kontemplationsinstrument — bricht gewohnte Zeitwahrnehmung auf, versetzt Betrachter in meditativen Zustand</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Gesamtdauer ca. 4,5 Stunden — wird als Endlosschleife (Loop) präsentiert, Einzelsequenz 3–4 Minuten</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Zyklische Struktur — Erscheinen → Annähern → Durchbrechen → Verweilen → Umkehr → Verschwinden, endloser Kreislauf</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Kein linearer Narrativ — kein Anfang, kein Ende; Betrachter kann jederzeit eintreten, wie vor einem Gemälde</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Gestische Mikrodramaturgie — Zeitlupe enthüllt Zögern, Staunen, Schmerz; manche Figuren drehen sich beim Weggehen noch einmal um</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Refrain-Struktur — rhythmische Wiederkehr mit Variation, verschiedene Performer, gleicher Ablauf</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
