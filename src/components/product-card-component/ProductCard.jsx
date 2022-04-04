import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useCart } from '../../context/useCart'
import './ProductCard.css'
import {useAuth} from '../../context/useAuth'
import { useNavigate } from 'react-router-dom'

import { addToWishList,removeFromWishlist } from '../../utils/wishlist-handling'



const ProductCard=({product:{_id,productName,categoryName,companyName,imageUrl,price,rating,},filled})=> {
    const{dispatchCart}=useCart()
    const [heart,setHeart]=useState(filled)
    const {authState}=useAuth()
    const navigate=useNavigate()
    const clickHandler=()=>{
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

    const removeHandler=()=>{
        removeFromWishlist(_id,dispatchCart)
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
                            <button onClick={clickHandler}>
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
                        <button className="btn btn-primary-outline primary-2">Add to cart</button>
                    </div>
          </div>
  )
}

export default ProductCard