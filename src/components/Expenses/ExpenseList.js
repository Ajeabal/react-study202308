import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const ExpenseList = ({ items }) => {
  // selectedYear를 상태 변수로
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );
  // 자식 컴포넌트 ExpenseFilter에 있는 선택연도를 끌어올리는 함수.
  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // EXpenseItem을 동적 렌더링하기
  // const interateExpenseItem = () => {
  // const renderArray = [];
  // for (const item of items) {
  //   renderArray.push(
  //     <ExpenseItem title={item.title} price={item.price} date={item.date} />
  //   );
  // }
  // return items.map((item) => (
  //   <ExpenseItem title={item.title} price={item.price} date={item.date} />
  // ));
  // };
  return (
    <Card className="expenses">
      <ExpenseFilter filtered={filterHandler} />
      {items
        .filter((item) => item.date.getFullYear().toString() === filteredYear)
        .map(({ id, title, price, date }) => (
          <ExpenseItem key={id} title={title} price={price} date={date} />
        ))}
    </Card>
  );
};

export default ExpenseList;
