import { usePanda } from "./p2panda/hooks/usePanda"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout.tsx"
import Books from "./pages/Books.tsx"
import NewBook from "./pages/NewBook.tsx"
import { ChakraProvider } from "@chakra-ui/react"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/books", element: <Books /> },
      { path: "/books/new", element: <NewBook /> },
    ],
  },
])

// const keyPair = new KeyPair()
// console.log(keyPair.publicKey())
function App() {
  const { publicKey } = usePanda()

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
