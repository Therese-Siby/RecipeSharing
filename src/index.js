import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; 
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for styling
import "./styles/App.css"; // Custom styles
import '@fortawesome/fontawesome-free/css/all.min.css';

// Renders the React App inside the "root" div in index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
