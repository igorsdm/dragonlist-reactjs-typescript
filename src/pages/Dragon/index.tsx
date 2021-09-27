import { useState, useEffect, useCallback, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { format } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'

import DefaultDragon from '../../assets/images/defaultDragon.svg'
import { Button } from '../../components/Button'
import { useLoader } from '../../context/AppContext'
import { Dragon } from '../../interfaces/dto'
import { getDragonById } from '../../services/dragons'

import { Body, Footer } from '../_layout/styles'

import { DragonContainer, Content } from './styles'

export const DragonInfo = (props: any) => {
  const { loading, setLoading } = useLoader()
  const history = useHistory()

  const { location } = props

  const dragonId = location.state?.dragonId

  if (!dragonId) {
    history.push('/')
  }
  const [dragonInfo, setDragonInfo] = useState<Dragon>({} as Dragon)

  const handleGetDragon = useCallback(async id => {
    return getDragonById(id).then(response => setDragonInfo(response.data))
  }, [])

  const formattedDate = useMemo(() => {
    const { createdAt } = dragonInfo

    let date = ''

    if (createdAt) {
      date = format(
        new Date(Date.parse(dragonInfo.createdAt)),
        "dd/MM/yyyy 'às' hh:mm",
        {
          locale: ptBR,
        }
      )
    }

    return date
  }, [dragonInfo])

  useEffect(() => {
    if (dragonId) {
      handleGetDragon(dragonId).finally(() => setLoading(false))
    }
  }, [dragonId, handleGetDragon, setLoading])

  return (
    <>
      <Body show={!loading}>
        <DragonContainer>
          <img
            src={dragonInfo?.avatar ? dragonInfo.avatar : DefaultDragon}
            alt=""
          />
          <Content>
            <p>
              <strong>Nome: </strong>
              {dragonInfo.name}
            </p>
            <p>
              <strong>Tipo: </strong>
              {dragonInfo.type}
            </p>
            <p>
              <strong>Criado em: </strong>
              {formattedDate}
            </p>
          </Content>
        </DragonContainer>
      </Body>

      <Footer show={!loading}>
        <Button colorScheme="default" onClick={history.goBack}>
          Voltar
        </Button>
      </Footer>
    </>
  )
}
