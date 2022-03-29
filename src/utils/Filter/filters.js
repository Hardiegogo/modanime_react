export const filRating=({state,newFilteredProducts})=>{
    
    if(state.filterByRatings){
      newFilteredProducts=newFilteredProducts.filter((item)=>{
        if(Number(item.rating)>=state.filterByRatings){
          console.log(item)
          return true
        }
      })
    }
    return {state,newFilteredProducts}
  }

  export const filterByCategory=({state,newFilteredProducts})=>{
    let products=[...newFilteredProducts]
    let filteredProducts=[]
    if(state.categoryActionFigures){
        let resultArr=products.filter((item)=>item.categoryName==='Action-figures')
        filteredProducts.push(...resultArr)
    }
    if(state.categoryTshirts){
        let resultArr=products.filter((item)=>item.categoryName==='T-shirts')
        filteredProducts.push(...resultArr)
    }
    if(state.categoryMasks){
        let resultArr=products.filter((item)=>item.categoryName==='Masks')
        filteredProducts.push(...resultArr)
    }
    newFilteredProducts=[...filteredProducts]
    if(newFilteredProducts.length){
        return newFilteredProducts
    }else return products
}

export const sortPrice=({state,filteredProducts})=>{
  let newFilteredProducts=[...filteredProducts]
  if(state.sortByPrice==='PRICE_HIGH_TO_LOW'){
    newFilteredProducts.sort((a,b)=>b.price-a.price)
  }
  if(state.sortByPrice==='PRICE_LOW_TO_HIGH'){
    newFilteredProducts.sort((a,b)=>a.price-b.price)
  }
  return  {state:state,newFilteredProducts}
}

export const filterBySlider=({state,newFilteredProducts})=>{
  let amount=0;
  switch(state.slider){
    case 1:
      amount=1000;
      break;
    case 2:
      amount=2000;
      break;
    case 3:
      amount=3000;
      break;
    case 4:
      amount=4000;
      break;
    default:
      amount=4000
  }
  console.log('-------------')
  console.log(amount)
  newFilteredProducts=newFilteredProducts.filter((item)=>{
    if(item.price<=amount){
      console.log(item)
      return true
    }
  })
  return {state,newFilteredProducts}
}