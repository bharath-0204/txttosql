import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatContainer from "./ChatContainer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <ChatContainer />
      </div>
    </div>
  );
};

export default App;
