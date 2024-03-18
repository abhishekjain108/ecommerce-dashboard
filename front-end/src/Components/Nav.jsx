import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  let auth = localStorage.getItem('user')

  const navigate = useNavigate()

  function handleLogout() { //to handle logout
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <>
    <img className='logo-image' src="https://cdn.pixabay.com/photo/2023/08/05/12/40/artistic-8170994_1280.png" alt="some error" ></img>
      {
        auth ? <ul className='navbar mt-3 bg-light'>
        <li><Link className='nav-link' to="/">Products</Link></li>
        
        <li><Link className='nav-link' to="/add">Add Products</Link></li>
        {/* <li><Link className='nav-link' to="/update">Update Products</Link></li> */}
        {/* <li><Link className='nav-link' to="/profile">Profile</Link></li> */}
        <li><Link className='nav-link' onClick={handleLogout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
        </ul>
        :  
        <ul className='navbar  mt-3 bg-light'>
               <li><Link className='nav-link' to="/signup">SignUp</Link></li>
              <li><Link className='nav-link' to="/login">log-in</Link></li>
        </ul>
      }
    </>
  )
}

export default Nav