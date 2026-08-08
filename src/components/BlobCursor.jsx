import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function BlobCursor({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  useEffect(() => {
    // Only animate blob if mouse has moved
    if (mousePosition.x === 0 && mousePosition.y === 0) {
      setBlobPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
    }

    const updateBlobPosition = () => {
      setBlobPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.05,
        y: prev.y + (mousePosition.y - prev.y) * 0.05,
      }))
    }

    const intervalId = setInterval(updateBlobPosition, 16) // ~60fps
    return () => clearInterval(intervalId)
  }, [mousePosition])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Main blob that follows cursor with smooth lag */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: blobPosition.x,
          top: blobPosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
          {/* Main glowing blob */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-400/40 via-purple-400/40 to-pink-400/40 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px]" />
          
          {/* Secondary blob with different color */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-[50px] sm:blur-[60px] md:blur-[80px]"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Tertiary blob */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-400/30 via-brand-400/30 to-purple-400/30 rounded-full blur-[40px] sm:blur-[50px] md:blur-[60px]"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      {/* Additional floating blobs for depth */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-300/20 to-purple-300/20 rounded-full blur-[50px] sm:blur-[65px] md:blur-[80px]" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 pointer-events-none"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-[50px] sm:blur-[65px] md:blur-[80px]" />
      </motion.div>

      {/* Content with high z-index to stay on top */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

