import Link from 'next/link'
import styled from 'styled-components'

const Button = ({ className, children }) => {
  return (
    <Link href='/'>
      <a className={className}>{children}</a>
    </Link>
  )
}

export default styled(Button)`
display: inline-block;
margin-top: 6px;
height: 40px;
padding: 8px 50px;
background-color: red;
border: none;
border-radius: 20px;
text-transform: uppercase;
font-family: ${({ theme }) => theme.fonts.heavy};
font-size: ${({ theme }) => theme.fontSize.md};
color: ${({ theme }) => theme.colors.white};
text-decoration: none;
cursor: pointer;
`
