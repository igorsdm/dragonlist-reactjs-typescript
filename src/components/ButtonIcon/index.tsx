import { StyledButton } from './styles'

import { ButtonIconProps } from '../../interfaces/components'

export const ButtonIcon = ({ icon: Icon, color, ...rest }: ButtonIconProps) => (
  <StyledButton type="button" {...rest}>
    <Icon size="1.5rem" color={color} />
  </StyledButton>
)
