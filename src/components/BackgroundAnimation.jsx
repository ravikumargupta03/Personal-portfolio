import { motion } from 'framer-motion'
import GradientOrb from './GradientOrb'

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" style={{ contain: 'layout style paint' }}>
      {/* Main gradient orbs - Reduced for better performance */}
      <GradientOrb
        className="w-96 h-96 bg-gradient-to-r from-brand-500/30 to-purple-500/30 top-0 left-1/4"
        delay={0}
      />
      <GradientOrb
        className="w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 bottom-1/4 right-1/4"
        delay={3}
      />
      <GradientOrb
        className="w-72 h-72 bg-gradient-to-r from-pink-500/25 to-brand-500/25 top-1/3 right-0"
        delay={6}
      />
      
      {/* Subtle animated grid - Optimized */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.06] transition-opacity duration-300 ease-out" style={{ willChange: 'opacity' }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            willChange: 'auto',
          }}
        />
      </div>
      
      {/* Theme-specific accent gradients - More distinct */}
      {/* Light mode - Bright pastels */}
      <div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 via-purple-200/20 to-pink-200/25 rounded-full blur-2xl opacity-70 dark:opacity-0 transition-opacity duration-300" 
        style={{ willChange: 'opacity' }}
      />
      {/* Dark mode - Deep vibrant colors */}
      <div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-900/50 via-purple-900/40 to-violet-900/45 rounded-full blur-3xl opacity-0 dark:opacity-100 transition-opacity duration-300" 
        style={{ willChange: 'opacity' }}
      />
      {/* Additional dark mode accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-900/30 via-indigo-900/25 to-black/40 rounded-full blur-3xl opacity-0 dark:opacity-80 transition-opacity duration-300" 
        style={{ willChange: 'opacity' }}
      />
    </div>
  )
}

