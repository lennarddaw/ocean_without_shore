import { Image } from 'lucide-react'

/**
 * Bildplatzhalter — ersetze `src` mit dem tatsächlichen Bildpfad aus public/images/
 *
 * Beispiel: <ImagePlaceholder src="/images/viola-portrait.jpg" label="Porträt" />
 */
export default function ImagePlaceholder({ label = '', src, className = '', aspect = 'aspect-video' }) {
  if (src) {
    return (
      <div className={`${aspect} rounded-lg overflow-hidden ${className}`}>
        <img src={src} alt={label} className="w-full h-full object-cover" />
      </div>
    )
  }

  return (
    <div className={`${aspect} rounded-lg border border-black/10 bg-viola-surface flex flex-col items-center justify-center gap-3 ${className}`}>
      <Image className="w-8 h-8 text-viola-muted/20" />
      {label && <span className="text-viola-muted/30 text-sm text-center px-4">{label}</span>}
    </div>
  )
}
