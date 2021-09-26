import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'

import { useAuth } from '../../../context/AppContext'

import { LinkSpan } from '../styles'

import { SignUpInputs, SignUpProps } from '../../../interfaces/components'

export const SignUpForm = ({ signUpForm, setSignUpForm }: SignUpProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>()

  const { signUp } = useAuth()

  const onSubmit: SubmitHandler<SignUpInputs> = data => {
    const { name, email, password } = data

    const success = signUp(name, email, password)

    if (success) {
      setSignUpForm(false)
      toast.success('Usuário criado com sucesso! Faça seu login!')
    } else {
      toast.error('Houve um problema com o seu cadastro, tente novamente!')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Dragons List</h1>
        <Input
          name="name"
          register={register}
          rules={{
            required: { value: true, message: 'Este campo é obrigatório' },
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: 'Valor informado não parece ser um nome válido',
            },
          }}
          defaultValue=""
          error={errors}
          placeholder="Digite seu nome"
          autoComplete="off"
        />
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
          <span>Cadastrar</span>
        </Button>
      </form>
      <LinkSpan
        onClick={() => setSignUpForm(!signUpForm)}
        onKeyPress={() => setSignUpForm(!signUpForm)}
        role="button"
        style={{ cursor: 'pointer', marginTop: '1rem' }}
        tabIndex={0}
      >
        Faça seu login!
      </LinkSpan>
    </>
  )
}
