import Slide from '../components/Slide'

export default function FormalSyntheseSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-2">Formale Analyse — Synthese</h2>
        <h3 className="text-5xl font-light text-viola-light mb-8">Warum genau so?</h3>

        <div className="grid grid-cols-5 gap-8 items-start">
          <div className="col-span-2">
            <img
              src="/images/2010_22_l.jpg"
              alt="Ocean Without a Shore — Schwellenmoment"
              className="w-full rounded-lg"
            />
          </div>

          <div className="col-span-3 space-y-3">
            <div className="pl-4 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base"><span className="text-viola-gold">Triptychon</span> — nicht frei gewählt, sondern durch die drei Steinaltäre der Chiesa di San Gallo physisch vorgegeben; Altäre sind liturgisch der Verbindungspunkt zwischen Lebenden und Toten</p>
            </div>
            <div className="pl-4 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base"><span className="text-viola-gold">Echtes Wasser</span> — kein Digitaleffekt; die Schwelle muss hör- und spürbar sein; Viola: &bdquo;The borderline between life and death is not a hard wall — it's very fragile, very tenuous.&ldquo;</p>
            </div>
            <div className="pl-4 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base"><span className="text-viola-gold">S/W → Farbe</span> — kein Stilmittel, sondern ontologische Aussage; S/W = Immaterialität der Toten, körnig wie Erinnerung; Farbexplosion = Verkörperung, Inkarnation ins Diesseits</p>
            </div>
            <div className="pl-4 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base"><span className="text-viola-gold">Zeitlupe (300 fps)</span> — erzwingt kontemplativen Modus; bricht die industrialisierte Wahrnehmung auf; Viola: &bdquo;If you slow something down long enough, you begin to see its essence.&ldquo;</p>
            </div>
            <div className="pl-4 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base"><span className="text-viola-gold">Klang</span> — Wasserrauschen als akustische Grenze; Stille = Jenseits, Crescendo = Schwellenübertritt; sechs Lautsprecher umhüllen den Betrachter physisch</p>
            </div>

            <div className="pt-3 mt-2 border-t border-white/5 space-y-3">
              <div className="pl-4 border-l-2 border-viola-water/40">
                <p className="text-viola-light text-base"><span className="text-viola-water">Violas Überzeugung:</span> es gibt eine unsichtbare Welt hinter der Oberfläche — die Grenze ist durchlässig; sein Beinahe-Ertrinken mit 6 Jahren zeigte ihm, dass diese Grenze nicht bedrohlich, sondern schön ist</p>
              </div>
              <div className="pl-4 border-l-2 border-viola-water/40">
                <p className="text-viola-light text-base"><span className="text-viola-water">Körperlich, nicht intellektuell:</span> Bild + Klang + Architektur + Wasser + Licht + Zeit — kein Element verzichtbar; &bdquo;When you come into my pieces, it's not an intellectual experience, it's a physical experience.&ldquo;</p>
              </div>
              <div className="pl-4 border-l-2 border-viola-water/40">
                <p className="text-viola-light text-base"><span className="text-viola-water">Kunst als Seelenwecker:</span> &bdquo;Art is, for me, the process of trying to wake up the soul. Because we live in a world that prefers that the soul remain asleep.&ldquo;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
