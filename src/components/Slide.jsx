export default function Slide({ children, className = '' }) {
  return (
    <div className={`min-h-screen flex items-center justify-center p-8 ${className}`}>
      <div
        className="slide-fade-in w-full"
        style={{
          transform: 'scale(var(--content-zoom, 1))',
          transition: 'transform 0.3s ease',
          transformOrigin: 'center center',
        }}
      >
        {children}
      </div>
    </div>
  )
}
