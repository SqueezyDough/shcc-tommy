import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const TextSwipe = ({ className, children, delay = .5 }) => {
  // use height to calculate font baseline (height/3)
  const [height, setHeight] = useState()
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [])

  return (
    <div
    ref={ref}
      className={className}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: height/3 }}
        transition={{
          duration: .5,
          ease: 'easeOut',
          delay: delay
        }}>
        {children}
      </motion.div>
    </div>
  )
}

export default styled(TextSwipe)`
  overflow: hidden;
`