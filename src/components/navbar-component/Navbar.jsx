import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import {useCart} from '../../context/useCart'

const logoutHandler=(dispatchAuth,dispatchCart)=>{
    dispatchAuth({type:"USER_LOGOUT"})
    dispatchCart({type:"RESET_WISHLIST"})
}

const wishlistClickHandler=({isUserActive},navigate)=>{if(isUserActive===true){navigate('/wishlist')}else{navigate('/login')}}
const cartClickHandler=({isUserActive},navigate)=>{if(isUserActive===true){navigate('/cart')}else{navigate('/login')}}

const Navbar=()=> {

    const {authState,dispatchAuth}=useAuth()
    const navigate=useNavigate()
    const {cartState,dispatchCart}=useCart()



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
                            {authState.isUserActive?<button onClick={()=>logoutHandler(dispatchAuth,dispatchCart)}><i class='bx bx-log-out-circle icons'></i></button>:<Link to='/login'><i className='bx bx-log-in-circle icons'></i></Link>}
                        </li>
                        <li>
                            <div className="badge-wrapper">
                                <button onClick={()=>wishlistClickHandler(authState,navigate)}><i className='bx bx-heart icons'></i></button>
                                <div className="badge btn-badge">{cartState.activeUserWishList.length}</div>
                            </div>
                        </li>
                        <li>
                            <div className="badge-wrapper">
                                <button onClick={()=>cartClickHandler(authState,navigate)}><i className='bx bx-cart-alt icons'></i></button>
                                <div className="badge btn-badge">{cartState.activeUserCart.length}</div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
  )
}

export default Navbar;