import { useState, useCallback } from 'react'

import { FiAlertCircle } from 'react-icons/fi'

import { Container, Error } from './styles'

import { InputProps } from '../../interfaces/components'

export const Input = ({
  name,
  error,
  register,
  rules,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <Container isErrored={!!error[name]} isFocused={isFocused}>
      <input
        {...register(name, rules)}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...rest}
      />
      {!!error[name] && (
        <Error title={error[name].message}>
          <FiAlertCircle color="#cf1020" size={20} />
        </Error>
      )}
    </Container>
  )
}
