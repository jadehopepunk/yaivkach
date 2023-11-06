import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import Books from "./pages/Books.tsx"
import { InitWasm } from "./p2panda/InitWasm.tsx"

// const keyPair = new KeyPair()
// console.log(keyPair.publicKey())

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Books />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <InitWasm>
    <React.StrictMode>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </React.StrictMode>
  </InitWasm>
)
