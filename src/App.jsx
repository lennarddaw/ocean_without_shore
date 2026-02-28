import { useState, useEffect, useCallback, useRef } from 'react'
import Navigation from './components/Navigation'
import ZoomControl from './components/ZoomControl'

import TitleSlide from './slides/TitleSlide'
import BiographySlide from './slides/BiographySlide'
import VideoArtSlide from './slides/VideoArtSlide'
import WorkDataSlide from './slides/WorkDataSlide'
import VenueSlide from './slides/VenueSlide'
import VisualProcessSlide from './slides/VisualProcessSlide'
import FormalAnalysisSlide from './slides/FormalAnalysisSlide'
import FormalKompositionSlide from './slides/FormalKompositionSlide'
import FormalRaumSlide from './slides/FormalRaumSlide'
import FormalFarbeLichtSlide from './slides/FormalFarbeLichtSlide'
import FormalBewegungZeitSlide from './slides/FormalBewegungZeitSlide'
import FormalKlangSlide from './slides/FormalKlangSlide'
import FormalSyntheseSlide from './slides/FormalSyntheseSlide'
import ThemeLifeDeathSlide from './slides/ThemeLifeDeathSlide'
import ThemeLiminalitySlide from './slides/ThemeLiminalitySlide'
import InterpretationSlide from './slides/InterpretationSlide'
import ConclusionSlide from './slides/ConclusionSlide'
import SourcesSlide from './slides/SourcesSlide'

const slides = [
  TitleSlide,
  BiographySlide,
  VideoArtSlide,
  VisualProcessSlide,
  WorkDataSlide,
  FormalAnalysisSlide,
  FormalKompositionSlide,
  FormalRaumSlide,
  FormalFarbeLichtSlide,
  FormalBewegungZeitSlide,
  FormalKlangSlide,
  FormalSyntheseSlide,
  VenueSlide,
  ThemeLifeDeathSlide,
  ThemeLiminalitySlide,
  InterpretationSlide,
  ConclusionSlide,
  SourcesSlide,
]

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }, [])

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  // Touch swipe navigation for mobile
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)

  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      if (touchStartX.current === null) return
      const deltaX = e.changedTouches[0].clientX - touchStartX.current
      const deltaY = e.changedTouches[0].clientY - touchStartY.current

      // Only trigger if horizontal swipe is dominant and long enough
      if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) nextSlide()
        else prevSlide()
      }
      touchStartX.current = null
      touchStartY.current = null
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [nextSlide, prevSlide])

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="min-h-screen bg-viola-black">
      <CurrentSlideComponent key={currentSlide} />

      {currentSlide > 0 && (
        <Navigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onPrev={prevSlide}
          onNext={nextSlide}
          onGoTo={goToSlide}
        />
      )}

      <ZoomControl />
    </div>
  )
}
