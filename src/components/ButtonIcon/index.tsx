import { ButtonHTMLAttributes, FC } from 'react'
import { IconBaseProps } from 'react-icons'

import { StyledButton } from './styles'

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<IconBaseProps>
  color: string
}

export const ButtonIcon = ({ icon: Icon, color, ...rest }: ButtonIconProps) => (
  <StyledButton type="button" {...rest}>
    <Icon size="1.5rem" color={color} />
  </StyledButton>
)
