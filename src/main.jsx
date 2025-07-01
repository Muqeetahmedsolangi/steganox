import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "simplebar-react/dist/simplebar.min.css";
import "../src/assets/scss/app.scss";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
