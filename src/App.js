import "./App.css";
import Nav from "./components/Nav";
import React, { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("items");

  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />
      <header className="App-header">
        <span>Empty</span>
      </header>
    </div>
  );
};

const Content = ({ tab }) => {
  switch (tab) {
    case "items":
      return <span>the items</span>;
    case "cart":
      return <span>the cart</span>;
    default:
      break;
  }
};

export default App;
