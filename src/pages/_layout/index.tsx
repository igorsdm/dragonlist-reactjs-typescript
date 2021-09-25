import { MainContainer, Card, Header, Loading, CustomLoader } from './styles'

import { Children } from '../../interfaces/components'

import { useAuth, useLoader } from '../../context/AppContext'

export const Layout = ({ children }: Children) => {
  const { token } = useAuth()
  const { loading } = useLoader()

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
            {children}
            {loading && (
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
