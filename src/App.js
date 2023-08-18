import React, { useState } from "react";
import CourseInput from "./components/CourseGoals/CourseInput";
import CourseList from "./components/CourseGoals/CourseList";
import "./App.css";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";

const DUMMY_DATA = [
  {
    id: "g1",
    text: "리액트 컴포넌트 스타일링 마스터하기",
  },
  {
    id: "g2",
    text: "UI프로그래밍 고수되기",
  },
];

const App = () => {
  const [goals, setGoals] = useState(DUMMY_DATA);

  // coursItem까지 내려보낼 삭제 이벤트
  const deleteGoalHandler = (id) => {
    // const index = updateGoals.findIndex((goal) => goal.id === id);
    // updateGoals.splice(index, 1);
    // const updateGoals = goals.filter((goal) => goal.id !== id);
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  // courseList 조건부 렌더링
  let listContent = (
    <p
      style={{
        color: "red",
        fontSize: "2em",
        textAlign: "center",
      }}
    >
      목표를 등록해주세요.
    </p>
  );
  if (goals.length > 0) {
    listContent = <CourseList items={goals} onDelete={deleteGoalHandler} />;
  }
  // Input한테 전달할 함수
  const addGoalHandler = (text) => {
    // console.log("전달받은 text: ", text);
    const newGoal = {
      id: Math.random().toString(),
      text: text,
    };
    // 상태변수(배열) 수정
    // const updateGoals = [...goals, newGoal];
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <div>
      <AddUsers />
      <UserList />
    </div>
  );
};

export default App;
