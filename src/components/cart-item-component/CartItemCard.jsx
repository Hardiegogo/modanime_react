import React from 'react'
import { useState } from 'react'
import './CartItemCard.css'
import { removeFromCart } from '../../utils/cart-handling'
import { useCart } from '../../context/useCart'
import { addToWishList } from '../../utils/wishlist-handling'
import axios from 'axios'
import { useEffect } from 'react'


const CartItemCard=({product:{_id,productName,categoryName,companyName,imageUrl,price,rating,qty},isInCart}) =>{
    const [prodQuantity,setProdQuantity]=useState(0)
    const {cartState,dispatchCart}=useCart()
    const removeHandler=()=>{
        removeFromCart(_id,dispatchCart)
    }
    const moveToWishlist=()=>{
        if(!cartState.activeUserWishList.find(product=>product._id===_id)){
            addToWishList({_id,productName,categoryName,companyName,imageUrl,price,rating},dispatchCart)
        }  
        removeFromCart(_id,dispatchCart)
    }

    const quantityHandler=async(actionType)=>{
        const encodedToken=localStorage.getItem("token")
        try {
            const response=await axios({
                method:"POST",
                url:`/api/user/cart/${_id}`,
                headers:{authorization:encodedToken},
                data:{
                    action:{
                        type:actionType
                    }
                }
            })
            if(response.status===200){
                dispatchCart({type:"CHANGE_QUANTITY",payload:response.data.cart})
                {response.data.cart.forEach((item)=>{
                    if(item.qty===0){
                        removeFromCart(item._id,dispatchCart)
                    }
                })}
            }
        } catch (error) {
            console.log("error occured",error)
        }
    }
  return (
    <div className="card horizontal card-shadow">
                    <div className="card-content badge-wrapper">
                        <img className="resp-img card-img-top-br product-img card-img hz-card-img" src={imageUrl}
                            alt=""/>
                        <div className="card-right p-16">
                            <div className="card-heading">
                                <h3>{productName}</h3>
                                <p className="small-text semi-bold mt-8px">₹{price}</p>
                                <p className="x-small-text">Quantity:<button className="btn btn-quant-secondary" onClick={()=>quantityHandler("decrement")}>-</button><span>{qty}</span><button className="btn btn-quant-primary" onClick={()=>quantityHandler("increment")}>+</button> </p>
                                
                            </div>

                            <div className="card-footer">
                                <button className="btn btn-secondary" onClick={removeHandler} >Remove from cart</button>
                                <button className="btn btn-secondary-outline" onClick={moveToWishlist}>Move to wishlist</button>
                            </div>
                        </div>
                        <div className="badge card-badge">
                            New
                        </div>
                    </div>

                </div>
)}

export default CartItemCard