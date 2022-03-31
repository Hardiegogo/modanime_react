import React from 'react'
import { Link } from 'react-router-dom';
import { useReducer } from 'react';
import './Homepage.css'
import { useEffect } from 'react';
import axios from 'axios';
import CategoryCard from '../../components/category-card-component/CategoryCard';
import ProductCard from '../../components/product-card-component/ProductCard';
import { dataReducer } from '../../reducers/dataReducer';
import { loadData } from '../../utils/loadData';
import { useProducts } from '../../context/useProducts';

const Homepage= () => {
  
  const {state,dispatch}=useProducts()

  useEffect(()=>{
    loadData(dispatch,'products');
    loadData(dispatch,'categories')
  },[])



  return (
      <main className='content p-64'> 

        <div className="hero grid-2">

                <div className="hero-left">
                    <div className="hero-left-content">
                        <h1>One place <br/> for all your <br/> <span className="prime-heading">Anime</span>-wishes.</h1>
                        <Link  to="/products" className='btn-large btn-primary btn-hero mt-24 medium-text'>Go to products</Link>
                    </div>

                </div>
                <div className="hero-right">
                    <img src="https://res.cloudinary.com/dqqehaaqo/image/upload/v1647734809/hello_o63naq.png" className="resp-img" alt=""/>

                </div>

        </div>

        <h2 className="mt-64">Categories</h2>
        <div  className="categories-list grid-auto-fit grid-category mt-24">
        { state.categories.map((category)=>
          <CategoryCard category={category}/>
          )}
        </div>

        <h2 class="mt-64">Best sellers</h2>
        <div class="product-list grid-auto-fit mt-24">
        {state.products.map((product)=>
        <ProductCard product={product} key={product._id}/>)
        }
        
        </div>
      </main>
      
    
  )
}

export default Homepage;