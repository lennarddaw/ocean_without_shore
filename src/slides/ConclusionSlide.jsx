import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function ConclusionSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-6">Fazit</h2>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <ImagePlaceholder src="/images/ocean-installation-ngv.jpg" label="Ocean Without a Shore — ikonisches Bild" aspect="aspect-[3/4]" />
          </div>

          <div className="space-y-6">
            <h3 className="text-5xl font-light text-viola-light">Ocean Without a Shore</h3>

            <div className="space-y-4">
              <div className="pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-2xl">Synthese lebenslanger Themen</p>
              </div>
              <div className="pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-2xl">Technische Kulmination — Spiegel-Prisma</p>
              </div>
              <div className="pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-2xl">Mystik + Buddhismus + Sufismus vereint</p>
              </div>
              <div className="pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-2xl">Raum der Verlangsamung & Kontemplation</p>
              </div>
            </div>

            <blockquote className="border-l-2 border-viola-gold/40 pl-6 py-3 mt-4">
              <p className="text-viola-highlight/90 text-3xl italic font-light leading-relaxed">
                „Art is, for me, the process of trying to wake up the soul."
              </p>
              <cite className="text-viola-muted text-lg mt-3 block not-italic">— Bill Viola</cite>
            </blockquote>

            <p className="text-viola-muted text-xl pt-4 border-t border-white/5">
              150+ Werke · 40+ Jahre · † 2024
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}
