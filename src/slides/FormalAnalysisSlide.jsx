import Slide from '../components/Slide'

export default function FormalAnalysisSlide() {
  return (
    <Slide>
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted mb-6 sm:mb-10">Formale Analyse</h2>

        <div className="space-y-5 sm:space-y-8">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="text-viola-gold/40 text-lg sm:text-xl font-mono shrink-0">01</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-viola-light">Flächenkomposition</h3>
          </div>
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="text-viola-gold/40 text-lg sm:text-xl font-mono shrink-0">02</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-viola-light">Raumkomposition</h3>
          </div>
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="text-viola-gold/40 text-lg sm:text-xl font-mono shrink-0">03</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-viola-light">Farbe & Licht</h3>
          </div>
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="text-viola-gold/40 text-lg sm:text-xl font-mono shrink-0">04</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-viola-light">Bewegung & Zeit</h3>
          </div>
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="text-viola-gold/40 text-lg sm:text-xl font-mono shrink-0">05</span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-viola-light">Klang</h3>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 mt-8 sm:mt-14 pt-4 sm:pt-6 border-t border-black/8">
          <span className="text-viola-muted text-base sm:text-lg md:text-xl italic">&bdquo;Rembrandt des Videozeitalters&ldquo;</span>
          <span className="text-viola-muted text-base sm:text-lg md:text-xl italic">&bdquo;Hi-Tech-Caravaggio&ldquo;</span>
        </div>
      </div>
    </Slide>
  )
}
