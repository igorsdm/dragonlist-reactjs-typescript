import { ButtonHTMLAttributes, FC } from 'react'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorScheme: string
}

export const Button = ({ children, colorScheme, ...rest }: ButtonProps) => (
  <Container colorScheme={colorScheme} {...rest}>
    {children}
  </Container>
)
