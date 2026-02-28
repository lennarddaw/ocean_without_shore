import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function VideoArtSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-6">Kunsthistorischer Kontext</h2>
        <h3 className="text-5xl font-light text-viola-light mb-10">Videokunst</h3>

        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-4">
            <ImagePlaceholder src="/images/paik-sfmoma.jpg" label="Nam June Paik — SFMOMA" aspect="aspect-[16/10]" />
            <ImagePlaceholder label="Frühe Videokunst (1960er/70er)" aspect="aspect-[16/10]" />
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-viola-gold text-2xl mb-3">1. Generation — 1960er</h4>
              <p className="text-viola-light/70 text-2xl">Nam June Paik, Wolf Vostell — konzeptuell, Fluxus</p>
            </div>
            <div>
              <h4 className="text-viola-gold text-2xl mb-3">2. Generation — 1970er</h4>
              <p className="text-viola-light/70 text-2xl">Bill Viola — spirituelle Tiefe statt Ironie</p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <p className="text-viola-light/50 text-xl">
                Viola erhebt Videokunst zur anerkannten Kunstform
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
