import styled from 'styled-components'

export const Container = styled.div`
  & > * {
    width: 100%;
    text-align: center;
  }

  h1 {
    margin-bottom: 2rem;
  }
`
export const LinkSpan = styled.span`
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    text-decoration: underline;
  }
`
