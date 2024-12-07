import { RouterProvider } from "react-router"
import { AppRouter } from "./routes/Router"

function App() {

  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  )
}

export default App
