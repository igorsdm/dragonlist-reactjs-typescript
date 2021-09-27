import { api } from './api'

import { Dragon } from '../interfaces/dto'

export const getDragonsList = async () => {
  const res = await api.get<Dragon[]>('/dragon')

  return res
}

export const deleteDragonById = async (dragonId: number) => {
  const res = await api.delete(`/dragon/${dragonId}`)

  return res
}

export const getDragonById = async (dragonId: number) => {
  const res = await api.get(`/dragon/${dragonId}`)

  return res
}

export const addNewDragon = async (
  name: string,
  avatar: string,
  type: string
) => {
  const data = { name, avatar, type }

  Object.keys(data).forEach(key => {
    if ((data as any)[key] === '') delete (data as any)[key]
  })

  const res = await api.post(`/dragon`, data)

  return res
}

export const editDragon = async (
  name: string,
  avatar: string,
  type: string,
  dragonId: number
) => {
  const data = { name, avatar, type }

  const res = await api.put(`/dragon/${dragonId}`, data)

  return res
}
