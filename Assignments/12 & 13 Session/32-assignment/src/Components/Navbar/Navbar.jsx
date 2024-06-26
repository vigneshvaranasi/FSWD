import { Link } from "react-router-dom";
import amzlogo from '../../assets/amazon.png'
import { userLoginContext } from '../../Contexts/userLoginContext';
import { useContext } from 'react';
import './Navbar.css'
import { useNavigate } from "react-router-dom";
function Navbar() {
  let navigate = useNavigate();
  const { userLoginStatus, setCurrentUser, setUserLoginStatus, currentUser } = useContext(userLoginContext);

  function logoutUser() {
    //reset state
    setCurrentUser({});
    setUserLoginStatus(false)
    //redirect to login page
    navigate('')
  }
  return (
    <div>
      <nav className="nav justify-content-center justify-content-sm-between d-flex flex-wrap p-1 align-items-center header">
        <ul className="nav text-center justify-content-center header">
          <li className='nav-item'>
            <Link to="" className='nav-link logo'><img src={amzlogo} width={80} alt="" /></Link>
          </li>
        </ul>
        <ul className='nav justify-content-end'>
          {/* If user is LoggedIn then it will not display otherwise it will display Register */}
          {!userLoginStatus && <li className='nav-item'>
            <Link to="register" className='nav-link text-white'>Register</Link>
          </li>}
          {/* If user is Loged In Then Display Logout*/}
          {userLoginStatus && <li className='nav-item'>
            <button onClick={logoutUser} className='nav-link text-white'>Logout</button>
          </li>}
          {/* If user is LoggedIn then it will not display otherwise it will display Login */}
          {
            !userLoginStatus && <li className='nav-item'>
              <Link to="login" className='nav-link text-white'>Login</Link>
            </li>
          }
          {
            !userLoginStatus && <li className='nav-item'>
              <Link to="about" className='nav-link text-white'>About</Link>
            </li>
          }
          {/* If user is Loged In Then Display Cart*/}
          {userLoginStatus && (
            <li className='nav-item'>
              <Link to="cart" className='nav-link text-white'>Cart</Link>
            </li>
          )}
          {/* If user is Loged In Then Display Profile*/}
          {userLoginStatus && (
            <li className='userProfile nav-item'>
              <Link to="user-profile" className='rounded-circle'>
                <img src={currentUser.profile} width={50} height={50} alt="profile" className='ms-3 me-3 profile-img' />
              </Link>
              {/* <Link to="user-profile" className='nav-link text-white'>Profile</Link> */}
            </li>
          )}

        </ul>
      </nav >
    </div>
  )
}

export default Navbar;