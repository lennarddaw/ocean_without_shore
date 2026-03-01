import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function PhilosophySlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-4 sm:mb-6 md:mb-8">Philosophie & Einflüsse</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-2 sm:mb-4">
              {['Leben & Tod', 'Zeit', 'Licht / Dunkel', 'Wasser', 'Das Erhabene'].map((t, i) => (
                <span key={i} className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full border border-black/10 text-base sm:text-lg md:text-2xl text-viola-light/70">
                  {t}
                </span>
              ))}
            </div>

            <div className="space-y-3 sm:space-y-5">
              <div className="pl-4 sm:pl-5 border-l-2 border-viola-water/40">
                <p className="text-viola-light text-base sm:text-lg md:text-2xl"><span className="text-viola-water">Zen-Buddhismus</span> — Leere, Vergänglichkeit</p>
              </div>
              <div className="pl-4 sm:pl-5 border-l-2 border-viola-water/40">
                <p className="text-viola-light text-base sm:text-lg md:text-2xl"><span className="text-viola-water">Christliche Mystik</span> — via negativa</p>
              </div>
              <div className="pl-4 sm:pl-5 border-l-2 border-viola-water/40">
                <p className="text-viola-light text-base sm:text-lg md:text-2xl"><span className="text-viola-water">Sufismus</span> — „Ocean without a shore"</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <ImagePlaceholder src="/images/ocean-installation-ngv.jpg" label="Installation — NGV Melbourne" aspect="aspect-[4/3]" />
            <blockquote className="border-l-2 border-viola-gold/40 pl-4 sm:pl-6 py-2">
              <p className="text-viola-highlight/90 text-lg sm:text-xl md:text-2xl italic font-light leading-relaxed">
                „Art is, for me, the process of trying to wake up the soul."
              </p>
              <cite className="text-viola-muted text-base sm:text-lg mt-2 block not-italic">— Bill Viola</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </Slide>
  )
}
