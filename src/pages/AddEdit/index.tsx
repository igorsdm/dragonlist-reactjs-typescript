import { useState, useEffect, useCallback, useMemo } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button } from '../../components/Button'
import { useLoader } from '../../context/AppContext'

import { Body, Footer } from '../_layout/styles'

import { AddEditInputs } from '../../interfaces/form'

import { AddDragonForm } from './containers/AddDragon'
import { addNewDragon } from '../../services/dragons'

export const AddEdit = (props: any) => {
  const { loading, setLoading } = useLoader()
  const history = useHistory()

  const { location } = props

  const dragonId = location.state?.dragonId

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddEditInputs>()

  const onSubmit: SubmitHandler<AddEditInputs> = data => {
    const { name, avatar, type } = data

    addNewDragon(name, avatar, type).then(() => {
      history.push('/lista')
      toast.success('Dragão cadastrado com sucesso!')
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Body show={!loading}>
        <AddDragonForm register={register} errors={errors} />
      </Body>
      <Footer show={!loading}>
        <Button colorScheme="default" type="submit">
          Enviar
        </Button>
        <Button colorScheme="cancel" type="button" onClick={history.goBack}>
          Voltar
        </Button>
      </Footer>
    </form>
  )
}
