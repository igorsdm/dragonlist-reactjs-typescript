import { useMemo } from 'react'
import { toast } from 'react-toastify'

import { api } from '../../services/api'
import { useAuth } from '../../context/AppContext'

import { Children } from '../../interfaces/components'

export const WithAxios = ({ children }: Children) => {
  const { signOut } = useAuth()

  useMemo(() => {
    api.interceptors.request.use(request => {
      return request
    })

    api.interceptors.response.use(
      response => {
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
      }
    )
  }, [signOut])

  return <>{children}</>
}
