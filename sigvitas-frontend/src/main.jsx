import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import "./index.css"

import SmoothScroll from "./components/ui/SmoothScroll"

import {
  ThemeProvider,
} from "./context/ThemeContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <ThemeProvider>

      <SmoothScroll />

      <App />

    </ThemeProvider>

  </React.StrictMode>
)