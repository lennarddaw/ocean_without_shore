import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function ThemeLifeDeathSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-6">Thematische Analyse</h2>
        <h3 className="text-5xl font-light text-viola-light mb-8">Leben und Tod</h3>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <ImagePlaceholder src="/images/ocean-still-2.jpg" label="Performer durchquert die Wasserwand" aspect="aspect-[3/4]" />
          </div>

          <div className="space-y-6">
            <blockquote className="border-l-2 border-viola-gold/40 pl-6 py-2">
              <p className="text-viola-highlight/90 text-2xl italic font-light leading-relaxed">
                „A series of encounters at the intersection between life and death"
              </p>
              <cite className="text-viola-muted text-lg mt-2 block not-italic">— Bill Viola</cite>
            </blockquote>

            <div className="space-y-4">
              <div className="pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-2xl">Figuren aus Dunkelheit = die Toten</p>
              </div>
              <div className="pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-2xl">Wasserwand = Inkarnation</p>
              </div>
              <div className="pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light text-2xl">Zyklisch — nicht linear</p>
              </div>
              <div className="pl-5 border-l-2 border-viola-gold/40">
                <p className="text-viola-light/60 text-xl">Samsara · Vanitas · Memento mori</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
