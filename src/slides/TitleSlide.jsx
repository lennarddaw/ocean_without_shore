import { useState } from 'react'
import Slide from '../components/Slide'

export default function TitleSlide() {
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <Slide>
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center cursor-pointer"
          onClick={() => setFullscreen(false)}
        >
          <img
            src="/images/2010_22_l.jpg"
            alt="Ocean Without a Shore"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <div className="relative flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        <div className="w-20 h-px bg-viola-gold/40 mb-10" />

        <p className="text-2xl tracking-[0.3em] uppercase text-viola-muted font-light mb-6">
          Bill Viola
        </p>

        <h1 className="text-8xl font-light text-viola-light leading-tight mb-4">
          Ocean Without
          <br />
          <span className="italic text-viola-gold">a Shore</span>
        </h1>

        <div className="w-10 h-px bg-viola-muted/30 my-8" />

        <p className="text-viola-muted text-xl tracking-widest uppercase mb-10">
          2007 &nbsp;&middot;&nbsp; 52. Biennale di Venezia
        </p>

        <img
          src="/images/2010_22_l.jpg"
          alt="Ocean Without a Shore"
          className="w-full max-w-2xl rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => setFullscreen(true)}
        />
      </div>
    </Slide>
  )
}
