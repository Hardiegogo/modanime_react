import axios from "axios";
import { useNavigate } from "react-router-dom";

export const submitNewUser=async ({firstName,lastName,email,password},authState,dispatchAuth,navigate)=>{
  
    try {
        
        const response = await axios.post(`/api/auth/signup`, {
          firstName,
          lastName,
          email,
          password,
        });

        if(response.status==201){

            localStorage.setItem('token',response.data.encodedToken)
            dispatchAuth({type:"USER_SIGNUP",payload:response.data.createdUser})
            navigate("/products")
        }
      } catch (error) {
        console.log(error);
      }

    
}