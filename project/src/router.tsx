import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Books } from "./pages/Books"
import { Bookmarks } from "./pages/Bookmarks"
import { UserPage } from "./pages/UserPage"

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
      },
      {
        path: '/user_page',
        element: <UserPage />
      }
    ]
  }
])
