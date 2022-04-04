import { createContext,useReducer,useContext } from "react";
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