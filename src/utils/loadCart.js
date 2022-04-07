import axios from "axios";

export const loadCart=async (dispatchCart) => {
    try {
      const encodedToken = localStorage.getItem("token");
      const response = await axios({
        method: "GET",
        url: "/api/user/cart",
        headers: { authorization: encodedToken },
      });
      if(response.status===200){
          dispatchCart({type:"SET_CART",payload:response.data.cart})
      }
    } catch (error) {
        console.log("error occured",error)
    }
  }