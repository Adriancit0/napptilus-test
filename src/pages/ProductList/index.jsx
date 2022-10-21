import { useState, useEffect } from 'react'
import { persistance } from '../../services/persistance'
import { refreshData } from '../../services/refreshData'
import { getProducts } from '../../api/products'
import ProductCard from '../../components/ProductCard'
import './style.css'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (persistance.isEmpty('products') || refreshData()) {
      getProducts().then(data => {
        persistance.persist('products', data)
        setProducts(data)
      })
      return
    }
    setProducts(persistance.get('products'))
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
