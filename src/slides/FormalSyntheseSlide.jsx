import Slide from '../components/Slide'

export default function FormalSyntheseSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-2">Formale Analyse — Synthese</h2>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-light text-viola-light mb-6 sm:mb-8">Warum genau so?</h3>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start">
          <div className="md:col-span-2">
            <img
              src="/images/2010_22_l.jpg"
              alt="Ocean Without a Shore — Schwellenmoment"
              className="w-full rounded-lg"
            />
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="pl-4 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base"><span className="text-viola-gold">Triptychon</span> — nicht frei gewählt, sondern durch die drei Steinaltäre der Kirche vorgegeben — genau dort, wo liturgisch Lebende und Tote verbunden werden</p>
            </div>
            <div className="pl-4 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base"><span className="text-viola-gold">Echtes Wasser</span> — kein Digitaleffekt; die Schwelle muss hör- und spürbar sein; Viola: &bdquo;The borderline between life and death is not a hard wall — it's very fragile, very tenuous.&ldquo;</p>
            </div>
            <div className="pl-4 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base"><span className="text-viola-gold">S/W → Farbe</span> — mehr als ein Stilmittel — S/W steht für die Toten, körnig wie eine verblasste Erinnerung; Farbexplosion = Verkörperung, Ankunft im Diesseits</p>
            </div>
            <div className="pl-4 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base"><span className="text-viola-gold">Zeitlupe (300 fps)</span> — zwingt zum Hinsehen; bricht unser schnelles, reizüberflutetes Sehen auf; Viola: &bdquo;If you slow something down long enough, you begin to see its essence.&ldquo;</p>
            </div>
            <div className="pl-4 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base"><span className="text-viola-gold">Klang</span> — Wasserrauschen als akustische Grenze; Stille = Jenseits, Crescendo = Schwellenübertritt; sechs Lautsprecher umhüllen den Betrachter physisch</p>
            </div>

            <div className="pt-3 mt-2 border-t border-black/8 space-y-3">
              <div className="pl-4 border-l-2 border-viola-water/40">
                <p className="text-viola-light text-base"><span className="text-viola-water">Violas Überzeugung:</span> hinter der sichtbaren Welt liegt eine andere — und die Grenze dazwischen ist durchlässig. Als Kind wäre Viola mit 6 Jahren fast ertrunken und erlebte die Unterwasserwelt nicht als bedrohlich, sondern als schön</p>
              </div>
              <div className="pl-4 border-l-2 border-viola-water/40">
                <p className="text-viola-light text-base"><span className="text-viola-water">Körperlich, nicht intellektuell:</span> Bild, Klang, Architektur, Wasser, Licht und Zeit — alles greift ineinander, nichts ist verzichtbar; &bdquo;When you come into my pieces, it's not an intellectual experience, it's a physical experience.&ldquo;</p>
              </div>
              <div className="pl-4 border-l-2 border-viola-water/40">
                <p className="text-viola-light text-base"><span className="text-viola-water">Kunst soll die Seele wecken:</span> &bdquo;Art is, for me, the process of trying to wake up the soul. Because we live in a world that prefers that the soul remain asleep.&ldquo;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
