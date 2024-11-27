import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="new-conversation">New Conversation</button>
      <ul className="conversation-list">
        <li>Database table schema and contents</li>
        <li>Product Sales Contribution Chart</li>
        <li>Customer sales amount rankings</li>
      </ul>
      <p className="version">v1.1.29</p>
    </div>
  );
};

export default Sidebar;
