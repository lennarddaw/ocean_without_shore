import { useState } from 'react'
import { ZoomIn, ZoomOut } from 'lucide-react'

const ZOOM_LEVELS = [100, 110, 125, 150]

export default function ZoomControl() {
  const [zoomIndex, setZoomIndex] = useState(0)

  const handleZoomIn = () => {
    if (zoomIndex < ZOOM_LEVELS.length - 1) {
      const newIndex = zoomIndex + 1
      setZoomIndex(newIndex)
      document.documentElement.style.setProperty('--content-zoom', ZOOM_LEVELS[newIndex] / 100)
    }
  }

  const handleZoomOut = () => {
    if (zoomIndex > 0) {
      const newIndex = zoomIndex - 1
      setZoomIndex(newIndex)
      document.documentElement.style.setProperty('--content-zoom', ZOOM_LEVELS[newIndex] / 100)
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-1 bg-viola-black/60 backdrop-blur-sm rounded-lg border border-white/5 p-1">
      <button
        onClick={handleZoomOut}
        disabled={zoomIndex === 0}
        className="p-1.5 rounded transition-all hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ZoomOut className="w-4 h-4 text-viola-muted" />
      </button>
      {ZOOM_LEVELS[zoomIndex] !== 100 && (
        <span className="text-xs text-viola-muted px-1 tabular-nums">
          {ZOOM_LEVELS[zoomIndex]}%
        </span>
      )}
      <button
        onClick={handleZoomIn}
        disabled={zoomIndex === ZOOM_LEVELS.length - 1}
        className="p-1.5 rounded transition-all hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ZoomIn className="w-4 h-4 text-viola-muted" />
      </button>
    </div>
  )
}
