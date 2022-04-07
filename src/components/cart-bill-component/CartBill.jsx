import React from "react";
import "./CartBill.css";

const CartBill = ({ cartState: { activeUserCart } }) => {
    const calculateTotal=()=>{
        return activeUserCart.reduce((prev,curr)=>Number(curr.price*curr.qty)+Number(prev),0)
    }
  return (
    <div className="cart-bill p-24 card-shadow">
      <h3>Price details</h3>
      <div className="cart-content mt-16 border-top-grey">
        {activeUserCart.map((item, index) => (
          <div key={item._id}>
            <div className="cart-detail p-8px">
              <p className="x-small-text">Item {index + 1}: </p>
              <p className="x-small-text">
                {item.price} x {item.qty}
              </p>
            </div>
          </div>
        ))}
        <div className="cart-detail border-y-grey p-8px">
          <p className="x-small-text bold">Total amount:</p>
          <p className="x-small-text bold">{calculateTotal()}</p>
        </div>
      </div>
      <button
        className="btn btn-primary btn-cart mt-1"
        onClick={() => alert("Thank you for placing your order")}
      >
        Place order
      </button>
    </div>
  );
};

export default CartBill;
