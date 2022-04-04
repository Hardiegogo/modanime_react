import axios from "axios"
export const addToWishList=async(product,dispatchCart)=>{
    const encodedToken=localStorage.getItem("token")
    
    try {
        const res=await axios({
            method:"POST",
            url:"/api/user/wishlist",
            headers:{authorization:encodedToken},
            data:{product:product}
        })
        if(res.status==201){
            dispatchCart({type:"ADD_TO_WISHLIST",payload:res.data.wishlist})
        }
    } catch (error) {
        console.log("error occured",error)
    }
}

export const removeFromWishlist=async(_id,dispatchCart)=>{
    const encodedToken=localStorage.getItem("token")
    try {
        const res= await axios({
            method:"DELETE",
            url:`/api/user/wishlist/${_id}`,
            headers:{authorization:encodedToken}
        })
        if(res.status===200){
            dispatchCart({type:"REMOVE_FROM_WISHLIST",payload:res.data.wishlist})
        }
    } catch (error) {
        console.log("error occured",error)
    }
    
}