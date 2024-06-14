import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div>
            <ul className='nav fs-4 justify-content-end bg-secondary'>
                <li className='nav-item'>
                    <Link to="" className='nav-link text-white'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to="users" className='nav-link text-white'>Users</Link>
                </li>
                <li className='nav-item'>
                    <Link to="technologies" className='nav-link text-white'>Technologies</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;