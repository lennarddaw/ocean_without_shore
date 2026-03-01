import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Navigation({ currentSlide, totalSlides, onPrev, onNext, onGoTo }) {
  const isFirstSlide = currentSlide === 0

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 ${
      isFirstSlide
        ? 'bg-transparent'
        : 'bg-viola-black/80 backdrop-blur-sm border-t border-black/8'
    }`}>
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="p-2 rounded-full transition-all hover:bg-black/5 disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5 text-viola-light" />
      </button>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1.5">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => onGoTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? 'w-6 h-1.5 bg-viola-gold'
                  : 'w-1.5 h-1.5 bg-viola-muted/40 hover:bg-viola-muted'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-viola-muted tabular-nums">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="p-2 rounded-full transition-all hover:bg-black/5 disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-5 h-5 text-viola-light" />
      </button>
    </div>
  )
}
