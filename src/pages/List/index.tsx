import { useState, FC, useEffect } from 'react'

import { ItemsList } from './containers/ItemsList'

import { Content, Card, Loading, CustomLoader } from './styles'

import { api } from '../../services/api'

export const List: FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const res = await api.get('/dragon')

      return res
    }

    getData().then(response => setLoading(false))
  }, [])

  return (
    <Content>
      <Card>
        {!loading ? (
          <ItemsList dragonList={[]} />
        ) : (
          <Loading>
            <CustomLoader />
          </Loading>
        )}
      </Card>
    </Content>
  )
}
