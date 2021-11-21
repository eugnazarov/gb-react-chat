import React, { useState } from "react";

import "./app.scss";

import ChatBox from "./components/ChatBox/ChatBox";
import ChatList from "./components/ChatList/ChatList";
const App = () => {
  return (
    <div className="app">
      <ChatList />
      <ChatBox />
    </div>
  );
};

export default App;
