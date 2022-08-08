import React, { useEffect, useState } from 'react';
import './Message.css';

const App = () => {
  const [messageList, setMessageList] = useState([{ text: 'text', author: 'author' }]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (messageList[messageList.length - 1].author === "user") {
      setTimeout(() => {
        setMessageList(
          [...messageList, { text: 'autoreply', author: 'robot' }]
        )
      }, 1500)
    }
  }, [messageList])

  const addMessage = () => {
    if (value) {
      setMessageList(
        [...messageList, { text: value, author: "user" }]
      )
    }

  };

  const removeMessages = () => {
    setMessageList(
      messageList.filter((item) => item.author === 'author')
    )
  };

  return (
    <div className="Message">
      <header className="Message-header">
        Messages:
        {messageList.map((message) =>
          <div>
            <h4>Message: {message.text}</h4>
            <h5>Author: {message.author}</h5>
            <hr />
          </div>)}
        <button onClick={addMessage}>Add message</button>
        <button onClick={removeMessages}>Remove all messages</button>
        <input value={value} onChange={e => setValue(e.target.value)}></input>
      </header>
    </div>
  )
}



export default App;
