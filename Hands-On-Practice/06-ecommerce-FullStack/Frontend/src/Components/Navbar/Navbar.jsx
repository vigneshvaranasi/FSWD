import { Link } from "react-router-dom";
import amzlogo from '../../assets/amazon.png';
import { userLoginContext } from '../../Contexts/userLoginContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { toast } from 'react-toastify';

function Navbar() {
  const navigate = useNavigate();
  const { userLoginStatus, setCurrentUser, setUserLoginStatus, currentUser, logoutUser } = useContext(userLoginContext);

  function logoutFromNav() {
    logoutUser();
    navigate('/');
    toast.success('Logout Success', {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div>
      <nav className="nav justify-content-center justify-content-sm-between d-flex flex-wrap p-1 align-items-center header">
        <ul className="nav text-center justify-content-center">
          <li className='nav-item'>
            <Link to="" className='nav-link logo'><img src={amzlogo} width={80} alt="" /></Link>
          </li>
        </ul>
        <ul className='nav justify-content-end'>
          {!userLoginStatus && (
            <li className='nav-item'>
              <Link to="register" className='nav-link text-white'>Register</Link>
            </li>
          )}
          {userLoginStatus && (
            <li className='nav-item'>
              <button onClick={logoutFromNav} className='nav-link text-white'>Logout</button>
            </li>
          )}
          {!userLoginStatus && (
            <li className='nav-item'>
              <Link to="login" className='nav-link text-white'>Login</Link>
            </li>
          )}
          {!userLoginStatus && (
            <li className='nav-item'>
              <Link to="about" className='nav-link text-white'>About</Link>
            </li>
          )}
          {userLoginStatus && (
            <li className='nav-item d-relative'>
              <Link to="/user-profile/cart" className='nav-link text-white'>
                Cart
                {currentUser.cart && currentUser.cart.length > 0 && (
                  <span className='badge bg-secondary ms-1 rounded-5'>{currentUser.cart.length}</span>
                )}
              </Link>
            </li>
          )}
          {userLoginStatus && (
            <li className='userProfile nav-item'>
              <Link to="user-profile" className='rounded-circle'>
                <img src={currentUser.profile} width={50} height={50} alt="profile" className='ms-3 me-3 profile-img' />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
