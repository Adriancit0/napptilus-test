import './style.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = ({ productCount }) => {
  return (
    <header className='header'>
      <Link to='/'>
        <h1 className='header__title'>Napptilus</h1>
      </Link>
      <span className='header__cart'>
        <AiOutlineShoppingCart data-testid='cart__icon' className='cart__icon' />
        <div className='cart__count'>{productCount}</div>
      </span>
    </header>
  )
}

export default Header
