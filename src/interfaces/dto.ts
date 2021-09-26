export interface Dragon {
  createdAt: string
  name: string
  type: string
  histories: any[]
  id: number
  avatar?: string
}

export interface User {
  email: string
  password: string
  name: string
}
