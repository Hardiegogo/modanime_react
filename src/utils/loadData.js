import axios from "axios"

export const loadData=async(dispatch,type)=>{
    if (type=='categories'){
        try {
            const res=await axios.get('/api/categories')
              if(res.status===200){
                const data=res.data.categories
                dispatch({type:"FETCH_CATEGORIES",payload:data})
              }
      
          } catch (error) {
            console.log("error occured",error)
          }
    }else if(type=='products'){
        try {
            const res=await axios.get('/api/products')
              if(res.status===200){
                const data=res.data.products
                dispatch({type:"FETCH_PRODUCTS",payload:data})
              }
      
          } catch (error) {
            console.log("error occured",error)
          }
    }
}