import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useCart } from "../../context/useCart";
import ProductCard from "../../components/product-card-component/ProductCard";
import "../product-listing-page/ProductList.css";
import { loadWishlist } from "../../utils/loadWishlist";
import "./Wishlist.css";

const Wishlist = () => {
  const { cartState, dispatchCart } = useCart();
  const { activeUserWishList } = cartState;

  useEffect(() => {
    loadWishlist(dispatchCart);
  }, []);

  return (
    <div className="wishlist">
      <div className="products-container mt-24">
        {activeUserWishList.map((product)=><ProductCard product={product} key={product._id} filled={true}/>)}
      </div>
      {activeUserWishList.length === 0 && (
          <img
            className="empty-cart"
            src="https://res.cloudinary.com/dqqehaaqo/image/upload/v1648930626/empty_cart_njupiu.svg"
            alt=""
            srcset=""
          />
        )}
      
    </div>
  );
};

export default Wishlist;
