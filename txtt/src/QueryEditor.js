import React, { useState } from "react";
import "./QueryEditor.css";

const QueryEditor = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      onSubmit(input);
      setInput("");
    }
  };

  return (
    <div className="query-editor">
      <textarea
        placeholder='Type your query here, e.g., "rank of customers"'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default QueryEditor;
