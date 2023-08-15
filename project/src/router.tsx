import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Books } from "./pages/Books"
import { Bookmarks } from "./pages/Bookmarks"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Books />
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />
      }
    ]
  }
])
