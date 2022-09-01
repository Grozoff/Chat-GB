import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import "./global.css";
import { ChatPage, ProfilePage, HomePage } from "./pages";
import { Header } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme();

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat/*" element={<ChatPage />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
