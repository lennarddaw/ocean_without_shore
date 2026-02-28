import Slide from '../components/Slide'
import { BookOpen, MessageCircle } from 'lucide-react'

const sources = [
  'Lehrbuch-Analyse „Bill Viola: Ocean Without a Shore, 2007" (S. 130ff.)',
  'Bill Viola – Wikipedia',
  'Bill Viola | Britannica',
  'Bill Viola | TheArtStory',
  'Bill Viola | Tate',
  'Rina Arya: Bill Viola and the Sublime | Tate Research',
  'Bill Viola: Ocean Without a Shore | NGV Essay',
  'Bill Viola: Ocean Without a Shore | PAFA',
  'Ocean Without a Shore | Peggy Guggenheim Collection',
  'Smarthistory – Bill Viola, The Crossing',
  'Royal Academy – Beginners Guide to Bill Viola',
  'EAI: Bill Viola Biography',
]

const questions = [
  'Kann Technologie spirituelle Erfahrungen vermitteln?',
  'Kirche vs. Museum — wie verändert der Ort die Wirkung?',
  '„Kunst" oder „Erlebnis"? Wo verläuft die Grenze?',
  'Videoinstallation vs. traditionelle Malerei — was unterscheidet die Rezeption?',
]

export default function SourcesSlide() {
  return (
    <Slide>
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Sources */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-8">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-viola-gold" />
              <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted">Quellen</h2>
            </div>
            <div className="space-y-0">
              {sources.map((s, i) => (
                <div key={i} className="py-1.5 sm:py-2 border-b border-white/5 last:border-0">
                  <span className="text-viola-light/70 text-sm sm:text-base md:text-lg">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Discussion */}
          <div>
            <div className="flex items-center gap-3 mb-4 sm:mb-8">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-viola-gold" />
              <h2 className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase text-viola-muted">Diskussion</h2>
            </div>
            <div className="space-y-3 sm:space-y-5">
              {questions.map((q, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-lg border border-white/5 bg-viola-surface/50">
                  <p className="text-viola-light text-base sm:text-lg md:text-2xl leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
