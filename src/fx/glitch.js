import { motion } from 'framer-motion'

const Glitch = ({ Component, offset = 20 }) => {
  const transitionConfig = {
    duration: .01,
    delay: .5,
    repeat: 1,
    repeatDelay: .2,
    repeatType: 'reverse',
  }

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{x: [0, offset]}}
      transition={transitionConfig}
    >
      {/* Add the transition to child to sync with glitch animation */}
      <Component
        transition={transitionConfig}
      />
    </motion.div>
  )
}

export default Glitch
