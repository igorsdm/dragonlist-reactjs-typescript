import styled from 'styled-components'

export const DragonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100%;
  max-width: 20rem;

  img {
    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    margin: 1rem 0 2rem 0;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  p {
    margin-bottom: 0.5rem;
  }
`
