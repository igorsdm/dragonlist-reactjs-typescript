import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { toast } from 'react-toastify'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'

import { useAuth } from '../../../context/AppContext'

import { LinkSpan } from '../styles'

import { SignInInputs, SignUpProps } from '../../../interfaces/components'

export const SignInForm = ({ signUpForm, setSignUpForm }: SignUpProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>()

  const { signIn } = useAuth()

  const onSubmit: SubmitHandler<SignInInputs> = data => {
    const { email, password } = data

    const success = signIn(email, password)

    if (!success) {
      toast.error(
        'O e-mail ou a senha que você digitou não foram encontrados! Verifique e tente novamente!'
      )
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Dragons List</h1>
        <Input
          name="email"
          register={register}
          rules={{
            required: { value: true, message: 'Este campo é obrigatório' },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Valor informado não parece ser um e-mail válido',
            },
          }}
          defaultValue=""
          error={errors}
          placeholder="Digite seu e-mail"
          autoComplete="off"
        />

        <Input
          name="password"
          register={register}
          rules={{
            required: {
              value: true,
              message: 'Este campo é obrigatório',
            },
          }}
          defaultValue=""
          error={errors}
          placeholder="Digite sua senha"
          type="password"
          autoComplete="new-password"
        />
        <Button colorScheme="default" type="submit">
          <span>Entrar</span>
        </Button>
      </form>
      <LinkSpan
        onClick={() => setSignUpForm(!signUpForm)}
        onKeyPress={() => setSignUpForm(!signUpForm)}
        role="button"
        tabIndex={0}
      >
        Não possuí um conta? Crie uma aqui!
      </LinkSpan>
    </>
  )
}
