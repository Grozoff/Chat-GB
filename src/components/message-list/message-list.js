import React, { useEffect, useState } from 'react';
import { Message } from "./message";
import './message-list.css';

export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    let timerId = null;
    if (messageList.length && messageList[messageList.length - 1].author === "user") {
      timerId = setTimeout(() => {
        setMessageList(
          [...messageList, { text: 'autoreply', author: 'robot' }]
        )
      }, 1500);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [messageList])

  const addMessage = () => {
    if (value) {
      setMessageList(
        [...messageList, { text: value, author: "user" }]
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
      addMessage();
    }
  };

  return (
    <div className="Message-list">
      {messageList.map((message) => (
        <Message message={message} />
      ))}

      <button onClick={addMessage}>Add message</button>
      <button onClick={removeMessages}>Remove all messages</button>
      <input
        fullWidth
        placeholder='Enter message...'
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={handlePressInput}
      />
    </div>
  )
}
