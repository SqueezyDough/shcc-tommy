import styled from 'styled-components'
import Header from '../components/header'
import Hero from '../components/hero'
import { Fade } from '../fx'

const Home = ({ className }) => {
  return (
    <>
      <Header />
      <main className={className}>
        <Fade>
          <Hero />
        </Fade>
      </main>
    </>
  )
}

export default styled(Home)`
margin: 0 auto;
max-width: ${({ theme }) => theme.screens.xl};
`
