import Image from 'next/image'
import styled from 'styled-components'
import HeartIcon from '../assets/HeartIcon'

const Hero = ({ className }) => {
  return (
    <article className={className}>
      <header className='hero'>
        <small className='hero__small-text'>24/7 Live.</small>
        <h1>
          <div>
            <span>L</span>
            <span>O</span>
            <HeartIcon />
            <span>V</span>
            <span>E</span>
            <span>.</span>
          </div>
          <abbr>
            <span>L</span>
            <span>.</span>
            <span>A</span>
            <span>.</span>
          </abbr>
        </h1>
        <h2>
          <span>
            Spring
          </span>
          <span>
            2017
          </span>
        </h2>
        <h3>
          With Anwar Hadio & Sophia Richie
        </h3>
      </header>
      <p>
        Engineered for perfect form and exceptional fit – whatever you do in them.
      </p>
      <div className='hero__banner'>
        <Image
          className='hero__banner__inner'
          src='/images/tommy-denim__header-men.jpg'
          alt='Men spring collection'
          layout='fill'
        />
      </div>
    </article>
  )
}

export default styled(Hero)`
margin-top: 24px;

.hero {
  &__small-text {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-family: ${({ theme }) => theme.fonts.heavy};
    letter-spacing: .25rem;
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