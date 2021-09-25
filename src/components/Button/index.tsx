import { Container } from './styles'

import { ButtonProps } from '../../interfaces/components'

export const Button = ({ children, colorScheme, ...rest }: ButtonProps) => (
  <Container colorScheme={colorScheme} {...rest}>
    {children}
  </Container>
)
