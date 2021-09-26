import styled, { css } from 'styled-components'

import { Tooltip } from '../Tooltip'

import { InputProps } from '../../interfaces/styles'

export const Container = styled.div<InputProps>`
  display: flex;
  align-items: center;

  border-radius: 10px;
  padding: 1rem;
  width: 100%;

  background: rgba(255, 255, 255, 0.2);
  border: 2px solid #fff;

  & + div {
    margin-top: 0.5rem;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #cf1020;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #e25822;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;
    border: 0px solid;

    &::placeholder {
      color: #fff;
    }
  }
`

export const Error = styled(Tooltip)`
  height: 1.5rem;
  margin-left: 1rem;

  svg {
    margin: 0;
  }

  span {
    background: #cf1020;
    color: #fff;

    &::before {
      border-color: transparent;
    }
  }
`
