import React from "react";

import "./Message.scss";

const Message = ({ message }) => {
  return (
    <div className={`message ${message.author === "robot" && "message-robot"}`}>
      <p className="message__author">{message.author}</p>
      <p className="message__text">{message.text}</p>
    </div>
  );
};

export default Message;
