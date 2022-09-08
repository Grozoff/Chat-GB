import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { InputAdornment } from "@mui/material";
import { Message } from "./message";
import { Input, SendIcon } from "./styles";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage, messagessSelector } from "../../store/messages";

export const MessageList = () => {
  const { roomId } = useParams();
  const selector = useMemo(() => messagessSelector(roomId), [roomId]);
  const messages = useSelector(selector);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const ref = useRef();

  const send = useCallback(
    (message, author = "user") => {
      if (message) {
        dispatch(sendMessage(roomId, { message, author }));
        setValue("");
      }
    },
    [roomId, dispatch]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter" || code === "NumpadEnter") {
      send(value);
    }
  };

  useEffect(() => {
    let timerId = null;
    const lastMessage = messages[messages.length - 1];
    if (messages.length && lastMessage.author === "user") {
      timerId = setTimeout(() => {
        send("autoreply", "robot");
      }, 1000);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messages, send]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <>
      <div ref={ref}>
        {messages.map((message, index) => (
          <Message message={message} key={index} roomId={roomId} />
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
            {value && <SendIcon onClick={send} />}
          </InputAdornment>
        }
      />
    </>
  );
};
