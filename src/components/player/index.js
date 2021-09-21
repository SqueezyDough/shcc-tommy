import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import Controls from './_controls'

const Player = ({ path }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState()
  const videoRef = useRef()

  const { ref, inView } = useInView({
    threshold: .5
  })

  // Auto-pause video when outside viewport
  useEffect(() => {
    const video = videoRef.current
    if (!video.paused && !inView) {
      video.pause()
      setIsPlaying(false)
      updateProgress(video)
    }
  }, [inView])

  const handleClick = () => {
    isPlaying ? videoRef.current.pause() : videoRef.current.play()
    setIsPlaying(!isPlaying)
    updateProgress(videoRef.current)
  }

  const updateProgress = video => {
    const percentage = (video.currentTime / video.duration * 100)
    setProgress(percentage)
  }

  return (
    <div ref={ref}>
      <video ref={videoRef} width="800" height="520">
        <source src={path} type="video/mp4" />
      </video>
      <Controls isPlaying={isPlaying} progress={progress} handleClick={handleClick} />
    </div>
  )
}

export default Player
