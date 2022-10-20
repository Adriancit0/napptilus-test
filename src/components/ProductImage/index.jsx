import './style.css'

const PhoneImage = ({ imgUrl, model }) => {
  return (
    <picture className='image'>
      <img src={imgUrl} alt={`${model} picture`} />
    </picture>
  )
}

export default PhoneImage
