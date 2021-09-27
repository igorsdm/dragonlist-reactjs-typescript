import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { orderBy, map } from 'lodash'
import { FiTrash2 } from 'react-icons/fi'
import { GoPencil } from 'react-icons/go'
import { toast } from 'react-toastify'

import DefaultDragon from '../../assets/images/defaultDragon.svg'
import { Button } from '../../components/Button'
import { ButtonIcon } from '../../components/ButtonIcon'
import { useLoader } from '../../context/AppContext'
import { Dragon } from '../../interfaces/dto'
import { getDragonsList, deleteDragonById } from '../../services/dragons'

import { Body, Footer } from '../_layout/styles'

import { ScrollY, DragonContainer, Content, Actions } from './styles'

export const List = () => {
  const { loading, setLoading } = useLoader()

  const [dragonList, setDragonList] = useState<Dragon[]>([])

  const handleGetDragonList = useCallback(async () => {
    setLoading(true)
    return getDragonsList().then(response => {
      setDragonList(orderBy(response.data, 'name', 'asc'))
    })
  }, [setLoading])

  const handleDeleteDragon = useCallback(
    async (dragonId: number) => {
      setLoading(true)
      return deleteDragonById(dragonId)
        .then(() => toast.success('Dragão deletado com sucesso!'))
        .then(() => handleGetDragonList())
    },
    [handleGetDragonList, setLoading]
  )

  useEffect(() => {
    handleGetDragonList().finally(() => setLoading(false))
  }, [handleGetDragonList, setLoading])

  return (
    <>
      <Body show={!loading}>
        <ScrollY>
          {dragonList.length > 0 ? (
            map(dragonList, dragon => {
              return (
                <DragonContainer key={dragon.id}>
                  <img
                    src={dragon.avatar ? dragon.avatar : DefaultDragon}
                    alt=""
                  />

                  <Content
                    onClick={() => {
                      setLoading(true)
                    }}
                  >
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={{
                        pathname: '/dragao',
                        state: { dragonId: dragon.id },
                      }}
                    >
                      <h3>{dragon.name}</h3>
                    </Link>
                  </Content>
                  <Actions>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={{
                        pathname: '/editar',
                        state: { dragonId: dragon.id },
                      }}
                    >
                      <ButtonIcon
                        onClick={() => setLoading(true)}
                        icon={GoPencil}
                        color="#e25822"
                      />
                    </Link>

                    <ButtonIcon
                      icon={FiTrash2}
                      color="#e25822"
                      onClick={() => {
                        handleDeleteDragon(dragon.id).finally(() =>
                          setLoading(false)
                        )
                      }}
                    />
                  </Actions>
                </DragonContainer>
              )
            })
          ) : (
            <DragonContainer>
              <div style={{ margin: '0 auto' }}>
                <h3>Não há dragões cadastrados!</h3>
              </div>
            </DragonContainer>
          )}
        </ScrollY>
      </Body>
      <Footer show={!loading}>
        <Link to="/novo">
          <Button colorScheme="default">Novo</Button>
        </Link>
      </Footer>
    </>
  )
}
