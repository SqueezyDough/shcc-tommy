import { useState, useEffect, useRef } from 'react'
import Controls from './_controls'

const Player = ({ path }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState()
  const ref = useRef()

  // Auto-pause video when outside viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const video = ref.current
      entries.forEach(entry => {
        if (!video.paused) {
          video.pause()
          setIsPlaying(false)
          // update progress
          getProgress(video)
        }
      })
    }, {threshold: .5})

    observer.observe(ref.current)
  }, [])

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
