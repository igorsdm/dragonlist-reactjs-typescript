import { useMemo } from 'react'
import { toast } from 'react-toastify'

import { api } from '../../services/api'
import { useAuth, useLoader } from '../../context/AppContext'

import { Children } from '../../interfaces/components'

export const WithAxios = ({ children }: Children) => {
  const { signOut } = useAuth()
  const { setLoading } = useLoader()

  useMemo(() => {
    api.interceptors.request.use(request => {
      setLoading(true)
      return request
    })

    api.interceptors.response.use(
      response => {
        setLoading(false)
        return response
      },
      error => {
        Promise.reject(error)
        if (error.response.status === 401) {
          signOut()
          toast.error('Acesso não permitido')
        } else {
          toast.error(
            'Houve um problema com a sua solicitação, tente novamente mais tarde'
          )
        }
        setLoading(false)
      }
    )
  }, [signOut, setLoading])

  return <>{children}</>
}
