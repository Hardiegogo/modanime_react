import React from 'react'
import './ProductCard.css'

const ProductCard=({product:{productName,categoryName,companyName,imageUrl,price,rating}})=> {
  return (
    <div className="card card-shadow">
                    <div className="card-content badge-wrapper">
                        <img className="resp-img card-img-top-br product-img card-img" src={imageUrl} alt=""/>
                        <div className="card-heading">
                            <h4>{productName}</h4>
                            <p>by {companyName}</p>
                        </div>
                        <div className="badge card-badge">
                            New
                        </div>
                        <div className="badge card-top-right-icon">
                            <i className='bx bx-heart icon-heart'></i>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="footer-details">
                            <p className='x-small-text' >₹{price}</p>
                            <p className='xx-small-text'>Rating: {rating} stars</p>
                        </div>
                        <button className="btn btn-primary">Buy now</button>
                        <button className="btn btn-primary-outline primary-2">Add to cart</button>
                    </div>
          </div>
  )
}

export default ProductCard