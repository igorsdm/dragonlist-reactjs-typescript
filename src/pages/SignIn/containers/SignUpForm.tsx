import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'

import { useAuth } from '../../../context/AppContext'

import { LinkSpan } from '../styles'

import { SignUpProps } from '../../../interfaces/components'
import { SignUpInputs } from '../../../interfaces/form'

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
          error={errors}
          placeholder="Digite sua senha"
          type="password"
          autoComplete="off"
        />
        <Button colorScheme="default" type="submit">
          <span>Cadastrar</span>
        </Button>
      </form>
      <LinkSpan onClick={() => setSignUpForm(!signUpForm)}>
        Faça seu login!
      </LinkSpan>
    </>
  )
}
