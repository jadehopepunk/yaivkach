import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout.tsx"
import Books from "./pages/books/Books.tsx"
import NewBook from "./pages/books/NewBook.tsx"
import RedBugApp from "./redbug/RedBugApp.tsx"
import Libraries from "./pages/libraries/Libraries.tsx"
import NewLibrary from "./pages/libraries/NewLibrary.tsx"
import ShowLibrary from "./pages/libraries/ShowLibrary.tsx"
import EditLibrary from "./pages/libraries/EditLibrary.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/libraries", element: <Libraries /> },
      { path: "/libraries/new", element: <NewLibrary /> },
      {
        path: "/libraries/:libraryId",
        element: <ShowLibrary />,
      },
      { path: "/libraries/:libraryId/edit", element: <EditLibrary /> },

      { path: "/books", element: <Books /> },
      { path: "/books/new", element: <NewBook /> },
    ],
  },
])

function App() {
  return (
    <RedBugApp>
      <RouterProvider router={router} />
    </RedBugApp>
  )
}

export default App
