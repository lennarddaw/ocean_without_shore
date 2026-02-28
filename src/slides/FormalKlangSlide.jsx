import Slide from '../components/Slide'

export default function FormalKlangSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-2">Formale Analyse</h2>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-light text-viola-light mb-6 sm:mb-8 md:mb-10">05 — Klang</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div>
            <img
              src="/images/Bill-Viola-Ocean-Without-a-Shore-detail-2007-High-definition-color-video-triptych-Photo-Kira-Perov-web.jpg"
              alt="Ocean Without a Shore — Wasserwand Detail"
              className="w-full rounded-lg"
            />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Konstantes Wassergeräusch — dumpfes Dröhnen als akustischer Grundton, permanente Präsenz der Schwelle</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Crescendo beim Durchbruch — Klang schwillt zur Kaskade an, donnernd wie ein Wasserfall (&bdquo;scroscio fragoroso&ldquo;)</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Stille vs. Rauschen — Stille = Totenreich; Rauschen = Moment des Übergangs ins Leben</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Sechs Lautsprecher (drei Stereopaare) — räumliche Klanganordnung umhüllt den Betrachter von allen Seiten</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Synchrone Diskontinuität — Bild und Ton erzeugen gemeinsam eine rhythmische Ruptur beim Schwellenmoment</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Inspiration: Birago Diop — &bdquo;Die Dinge hören mehr als die Wesen, hörend die Stimme des Wassers&ldquo;</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Akustische Initiation — im verdunkelten Raum muss man sich erst an die Geräusche gewöhnen, bevor sich das Werk offenbart</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
