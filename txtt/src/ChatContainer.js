import React, { useState } from "react";
import QueryEditor from "./QueryEditor";
import ResponseDisplay from "./ResponseDisplay";
import "./ChatContainer.css";

const ChatContainer = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQuerySubmit = (newQuery) => {
    setQuery(newQuery);

    // Simulate a database response
    const simulatedResponse = {
      table: [
        { name: "John Doe", sales: 340 },
        { name: "Jane Smith", sales: 305 },
        { name: "Bob Johnson", sales: 290 },
      ],
    };
    setResponse(simulatedResponse);
  };

  return (
    <div className="chat-container">
      <QueryEditor onSubmit={handleQuerySubmit} />
      <ResponseDisplay query={query} response={response} />
    </div>
  );
};

export default ChatContainer;
