import { motion } from 'framer-motion'

const Fade = ({ children, delay = 0, duration = 1.5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: duration,
        ease: 'easeOut',
        delay: delay
      }}>
      {children}
    </motion.div>
  )
}

export default Fade
