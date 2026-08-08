import { useEffect, useRef } from 'react'

export default function GalaxyBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let isActive = true

    // Set canvas size
    const setCanvasSize = () => {
      try {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      } catch (error) {
        console.error('Error setting canvas size:', error)
        isActive = false
      }
    }
    setCanvasSize()

    // Star class
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 2
        this.speed = Math.random() * 0.5
        this.opacity = Math.random()
        this.distanceFromCenter = this.getDistanceFromCenter()
        this.baseRadius = this.radius
      }

      getDistanceFromCenter() {
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        return Math.sqrt(
          Math.pow(this.x - centerX, 2) + Math.pow(this.y - centerY, 2)
        )
      }

      update() {
        // Subtle circular motion around center (galaxy swirl effect)
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2
        const dx = this.x - centerX
        const dy = this.y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Create a gentle rotational effect
        const angle = Math.atan2(dy, dx)
        const rotationSpeed = this.speed * 0.0002 * (1 + distance / 1000)
        const newAngle = angle + rotationSpeed
        
        // Move slightly outward
        const radialSpeed = this.speed * 0.05
        this.x = centerX + (distance + radialSpeed) * Math.cos(newAngle)
        this.y = centerY + (distance + radialSpeed) * Math.sin(newAngle)

        // Wrap around edges
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        // Pulsing effect
        this.radius = Math.max(0.2, this.baseRadius + Math.sin(Date.now() * 0.001 + this.y * 0.01) * 0.5)

        this.distanceFromCenter = this.getDistanceFromCenter()
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        
        // Set star color based on theme
        const isDarkMode = document.documentElement.classList.contains('dark')
        ctx.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 1)' : 'rgba(99, 102, 241, 1)'
        
        if (this.radius > 0) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
          ctx.fill()
        }
        
        // Add subtle glow for larger stars
        if (this.radius > 1) {
          ctx.globalAlpha = this.opacity * 0.3
          ctx.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(99, 102, 241, 0.5)'
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2)
          ctx.fill()
        }
        
        ctx.restore()
      }
    }

    // Create stars
    const numStars = Math.floor((canvas.width * canvas.height) / 15000)
    const stars = Array.from({ length: numStars }, () => new Star())

    // Animation loop
    const animate = () => {
      if (!isActive) return
      
      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Update and draw stars
        stars.forEach(star => {
          if (isActive) {
            star.update()
            star.draw()
          }
        })

        // Connect nearby stars with lines - skip if too many stars for performance
        if (stars.length < 500) {
          const isDarkMode = document.documentElement.classList.contains('dark')
          for (let i = 0; i < stars.length && i < 200; i++) {
            for (let j = i + 1; j < stars.length && j < 200; j++) {
              const dx = stars[i].x - stars[j].x
              const dy = stars[i].y - stars[j].y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < 150) {
                ctx.save()
                ctx.globalAlpha = (150 - distance) / 150 * 0.2
                ctx.strokeStyle = isDarkMode
                  ? 'rgba(255, 255, 255, 0.3)'
                  : 'rgba(99, 102, 241, 0.2)'
                ctx.lineWidth = 1
                ctx.beginPath()
                ctx.moveTo(stars[i].x, stars[i].y)
                ctx.lineTo(stars[j].x, stars[j].y)
                ctx.stroke()
                ctx.restore()
              }
            }
          }
        }

        animationFrameId = requestAnimationFrame(animate)
      } catch (error) {
        console.error('Error in animation loop:', error)
        isActive = false
      }
    }

    animate()

    // Handle resize with debounce for better performance
    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        try {
          setCanvasSize()
          // Recreate stars with new count
          const newNumStars = Math.floor((canvas.width * canvas.height) / 15000)
          stars.length = 0
          stars.push(...Array.from({ length: newNumStars }, () => new Star()))
        } catch (error) {
          console.error('Error handling resize:', error)
        }
      }, 100)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      isActive = false
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -10 }}
    />
  )
}

