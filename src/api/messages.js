import { get, child, ref, push } from "firebase/database";
import { database } from "./firebase";
import { nanoid } from "nanoid";

export const getMessagesApi = () => {
  return get(child(ref(database), "messages"));
};

export const createMessageApi = async (message, roomId) => {
  const newMessage = { ...message, id: nanoid(), time: String(new Date()) };

  await push(child(ref(database), `messages/${roomId}`), newMessage);

  return newMessage;
};
