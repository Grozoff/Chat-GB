import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from "@mui/material"
import { MessageList, Layout, Header, ChatList } from "./components";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme()

root.render(
  <ThemeProvider theme={theme}>
    <Layout
      messages={<MessageList />}
      header={<Header />}
      chats={<ChatList />}
    />
  </ThemeProvider>
);
