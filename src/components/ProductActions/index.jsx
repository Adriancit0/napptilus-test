/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Radio } from '@nextui-org/react'

import './style.css'

const ProductActions = ({ product, cartProps }) => {
  const [color, setColor] = useState('')
  const [memory, setMemory] = useState('')
  const [colors, setColors] = useState([])
  const [memories, setMemories] = useState([])

  useEffect(() => {
    if (product) setColors(product.colors)
  }, [colors, memories])

  const submitData = {
    id: product.id,
    colorCode: color,
    storageCode: memory
  }
  const handleSubmit = event => {
    event.preventDefault()
    fetch(`${import.meta.env.VITE_API_REMOTE_URL}/cart}`, {
      method: 'POST',
      body: JSON.stringify(submitData)
    })
      .then(response => console.log(response))
      .then(data => console.log(data))
      .catch(error => console.error(error))
    cartProps.setProductsCount(cartProps.productsCount + 1)
  }
  if (typeof product === 'undefined') return null
  return (
    <div>
      <Radio.Group label='Color' defaultValue={colors && colors[0]}>
        {product.colors?.map((color, index) => (
          <Radio key={index} value={color} checked={colors && colors.length === 1}>
            {color}
          </Radio>
        ))}
      </Radio.Group>
      <Radio.Group label='Internal Memory' defaultValue={memories && memories[0]}>
        {product.internalMemory?.map((memory, index) => (
          <Radio key={index} value={memory}>
            {memory}
          </Radio>
        ))}
      </Radio.Group>
    </div>
  )
}

export default ProductActions
