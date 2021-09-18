import styled from 'styled-components'
import { motion } from 'framer-motion'

const Swipe = ({ className, children, offset, delay = .5 }) => {
  return (
    <div className={className}>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: offset || 0 }}
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