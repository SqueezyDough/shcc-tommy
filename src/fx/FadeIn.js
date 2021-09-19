import { motion } from 'framer-motion'

const FadeIn = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: 'easeOut',
        delay: delay
      }}>
      {children}
    </motion.div>
  )
}

export default FadeIn
