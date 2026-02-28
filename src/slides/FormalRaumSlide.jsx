import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function FormalRaumSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-2">Formale Analyse</h2>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-light text-viola-light mb-6 sm:mb-8 md:mb-10">02 — Raumkomposition</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div>
            <ImagePlaceholder src="/images/ocean-installation-ngv.jpg" label="Installation — NGV Melbourne" aspect="aspect-[3/4]" />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Wasserwand als physische Schwelle — ca. 3 m breit, 2,4 m hoch, nahezu transparent wie eine Glasscheibe</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Zwei-Welten-Struktur — hinter der Wand: schwarze Leere, körniges S/W; davor: farbiges HD, körperliche Präsenz</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Schwarze Leere (Void) — kein Horizont, keine Orientierung; repräsentiert das Jenseits / den Tod</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Ortsspezifik: Chiesa di San Gallo — drei Steinaltäre als Monitorträger, traditionell Orte der Verbindung zwischen Lebenden und Toten</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Immersive Umschliessung — drei Screens auf drei Seiten, Betrachter auf niedrigen Bänken in der Mitte</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Auflösung Bildraum/Realraum — Farbfiguren wirken, als würden sie durch den Screen in den physischen Raum eintreten</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Komplett verdunkelter Raum — maximiert die Lichtbilder der Monitore und die Immersion</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
