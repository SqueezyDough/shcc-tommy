import Image from 'next/image'
import styled from 'styled-components'
import Menu from './menu'
import SearchIcon from '../assets/searchIcon'

const Header = ({ className }) => {
  return (
    <header className={className}>
      <nav className='header'>
        <ul className='header__inner'>
          <li className='header__logo'>
            <Image
              src='/images/logo.png'
              alt='Tommy Denim'
              width='220px'
              height='116px'
            />
          </li>
          <li>
            <Menu />
          </li>
          <li className='header__search'>
            <input className='header__search__input' type='text' placeholder='Search' />
            <SearchIcon />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default styled(Header)`
.header {
  border-top: 2px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.screens.xl};
  }

  &__logo {
    margin-top: -12px;
    margin-left: -17px;
  }

  &__search {
    display: flex;
    align-items: center;

    &__input {
      padding: 5px;
      border: 1px solid ${({ theme }) => theme.colors.grey};
      color: ${({ theme }) => theme.colors.primary};
      margin-right: ${({ theme }) => theme.spacings.xs};
    }
  }
}
`