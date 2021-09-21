import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import Header from '../components/header'
import Hero from '../components/hero'
import Player from '../components/player/'
import theme from '../styles/theme'
import { Fade, Blinds } from '../fx'

const Home = ({ className }) => {
  const { ref, inView } = useInView({
    threshold: 0
  })

  return (
    <>
      <Header />
      <Fade>
        <main className={className}>
          <Hero />
          <div ref={ref} className='video-container'>
            <div className='promo-video'>
              <Player path='/media/test-video.mp4' />
            </div>

            {inView ? (
              <>
                <Blinds
                  offsetY='100px'
                  offsetX='200px'
                  height='80px'
                  targetWidth='520px'
                  delay='.15'
                  color={theme.colors.lightGrey}
                  reverse
                  asBackground
                />
                <Blinds
                  offsetY='180px'
                  offsetX='200px'
                  height='360px'
                  color={theme.colors.lightGrey}
                  reverse
                  asBackground
                />
              </>
            ) : (null)}
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
