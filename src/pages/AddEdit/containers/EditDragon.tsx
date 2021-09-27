import { Input } from '../../../components/Input'
import { AddDragon } from '../../../interfaces/components'
import { Form } from '../styles'

export const EditDragonForm = ({ register, errors }: AddDragon) => {
  return (
    <>
      <Form>
        <h2>Editar dragão</h2>
        <Input
          name="name"
          register={register}
          rules={{
            pattern: {
              value: /^[A-zÀ-ú\-\s]+$/,
              message: 'Valor informado não parece ser um nome válido',
            },
          }}
          error={errors}
          placeholder="Digite o nome"
          autoComplete="off"
        />

        <Input
          name="type"
          register={register}
          rules={{
            pattern: {
              value: /^[A-zÀ-ú\-\s]+$/,
              message: 'Valor informado não parece ser um tipo válido',
            },
          }}
          error={errors}
          placeholder="Digite o tipo"
          autoComplete="off"
        />

        <Input
          name="avatar"
          register={register}
          rules={{
            pattern: {
              value: /(https)/,
              message: 'Valor informado não parece ser uma url válida',
            },
          }}
          error={errors}
          placeholder="Digite a url do avatar"
          autoComplete="off"
        />
      </Form>
    </>
  )
}
