import { Route as ReactDOMRoute, Redirect } from 'react-router-dom'

import { Layout } from '../pages/_layout'

import { useAuth } from '../context/AppContext'

import { RouteProps } from '../interfaces/components'

const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps) => {
  const { token } = useAuth()

  return (
    <ReactDOMRoute
      {...rest}
      render={props => {
        return isPrivate === !!token ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/lista',
              state: { from: props.location },
            }}
          />
        )
      }}
    />
  )
}

export default Route
