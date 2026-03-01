import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function FormalFarbeLichtSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-2">Formale Analyse</h2>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-light text-viola-light mb-6 sm:mb-8 md:mb-10">03  Farbe & Licht</h3>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <ImagePlaceholder src="/images/ocean-still-2.jpg" label="S/W-Phase — körnig, geisterhaft" aspect="aspect-[4/5]" />
          <ImagePlaceholder src="/images/ocean-phase-d.jpg" label="Farbphase — volle HD-Farbigkeit" aspect="aspect-[4/5]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-3">
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Zwei Kameras gleichzeitig — eine alte analoge Überwachungskamera (25 Jahre alt) für S/W, eine moderne HD-Kamera für Farbe</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Ein Spiegel-Prismen-System verschmilzt beide Bilder zu einem — entwickelt zusammen mit der James-Cameron-Gruppe</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Chiaroscuro — extremes Helldunkel wie bei Caravaggio; die Figuren schälen sich langsam aus der Dunkelheit ins Licht</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Keine Farbe = Zustand der Toten; Farbexplosion beim Durchbruch = ein Moment der Offenbarung, das Erwachen ins Leben</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Viola: &bdquo;I work with pure light&ldquo; — das Medium ist im Kern Lichtkunst, nicht Video</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Nasse Haut, nasse Kleidung — brechen das Licht anders und machen die körperliche Präsenz noch greifbarer</p>
            </div>
        </div>
      </div>
    </Slide>
  )
}
