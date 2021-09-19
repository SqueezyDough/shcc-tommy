import { motion } from 'framer-motion'
import styled from 'styled-components'
import PlayButtonIcon from '../../assets/playButtonIcon'

const Controls = ({ className, handleClick }) => {
  const outer = {
    hover: {
      padding: 0,
      transition: {
        delayChildren: .15
      }
    }
  }

  const inner = {
    hover: {
      scale: 2,
    }
  }

  return (
    <motion.div
      className={className}
    >
      <motion.div
        className='play-button'
        whileHover='hover'
      >
        <motion.div className='play-button__outer'
          initial={{ padding: 48 }}
          variants={outer}
        >
          <motion.div className='play-button__inner'
            initial={{
              x: '-50%',
              y: '-50%'
            }}
            variants={inner}
          />
        </motion.div>
        <motion.div
            className='play-button__icon'
            onClick={handleClick}
          >
          <PlayButtonIcon />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const centerContent = `
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`

export default styled(Controls)`
width: 800px;
height: 450px;
background-color: rgba(0,0,0,.3);
position: absolute;
top: 50%;
transform: translateY(-51%);

.play-button {
  ${centerContent}
  z-index: 10;
  cursor: pointer;
  width: 100px;
  height: 100px;

  &__outer {
    ${centerContent}
    width: 42px;
    height: 42px;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
  }

  &__inner {
    ${centerContent}
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => `${theme.colors.secondary}75`};
    border-radius: 50%;
  }

  &__icon {
    ${centerContent}
    width: 42px;
    height: 42px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
  }

  svg {
    ${centerContent}
    width: 8px;
    height: 8px;
  }
}
`
