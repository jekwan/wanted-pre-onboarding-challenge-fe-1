import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("root element가 없습니다.");

ReactDOM.createRoot(rootElement).render(<App />);
