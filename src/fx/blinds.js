import { motion } from 'framer-motion'
import styled from 'styled-components'

const Blinds = ({
  className,
  offsetY,
  offsetX = '200px',
  direction,
  height = '100px',
  delay = 0 }) => {

  return (
    <motion.div
      className={className}
      initial={{
        zIndex: '-1',
        width: 0
      }}
      animate={{
        y: '100%',
        x: `-${offsetX}`,
        width: `calc(100% - ${offsetX})`,
        transition: {
          duration: 2,
        }
      }}
    />
  )
}

export default styled(Blinds)`
position: absolute;
top: 0;
right: 0;
height: 100px;
background-color: ${({ theme }) => theme.colors.lightGrey};;
`
