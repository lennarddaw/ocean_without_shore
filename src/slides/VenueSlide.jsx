import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function VenueSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-6">Ausstellungsort</h2>
        <h3 className="text-5xl font-light text-viola-light mb-10">Chiesa di San Gallo, Venedig</h3>

        <div className="grid grid-cols-2 gap-10">
          <div className="space-y-4">
            <ImagePlaceholder src="/images/ocean-san-gallo.jpg" label="Installation in San Gallo" aspect="aspect-[3/4]" />
          </div>

          <div className="space-y-6">
            <div className="pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-2xl">Drei Steinaltare als Bildschirme</p>
            </div>
            <div className="pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-2xl">Abgedunkelte Kirche — „wie durch eine Schleuse"</p>
            </div>
            <div className="pl-5 border-l-2 border-viola-gold/40">
              <p className="text-viola-light text-2xl">Altar = Eucharistie-Tisch & symbolisches Grab</p>
            </div>

            <blockquote className="border-l-2 border-viola-gold/40 pl-6 py-3 mt-4">
              <p className="text-viola-highlight/90 text-2xl italic font-light leading-relaxed">
                „The three stone altars become portals for the passage of the dead to and from our world."
              </p>
              <cite className="text-viola-muted text-lg mt-2 block not-italic">— Bill Viola</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </Slide>
  )
}
