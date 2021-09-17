import Link from 'next/link'
import styled from 'styled-components'

const Menu = ({ className }) => {
  return (
    <ul className={className}>
      <li className='menu__item'>
        <Link href='/'>
          <a className='menu__link'>Woman</a>
        </Link>
      </li>
      <li className='menu__item'>
        <Link href='/'>
          <a className='menu__link'>Men</a>
        </Link>
      </li>
      <li className='menu__item'>
        <Link href='/'>
          <a className='menu__link'>Kids</a>
        </Link>
      </li>
      <li className='menu__item'>
        <Link href='/'>
          <a className='menu__link'>Labels</a>
        </Link>
      </li>
      <li className='menu__item'>
        <Link href='/'>
          <a className='menu__link'>Sale</a>
        </Link>
      </li>
    </ul>
  )
}

export default styled(Menu)`
display: flex;

.menu {
  &__item {
    padding: 10px 20px;
  }

  &__link {
    text-transform: uppercase;
    text-decoration: none;
    font-width: 100;
    font-size: ${({ theme }) => theme.fontSize.xs};

    &:hover, &:focus {
      text-decoration: underline;
    }
  }
}
`