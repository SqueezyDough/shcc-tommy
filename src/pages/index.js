import styled from 'styled-components'
import Header from '../components/header'
import Hero from '../components/hero'
import Player from '../components/player/'
import { Fade, Blinds } from '../fx'

const Home = ({ className }) => {
  return (
    <>
      <Header />
      <main className={className}>
        <Hero />
        <div className='video-container'>
          <Fade delay={1}>
            <div className='promo-video'>
              <Player path='/media/test-video.mp4' />
            </div>
            <Blinds />
          </Fade>
        </div>
      </main>
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
