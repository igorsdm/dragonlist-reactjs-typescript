import { useState, FC } from 'react'

import { ItemsList } from './containers/ItemsList'

import { Content, Card, Loading, CustomLoader } from './styles'

export const List: FC = () => {
  const [loading, setLoading] = useState(false)
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
