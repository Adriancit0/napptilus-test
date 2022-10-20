import HOUR_MILI_SECONDS from '../constants/hourmiliSecons'

export const getProducts = async () => {
  const currentTime = new Date()
  return await fetch(`${import.meta.env.VITE_API_REMOTE_URL}`)
    .then(response => {
      localStorage.nextCallTime = currentTime.getTime() + HOUR_MILI_SECONDS
      return response.json()
    })
    .catch(error => console.log(error))
}
