import React from "react";
// css 로딩
import "./ExpenseItem.css";
const ExpenseItem = () => {
  const expenseDate = new Date(2023, 8, 4);
  const expenseName = "냠냠치킨";
  const expensePrice = 19000;

  //   한 자리 숫자를 2자리 숫자로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, "0");
  };
  //   날짜 포맷팅 변환 함수 정의
  const makeFormattedDate = () => {
    const year = expenseDate.getFullYear();
    const month = expenseDate.getMonth();
    const date = expenseDate.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(date)}일`;
  };
  // 숫자 ,추가
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(expensePrice);

  return (
    <div className="expense-item">
      <div>{makeFormattedDate()}</div>
      <div className="expense-item__description">
        <h2>{expenseName}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
