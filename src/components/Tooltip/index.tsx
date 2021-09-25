import { Container } from './styles'

import { TooltipProps } from '../../interfaces/components'

export const Tooltip = ({ title, children, className }: TooltipProps) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  )
}
