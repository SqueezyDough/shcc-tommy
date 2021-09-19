import { motion } from 'framer-motion'
import styled from 'styled-components'

const Player = ({ className, path }) => {
  return (
    <motion.div
      className={className}
    >
      <video width="800" height="520">
        <source src={path} type="video/mp4" />
      </video>
    </motion.div>
  )
}

export default styled(Player)`

`
