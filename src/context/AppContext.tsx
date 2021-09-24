import { useState, createContext, useCallback, useContext } from 'react'
import { findIndex, concat } from 'lodash'

import { AppContextProvider, Children, User } from '../interfaces'

const AppContext = createContext<AppContextProvider>({} as AppContextProvider)

export const AppProvider = ({ children }: Children) => {
  const [token, setToken] = useState<string>(() => {
    const storageToken = localStorage.getItem('dragonsList:token')

    return storageToken || ''
  })

  const [usersListFromBackEnd, setUsersListFromBackEnd] = useState<User[]>(
    () => {
      const storageUsersList = JSON.parse(
        localStorage.getItem('dragonsList:userList')
      )

      return storageUsersList || []
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
    <AppContext.Provider value={{ token, signIn, signUp, signOut }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAuth = (): AppContextProvider => {
  const context = useContext(AppContext)

  return context
}
