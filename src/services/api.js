import { create } from 'apisauce'

const api = create({
  baseURL: 'https://covid19-api.org/api',
})

api.addResponseTransform((response) => {
  if (!response.ok) throw response
})

export default api
