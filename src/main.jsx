import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Video from "./Video";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apenas" element={<Video />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
