import React from 'react'
import './UserProfile.css'
import { userLoginContext } from '../../Contexts/userLoginContext'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import productsImg from '../../assets/snack.svg'
import cartBag from '../../assets/cart.png'
import Products from '../products/Products'
import { Outlet } from 'react-router-dom'

function UserProfile() {
  let { currentUser } = useContext(userLoginContext)

  let navigate = useNavigate();

  function onEditUser() {
    // Edit user profile
    navigate('../edit-user');
  }

  // console.log('currentUser: ', currentUser);
  return (
    <div className='text-center mt-4'>
      <img src={currentUser.profile} width={150} height={150} className='rounded-circle object-fit-cover' alt="" />
      <h2>{currentUser.username}</h2>
      <h3>{currentUser.email}</h3>
      {/* Edit Profile */}
      <button className='btn btn-primary' onClick={onEditUser}>Edit Profile</button>

      {/* On click Render the selected component */}
      <div className='userProfileContainer'>
        <Link to="/user-profile/products" className='userProfileCard'>
          <div className='userProfilePro rounded-3'>
            <h3>Products</h3>
            <img src={productsImg} width={100} height={100} alt="" />
          </div>
        </Link>
        <Link to="/user-profile/cart" className='userProfileCard'>
          <div className='userProfilePro rounded-3'>
            <h3>Cart</h3>
            <img src={cartBag} width={100} height={100} alt="" />
          </div>
        </Link>
      </div>

      <div className='mt-4'>
        <Outlet />
      </div>
    </div>


  )
}

export default UserProfile
