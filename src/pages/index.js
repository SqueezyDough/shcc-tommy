import styled from 'styled-components'
import Header from '../components/header'
import Hero from '../components/hero'

const Home = ({ className }) => {
  return (
    <>
      <Header />
      <main className={className}>
        <Hero />
      </main>
    </>
  )
}

export default styled(Home)`
margin: 0 auto;
max-width: ${({ theme }) => theme.screens.xl};
`
