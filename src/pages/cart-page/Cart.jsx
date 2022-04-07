import React from 'react'
import { useEffect } from 'react'
import CartBill from '../../components/cart-bill-component/CartBill'
import CartItemCard from '../../components/cart-item-component/CartItemCard'
import { useCart } from '../../context/useCart'
import {loadCart} from '../../utils/loadCart'
import './Cart.css'




const Cart=()=> {
    const {cartState,dispatchCart}=useCart()
    useEffect(()=>{
        loadCart(dispatchCart)
    },[])
    const {activeUserCart}=cartState
    

  return (
    <div className='content cart-page'>
        <h2 className="center-text">My Cart</h2>
        <div className="cart-section">
        <div className=" grid-2 cart-container  p-24 mt-24">
            {activeUserCart.map((product)=><CartItemCard product={product} key={product._id} filled={false} isInCart={true}/>)}
        </div>
        {activeUserCart.length !== 0 && <CartBill cartState={cartState}/>}
        
        </div>
        
        {activeUserCart.length === 0 && (
          <img
            className="empty-cart"
            src="https://res.cloudinary.com/dqqehaaqo/image/upload/v1648930626/empty_cart_njupiu.svg"
            alt=""
            srcset=""
          />
        )}
    </div>
  )
}

export default Cart