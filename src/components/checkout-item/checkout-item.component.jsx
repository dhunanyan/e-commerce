import React from "react";

import { MdKeyboardArrowLeft as LeftArrow } from "react-icons/md";
import { MdKeyboardArrowRight as RighttArrow } from "react-icons/md";
import { FaTimes as Times } from "react-icons/fa";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="Checkout-Item Image" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">
      <Times />
    </div>
  </div>
);

export default CheckoutItem;
