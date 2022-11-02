import { Chat } from "./chat";
import List from "@mui/material/List";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createConversationByName as createConversation,
  conversationsSelector,
  removeConversationByName,
} from "../../store/conversations";

export const ChatList = () => {
  const conversations = useSelector(conversationsSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { roomId } = useParams();

  const deleteConversationByName = useCallback(
    (name, e) => {
      e.preventDefault();
      dispatch(removeConversationByName(name));
      navigate("/chat");
    },
    [dispatch, navigate]
  );

  const createConversationByName = () => {
    const name = prompt("Enter the name: ");
    const isValidName = !conversations.includes(name);

    if (name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("Not a valid name");
    }
  };

  return (
    <List component="nav">
      <button onClick={createConversationByName}>create</button>

      {conversations.map((chat) => (
        <NavLink key={chat} to={`/chat/${chat}`}>
          <Chat
            title={chat}
            selected={chat === roomId}
            deleteConversationByName={deleteConversationByName}
          />
        </NavLink>
      ))}
    </List>
  );
};
