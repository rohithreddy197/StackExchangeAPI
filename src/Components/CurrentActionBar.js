import React from "react";

function CurrentActionBar(props) {
  return (
    <div
      style={{
        width: "98.9vw",
        padding: "1% 0%",
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid lightgrey",
        background: "#f0f0f0"
      }}
      className="action-bar">
      <span
        style={{
          textAlign: "left",
          fontSize: "20px",
          marginLeft: "3%",
          color: "grey"
        }}>
        <i>{props.currentAction}</i>
      </span>
    </div>
  );
}

export default CurrentActionBar;
