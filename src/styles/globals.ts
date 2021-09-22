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
  }

  body {
    background: linear-gradient(
    135deg,
    rgba(129, 221, 146, 1) 0%,
    rgba(58, 178, 163, 1) 100%
  );

  color: #fff;
  -webkit-font-smoothing: antialiased;

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

  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;

    & > div {
      max-width: 500px;
      padding: 2rem;
      height: 100%;
      width: 100%;
    }
 }

`
