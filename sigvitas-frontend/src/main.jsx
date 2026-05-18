import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import "./index.css"

import SmoothScroll from "./components/ui/SmoothScroll"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <SmoothScroll />

    <App />

  </React.StrictMode>
)