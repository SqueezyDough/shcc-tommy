import Image from 'next/image'
import styled from 'styled-components'
import { Swipe, Glitch, FadeInItems, Blinds } from '../fx'
import HeartIcon from '../assets/heartIcon'
import theme from '../styles/theme'
import Button from './button'

const Hero = ({ className }) => {
  return (
    <article className={className}>
      <section className='hero__section'>
          <header className='hero__header'>
            <Swipe delay={1.5} offset='15px'>
              <span className='hero__small-text'>24/7 Live.</span>
            </Swipe>
            <h1 className='hero__headline'>
              <div className='hero__headline__top'>
                <FadeInItems delay={1}>
                  <span>L</span>
                  <span className='hero__headline__heart'>
                    <Glitch Component={HeartIcon} delay={1.5} />
                  </span>
                  <span>V</span>
                  <span className='hero__headline__offset'>E</span>
                  <span>.</span>
                </FadeInItems>
              </div>

              <div className='hero__headline__bottom'>
                <FadeInItems delay={1.5}>
                  <span>L</span>
                  <span>.</span>
                  <span>A</span>
                  <span>.</span>
                </FadeInItems>
              </div>

            </h1>
            <h2 className='hero__date'>
              <span className='hero__date__season'>
                Spring
              </span>
              <span className='hero__date__year'>
                2017
              </span>
            </h2>
            <h3 className='hero__credit'>
              With Anwar Hadio & Sophia Richie
            </h3>
          </header>
          <p className='description'>
            Engineered for perfect form and exceptional fit – whatever you do in them.
          </p>
          <Button>
            View all products
          </Button>
        </section>

        <section className='hero__section hero__banner'>
          <Image
            className='hero__banner__inner'
            src='/images/tommy-denim__header-men.jpg'
            alt='Men spring collection'
            priority={true}
            quality={100}
            layout='fill'
          />
          <Blinds
            offsetY='0px'
            offsetX='0px'
            height='400px'
            initialWidth='50%'
            targetWidth='90px'
            reverse
            color={theme.colors.white}
          />
          <Blinds
            offsetY='340px'
            offsetX='0px'
            height='60px'
            initialWidth='50%'
            targetWidth='90px'
            reverse
            color={theme.colors.lightGrey}
          />
          <Blinds
            offsetY='0'
            offsetX='0px'
            height='100%'
            initialWidth='25%'
            targetWidth='0'
            reverse
            color={theme.colors.white}
          />
        </section>
    </article>
  )
}

export default styled(Hero)`
display: flex;
margin-top: 48px;

.hero {
  &__section {
    width: 100%;

    &:first-of-type {
      margin-top: 7rem;
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
    line-height: 44px;
  }

  &__headline {
    position: relative;
    margin: 1rem 0 1rem -1rem;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    color: ${({ theme }) => theme.colors.secondary};
    line-height: 24rem;
    letter-spacing: 4rem;
    white-space: nowrap;

    // prevent text from covering background face
    &__offset {
      margin-left: 4.5rem;
    }

    &__top {
      position: relative;
      z-index: 1;
    }

    &__bottom {
      position: absolute;
      z-index: 1;
      transform: translateX(78%);
    }

    &__heart {
      margin-left: -95px;
      display: inline-block;

      svg {
        height: 331px;
        width: 500px;
      }
    }
  }

  &__date {
    margin: ${({ theme }) => theme.spacings.md} 0;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    text-transform: uppercase;
    line-height: 48px;
    letter-spacing: .6rem;

    &__season {
      display: block;
    }

    &__year {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  &__credit {
    margin: ${({ theme }) => theme.spacings.sm} 0;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${({ theme }) => theme.fontSize.lg};
    text-transform: uppercase;
    letter-spacing: .2rem;
    line-height: 32px;
  }

  &__banner {
    position: relative;
    height: 1095px;
    width: 1010px;

    &__inner {
      object-fit: cover;
      object-position: -225px 0;
    }
  }
}
`