import { MessageList, Layout, ChatList } from "../components";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ChatPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              messages={<h1 style={{ color: "#fff" }}>Choose a chat</h1>}
              chats={<ChatList />}
            />
          }
        />
        <Route
          path=":roomId"
          element={<Layout messages={<MessageList />} chats={<ChatList />} />}
        />
      </Routes>
    </>
  );
};
