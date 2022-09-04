import { sendMessage } from "./actions";

export const sendMessageWithBot = (roomId, message) => (dispatch) => {
  dispatch(sendMessage(roomId, message));

  if (message.author === "user") {
    setTimeout(() => {
      dispatch(
        sendMessage(roomId, { author: "Bot", message: "hello from thunk" })
      );
    }, 500);
  }
};
