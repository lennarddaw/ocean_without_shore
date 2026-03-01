import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function FormalKompositionSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-2">Formale Analyse</h2>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-light text-viola-light mb-6 sm:mb-8 md:mb-10">01  Flächenkomposition</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div>
            <ImagePlaceholder src="/images/ocean-san-gallo.jpg" label="Installation in San Gallo, Venedig" aspect="aspect-[3/4]" />
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Triptychon — drei Plasmabildschirme (2× 65", 1× 103") senkrecht aufgestellt, wie bei einem klassischen Altarbild</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Das Hochformat betont die aufrechte Figur — erinnert an die Darstellung von Heiligen</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Streng frontal — jede Figur genau in der Mitte, symmetrisch, fast wie eine Ikone</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Starker Kontrast — graue Schemen vor tiefem Schwarz, der sich beim Durchgang durch das Wasser auflöst</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Immer Einzelfiguren, keine Gruppen — alle 24 Performer treten allein auf, jeder für sich</p>
            </div>
            <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-base sm:text-lg">Die Figuren tauchen klein in der Ferne auf und wachsen dann bis zur Lebensgröße</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
