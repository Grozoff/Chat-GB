import React, { useEffect, useState, useRef } from 'react';
import { InputAdornment } from "@mui/material";
import { Message } from "./message";
import { Input, SendIcon } from "./styles";

export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  const ref = useRef();

  useEffect(() => {
    let timerId = null;
    if (messageList.length && messageList[messageList.length - 1].author === "user") {
      timerId = setTimeout(() => {
        setMessageList(
          [...messageList, { message: 'autoreply', author: 'robot', time: new Date().toLocaleString() }]
        )
      }, 1500);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messageList])

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [messageList]);

  const sendMessage = () => {
    if (value) {
      setMessageList(
        [...messageList, { message: value, author: "user", time: new Date().toLocaleString() }]
      );
      setValue("");
    }
  };

  const removeMessages = () => {
    setMessageList(
      messageList.filter((item) => item.author === undefined)
    )
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <div ref={ref}>
        {messageList.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>

      <Input
        fullWidth
        placeholder="Введите сообщение..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <SendIcon onClick={sendMessage} />}
          </InputAdornment>
        }
      />
    </>
  )
}
