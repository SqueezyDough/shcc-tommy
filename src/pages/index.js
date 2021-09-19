import styled from 'styled-components'
import Header from '../components/header'
import Hero from '../components/hero'
import Player from '../components/player/'
import { FadeIn } from '../fx'

const Home = ({ className }) => {
  return (
    <>
      <Header />
      <main className={className}>
        <FadeIn>
          <Hero />
          <div className='promo-video'>
            <Player path='/media/test-video.mp4' />
          </div>
        </FadeIn>
      </main>
    </>
  )
}

export default styled(Home)`
margin: 0 auto;
max-width: ${({ theme }) => theme.screens.xl};

.promo-video {
  margin-top: -4.5rem;
  transform: translateX(90px);
}
`
