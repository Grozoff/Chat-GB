import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { CustomThemeProvider } from "./theme-context";
import { store, persistor } from "./store";
import "./global.css";
import { ChatPage, ProfilePage, HomePage, GistsPage } from "./pages";
import { Header } from "./components";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="*" element={<h1>Page not found!</h1>} />
            <Route path="/gists" element={<GistsPage />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </PersistGate>
  </Provider>
);
