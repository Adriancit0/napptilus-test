/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard'
import './style.css'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_REMOTE_URL}`)
      .then(response => response.json().then(data => setProducts(data)))
      .catch(error => console.log(error))
  }, [])

  const filterBySearchValue = phones => {
    return phones?.filter(
      phone =>
        phone.brand?.toLowerCase().includes(searchValue.toLowerCase()) ||
        phone.model?.toLowerCase().includes(searchValue.toLowerCase())
    )
  }

  return (
    <div className='product-list'>
      <div className='product-list__header'>
        <p className='product-list__paragraph'>Look at our products</p>
        <input
          className='product-list__input'
          type='text'
          onChange={event => setSearchValue(event.target.value)}
          placeholder='Search device...'
        />
      </div>
      <ul className='product-list__grid'>
        {filterBySearchValue(products)?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
