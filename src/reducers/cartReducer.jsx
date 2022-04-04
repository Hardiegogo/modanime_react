const initialCartState={activeUserCart:[],activeUserWishList:[]}
export const cartReducer=(state,action)=>{
    switch(action.type){
        case "SET_WISHLIST":
            return {
                ...state,
                activeUserWishList:action.payload
            }
        case "ADD_TO_WISHLIST":
            return{
                ...state,
                activeUserWishList:action.payload
            }
        case "REMOVE_FROM_WISHLIST":
            return{
                ...state,
                activeUserWishList:action.payload
            }
        case "RESET_WISHLIST":
            return{...initialCartState}
        default:
            return state
    }
}