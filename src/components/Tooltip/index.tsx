import { FC } from 'react'
import { Container } from './styles'

interface TooltipProps {
  title: string
  className?: string
}

export const Tooltip: FC<TooltipProps> = ({ title, children, className }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  )
}
