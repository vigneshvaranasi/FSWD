import { Link } from "react-router-dom";
import amzlogo from '../../assets/amazon.png'
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <nav className="nav justify-content-center justify-content-sm-between d-flex flex-wrap p-1 align-items-center header">
        <ul className="nav text-center justify-content-center header">
          <li className='nav-item'>
            <Link to="" className='nav-link logo'><img src={amzlogo} width={80} alt="" /></Link>
          </li>
        </ul>
        <ul className='nav justify-content-end'>
          <li className='nav-item'>
            <Link to="register" className='nav-link text-white'>Register</Link>
          </li>
          <li className='nav-item'>
            <Link to="login" className='nav-link text-white'>Login</Link>
          </li>
          <li className='nav-item'>
            <Link to="about" className='nav-link text-white'>About</Link>
          </li>
        </ul>
      </nav >
    </div>
  )
}

export default Navbar;