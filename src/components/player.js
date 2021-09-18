import { motion } from 'framer-motion'

const Player = ({ path }) => {
  return (
    <motion.div
    >
      <video width="800" height="400">
        <source src={path} type="video/mp4" />
      </video>
    </motion.div>
  )
}

export default Player
