import styled from 'styled-components'

import { DisplayProps, SignedProps } from '../../interfaces/styles'

export const MainContainer = styled.div<SignedProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: ${({ signIn }) => (signIn ? '500px' : '700px')};
    padding: 2rem;
    height: 100%;
    width: 100%;
  }
`

export const Card = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: 10% 65% 25%;
  grid-template-areas:
    'header'
    'body'
    'footer';

  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  padding: 1rem 0.5rem 1rem 1rem;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: header;
`

export const Body = styled.div<DisplayProps>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  grid-area: body;
`

export const Footer = styled.div<DisplayProps>`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  flex-direction: column;
  grid-area: footer;
`

export const Loading = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  grid-area: body;
`

export const CustomLoader = styled.div`
  border: 0.2rem solid #fff;
  border-radius: 50%;
  border-top: 0.2rem solid #e25822;
  width: 3rem;
  height: 3rem;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
