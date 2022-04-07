import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useCart } from '../../context/useCart'
import './ProductCard.css'
import {useAuth} from '../../context/useAuth'
import { useNavigate } from 'react-router-dom'

import { addToWishList,removeFromWishlist } from '../../utils/wishlist-handling'
import { addToCart,removeFromCart } from '../../utils/cart-handling'

const calculateInCart=(cartState,_id)=>{
    const {activeUserCart}=cartState
    const result=activeUserCart.find((product)=>product._id===_id)
    if(result){return true}else return false;
}


const ProductCard=({product:{_id,productName,categoryName,companyName,imageUrl,price,rating,},filled})=> {
    const{cartState,dispatchCart}=useCart()
    const [heart,setHeart]=useState(filled)
    const [inCart,setInCart]=useState(calculateInCart(cartState,_id))
    const {authState}=useAuth()
    const navigate=useNavigate()
    const wishlistClickHandler=()=>{
        if(authState.isUserActive){
            if(heart===true){
                removeFromWishlist(_id,dispatchCart)
                setHeart(false)
            }else{
                addToWishList({_id,productName,categoryName,companyName,imageUrl,price,rating},dispatchCart);
                setHeart(true)
            }
        }else{
            navigate('/login')
        }
        
        
    }

    const cartClickHandler=()=>{
        if(authState.isUserActive){
            if(inCart){
                navigate('/cart')
            }else{
                addToCart({_id,productName,categoryName,companyName,imageUrl,price,rating},dispatchCart)
                setInCart(!inCart)
            }
            
        }else{
            navigate('/login')
        }
    }

    
  return (
    <div className="card card-shadow">
                    <div className="card-content badge-wrapper">
                        <img className="resp-img card-img-top-br product-img card-img" src={imageUrl} alt=""/>
                        <div className="card-heading">
                            <h4>{productName}</h4>
                            <p>by {companyName}</p>
                        </div>
                        <div className="badge card-badge">
                            New
                        </div>
                        <div className="badge card-top-right-icon">
                            <button onClick={wishlistClickHandler}>
                            <i className={`bx  icon-heart ${ heart ? 'bxs-heart icon-heart-filled': 'bx-heart'}`}></i>
                            </button>

                            
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="footer-details">
                            <p className='x-small-text' >₹{price}</p>
                            <p className='xx-small-text'>Rating: {rating} stars</p>
                        </div>
                        <button className="btn btn-primary">Buy now</button>
                        {inCart ? <button className="btn btn-secondary" onClick={cartClickHandler} >Go to Cart</button>:<button className="btn btn-primary-outline primary-2" onClick={cartClickHandler}>Add to cart</button>}
                        
                    </div>
          </div>
  )
}

export default ProductCard