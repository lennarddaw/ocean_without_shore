import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function BiographySlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-8">Der Künstler</h2>

        <div className="grid grid-cols-5 gap-10 items-start">
          <div className="col-span-2">
            <ImagePlaceholder src="/images/viola-portrait.jpg" label="Bill Viola" aspect="aspect-[3/4]" />
          </div>

          <div className="col-span-3">
            <h3 className="text-5xl font-light text-viola-light mb-2">Bill Viola</h3>
            <p className="text-viola-muted text-2xl mb-8">* 1951, New York — † 2024</p>

            <div className="space-y-5">
              <div className="pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-2xl">Pionier der Videokunst — Slow Motion als Stilmittel</p>
              </div>
              <div className="pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-2xl">Themen: Geburt, Tod, Transformation & Bewusstsein</p>
              </div>
              <div className="pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-2xl">Einflüsse: Zen-Buddhismus, christliche Mystik, Sufismus</p>
              </div>
              <div className="pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-2xl">Verbindet Altes Meister-Bildsprache mit moderner Technologie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
