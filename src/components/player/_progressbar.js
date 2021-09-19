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

  return (
    <motion.div className={className}>
      <svg
        className='progress-ring'
        height='120'
        width='120'
      >
        <motion.circle
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
      </svg>
    </motion.div>
  )
}

export default styled(Progressbar)`
display: flex;
align-items: center;
justify-content: center;
height: 100%;

.progress-ring {
  &__circle {
    transition: stroke-dashoffset 0.35s;
    // transform: rotate(-90deg);
    transform-origin: 50% 50%,
  }
}
`
