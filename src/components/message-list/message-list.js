import React, { useEffect, useState, useRef, useCallback } from "react";
import { InputAdornment } from "@mui/material";
import { Message } from "./message";
import { Input, SendIcon } from "./styles";
import { useParams } from "react-router-dom";

export const MessageList = () => {
  const [messageList, setMessageList] = useState({});
  const [value, setValue] = useState("");
  const { roomId } = useParams();
  const ref = useRef();

  const sendMessage = useCallback(
    (message, author = "user") => {
      if (message) {
        setMessageList((state) => ({
          ...state,
          [roomId]: [
            ...(state[roomId] ?? []),
            { author, message, time: new Date().toLocaleString() },
          ],
        }));
        setValue("");
      }
    },
    [roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter" || code === "NumpadEnter") {
      sendMessage(value);
    }
  };

  useEffect(() => {
    let timerId = null;
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];
    if (messages.length && lastMessage.author === "user") {
      timerId = setTimeout(() => {
        sendMessage("autoreply", "robot");
      }, 1000);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messageList, roomId, sendMessage]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [messageList]);

  const messages = messageList[roomId] ?? [];

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>

      <Input
        fullWidth
        placeholder="Write a message..."
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
  );
};
