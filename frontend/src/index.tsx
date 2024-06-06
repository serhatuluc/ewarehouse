import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import './styles/fonts/icomoon/style.css';
// import './styles/css/bootstrap.min.css';
// import './styles/fonts/flaticon/font/flaticon.css';
// import './styles/css/magnific-popup.css';
// // import './styles/css/jquery-ui.css';
// import './styles/css/owl.carousel.min.css';
// import './styles/css/owl.theme.default.min.css';
// import './styles/css/aos.css';
// import './styles/css/style.css';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
