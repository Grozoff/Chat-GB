import './Message.css';

const Message = (props) => {
    return (
        <div className="Message">
            <header className="Message-header">
                Message App
                <h3>Message: {props.message}</h3>
            </header>
        </div>
    );
}

export default Message;