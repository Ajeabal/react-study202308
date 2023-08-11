import React from "react";
// css 로딩
import "./ExpenseItem.css";
const ExpenseItem = ({ title, price: propsPrice, date }) => {
  const price = 99999;
  // const expenseDate = date;
  // const expenseName = title;
  // const expensePrice = propsPrice;
  //   한 자리 숫자를 2자리 숫자로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, "0");
  };
  //   날짜 포맷팅 변환 함수 정의
  const makeFormattedDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };
  // 숫자 ,추가
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(propsPrice);

  return (
    <div className="expense-item">
      <div>{makeFormattedDate()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
