import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react/cjs/react.development";
import { cartReducer } from "../reducers/cartReducer";

const CartContext=createContext(null)

export const useCart=()=>useContext(CartContext)

const initialCartState={activeUserCart:[],activeUserWishList:[]}

export const CartProvider=({children})=>{
    const [cartState,dispatchCart]=useReducer(cartReducer,initialCartState)
    return <CartContext.Provider value={{cartState,dispatchCart}}>
        {children}
    </CartContext.Provider>
}