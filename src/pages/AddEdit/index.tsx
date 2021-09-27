import { useState, useEffect, useCallback } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Button } from '../../components/Button'
import { useLoader } from '../../context/AppContext'

import { Body, Footer } from '../_layout/styles'

import { AddEditInputs } from '../../interfaces/form'

import { AddDragonForm } from './containers/AddDragon'
import { EditDragonForm } from './containers/EditDragon'
import { addNewDragon, getDragonById, editDragon } from '../../services/dragons'

export const AddEdit = (props: any) => {
  const [editMode, setEditMode] = useState(false)
  const { loading, setLoading } = useLoader()
  const history = useHistory()

  const { location } = props

  const dragonId = location.state?.dragonId

  if (location.pathname === '/editar' && !dragonId) {
    history.push('/lista')
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddEditInputs>()

  const onSubmit: SubmitHandler<AddEditInputs> = data => {
    const { name, avatar, type } = data

    if (!editMode) {
      addNewDragon(name, avatar, type)
        .then(() => {
          history.push('/lista')
          toast.success('Dragão cadastrado com sucesso!')
        })
        .catch(() => setLoading(false))
    } else {
      editDragon(name, avatar, type, dragonId)
        .then(() => {
          history.push('/lista')
          toast.success('Dragão editado com sucesso!')
        })
        .catch(() => setLoading(false))
    }
  }

  const handleGetDragon = useCallback(async id => {
    return getDragonById(id)
  }, [])

  useEffect(() => {
    setLoading(!!location.state?.dragonId)
    if (dragonId) {
      handleGetDragon(dragonId)
        .then(response => {
          setEditMode(true)

          const { name, type, avatar } = response.data

          reset({
            name,
            type,
            avatar,
          })
        })
        .catch(() => history.push('/lista'))
        .finally(() => setLoading(false))
    }
  }, [
    dragonId,
    handleGetDragon,
    history,
    location.state?.dragonId,
    reset,
    setLoading,
  ])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Body show={!loading}>
        {!editMode ? (
          <AddDragonForm register={register} errors={errors} />
        ) : (
          <EditDragonForm register={register} errors={errors} />
        )}
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
