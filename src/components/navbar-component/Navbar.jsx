import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';


const Navbar=()=> {

    const {authState,dispatchAuth}=useAuth()
    const navigate=useNavigate()

  return (
    <header className='navbar'>
            <div className="header-left">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/naruto-sign.png" />
                <Link to='/'>
                    <h3>Modanime-store</h3>
                </Link>
            </div>
            <div className="searchbar">
                <label for="product_search">
                    <input placeholder="Search product" className="input input-primary" id="product_search" type="text"/>
                </label>
            </div>



            <div className="header-right">
                <nav>
                    <ul>
                        <li>
                            {authState.isUserActive?<button onClick={()=>dispatchAuth({type:"USER_LOGOUT"})}><i class='bx bx-log-out-circle icons'></i></button>:<Link to='/login'><i className='bx bx-log-in-circle icons'></i></Link>}
                        </li>
                        <li>
                            <div className="badge-wrapper">
                                <a href="./pages/wishlist_page.html"><i className='bx bx-heart icons'></i></a>
                                <div className="badge btn-badge">4</div>
                            </div>
                        </li>
                        <li>
                            <div className="badge-wrapper">
                                <a href="./pages/cart_page.html"><i className='bx bx-cart-alt icons'></i></a>
                                <div className="badge btn-badge">1</div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
  )
}

export default Navbar;