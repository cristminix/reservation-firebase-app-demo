import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./app"
import "./index.css"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
