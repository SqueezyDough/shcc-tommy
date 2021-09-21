import { createGlobalStyle } from 'styled-components'
import { fonts } from './fonts'

const GlobalStyle = createGlobalStyle`
${fonts}

body {
  margin: 0;
  padding-bottom: 100px;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: ${({ theme }) => theme.fonts.default};
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  text-rendering: geometricPrecision;
  color: ${({ theme }) => theme.colors.primary};
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${({ theme }) => theme.fonts.header};
  font-variant-ligatures: common-ligatures;
}

a {
  color: inherit;
}

ul {
  padding: 0;
  list-style-type: none;
}

* {
  box-sizing: border-box;
}
`

export default GlobalStyle
