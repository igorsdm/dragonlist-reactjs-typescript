import { FaPowerOff } from 'react-icons/fa'
import { MainContainer, Card, Header, Loading, CustomLoader } from './styles'

import { Children } from '../../interfaces/components'
import { ButtonIcon } from '../../components/ButtonIcon'
import { useAuth, useLoader } from '../../context/AppContext'

export const Layout = ({ children }: Children) => {
  const { token, signOut } = useAuth()
  const { loading } = useLoader()

  return (
    <MainContainer signIn={!token}>
      {!token ? (
        children
      ) : (
        <div>
          <Card>
            <Header>
              <h1>Dragons List</h1>
              <ButtonIcon icon={FaPowerOff} color="#cf1020" onClick={signOut} />
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
