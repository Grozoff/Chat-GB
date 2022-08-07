import React from 'react';
import Message from './Message';

const myMessage = 'Hello World!';

class App extends React.Component {
  render() {
    return (
      <div >
        <Message message={myMessage} />
      </div>
    )
  }
}

export default App;
