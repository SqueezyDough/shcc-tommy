import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import Controls from './_controls'

const Player = ({ className, path }) => {
  const [playState, setPlayState] = useState()

  const handleClick = () => {
    console.log('play')
  }


  return (
    <motion.div
      className={className}
    >
      <div className='player-container'>
        <video width="800" height="520">
          <source src={path} type="video/mp4" />
        </video>
        <Controls state={playState} handleClick={handleClick} />
      </div>
    </motion.div>
  )
}

export default styled(Player)`
.player-container {
  position: relative;
}
`
