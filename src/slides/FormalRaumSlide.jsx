import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function FormalRaumSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-2">Formale Analyse</h2>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-light text-viola-light mb-6 sm:mb-8 md:mb-10">02  Raumkomposition</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div>
            <ImagePlaceholder src="/images/ocean-installation-ngv.jpg" label="Installation — NGV Melbourne" aspect="aspect-[3/4]" />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Die Wasserwand als greifbare Schwelle — ca. 3 m breit, 2,4 m hoch, fast so durchsichtig wie Glas</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Zwei Welten — hinter der Wand: schwarze Leere, körniges S/W; davor: satte Farbe in HD, körperliche Nähe</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Schwarze Leere — kein Horizont, kein Halt; steht für das Jenseits, für den Tod</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Der Ort zählt: die drei Steinaltäre tragen die Monitore — genau dort, wo seit Jahrhunderten Lebende und Tote verbunden werden</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Man ist mittendrin — drei Screens auf drei Seiten, die Betrachter sitzen auf niedrigen Bänken in der Mitte</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Die Grenze zwischen Bild und Raum verschwimmt — die Farbfiguren scheinen durch den Bildschirm in den echten Raum zu treten</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Komplett abgedunkelt — so kommen die leuchtenden Bilder der Monitore voll zur Geltung</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
