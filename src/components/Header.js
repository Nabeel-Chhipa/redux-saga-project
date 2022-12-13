import cartImage from '../assets/cart.jpg'
import '../Header.css'
import { useSelector } from 'react-redux'

const Header = () => {

  const result = useSelector(state => state.cartData)
  console.log('useSelecor console', result)
  return (
    <div className='header'>
      <div className='logoWrapper'>
        <h2>Logo</h2>
      </div>
        <div className='searchWrapper'>
            <p>Search Container</p>
        </div>
        <div className='cartWrapper'>
            <span>{result.length}</span>
            <img src={cartImage} alt='cart-image'/>
        </div>
    </div>
  )
}

export default Header