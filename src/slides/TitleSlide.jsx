import { useState } from 'react'
import Slide from '../components/Slide'

export default function TitleSlide() {
  const [fullscreen, setFullscreen] = useState(false)
  const [qrFullscreen, setQrFullscreen] = useState(false)

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

      {qrFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-white flex items-center justify-center cursor-pointer"
          onClick={() => setQrFullscreen(false)}
        >
          <img
            src="/images/qr-code.png"
            alt="QR Code"
            className="w-[80vmin] h-[80vmin] object-contain"
          />
        </div>
      )}

      <img
        src="/images/qr-code.png"
        alt="QR Code"
        className="fixed top-4 left-4 z-40 w-12 h-12 sm:w-16 sm:h-16 cursor-pointer hover:scale-110 transition-transform rounded"
        onClick={() => setQrFullscreen(true)}
      />

      <div className="relative flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        <div className="w-14 sm:w-20 h-px bg-viola-gold/40 mb-6 sm:mb-10" />

        <p className="text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase text-viola-muted font-light mb-4 sm:mb-6">
          Bill Viola
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light text-viola-light leading-tight mb-3 sm:mb-4">
          Ocean Without
          <br />
          <span className="italic text-viola-gold">a Shore</span>
        </h1>

        <div className="w-10 h-px bg-viola-muted/30 my-4 sm:my-8" />

        <p className="text-viola-muted text-base sm:text-lg md:text-xl tracking-widest uppercase mb-6 sm:mb-10">
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
