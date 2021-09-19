import styled from 'styled-components'
import { motion } from 'framer-motion'

const Swipe = ({ className, children, offset = 0, delay = 0 }) => {
  return (
    <div className={className}>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: offset }}
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

export default styled(Swipe)`
  overflow: hidden;
`