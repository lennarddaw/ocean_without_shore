import Slide from '../components/Slide'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function ThemeSpiritualSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-xl tracking-[0.3em] uppercase text-viola-muted mb-6">Thematische Analyse</h2>
        <h3 className="text-5xl font-light text-viola-light mb-10">Spirituelle Bezüge</h3>

        <div className="grid grid-cols-2 gap-8">
          {/* Ibn Arabi — highlighted */}
          <div className="p-8 rounded-lg border border-viola-gold/15 bg-viola-gold/5">
            <h4 className="text-viola-gold text-2xl mb-4">Ibn Arabi (1165–1240)</h4>
            <p className="text-viola-light/70 text-xl mb-4">Andalusischer Sufi-Mystiker</p>
            <blockquote className="border-l-2 border-viola-gold/40 pl-5 py-2">
              <p className="text-viola-highlight/90 text-2xl italic font-light leading-relaxed">
                „The Self is an ocean without a shore."
              </p>
            </blockquote>
            <p className="text-viola-muted text-lg mt-4">Grenzenlosigkeit des Bewusstseins</p>
          </div>

          {/* Christliche Theologie */}
          <div className="p-8 rounded-lg border border-white/5 bg-viola-surface/50">
            <h4 className="text-viola-gold text-2xl mb-4">Christliche Theologie</h4>
            <div className="space-y-3">
              <p className="text-viola-light text-xl">Altar = Grab + Opfer + Kommunion</p>
              <p className="text-viola-light text-xl">Triptychon → Altarbild-Tradition</p>
              <p className="text-viola-light text-xl">Transfiguration — leuchtende Verwandlung</p>
              <p className="text-viola-light text-xl">Inkarnation — das Wort wird Fleisch</p>
            </div>
          </div>

          {/* Zen */}
          <div className="p-8 rounded-lg border border-white/5 bg-viola-surface/50">
            <h4 className="text-viola-gold text-2xl mb-4">Zen-Buddhismus</h4>
            <div className="space-y-3">
              <p className="text-viola-light text-xl"><span className="text-viola-water">Mu</span> — Dunkelheit als Grund allen Seins</p>
              <p className="text-viola-light text-xl"><span className="text-viola-water">Mujo</span> — alles Materielle ist vergänglich</p>
              <p className="text-viola-light text-xl"><span className="text-viola-water">Zazen</span> — kontemplative Langsamkeit</p>
            </div>
          </div>

          {/* Birago Diop */}
          <div className="p-8 rounded-lg border border-white/5 bg-viola-surface/50">
            <h4 className="text-viola-gold text-2xl mb-4">Birago Diop (1906–1989)</h4>
            <p className="text-viola-light/70 text-xl mb-3">Senegalesischer Dichter</p>
            <blockquote className="border-l-2 border-viola-water/40 pl-5 py-1">
              <p className="text-viola-water/80 text-2xl italic">
                „Those who are dead have never gone away"
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </Slide>
  )
}
