import classNames from "classnames";
import styles from "./message.module.css";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store/messages";

export function Message({ message, roomId }) {
  const dispatch = useDispatch();
  return (
    <div
      className={classNames(styles.message, {
        [styles.currentMessage]: message.author === "user",
      })}
    >
      <h3>{message.message}</h3>
      <p>{message.author}</p>
      <p>{message.time}</p>
      <button onClick={() => dispatch(deleteMessage(roomId, message.id))}>
        x
      </button>
    </div>
  );
}
