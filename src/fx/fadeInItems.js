import { motion } from 'framer-motion'
import styled from 'styled-components'

const FadeInItems = ({ className, children, delay = 0 }) => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: .15,
        staggerDirection: 1,
        delayChildren: delay,
      }
    }
  }

  const slide = {
    hidden: {
      y: 60,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1,
      }
    }
  }

  const fade = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: .5,
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial='hidden'
      animate='show'
    >
      {children.map((child, i) => {
        return (
        <motion.span
          key={i}
          variants={slide}
        >
          <motion.div
            variants={fade}
          >
            {child}
          </motion.div>
        </motion.span>
        )
      })}
    </motion.div>
  )
}

export default styled(FadeInItems)`
span {
  display: inline-block;
}
`
