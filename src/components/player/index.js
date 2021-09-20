import { useState, useRef } from 'react'
import Controls from './_controls'

const Player = ({ path }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState()
  const ref = useRef()

  const handleClick = () => {
    isPlaying ? ref.current.pause() : ref.current.play()
    setIsPlaying(!isPlaying)

    if(isPlaying) {
      getProgress(ref.current)
    }
  }

  const getProgress = video => {
    const percentage = (video.currentTime / video.duration * 100)
    setProgress(percentage)
  }

  return (
    <div >
      <video ref={ref} width="800" height="520">
        <source src={path} type="video/mp4" />
      </video>
      <Controls isPlaying={isPlaying} progress={progress} handleClick={handleClick} />
    </div>
  )
}

export default Player
