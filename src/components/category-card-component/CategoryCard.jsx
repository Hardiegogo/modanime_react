import React from 'react'

const CategoryCard=({category:{_id,categoryName,description,imageUrl}})=> {
  return (
    <div key={_id} className="category grid-2 card-shadow br-m">
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