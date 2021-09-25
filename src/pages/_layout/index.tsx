import { useState, useEffect } from 'react'

import { MainContainer, Card, Header, Loading, CustomLoader } from './styles'

import { Children } from '../../interfaces'

import { useAuth } from '../../context/AppContext'

export const Layout = ({ children }: Children) => {
  const { token } = useAuth()
  const [loading, setLoading] = useState(false)
  return (
    <MainContainer>
      {!token ? (
        children
      ) : (
        <div>
          <Card>
            <Header>
              <h1>Dragons List</h1>
            </Header>
            {!loading ? (
              children
            ) : (
              <Loading>
                <CustomLoader />
              </Loading>
            )}
          </Card>
        </div>
      )}
    </MainContainer>
  )
}
