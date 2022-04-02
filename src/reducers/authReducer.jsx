export const authReducer=(state,action)=>{
    switch(action.type){
        case "USER_SIGNUP":
            return{
                ...state,
                isUserActive:true,
                userDetails:action.payload
            }
        case "USER_LOGIN":
            return {
                ...state,
                isUserActive:true,
                userDetails:action.payload
            }
        case "USER_LOGOUT":
            localStorage.removeItem('token');
            return{
                ...state,
                isUserActive:false,
                userDetails:{}
            }
        default:
            return state
    }

}