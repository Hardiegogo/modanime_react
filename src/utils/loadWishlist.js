import axios from "axios";

export const loadWishlist=async (dispatchCart) => {
    try {
      const encodedToken = localStorage.getItem("token");
      const response = await axios({
        method: "GET",
        url: "/api/user/wishlist",
        headers: { authorization: encodedToken },
      });
      if(response.status===200){
          dispatchCart({type:"SET_WISHLIST",payload:response.data.wishlist})
      }
    } catch (error) {
        console.log("error occured",error)
    }
  }