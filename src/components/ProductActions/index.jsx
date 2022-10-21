import { useState, useEffect } from 'react'
import { persistance } from '../../services/persistance'
import './style.css'

const ProductActions = ({ product, setProductCount }) => {
  const [colorCode, setColorCode] = useState(null)
  const [storageCode, setStorageCode] = useState(null)

  const selectColor = color => {
    setColorCode(parseInt(color))
  }

  const selectStorage = memory => {
    setStorageCode(parseInt(memory))
  }

  useEffect(() => {
    selectColor(product?.options?.colors[0]?.code)
    setStorageCode(product?.options?.storages[0]?.code)
  }, [product])

  const submitData = {
    id: product.id,
    colorCode,
    storageCode
  }
  const handleSubmit = event => {
    event.preventDefault()
    fetch(`${import.meta.env.VITE_API_CART_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitData)
    })
      .then(response => {
        response.json().then(data => {
          persistance.persist('productCount', persistance.get('productCount') + data.count)
          setProductCount(persistance.get('productCount'))
        })
      })
      .catch(error => console.error(error))
  }

  return (
    <form className='actions' onSubmit={handleSubmit}>
      <div className='actions__form-group'>
        <label className='form-group__label' htmlFor='memory-select'>
          Select memory size:
        </label>
        <select
          className='form-group__select'
          id='memory-select'
          onChange={event => selectStorage(event.target.value)}
        >
          {product.options?.storages?.map(({ code, name }, index) => (
            <option key={index} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className='actions__form-group'>
        <label className='form-group__label' htmlFor='color-select'>
          Select color:
        </label>
        <select
          className='form-group__select'
          id='color-select'
          onChange={event => selectColor(event.target.value)}
        >
          {product.options?.colors?.map(({ code, name }, index) => (
            <option key={index} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <button className='actions__submit-button' type='submit'>
        Add to Cart
      </button>
    </form>
  )
}

export default ProductActions
