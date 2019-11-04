import React from "react";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShopingIcon className="shopping-icon" />
        <p className="item-count">2</p>
    </div>
  );
};

export default CartIcon;
