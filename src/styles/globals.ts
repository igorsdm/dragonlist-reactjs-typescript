import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {

    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }

    @media (max-width: 375px) {
      font-size: 81.25%
    }
  }

  body {
    color: #fff;
    -webkit-font-smoothing: antialiased;
    background: #483c32;
}

  body, input, textarea, button {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`
