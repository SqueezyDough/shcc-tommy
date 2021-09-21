import styled from 'styled-components'
import Header from '../components/header'
import Hero from '../components/hero'
import Player from '../components/player/'
import { Fade, Blinds } from '../fx'

const Home = ({ className }) => {
  return (
    <>
      <Header />
      <Fade>
        <main className={className}>
          <Hero />
          <div className='video-container'>
            <div className='promo-video'>
              <Player path='/media/test-video.mp4' />
            </div>
            <Blinds
              offsetY='100px'
              offsetX='200px'
              height='80px'
              targetWidth='520px'
              delay='.15'
              reverse
              asBackground
            />
            <Blinds
              offsetY='180px'
              offsetX='200px'
              height='360px'
              reverse
              asBackground
            />
          </div>
        </main>
      </Fade>
    </>
  )
}

export default styled(Home)`
margin: 0 auto;
max-width: ${({ theme }) => theme.screens.xl};

.video-container {
  position: relative;
}

.promo-video {
  margin-top: -4rem;
  transform: translateX(90px);
}
`
