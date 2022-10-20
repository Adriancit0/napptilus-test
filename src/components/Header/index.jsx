import './style.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = ({ productsCount }) => {
  return (
    <header className='header'>
      <Link to='/'>
        <h1 className='header__title'>Napptilus</h1>
      </Link>
      <span className='header__cart'>
        <AiOutlineShoppingCart data-testid='cart__icon' className='cart__icon' />
      </span>
    </header>
  )
}

export default Header
