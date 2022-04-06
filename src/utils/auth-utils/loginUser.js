import axios from "axios";

export const loginUser=async ({email,password},authState,dispatchAuth,navigate)=>{
    try {
        const response = await axios.post(`/api/auth/login`, {
          email,
          password
        });

        if(response.status==200){

            localStorage.setItem('token',response.data.encodedToken)
            dispatchAuth({type:"USER_LOGIN",payload:response.data.foundUser})
            navigate("/products")
        }
      } catch (error) {
        console.log(error);
      }

}