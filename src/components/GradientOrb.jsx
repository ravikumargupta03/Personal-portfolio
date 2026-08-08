import { motion } from 'framer-motion'

export default function GradientOrb({ className = '', delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
      animate={{
        scale: [1, 1.15, 1],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 10 + delay * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        repeatType: 'reverse',
      }}
    />
  )
}

