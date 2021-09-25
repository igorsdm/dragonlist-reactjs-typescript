import { useState, FC, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import { api } from '../../services/api'

import { Button } from '../../components/Button'
import { Body, Footer } from '../_layout/styles'

import { ScrollY, Item } from './styles'

export const List = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await api.get('/dragon')

      return res
    }

    getData()
  }, [])

  return (
    <>
      <Body>
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
      <Footer>
        <Link to="/nowhere">
          <Button colorScheme="default">Novo</Button>
        </Link>
      </Footer>
    </>
  )
}
