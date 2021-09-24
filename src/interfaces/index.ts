import { ReactNode } from 'react'

export interface AppContextProvider {
  token: string
  signIn: (password: string, email: string) => boolean
  signUp: (name: string, email: string, password: string) => boolean
  signOut: () => void
}

export interface Children {
  children: ReactNode
}

export interface User {
  email: string
  password: string
  name: string
}
