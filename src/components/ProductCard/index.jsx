/* eslint-disable multiline-ternary */
import { Link } from 'react-router-dom'
import './style.css'

const ProductCard = ({ product }) => {
  return (
    <li key={product.model} className='card'>
      <Link to={`/product/${product.id}`} className='card__link'>
        <picture className='card__picture'>
          <img
            className='card__image'
            src={product.imgUrl}
            alt={`${product.model} image`}
            loading='lazy'
          />
        </picture>
        <section className='card__details'>
          <div className='details__title'>
            <h2 className='title__brand'>{product.brand}</h2>
            <p className='title__model'>
              <u>{product.model}</u>
            </p>
            {product.price ? (
              <p className='details__price'>
                {product.price}.00 <sub className='price__currency'>€</sub>
              </p>
            ) : (
              <p className='details__price'>N/A</p>
            )}
          </div>
        </section>
      </Link>
    </li>
  )
}

export default ProductCard
