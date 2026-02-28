import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function VideoArtSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-4 sm:mb-6">Kunsthistorischer Kontext</h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-viola-light mb-6 sm:mb-8 md:mb-10">Videokunst</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div>
            <img
              src="/images/Bill-Viola-Ocean-Without-a-Shore-detail-2007-High-definition-color-video-triptych-Photo-Kira-Perov-web.jpg"
              alt="Bill Viola — Ocean Without a Shore (Detail)"
              className="w-full rounded-lg"
            />
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <h4 className="text-viola-gold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">Was ist Videokunst?</h4>
              <p className="text-viola-light/70 text-base sm:text-lg">Kunstform, die bewegte Bilder als eigenständiges Medium nutzt — nicht Film, nicht Fernsehen, sondern Kunst</p>
            </div>
            <div>
              <h4 className="text-viola-gold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">Entstehung — 1960er</h4>
              <p className="text-viola-light/70 text-base sm:text-lg">Pioniere wie Nam June Paik & Wolf Vostell nutzen Video als Protest gegen Massenmedien (Fluxus)</p>
            </div>
            <div>
              <h4 className="text-viola-gold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">Violas Ansatz — ab 1970er</h4>
              <p className="text-viola-light/70 text-base sm:text-lg">Extreme Zeitlupe, hochauflösende Projektion, immersive Rauminstallationen — Emotion statt Konzept</p>
            </div>
            <div>
              <h4 className="text-viola-gold text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">Technik als Werkzeug</h4>
              <p className="text-viola-light/70 text-base sm:text-lg">Nutzt HD-Video, Unterwasserkameras & Mehrkanal-Projektionen, um unsichtbare Prozesse sichtbar zu machen</p>
            </div>
            <div className="pt-3 sm:pt-4 border-t border-white/5">
              <p className="text-viola-light/50 text-base sm:text-lg">
                Viola erhebt Videokunst von der Nische zur international anerkannten Kunstform
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
