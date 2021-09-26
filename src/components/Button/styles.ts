import styled from 'styled-components'
import { shade } from 'polished'

import { ButtonProps } from '../../interfaces/styles'

export const Container = styled.button<ButtonProps>`
  background: ${({ colorScheme }) =>
    colorScheme === 'default' ? '#e25822' : '#cf1020'};
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
      shade(0.2, colorScheme === 'default' ? '#e25822' : '#cf1020')};
  }
`
