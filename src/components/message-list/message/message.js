export function Message({ message }) {
    return (
        <div>
            <h3>{message.text}</h3>
            <p>{message.author}</p>
        </div>
    );
}