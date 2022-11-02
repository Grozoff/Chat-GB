import classNames from "classnames";
import styles from "./message.module.css";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store/messages";
import { format } from "date-fns";

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
      {message?.time && (
        <p>{format(new Date(message?.time), "yyyy-MM-dd HH:MM:SS")}</p>
      )}
      <button onClick={() => dispatch(deleteMessage(roomId, message.id))}>
        x
      </button>
    </div>
  );
}
