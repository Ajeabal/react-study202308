import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";

import styles from "./CartItem.module.scss";

const CartItem = ({ cart }) => {
  const { addItem, removeItem } = useContext(CartContext);
  console.log(cart);

  const { id, name, price, amount } = cart;

  const {
    "cart-item": cartItem,
    summary,
    price: priceStyle,
    amount: amountStyle,
    actions,
  } = styles;
  const formatPrice = new Intl.NumberFormat("ko-KR").format(price);

  const cartAddItemHandler = () => {
    addItem({ ...cart, amount: 1 });
  };
  const cartRemoveItemHandler = () => {
    removeItem(id);
  };

  return (
    <li className={cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={summary}>
          <span className={priceStyle}>{formatPrice}</span>
          <span className={amountStyle}>x {amount}</span>
        </div>
      </div>
      <div className={actions}>
        <button onClick={cartRemoveItemHandler}>−</button>
        <button onClick={cartAddItemHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
