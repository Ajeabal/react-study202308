import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";
import MainHeader from "./components/SideEffect/MainHeader/MainHeader";
import Home from "./components/SideEffect/Home/Home";
import Login from "./components/SideEffect/Login/Login";

const App = () => {
  return (
    <>
      <MainHeader />
      <main>
        {/* <Home /> */}
        <Login />
      </main>
    </>
  );
};

export default App;
