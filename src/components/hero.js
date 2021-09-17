import Image from 'next/image'
import styled from 'styled-components'
import HeartIcon from '../assets/heartIcon'
import { TextSwipe } from '../fx'

const Hero = ({ className }) => {
  return (
    <article className={className}>
      <section className='hero__section'>
        <header className='hero__header'>
          <TextSwipe>
            <small className='hero__small-text'>24/7 Live.</small>
          </TextSwipe>
          <h1 className='hero__headline'>
            <div>
              <span>L</span>
              <span className='hero__headline__heart'>
                <HeartIcon />
              </span>
              <span>V</span>
              <span>E</span>
              <span>.</span>
            </div>
            <abbr className='hero__headline__sub'>
              <span>L</span>
              <span>.</span>
              <span>A</span>
              <span>.</span>
            </abbr>
          </h1>
          <h2 className='hero__season'>
            <span>
              Spring
            </span>
            <span>
              2017
            </span>
          </h2>
          <h3 className='hero__credit'>
            With Anwar Hadio & Sophia Richie
          </h3>
        </header>
        <p>
          Engineered for perfect form and exceptional fit – whatever you do in them.
        </p>
        <button>View all products</button>
      </section>
      <section className='hero__section'>
        <div className='hero__banner'>
          <Image
            className='hero__banner__inner'
            src='/images/tommy-denim__header-men.jpg'
            alt='Men spring collection'
            layout='fill'
          />
        </div>
      </section>
    </article>
  )
}

export default styled(Hero)`
display: flex;
margin-top: 64px;

.hero {
  &__section {
    width: 100%;

    &:first-of-type {
      margin-top: 8rem;
      padding-right: 60px;
      max-width: 290px;
    }
  }

  &__small-text {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-family: ${({ theme }) => theme.fonts.heavy};
    letter-spacing: .25rem;
    text-transform: uppercase;
  }

  &__headline {
    position: relative;
    margin: 1rem 0 1rem -1rem;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    color: ${({ theme }) => theme.colors.secondary};
    white-space: nowrap;
    line-height: 24rem;
    letter-spacing: 4rem;
    z-index: 1;

    &__sub {
      position: absolute;
      transform: translateX(78%);
    }

    &__heart {
      margin-left: -90px;
      display: inline-block;
      height: 331px;
      width: 500px;
    }
  }

  &__banner {
    position: relative;
    height: 1095px;
    width: 100%;
    max-width: 1010px;

    &__inner {
      object-fit: cover;
      object-position: -225px 0;
    }
  }
}
`