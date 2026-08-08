import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Sparkle = ({ x, y, angle, delay }) => {
  // White color with variations for better visibility
  const color = 'rgba(255, 255, 255, 1)'
  const distance = 30 + Math.random() * 40
  const size = 3 + Math.random() * 4

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 ${size * 3}px rgba(255, 255, 255, 0.8), 0 0 ${size * 6}px rgba(255, 255, 255, 0.4)`,
      }}
      initial={{
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      animate={{
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        opacity: 0,
        scale: 0,
      }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    />
  )
}

export default function ClickSpark({ children, className = '' }) {
  const [sparkles, setSparkles] = useState([])

  const handleClick = (e) => {
    // Don't prevent default - let the link work normally
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Create 12 sparkles in a circle
    const newSparkles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: (i / 12) * Math.PI * 2,
      delay: Math.random() * 0.1,
    }))

    setSparkles((prev) => [...prev, ...newSparkles])

    // Clean up sparkles after animation
    setTimeout(() => {
      setSparkles((prev) => prev.filter((sparkle) => !newSparkles.find((s) => s.id === sparkle.id)))
    }, 700)
  }

  return (
    <div
      className={`relative ${className}`}
      onClick={handleClick}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <Sparkle
            key={sparkle.id}
            x={sparkle.x}
            y={sparkle.y}
            angle={sparkle.angle}
            delay={sparkle.delay}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

