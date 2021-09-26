import { api } from './api'

import { Dragon } from '../interfaces/dto'

export const getDragonsList = async () => {
  const res = await api.get<Dragon[]>('/dragon')

  return res.data
}

export const deleteDragonById = async (dragonId: number) => {
  const res = await api.delete(`/dragon/${dragonId}`)

  return res.data
}

export const getDragonById = async (dragonId: number) => {
  const res = await api.get(`/dragon/${dragonId}`)

  return res.data
}
