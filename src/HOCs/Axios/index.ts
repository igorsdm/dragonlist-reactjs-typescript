import { useMemo } from 'react'

import { api } from '../../services/api'
import { useAuth } from '../../context/AppContext'

export const WithAxios = ({ children }) => {
  const { signOut } = useAuth()

  useMemo(() => {
    api.interceptors.response.use(
      response => {
        return response
      },
      error => {
        Promise.reject(error)
        if (error.response.status === 401) signOut()
      }
    )
  }, [signOut])

  return children
}
