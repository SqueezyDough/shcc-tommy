import { motion } from 'framer-motion'
import theme from '../styles/theme'

const Glitch = ({ Component, offset = 20, delay = 0 }) => {
  const transitionConfig = {
    duration: 1.5,
    delay: delay,
    repeat: Infinity,
    repeatType: 'loop',
    repeatDelay: 10,
    times: [
      0,
      .01, .1,
      .1, .89, // pause
      .89, .92,
      .92, .96, // pause
      .96, .99,
      1
    ],
  }

  const glitch = {
    x: [
      0,
      offset, offset,
      0, 0,
      offset, offset,
      0, 0,
      offset, offset,
      0
    ],
  }

  const fill = {fill: [
    theme.colors.secondary,
    theme.colors.primary, theme.colors.primary,
    theme.colors.secondary, theme.colors.secondary,
    theme.colors.primary, theme.colors.primary,
    theme.colors.secondary, theme.colors.secondary,
    theme.colors.primary, theme.colors.primary,
    theme.colors.secondary
  ]
}

  return (
    <motion.div
      animate={glitch}
      transition={transitionConfig}
    >
      {/* Add the transition to child to sync with glitch animation */}
      <Component
        animation={fill} transition={transitionConfig}
      />
    </motion.div>
  )
}

export default Glitch
