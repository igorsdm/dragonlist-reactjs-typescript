import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Button } from '../../../../components/Button'

import { Header, Body, Footer, ScrollY, Item } from './styles'

interface Attributes {
  dragonList: []
}

export const ItemsList: FC<Attributes> = ({ dragonList }) => {
  return (
    <>
      <Header>
        <h1>Dragons List</h1>
      </Header>
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
