import { motion } from 'framer-motion'
import styled from 'styled-components'
import PlayButtonIcon from '../../assets/playButtonIcon'
import PauseButtonIcon from '../../assets/pauseButtonIcon'
import Progressbar from './_progressbar'
import { Swipe } from '../../fx'

const Controls = ({ className, isPlaying, progress, handleClick }) => {
  // darken video on pause
  const container = {
    play: { backgroundColor: 'rgba(0, 0, 0, 0)' },
    pause: { backgroundColor: 'rgba(0, 0, 0, .3)', }
  }

  // show button on hover & stagger children
  const button = {
    play: {opacity: 0},
    hover: { opacity: 1 }
  }

  // hide on play
  const progressionRing = {
    play: { opacity: 0 }
  }

  // hide when paused and on hover
  const progressionRingPaused = {
    hover: {scale: 0}
  }

  // show or hide controls on hover
  const buttonInner = {
    play: { scale: 0 },
    hover: { scale: 1 }
  }

  // show inner ring on hover
  const innerRing = {
    play: { opacity: 0 },
    hover: {
      opacity: 1,
      scale: 2,
      transition: {
        delay: .15,
      }
    }
  }

  return (
    <motion.div
      className={className}
      animate={isPlaying ? 'play' : 'pause'}
      variants={container}
    >
      <motion.div
        className='play-button'
        whileHover='hover'
        variants={button}
        initial={{
          opacity: 1,
        }}
      >
        <motion.div
          className='play-button__inner'
          animate={(isPlaying) ? 'play' : {}}
          variants={buttonInner}
        >
          <motion.div
            className='play-button__progression-ring'
            initial={{scale: 1, opacity: 1}}
            variants={ (!isPlaying && progress) ? progressionRing : progressionRingPaused }
            animate={ isPlaying ? {opacity: 0} : {}}
          >
            <Progressbar percent={progress} />
          </motion.div>

          <motion.div className='play-button__inner-ring'
            initial={{
              opacity: 1,
              x: '-50%',
              y: '-50%'
            }}
            variants={innerRing}
          />

          <div
            className='play-button__icon'
            onClick={handleClick}
          >
            {isPlaying ? (<PauseButtonIcon />) : (<PlayButtonIcon />)}
          </div>
        </motion.div>
      </motion.div>

      {/* Show 'Resume' on pause */}
      {!isPlaying && progress ? (
        <Swipe
          className='resume-video-label'
          offset={9}
        >
          Resume
        </Swipe>
      ) : (null)
    }
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
position: absolute;
top: 50%;
transform: translateY(-51%);

.play-button {
  ${centerContent}
  cursor: pointer;
  width: 150px;
  height: 150px;

  &__inner {
    position: relative;
  }

  &__progression-ring {
    height: 100%;
  }

  &__inner-ring {
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

    svg {
      ${centerContent}
      width: 8px;
      height: 8px;
    }
  }
}

.resume-video-label {
  ${centerContent}
  top: 70%;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ theme }) => theme.fontSize.md};
  text-transform: uppercase;
  letter-spacing: .2rem;
  color: ${({ theme }) => theme.colors.white};
  user-select: none;
}
`
