import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../api/productById'
import ProductDescription from '../../components/ProductDescription'
import ProductImage from '../../components/ProductImage'
import ProductActions from '../../components/ProductActions'
import './style.css'

const ProductDetail = ({ setProductCount }) => {
  const [product, setProduct] = useState({})
  const { productId } = useParams()

  useEffect(() => {
    getProductById(productId).then(data => setProduct(data))
  }, [])
  return (
    <section className='details'>
      <ProductImage imgUrl={product.imgUrl} model={product.imgUrl} />
      <div className='details__group'>
        <ProductDescription product={product} />
        <ProductActions product={product} setProductCount={setProductCount} />
      </div>
    </section>
  )
}

export default ProductDetail
