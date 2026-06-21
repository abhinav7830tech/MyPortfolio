import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[var(--accent)] text-[var(--background)] flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  )
}
