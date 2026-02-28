export default function Slide({ children, className = '' }) {
  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8 ${className}`}
      style={{
        transform: 'scale(var(--content-zoom, 1))',
        transition: 'transform 0.3s ease',
        transformOrigin: 'center center',
      }}
    >
      <div className="slide-fade-in w-full">
        {children}
      </div>
    </div>
  )
}
