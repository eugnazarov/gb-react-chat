import React, { useEffect, useRef, useState } from "react";

import "./inputForm.scss";
import { Button, TextField } from "@mui/material";
const InputForm = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.length) {
      onSubmit(message);
      setMessage("");
    }
  };

  const inputRef = useRef();

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__row">
        <TextField
          autoFocus={true}
          ref={inputRef}
          variant="outlined"
          className="form__input"
          onChange={handleChange}
          value={message}
          type="text"
        />
        <Button variant="contained"> Send</Button>
      </div>
    </form>
  );
};

export default InputForm;
