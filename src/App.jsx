import { useState, useEffect, useCallback } from 'react'
import Navigation from './components/Navigation'
import ZoomControl from './components/ZoomControl'

import TitleSlide from './slides/TitleSlide'
import BiographySlide from './slides/BiographySlide'
import VideoArtSlide from './slides/VideoArtSlide'
import MainWorksSlide from './slides/MainWorksSlide'
import WorkDataSlide from './slides/WorkDataSlide'
import VenueSlide from './slides/VenueSlide'
import VisualProcessSlide from './slides/VisualProcessSlide'
import TechnicalSlide from './slides/TechnicalSlide'
import FormalAnalysisSlide from './slides/FormalAnalysisSlide'
import FormalKompositionSlide from './slides/FormalKompositionSlide'
import FormalRaumSlide from './slides/FormalRaumSlide'
import FormalFarbeLichtSlide from './slides/FormalFarbeLichtSlide'
import FormalBewegungZeitSlide from './slides/FormalBewegungZeitSlide'
import FormalKlangSlide from './slides/FormalKlangSlide'
import FormalSyntheseSlide from './slides/FormalSyntheseSlide'
import ThemeLifeDeathSlide from './slides/ThemeLifeDeathSlide'
import ThemeLiminalitySlide from './slides/ThemeLiminalitySlide'
import ThemeSpiritualSlide from './slides/ThemeSpiritualSlide'
import InterpretationSlide from './slides/InterpretationSlide'
import ComparisonSlide from './slides/ComparisonSlide'
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
  MainWorksSlide,
  VenueSlide,
  TechnicalSlide,
  ThemeLifeDeathSlide,
  ThemeLiminalitySlide,
  ThemeSpiritualSlide,
  InterpretationSlide,
  ComparisonSlide,
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
