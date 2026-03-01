import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function InterpretationSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-4 sm:mb-6">Interpretation</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-viola-light mb-6 sm:mb-8 md:mb-10">Synthese & Deutung</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="space-y-3 sm:space-y-4">
            <ImagePlaceholder src="/images/ocean-still-1.jpg" label="Verschiedene Performer — Universalität" aspect="aspect-[16/10]" />
            <ImagePlaceholder src="/images/ocean-still-2.jpg" label="Detail: Gesicht nach Durchquerung" aspect="aspect-[16/10]" />
          </div>

          <div className="space-y-3 sm:space-y-5">
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <h4 className="text-viola-gold text-base sm:text-lg md:text-xl mb-1">Universalität</h4>
              <p className="text-viola-light text-base sm:text-lg md:text-2xl">24 verschiedene Performer — die Grenze betrifft jeden Menschen</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <h4 className="text-viola-gold text-base sm:text-lg md:text-xl mb-1">Das Erhabene</h4>
              <p className="text-viola-light text-base sm:text-lg md:text-2xl">Geht über das rational Fassbare hinaus (Burke/Kant)</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <h4 className="text-viola-gold text-base sm:text-lg md:text-xl mb-1">Gesamtkunstwerk</h4>
              <p className="text-viola-light text-base sm:text-lg md:text-2xl">Bild + Klang + Architektur + Wasser + Zeit</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <h4 className="text-viola-gold text-base sm:text-lg md:text-xl mb-1">Intermedialität</h4>
              <p className="text-viola-light text-base sm:text-lg md:text-2xl">Analog trifft Digital, Sakral trifft Säkular — alle Grenzen verschwimmen</p>
            </div>

            <blockquote className="border-l-2 border-viola-gold/40 pl-4 sm:pl-6 py-3 mt-4">
              <p className="text-viola-highlight/90 text-lg sm:text-xl md:text-2xl italic font-light leading-relaxed">
                „It's not an intellectual experience, it's a physical experience."
              </p>
              <cite className="text-viola-muted text-base sm:text-lg mt-2 block not-italic">— Bill Viola</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </Slide>
  )
}
