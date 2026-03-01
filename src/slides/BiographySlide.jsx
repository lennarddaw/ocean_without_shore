import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function BiographySlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-4 sm:mb-6 md:mb-8">Der Künstler</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 items-start">
          <div className="md:col-span-2">
            <ImagePlaceholder src="/images/viola-portrait.jpg" label="Bill Viola" aspect="aspect-[3/4]" />
          </div>

          <div className="md:col-span-3">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-viola-light mb-2">Bill Viola</h3>
            <p className="text-viola-muted text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8">* 1951, New York — † 2024</p>

            <div className="space-y-3 sm:space-y-5">
              <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-base sm:text-lg md:text-2xl">Pionier der Videokunst — Slow Motion als Stilmittel</p>
              </div>
              <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-base sm:text-lg md:text-2xl">Themen: Geburt, Tod, Transformation & Bewusstsein</p>
              </div>
              <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-base sm:text-lg md:text-2xl">Einflüsse: Zen-Buddhismus, christliche Mystik, Sufismus</p>
              </div>
              <div className="pl-4 sm:pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-base sm:text-lg md:text-2xl">Verschmilzt die Bildsprache Alter Meister mit heutiger Technik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
