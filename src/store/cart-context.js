import React from "react";

// 장바구니에 들어가고 나올 항목을 상태관리 하는 컨텍스트
// 컨텍스트에 들어가는 초기값은 무슨 형태인지에 대한 정의
const CartContext = React.createContext({
  items: [], // 장바구니에 담기는 항복 배열
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
