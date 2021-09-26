import { api } from './api'

import { Dragon } from '../interfaces/dto'

export const getDragonsList = async () => {
  const res = await api.get<Dragon[]>('/dragon')

  return res.data
}
