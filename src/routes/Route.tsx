import { Route as ReactDOMRoute, Redirect } from 'react-router-dom'

import { useAuth } from '../context/AppContext'

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useAuth()

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/list',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

export default Route
