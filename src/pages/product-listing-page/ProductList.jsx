import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../../components/product-card-component/ProductCard'
import Sidebar from '../../components/sidebar-component/Sidebar'
import { useProducts } from '../../context/useProducts'
import { loadData } from '../../utils/loadData'
import './ProductList.css'
import {filRating,filterByCategory,sortPrice,filterBySlider} from '../../utils/Filter/filters'
import { useAuth } from '../../context/useAuth'

function ProductList() {

  const {state,dispatch}=useProducts()
  const {authState,dispatchAuth}=useAuth()

  const showProducts=(state,dispatch)=>{
    let filteredProducts=[...state.products];
    const composeReducer=(acc,curr)=>curr(acc);
    const compose=(...fns)=>(x)=>fns.reduce(composeReducer,x)
    filteredProducts=compose(sortPrice,filterBySlider,filRating,filterByCategory)({state,filteredProducts})
    dispatch({type:'SET_FILTERED_PRODUCTS',payload:filteredProducts})
  }

  const {products,filteredProducts,sortByPrice,isProducts,filterByRatings,categoryActionFigures,categoryMasks,categoryTshirts,slider}=state
  
  useEffect(()=>{
    loadData(dispatch,'products') 
    showProducts(state,dispatch)
  },[sortByPrice,isProducts,filterByRatings,categoryActionFigures,categoryMasks,categoryTshirts,slider])


  

  return (
    <div className='app'>
        <Sidebar/>
        <main className='content'>
          <h3>Showing all products</h3>
          <div className="products-container mt-24">
            {filteredProducts.map((product)=><ProductCard product={product} key={product._id}/>)}
          </div>
          
        </main>
    </div>
  )
}

export default ProductList