import { createBrowserRouter, Navigate } from "react-router-dom"

import { Layout } from "./components/Layout"
import { Books } from "./pages/Books"
import { Bookmarks } from "./pages/Bookmarks"
import { UserPage } from "./pages/UserPage"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"

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
        element: <UserPage />,
        children: [
          {
            path: '/user_page/',
            element: <Navigate to="sign_in" replace={true} />
          },
          {
            path: '/user_page/sign_in',
            element: <SignIn />
          },
          {
            path: '/user_page/sign_up',
            element: <SignUp />
          }
        ]
      }
    ]
  }
])
