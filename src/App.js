import React from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  // 지출 항목 객체 배열
  const expenses = [
    {
      id: 1,
      title: "바나나",
      price: 2000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      id: 2,
      title: "BBQ치킨",
      price: 20000,
      date: new Date(2022, 5 - 1, 21),
    },
    {
      id: 3,
      title: "도미노피자",
      price: 35000,
      date: new Date(2023, 7 - 1, 14),
    },
    {
      id: 4,
      title: "엽떡",
      price: 17000,
      date: new Date(2021, 3 - 1, 28),
    },
  ];

  const addExpenseHandler = (newExpense) => {
    console.log("App.js에서 응답함!");
    console.log(newExpense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses} />
    </>
  );
};

export default App;
