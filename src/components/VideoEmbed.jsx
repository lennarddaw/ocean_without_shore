import { Play } from 'lucide-react'

/**
 * YouTube Video Embed
 *
 * Setze `videoId` auf die YouTube Video-ID (der Teil nach v= in der URL)
 * Beispiel: <VideoEmbed videoId="abc123" />
 */
export default function VideoEmbed({ videoId, label = 'Video', className = '' }) {
  if (!videoId) {
    return (
      <div className={`aspect-video rounded-lg border border-black/10 bg-viola-surface flex flex-col items-center justify-center gap-3 ${className}`}>
        <Play className="w-10 h-10 text-viola-muted/20" />
        <span className="text-viola-muted/30 text-sm">{label}</span>
        <span className="text-viola-muted/20 text-xs">YouTube Video-ID hier einsetzen</span>
      </div>
    )
  }

  return (
    <div className={`aspect-video rounded-lg overflow-hidden ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={label}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
