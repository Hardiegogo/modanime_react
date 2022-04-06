import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../../context/useProducts';

const CategoryCard=({category:{_id,categoryName,description,imageUrl}})=> {
    const { state, dispatch } = useProducts();
    const navigate=useNavigate()
    const categoryClickHandler=(categoryName)=>{
        navigate('/products')
        switch(categoryName){
            case "Action-figures":
                return dispatch({
                    type: "CATEGORY_ACTION_FIGURES",
                    payload: !state.categoryActionFigures,
                  })
            case "T-shirts":
                return dispatch({
                    type: "CATEGORY_T_SHIRTS",
                    payload: !state.categoryTshirts,
                  })
            case "Masks":
                return dispatch({
                    type: "CATEGORY_MASKS",
                    payload: !state.categoryMasks,
                  })
            default:
                return state
        }
      }
  return (
    <div key={_id} className="category grid-2 card-shadow br-m" onClick={()=>categoryClickHandler(categoryName)}>
              <div className="category-left">
                  <img src={imageUrl} className="resp-img" alt=""/>
              </div>
              <div className="category-right">
                  <p className="x-small-text">New Arrivals</p>
                  <div className="card-title">
                      <h2>{categoryName}</h2>
                      <p className="xx-small-text grey-text">{description}</p>
                  </div>

              </div>
          </div>
  )
}

export default CategoryCard