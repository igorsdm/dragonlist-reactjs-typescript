import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { orderBy, map } from 'lodash'

import DefaultImage from '../../assets/images/defaultDragon.svg'
import { Button } from '../../components/Button'
import { useLoader } from '../../context/AppContext'
import { Dragon } from '../../interfaces/dto'
import { getDragonsList } from '../../services/dragons'

import { Body, Footer } from '../_layout/styles'

import { ScrollY, DragonContainer } from './styles'

export const List = () => {
  const { loading, setLoading } = useLoader()

  const [dragonList, setDragonList] = useState<Dragon[]>([])

  useEffect(() => {
    getDragonsList()
      .then(response => {
        setDragonList(orderBy(response, 'name', 'asc'))
      })
      .finally(() => setLoading(false))
  }, [setLoading])

  return (
    <>
      <Body show={!loading}>
        <ScrollY>
          {map(dragonList, dragon => {
            return (
              <DragonContainer key={dragon.id}>
                <img
                  src={dragon.avatar ? dragon.avatar : DefaultImage}
                  alt=""
                />
                <h3>{dragon.name}</h3>
              </DragonContainer>
            )
          })}
        </ScrollY>
      </Body>
      <Footer show={!loading}>
        <Link to="/nowhere">
          <Button colorScheme="default">Novo</Button>
        </Link>
      </Footer>
    </>
  )
}
