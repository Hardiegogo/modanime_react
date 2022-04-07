import axios from "axios"
export const addToCart=async(product,dispatchCart)=>{
    const encodedToken=localStorage.getItem("token")
    try {
        const res=await axios({
            method:"POST",
            url:"/api/user/cart",
            headers:{authorization:encodedToken},
            data:{product}
        })
        if(res.status===201){
            dispatchCart({type:"ADD_TO_CART",payload:res.data.cart})
        }
    } catch (error) {
        
    }
}

export const removeFromCart=async(_id,dispatchCart)=>{
    const encodedToken=localStorage.getItem("token")
    try {
        const res= await axios({
            method:"DELETE",
            url:`/api/user/cart/${_id}`,
            headers:{authorization:encodedToken}
        })
        if(res.status===200){
            dispatchCart({type:"REMOVE_FROM_CART",payload:res.data.cart})
        }
    } catch (error) {
        console.log("error occured",error)
    }
}