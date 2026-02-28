import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function FormalKompositionSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-2">Formale Analyse</h2>
        <h3 className="text-5xl font-light text-viola-light mb-10">01 — Flächenkomposition</h3>

        <div className="grid grid-cols-2 gap-10 items-start">
          <div>
            <ImagePlaceholder src="/images/ocean-san-gallo.jpg" label="Installation in San Gallo, Venedig" aspect="aspect-[3/4]" />
          </div>

          <div className="space-y-4">
            <div className="pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-lg">Triptychon-Struktur — drei Plasmabildschirme (2× 65", 1× 103") vertikal montiert, Referenz an christliche Altarbilder</p>
            </div>
            <div className="pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-lg">Hochformat betont die aufrechte menschliche Figur — verweist auf Tradition der Heiligendarstellung</p>
            </div>
            <div className="pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-lg">Strenge Frontalität — jede Figur exakt mittig, symmetrisch zur Bildachse, ikonenhaft</p>
            </div>
            <div className="pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-lg">Figur-Grund-Kontrast — graue Schemen vor tiefem Schwarz, löst sich beim Wasserdurchgang auf</p>
            </div>
            <div className="pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-lg">Einzelfiguren, keine Gruppen — 24 Performer treten jeweils allein auf, existenzielle Isolation</p>
            </div>
            <div className="pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-lg">Perspektivischer Grösseneffekt — Figuren erscheinen klein in der Ferne, wachsen bis zur Lebensgrösse</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
