import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { router } from "../router"
import { store } from "../redux/store"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
