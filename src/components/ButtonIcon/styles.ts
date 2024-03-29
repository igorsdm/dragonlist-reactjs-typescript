import styled from 'styled-components'

export const StyledButton = styled.button`
  background: none;
  border: none;

  &:hover {
    svg {
      @media (min-width: 720px) {
        height: 1.7rem;
        width: 1.7rem;
      }
    }
  }
`
