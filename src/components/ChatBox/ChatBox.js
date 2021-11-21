import React, { useEffect, useState } from "react";
import Message from "../Message/Message";
import InputForm from "../InputForm/InputForm";
import "./ChatBox.scss";
const ChatBox = () => {
  const [messageList, setMessageList] = useState([]);

  const onSubmit = (text) => {
    const message = {
      author: "Me",
      text,
      id: `human_${Math.random() * Date.now()}`,
    };
    setMessageList((prevState) => [...prevState, message]);
  };

  useEffect(() => {
    const lastMessage = messageList[messageList.length - 1];
    if (lastMessage?.author === "Me") {
      const message = {
        author: "robot",
        text: "Thanks for sending message!",
        id: `robot_${Math.random() * Date.now()}`,
      };
      setTimeout(() => {
        setMessageList((prevState) => [...prevState, message]);
      }, 1500);
    }
  }, [messageList]);

  return (
    <div className="box">
      <div className="box__messages-container">
        {messageList.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="box__sender">
        <InputForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default ChatBox;
