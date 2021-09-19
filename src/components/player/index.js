import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Controls from './_controls'

const Player = ({ className, path }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef()

  const handleClick = () => {
    isPlaying ? ref.current.pause() : ref.current.play()
    setIsPlaying(!isPlaying)
  }


  return (
    <motion.div
      className={className}
    >
      <div className='player-container'>
        <video ref={ref} width="800" height="520">
          <source src={path} type="video/mp4" />
        </video>
        <Controls isPlaying={isPlaying} handleClick={handleClick} />
      </div>
    </motion.div>
  )
}

export default styled(Player)`
.player-container {
  position: relative;
}
`
