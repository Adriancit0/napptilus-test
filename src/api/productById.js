export const getProductById = async id => {
  return await fetch(`${import.meta.env.VITE_API_REMOTE_URL}/${id}`)
    .then(response => response.json())
    .catch(error => console.log(error))
}
