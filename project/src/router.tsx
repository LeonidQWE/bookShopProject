import { createBrowserRouter, Navigate } from "react-router-dom"

import { Layout } from "./components/Layout"
import { Books } from "./pages/Books"
import { Bookmarks } from "./pages/Bookmarks"
import { UserPage } from "./pages/UserPage"
import { Autorization } from "./pages/Autorization"
import { ResetPassword } from "./pages/ResetPassword"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
import { Account } from "./pages/Account"
import { SingleBookPage } from "./pages/SingleBookPage"

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Books />
      },
      {
        path: '/:bookIsbn13',
        element: <SingleBookPage />
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
            element: <Navigate to="/user_page/autorization" replace={true} />
          },
          {
            path: '/user_page/autorization',
            element: <Autorization />,
            children: [
              {
                path: '/user_page/autorization/',
                element: <Navigate to={"/user_page/autorization/sign_in"}/>
              },
              {
                path: '/user_page/autorization/sign_in',
                element: <SignIn />
              },
              {
                path: '/user_page/autorization/sign_up',
                element: <SignUp />
              }
            ]
          },
          {
            path: '/user_page/reset_password',
            element: <ResetPassword />
          }
        ]
      },
      {
        path: '/account',
        element: <Account />
      }
    ]
  }
])
