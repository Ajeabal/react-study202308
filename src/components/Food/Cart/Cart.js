import React from "react";
import CartModal from "../../UI/Modal/CartModal";
import styles from "./Cart.module.scss";

const DUMMY_CART = [
  {
    id: "c1",
    name: "스시",
    amount: 2,
    price: 46000,
  },
  {
    id: "c2",
    name: "띠드버거",
    amount: 1,
    price: 12000,
  },
];

const Cart = ({ onHideCart }) => {
  const {
    "cart-items": cartItemStyle,
    total,
    actions,
    "button--alt": btnAlt,
    button,
  } = styles;
  return (
    <CartModal onHideCart={onHideCart}>
      {/* 주문 내역 */}
      <ul className={cartItemStyle}>
        {DUMMY_CART.map((cartItem) => (
          <li key={cartItem.id}>{cartItem.name}</li>
        ))}
      </ul>
      <div className={total}>
        <span>주문 총액</span>
        <span>58,000원</span>
      </div>
      <div className={actions}>
        <button className={btnAlt} onClick={onHideCart}>
          닫기
        </button>
        <button className={button}>주문</button>
      </div>
    </CartModal>
  );
};

export default Cart;
