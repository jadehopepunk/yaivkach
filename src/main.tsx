import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { InitWasm } from "./p2panda/InitWasm.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <InitWasm>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </InitWasm>
)
