import axios from 'axios'
import { toast } from 'react-toastify'

export const api = axios.create({
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/',
})

api.interceptors.request.use(
  request => {
    return request
  },
  error => {
    toast.error(
      'Houve um problema com a sua solicitação, tente novamente mais tarde'
    )
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    toast.error(
      'Houve um problema com a sua solicitação, tente novamente mais tarde'
    )
    return Promise.reject(error)
  }
)
