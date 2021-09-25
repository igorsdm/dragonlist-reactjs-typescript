import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { useLoader } from '../../context/AppContext'
import { api } from '../../services/api'

import { Body, Footer } from '../_layout/styles'

import { ScrollY, Item } from './styles'

export const List = () => {
  const { loading } = useLoader()

  useEffect(() => {
    const getData = async () => {
      const res = await api.get('/dragon')

      return res.data
    }
    getData()
  }, [])

  return (
    <>
      <Body show={!loading}>
        <ScrollY>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
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
