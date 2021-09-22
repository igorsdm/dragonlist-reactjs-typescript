import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > * {
    width: 100%;
    text-align: center;
  }

  h1 {
    margin-bottom: 2rem;
  }
`

export const ErrorSpan = styled.span`
  color: #c53030;
  margin-top: 2rem;
`

export const LinkSpan = styled.span`
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    text-decoration: underline;
  }
`
