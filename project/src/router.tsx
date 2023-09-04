import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Layout } from './components/Layout'
import { Books } from './pages/Books'
import { FavoriteBooks } from './pages/FavoriteBooks'
import { UserPage } from './pages/UserPage'
import { Autorization } from './pages/Autorization'
import { ResetPassword } from './pages/ResetPassword'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Account } from './pages/Account'
import { SingleBookPage } from './pages/SingleBookPage'
import { SearchPage } from './pages/SearchPage'
import { CartPage } from './pages/CartPage'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/new_books/pages/1" replace={true} />
      },
      {
        path: '/new_books/pages/:pageNumber',
        element: <Books />
      },
      {
        path: '/:isbn13',
        element: <SingleBookPage />
      },
      {
        path: '/favorite_books',
        element: <FavoriteBooks />
      },
      {
        path: '/search/:searchQuery',
        element: <SearchPage />
      },
      {
        path: '/basket',
        element: <CartPage />
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
