import styled from 'styled-components'
import { shade } from 'polished'

interface ButtonProps {
  colorScheme: string
}

export const Container = styled.button<ButtonProps>`
  background: ${({ colorScheme }) =>
    colorScheme === 'default' ? 'rgba(47, 110, 181, 1)' : '#c53030'};
  color: #fff;
  height: 3rem;
  border-radius: 10px;
  border: 0;
  padding: 0 1rem;
  width: 100%;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ colorScheme }) =>
      shade(
        0.2,
        colorScheme === 'default' ? 'rgba(47, 110, 181, 1)' : '#c53030'
      )};
  }
`
