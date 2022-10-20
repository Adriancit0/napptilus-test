import './style.css'

const ProductDescription = ({ product }) => {
  return (
    <ul className='description'>
      <li className='description__property'>
        <span className='property__key'>Brand: </span>
        {product.brand}
      </li>
      <li className='description__property'>
        <span className='property__key'>Model: </span>
        {product.model}
      </li>
      <li className='description__property'>
        <span className='property__key'>CPU: </span>
        {product.cpu}
      </li>
      <li className='description__property'>
        <span className='property__key'>RAM: </span>
        {product.ram}
      </li>
      <li className='description__property'>
        <span className='property__key'>OS: </span>
        {product.os}
      </li>
      <li className='description__property'>
        <span className='property__key'>Screen: </span>
        {product.displayResolution}
      </li>
      <li className='description__property'>
        <span className='property__key'>Battery: </span>
        {product.battery}
      </li>
      <li className='description__property'>
        <span className='property__key'>Camera 1: </span>
        {product.primaryCamera}
      </li>
      <li className='description__property'>
        <span className='property__key'>Camera 2: </span>
        {product.secondaryCmera}
      </li>
      <li className='description__property'>
        <span className='property__key'>Size: </span>
        {product.dimentions}
      </li>
      <li className='description__property'>
        <span className='property__key'>Weight: </span>
        {product.weight}gr
      </li>
    </ul>
  )
}

export default ProductDescription
