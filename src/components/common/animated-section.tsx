'use client'

import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleUp'
  delay?: number
  duration?: number
}

const animations = {
  fadeUp: 'translate-y-8 opacity-0',
  fadeIn: 'opacity-0',
  slideLeft: 'translate-x-8 opacity-0',
  slideRight: '-translate-x-8 opacity-0',
  scaleUp: 'scale-95 opacity-0',
}

const animationsActive = {
  fadeUp: 'translate-y-0 opacity-100',
  fadeIn: 'opacity-100',
  slideLeft: 'translate-x-0 opacity-100',
  slideRight: 'translate-x-0 opacity-100',
  scaleUp: 'scale-100 opacity-100',
}

export default function AnimatedSection({
  children,
  className,
  animation = 'fadeUp',
  delay = 0,
  duration = 600,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isInView ? animationsActive[animation] : animations[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}>
      {children}
    </div>
  )
}
