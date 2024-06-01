import './Navbar.css'
import logo from './assets/dlogo.svg'

function Navbar(){
    return(
        <nav>
            <ul className='logo'>
                <a href="#"><img src={logo} alt="" /></a>
            </ul>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Sign Up</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;