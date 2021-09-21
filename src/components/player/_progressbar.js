import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../../styles/theme'

const Progressbar = ({ className, percent }) => {
  const ref = useRef()
  const [radius, setRadius] = useState()
  const [circumference, setCircumference] = useState()
  const [strokeDashOffset, setStrokeDashOffset] = useState()

  // reference guide: https://css-tricks.com/building-progress-ring-quickly/
  useEffect(() => {
    setRadius(ref.current.r.baseVal.value)
    setCircumference(radius * 2 * Math.PI)
    setStrokeDashOffset(circumference - percent / 100 * circumference)
  }, [radius, circumference, percent])

  const progressLine = {
    hide: {
      opacity: 0
    },
    show: {
      opacity: 1,
      rotate: (percent / 100 * 360) || 0,
      // Compensate radius difference for rotation animation
      transition: {
        delay: .075
      }
    }
  }

  return (
    <div className={className}>
      <svg
        className='progress-ring'
        height='120'
        width='120'
      >
        <circle
          ref={ref}
          className='progress-ring__circle'
          stroke={theme.colors.secondary}
          strokeWidth="2"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashOffset || 0}
          fill='transparent'
          r='56'
          cx='60'
          cy='60'
        />
        <motion.line
          className='progress-ring__line'
          x1='50%'
          y1='50%'
          x2='116'
          y2='50%'
          stroke={theme.colors.secondary}
          strokeWidth="2"
          animate={ percent ? 'show' : 'hide' }
          variants={progressLine}
        />
      </svg>
    </div>
  )
}

export default styled(Progressbar)`
display: flex;
align-items: center;
justify-content: center;
height: 100%;

.progress-ring {
  transform: rotate(-90deg);

  &__circle {
    transition: stroke-dashoffset 0.35s;
    transform-origin: 50% 50%;
  }

  &__line {
    transform-origin: 50% 50% !important;
  }
}
`
