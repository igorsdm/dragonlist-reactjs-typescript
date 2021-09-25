export interface AppContextProvider {
  token: string
  loading: boolean
  signIn: (password: string, email: string) => boolean
  signUp: (name: string, email: string, password: string) => boolean
  signOut: () => void
  setLoading: (loading: boolean) => void
}

export type UseAuth = Omit<AppContextProvider, 'loading' | 'setLoading'>

export type UseLoader = Omit<
  AppContextProvider,
  'token' | 'signIn' | 'signUp' | 'signOut'
>

export interface User {
  email: string
  password: string
  name: string
}
