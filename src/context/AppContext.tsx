import { useState, createContext, useCallback, useContext } from 'react'
import { findIndex, concat } from 'lodash'

import { AppContextProvider, UseAuth, UseLoader } from '../interfaces/context'

import { User } from '../interfaces/dto'

import { Children } from '../interfaces/components'

const AppContext = createContext<AppContextProvider>({} as AppContextProvider)

export const AppProvider = ({ children }: Children) => {
  const [token, setToken] = useState(() => {
    const storageToken = localStorage.getItem('dragonsList:token')

    return storageToken || ''
  })

  const [loading, setLoading] = useState(false)

  const [usersListFromBackEnd, setUsersListFromBackEnd] = useState<User[]>(
    () => {
      const userList = localStorage.getItem('dragonsList:userList')

      if (typeof userList === 'string') {
        return JSON.parse(userList)
      }

      return []
    }
  )

  const signIn = useCallback(
    (email: string, password: string) => {
      const index = findIndex(
        usersListFromBackEnd,
        item => item.email === email
      )

      if (index < 0) {
        return false
      }

      if (!(usersListFromBackEnd[index].password === password)) {
        return false
      }

      localStorage.setItem('dragonsList:token', 'tokenFromBackEnd')
      setToken('tokenFromBackEnd')

      return true
    },
    [usersListFromBackEnd]
  )

  const signUp = useCallback(
    (name: string, email: string, password: string) => {
      const index = findIndex(
        usersListFromBackEnd,
        (item: User) => item.email === email || item.name === name
      )

      if (index >= 0) {
        return false
      }

      const newUsersLists = concat(usersListFromBackEnd, {
        name,
        email,
        password,
      })

      localStorage.setItem(
        'dragonsList:userList',
        JSON.stringify(newUsersLists)
      )
      setUsersListFromBackEnd(newUsersLists)

      return true
    },
    [usersListFromBackEnd]
  )

  const signOut = useCallback(() => {
    setToken('')
    localStorage.setItem('dragonsList:token', '')
  }, [])

  return (
    <AppContext.Provider
      value={{ token, loading, signIn, signUp, signOut, setLoading }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAuth = (): UseAuth => {
  const { signIn, signOut, signUp, token } = useContext(AppContext)

  return { signIn, signOut, signUp, token }
}

export const useLoader = (): UseLoader => {
  const { loading, setLoading } = useContext(AppContext)

  return { loading, setLoading }
}
