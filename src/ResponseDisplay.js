import React from "react";
import "./ResponseDisplay.css";

const ResponseDisplay = ({ query, response }) => {
  return (
    <div className="response-display">
      <h3>Querying Database:</h3>
      <pre>{query}</pre>
      {response && response.table ? (
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Total Sales Amount</th>
            </tr>
          </thead>
          <tbody>
            {response.table.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No response yet...</p>
      )}
    </div>
  );
};

export default ResponseDisplay;
