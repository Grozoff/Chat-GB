import { useState } from "react";
import { Chat } from "./chat";
import List from "@mui/material/List";
import { NavLink, useParams } from "react-router-dom";

export const ChatList = () => {
  const [chatList] = useState(["room1", "room2", "room3"]);
  const { roomId } = useParams();
  return (
    <List component="nav">
      {chatList.map((chat) => (
        <NavLink
          style={{ color: "inherit", textDecoration: "inherit" }}
          key={chat}
          to={`/chat/${chat}`}
        >
          <Chat title={chat} selected={chat === roomId} />
        </NavLink>
      ))}
    </List>
  );
};
