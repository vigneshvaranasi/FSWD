import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div>
            <ul className='nav fs-4 justify-content-end bg-secondary'>
                <li className='nav-item'>
                    <Link to="" className='nav-link text-white'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to="register" className='nav-link text-white'>Register</Link>
                </li>
                <li className='nav-item'>
                    <Link to="login" className='nav-link text-white'>Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;